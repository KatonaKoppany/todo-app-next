"use client";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useAlertStore } from "@/store/useAlert";

export const ToDoAlert = () => {
  const { isOpen, title, description, variant, icon: Icon, hideAlert } = useAlertStore();

  if (!isOpen || !Icon) return null;

  return (
    <div
      className="fixed sm:top-4 sm:right-4 sm:w-auto sm:max-w-md sm:bottom-auto bottom-4 sm:px-0 px-4 z-100 w-full max-w-lg cursor-pointer animate-in fade-in sm:slide-in-from-top-4 slide-in-from-bottom-4"
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
