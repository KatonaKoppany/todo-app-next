import { create } from "zustand";
import { TablerIcon } from "@tabler/icons-react";

interface AlertStore {
  isOpen: boolean;
  title: string;
  description: string;
  variant: "default" | "success" | "destructive";
  icon: TablerIcon | null;

  showAlert: (config: {
    title: string;
    description: string;
    variant?: "default" | "success" | "destructive";
    icon: TablerIcon;
  }) => void;
  hideAlert: () => void;
}

export const useAlertStore = create<AlertStore>((set) => ({
  isOpen: false,
  title: "",
  description: "",
  variant: "default",
  icon: null,

  showAlert: ({ title, description, variant = "default", icon }) => {
    set({ isOpen: true, title, description, variant, icon });

    setTimeout(() => {
      set({ isOpen: false });
    }, 4000);
  },

  hideAlert: () => set({ isOpen: false }),
}));
