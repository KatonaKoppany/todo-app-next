"use client";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useAlertStore } from "@/store/useAlert";

export const ToDoAlert = () => {
  const { isOpen, title, description, variant, icon: Icon, hideAlert } = useAlertStore();

  if (!isOpen || !Icon) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-100 w-full max-w-sm cursor-pointer animate-in fade-in slide-in-from-bottom-4"
      onClick={hideAlert}
    >
      <Alert variant={variant}>
        <Icon size={20} />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  );
};
