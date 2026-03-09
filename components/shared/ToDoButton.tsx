import React from "react";
import { Button } from "../ui/button";

interface ToDoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "default" | "outline" | "ghost" | "success" | "destructive" | "secondary" | "link";
  size?: "default" | "xs" | "sm" | "lg";
}

export const ToDoButton = ({ text, variant, size, onClick, ...props }: ToDoButtonProps) => {
  return (
    <Button variant={variant} size={size} onClick={onClick} {...props}>
      {text}
    </Button>
  );
};
