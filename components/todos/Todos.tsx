"use client";

import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodos } from "@/hooks/useTodos";
import { ToDoInput } from "@/components/shared/ToDoInput";
import { ToDoButton } from "@/components/shared/ToDoButton";
import { ToDoItem } from "@/components/shared/ToDoItem";
import { ToDoIconButton } from "@/components/shared/ToDoIconButton";
import { IconCheck, IconPlus, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useAlertStore } from "@/store/useAlert";
import { useAlertDialogStore } from "@/store/useAlertDialog";

const Todos = () => {
  const route = useRouter();
  const { todos, add, remove, update } = useTodos(false);
  const [inputValue, setInputValue] = useState("");

  const { showAlert } = useAlertStore();
  const { openConfirm } = useAlertDialogStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo = {
      id: uuidv4(),
      title: inputValue,
      status: false,
      createdAt: new Date().toISOString(),
    };

    add(newTodo);

    showAlert({
      title: "Új ToDo hozzáadva",
      description: `"${newTodo.title}" sikeresen felvéve!`,
      variant: "success",
      icon: IconCheck,
    });

    setInputValue("");
  };

  const toggleTodo = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    update(id, { ...todo, status: !todo.status });

    showAlert({
      title: "Készre jelölve",
      description: `"${todo.title}" teljesített státuszba került`,
      variant: "success",
      icon: IconCheck,
    });
  };

  const deleteTodo = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    openConfirm({
      title: "Törlés megerősítése",
      description: `Biztosan törölni szeretnéd a "${todo.title}" ToDo-t?`,
      onConfirm: () => {
        remove(id);
        showAlert({
          title: "Törölve",
          description: `"${todo.title}" sikeresen törölve lett`,
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
          <h1 className="sm:text-7xl text-4xl text-background font-black mx-auto ">My ToDo</h1>

          <ToDoButton
            text="Teljesített"
            className="bg-background text-foreground absolute right-3 hover:bg-accent/90 hidden sm:inline-flex"
            onClick={() => route.push("/todos/completed")}
          />

          <ToDoIconButton
            icon={IconCheck}
            className="bg-background text-foreground absolute right-3 hover:bg-accent/90 sm:hidden inline-flex"
            onClick={() => route.push("/todos/completed")}
          />
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="sm:w-full w-sm">
            <span className="sm:text-4xl text-2xl font-bold text-foreground">Nem teljesített ToDo-k</span>
          </div>
          <form onSubmit={handleSubmit} className="sm:w-full w-sm flex items-end gap-2 mt-6">
            <ToDoInput
              inputId="todoAdd"
              label="ToDo felvétele"
              placeholder="Új feladat..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <ToDoButton text="Új ToDo" type="submit" className="hidden sm:inline-flex " disabled={!inputValue} />
            <ToDoIconButton
              icon={IconPlus}
              type="submit"
              className="inline-flex sm:hidden hover:bg-accent/80 "
              disabled={!inputValue}
            />
          </form>

          <div className="sm:w-full w-sm flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
            {todos.filter((t) => !t.status).length === 0 ? (
              <p className="text-center text-muted-foreground py-6">
                Még nincs aktív ToDo!
                <br />
                Adj hozzá egyet!
              </p>
            ) : (
              todos
                .filter((t) => !t.status)
                .map((todo) => (
                  <ToDoItem
                    key={todo.id}
                    title={todo.title}
                    variant="outline"
                    action={
                      <>
                        <div className="gap-2 hidden sm:inline-flex">
                          <ToDoButton text="Kész" size="sm" variant="success" onClick={() => toggleTodo(todo.id)} />
                          <ToDoButton
                            text="Törlés"
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteTodo(todo.id)}
                          />
                        </div>

                        <div className="gap-2 inline-flex sm:hidden">
                          <ToDoIconButton icon={IconCheck} variant="success" onClick={() => toggleTodo(todo.id)} />
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

export default Todos;
