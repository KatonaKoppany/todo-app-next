import { ToDo } from "@/types/todo";

const storageKey = "todos";

export const getAll = (): ToDo[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(storageKey);
  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data) as ToDo[];
  } catch (error) {
    console.log(error);
    return [];
  }
};
