import React from "react";

interface PageHeaderProps {
  label: string;
}
export const PageHeader = ({ label }: PageHeaderProps) => {
  return (
    <div className="flex justify-between items-center px-1">
      <h2 className="text-2xl sm:text-xl font-bold text-foreground/80 text-center sm:text-left w-full sm:w-auto">
        {label}
      </h2>
    </div>
  );
};
