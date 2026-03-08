"use client";

import { useTodos } from "@/hooks/useTodos";
import { ToDoButton } from "@/components/shared/ToDoButton";
import { ToDoItem } from "@/components/shared/ToDoItem";
import { useRouter } from "next/navigation";
import { ToDoIconButton } from "@/components/shared/ToDoIconButton";
import { IconChevronLeft, IconRefresh, IconTrash, IconCheck } from "@tabler/icons-react";
import { useAlertStore } from "@/store/useAlert";
import { useAlertDialogStore } from "@/store/useAlertDialog";

const todos = () => {
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
    <div className="w-full h-screen bg-background flex flex-col items-center overflow-hidden">
      <div className="w-full bg-foreground py-6 sm:py-10 mb-6 sm:mb-8 rounded-b-xl sm:rounded-b-[3.5rem] shadow-lg px-4 shrink-0">
        <h1 className="text-3xl sm:text-6xl text-background font-black text-center tracking-tight">
          My <span className="text-primary-foreground/70">ToDo</span>
        </h1>
      </div>

      <div className="w-full max-w-xl px-4 flex flex-col gap-6 flex-1 min-h-0">
        <div className="flex bg-muted p-1 rounded-2xl">
          <button
            onClick={() => route.push("/todos")}
            className="flex-1 py-2.5 text-center rounded-xl text-muted-foreground hover:text-foreground font-semibold text-sm transition-all"
          >
            Aktív
          </button>
          <button
            className="flex-1 py-2.5 text-center rounded-xl bg-background shadow-sm font-bold text-sm transition-all"
            disabled
          >
            Teljesített ({todos.length})
          </button>
        </div>

        <div className="flex flex-col flex-1 min-h-0 space-y-4">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-lg sm:text-xl font-bold text-foreground/80 text-center sm:text-left w-full sm:w-auto">
              Lezárt feladatok
            </h2>
          </div>

          <div className="bg-card p-2 mb-4 rounded-xl flex flex-col gap-3 flex-1 overflow-y-auto no-scrollbar">
            {todos.filter((t) => t.status).length === 0 ? (
              <div className="text-center py-10 border-2 border-dashed rounded-3xl opacity-40 mx-2">
                <p className="font-medium">Nincs lezárt feladat.</p>
              </div>
            ) : (
              todos
                .filter((t) => t.status)
                .map((todo) => (
                  <ToDoItem
                    key={todo.id}
                    title={todo.title}
                    variant="outline"
                    action={
                      <div className="flex items-center gap-2">
                        <div className="hidden sm:flex gap-2">
                          <ToDoButton
                            text="Visszaállít"
                            size="sm"
                            variant="secondary"
                            onClick={() => toggleTodo(todo.id)}
                          />
                          <ToDoButton
                            text="Törlés"
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteTodo(todo.id)}
                          />
                        </div>

                        <div className="flex sm:hidden gap-2">
                          <ToDoIconButton
                            icon={IconRefresh}
                            variant="secondary"
                            className="h-10 w-10 rounded-lg"
                            onClick={() => toggleTodo(todo.id)}
                          />
                          <ToDoIconButton
                            icon={IconTrash}
                            variant="destructive"
                            className="h-10 w-10 rounded-lg"
                            onClick={() => deleteTodo(todo.id)}
                          />
                        </div>
                      </div>
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

export default todos;
