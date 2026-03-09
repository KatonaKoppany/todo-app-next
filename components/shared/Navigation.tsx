"use client";
import React from "react";
import { ToDoButton } from "./ToDoButton";

type NavItem = {
  label: string;
  disabled: boolean;
  onClick: () => void;
};
interface NavigatonProps {
  items: NavItem[];
}
export const Navigation = ({ items }: NavigatonProps) => {
  return (
    <div className="flex gap-1 bg-muted p-1 rounded-2xl">
      {items.map((item, i) => (
        <ToDoButton
          key={i}
          disabled={item.disabled}
          onClick={item.onClick}
          className={`flex-1 py-2.5 text-center rounded-xl text-sm transition-all duration-200
            ${
              item.disabled
                ? "bg-background text-forground hover:text-background font-semibold"
                : "bg-foreground text-background shadow-sm font-bold"
            }`}
          text={item.label}
        />
      ))}
    </div>
  );
};
