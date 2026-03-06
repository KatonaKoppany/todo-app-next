import { todoService } from "@/services/localStorageService";
import { ToDo } from "@/types/todo";
import { useState, useEffect } from "react";

export const useTodos = (status?: boolean) => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    if (status === undefined) {
      setTodos(todoService.getAll());
    } else {
      setTodos(todoService.getByStatus(status));
    }
  }, [status]);

  const add = (todo: ToDo) => {
    todoService.add(todo);
    setTodos((prev) => [...prev, todo].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)));
  };

  const remove = (id: string) => {
    todoService.delete(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const update = (id: string, todo: ToDo) => {
    todoService.update(id, todo);
    setTodos((prev) => prev.map((t) => (t.id === id ? todo : t)).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)));
  };

  return { todos, add, remove, update };
};
