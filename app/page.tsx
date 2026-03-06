"use client";

import { useEffect, useState } from "react";
import { useAlertStore } from "@/store/useAlert";

import { IconAlertCircle } from "@tabler/icons-react";
import { ToDo } from "@/types/todo";
import { getAll } from "@/services/localStorageService";

export default function ToDoList() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const { showAlert } = useAlertStore();

  useEffect(() => {
    try {
      const data = getAll();
      setTodos(data);
    } catch (error) {
      showAlert({
        title: "Hiba!",
        description: "Hiba az adatok lekérése közben",
        variant: "destructive",
        icon: IconAlertCircle,
      });
      setTodos([]);
    }
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
