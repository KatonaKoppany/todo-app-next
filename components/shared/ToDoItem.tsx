import React, { ReactNode } from "react";
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "../ui/item";

interface ToDoItemProps {
  title: string;
  description: string;
  variant?: "default" | "outline" | "muted";
  size?: "default" | "sm";
  action?: ReactNode;
}

export const ToDoItem = ({ title, description, variant = "default", size = "default", action }: ToDoItemProps) => {
  return (
    <Item variant={variant} size={size}>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>

      {action && <ItemActions>{action}</ItemActions>}
    </Item>
  );
};
