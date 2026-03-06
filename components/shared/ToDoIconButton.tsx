import { TablerIcon } from "@tabler/icons-react";

import { Button } from "../ui/button";

interface ToDoIconButtonProps {
  icon: TablerIcon;
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary" | "link";
  size?: "icon" | "icon-xs" | "icon-sm" | "icon-lg";
}

export const ToDoIconButton = ({ icon: Icon, variant = "default", size = "icon" }: ToDoIconButtonProps) => {
  return (
    <Button variant={variant} size={size}>
      <Icon />
    </Button>
  );
};
