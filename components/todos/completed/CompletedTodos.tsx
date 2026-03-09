"use client";

import { useTodos } from "@/hooks/useTodos";

import { ToDoItem } from "@/components/shared/ToDoItem";
import { useRouter } from "next/navigation";
import { ToDoIconButton } from "@/components/shared/ToDoIconButton";
import { IconRefresh, IconTrash, IconCheck } from "@tabler/icons-react";
import { useAlertStore } from "@/store/useAlert";
import { useAlertDialogStore } from "@/store/useAlertDialog";
import { Navigation } from "@/components/shared/Navigation";
import { PageHeader } from "@/components/shared/PageHeader";

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
    <div className="w-full max-w-xl px-4 flex flex-col gap-6 flex-1 min-h-0">
      <Navigation
        items={[
          { label: `Aktív`, disabled: false, onClick: () => route.push("/todos") },
          { label: `Teljesített`, disabled: true, onClick: () => {} },
        ]}
      />

      <div className="flex flex-col flex-1 min-h-0 space-y-4">
        <PageHeader label="Lezárt feladatok" />

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
                      <div className="flex gap-2">
                        <ToDoIconButton
                          icon={IconRefresh}
                          variant="secondary"
                          size="icon-lg"
                          onClick={() => toggleTodo(todo.id)}
                        />
                        <ToDoIconButton
                          icon={IconTrash}
                          variant="destructive"
                          size="icon-lg"
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
  );
};

export default todos;
