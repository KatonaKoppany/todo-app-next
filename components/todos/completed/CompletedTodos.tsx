"use client";

import { useTodos } from "@/hooks/useTodos";
import { ToDoButton } from "@/components/shared/ToDoButton";
import { ToDoItem } from "@/components/shared/ToDoItem";
import { useRouter } from "next/navigation";
import { ToDoIconButton } from "@/components/shared/ToDoIconButton";
import { IconChevronLeft, IconRefresh, IconTrash, IconCheck } from "@tabler/icons-react";
import { useAlertStore } from "@/store/useAlert";
import { useAlertDialogStore } from "@/store/useAlertDialog";

const CompletedTodos = () => {
  const route = useRouter();
  const { todos, remove, update } = useTodos(true);
  const { showAlert } = useAlertStore();
  const { openConfirm } = useAlertDialogStore();

  const toggleTodo = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    update(id, { ...todo, status: !todo.status });

    showAlert({
      title: "Visszaállítva",
      description: "A ToDo újra aktív státuszba került",
      variant: "success",
      icon: IconCheck,
    });
  };

  const deleteTodo = (id: string) => {
    openConfirm({
      title: "Törlés megerősítése",
      description: "Biztosan törölni szeretnéd ezt a ToDo-t?",
      onConfirm: () => {
        remove(id);
        showAlert({
          title: "Törölve",
          description: "A ToDo sikeresen törölve lett",
          variant: "destructive",
          icon: IconTrash,
        });
      },
    });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="sm:w-xl w-full space-y-8">
        <div className="relative bg-foreground sm:h-24 h-16 flex items-center rounded-b-xl">
          <ToDoIconButton
            icon={IconChevronLeft}
            className="bg-background text-foreground absolute left-3 hover:bg-accent/80 sm:hidden inline-flex"
            onClick={() => route.back()}
          />

          <ToDoButton
            text="Vissza"
            className="bg-background text-foreground absolute left-3 hover:bg-accent/80 hidden sm:inline-flex"
            onClick={() => route.back()}
          />

          <h1 className="sm:text-7xl text-4xl text-background font-black mx-auto ">My ToDo</h1>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="sm:w-full w-sm">
            <span className="sm:text-4xl text-2xl font-bold text-foreground">Teljesített ToDo-k</span>
          </div>

          <div className="sm:w-full w-sm flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
            {todos.filter((t) => t.status).length === 0 ? (
              <p className="text-center text-muted-foreground py-6">Még nincs teljesített ToDo!</p>
            ) : (
              todos
                .filter((t) => t.status)
                .map((todo) => (
                  <ToDoItem
                    key={todo.id}
                    title={todo.title}
                    description="Teljesített"
                    variant="outline"
                    action={
                      <>
                        <div className="gap-2 hidden sm:inline-flex">
                          <ToDoButton text="Vissza" size="sm" variant="secondary" onClick={() => toggleTodo(todo.id)} />
                          <ToDoButton
                            text="Törlés"
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteTodo(todo.id)}
                          />
                        </div>

                        <div className="gap-2 inline-flex sm:hidden">
                          <ToDoIconButton icon={IconRefresh} variant="secondary" onClick={() => toggleTodo(todo.id)} />
                          <ToDoIconButton icon={IconTrash} variant="destructive" onClick={() => deleteTodo(todo.id)} />
                        </div>
                      </>
                    }
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTodos;
