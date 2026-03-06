import { ToDo } from "@/types/todo";

const STORAGE_KEY = "todos";

const isBrowser = () => typeof window !== "undefined";

const save = (todos: ToDo[]) => {
  if (!isBrowser()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

const load = (): ToDo[] => {
  if (!isBrowser()) return [];

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const todoService = {
  getAll(): ToDo[] {
    return load().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  },

  getById(id: string): ToDo | undefined {
    return load().find((t) => t.id === id);
  },

  getByStatus(status: boolean): ToDo[] {
    return load()
      .filter((t) => t.status === status)
      .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  },

  add(todo: ToDo) {
    const todos = load();
    save([...todos, todo]);
  },

  update(id: string, data: ToDo) {
    const todos = load();
    save(todos.map((t) => (t.id === id ? data : t)));
  },

  delete(id: string) {
    const todos = load();
    save(todos.filter((t) => t.id !== id));
  },
};
