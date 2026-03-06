import { TablerIcon } from "@tabler/icons-react";

import { Button } from "../ui/button";

interface ToDoIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: TablerIcon;
  variant?: "default" | "outline" | "ghost" | "success" | "destructive" | "secondary" | "link";
  size?: "icon" | "icon-xs" | "icon-sm" | "icon-lg";
}

export const ToDoIconButton = ({ icon: Icon, variant = "default", size = "icon", ...props }: ToDoIconButtonProps) => {
  return (
    <Button variant={variant} size={size} {...props}>
      <Icon />
    </Button>
  );
};
