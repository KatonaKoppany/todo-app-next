import React from "react";
import { Button } from "../ui/button";

interface ToDoButtonProps {
  text: string;
  variant?: "default" | "outline" | "ghost" | "success" | "destructive" | "secondary" | "link";
  size?: "default" | "xs" | "sm" | "lg";
  onClick: () => void;
}

export const ToDoButton = ({ text, variant = "default", size = "default", onClick }: ToDoButtonProps) => {
  return (
    <Button variant={variant} size={size} onClick={onClick}>
      {text}
    </Button>
  );
};
