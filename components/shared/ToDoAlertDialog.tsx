"use client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAlertDialogStore } from "@/store/useAlertDialog";
import { ToDoButton } from "./ToDoButton";

export const ToDoAlertDialog = () => {
  const { isOpen, title, description, onConfirm, onCancel, closeConfirm } = useAlertDialogStore();

  const handleCancel = () => {
    onCancel();
    closeConfirm();
  };

  const handleConfirm = () => {
    onConfirm();
    closeConfirm();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && handleCancel()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <ToDoButton text="Mégsem" onClick={handleCancel} />
          <ToDoButton text="Folytatás" onClick={handleConfirm} variant="destructive" />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
