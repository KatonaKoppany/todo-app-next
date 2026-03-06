import { create } from "zustand";

interface AlertDialogStore {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  openConfirm: (config: {
    title?: string;
    description?: string;
    onConfirm: () => void;
    onCancel?: () => void;
  }) => void;
  closeConfirm: () => void;
}

export const useAlertDialogStore = create<AlertDialogStore>((set) => ({
  isOpen: false,
  title: "Biztos benne?",
  description: "Ez a művelet nem vonható vissza.",
  onConfirm: () => {},
  onCancel: () => {},

  openConfirm: ({ title, description, onConfirm, onCancel }) =>
    set({
      isOpen: true,
      title: title ?? "Biztos benne?",
      description: description ?? "Ez a művelet nem vonható vissza.",
      onConfirm,
      onCancel: onCancel ?? (() => {}),
    }),

  closeConfirm: () => set({ isOpen: false }),
}));
