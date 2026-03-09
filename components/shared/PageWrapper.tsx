import React, { ReactNode } from "react";

interface PageWrapperProps {
  component: ReactNode;
}

export const PageWrapper = ({ component }: PageWrapperProps) => {
  return (
    <div className="w-full h-screen bg-background flex flex-col items-center overflow-hidden">
      <div className="w-full bg-foreground py-6 sm:py-10 mb-6 sm:mb-8 rounded-b-xl sm:rounded-b-[3.5rem] shadow-lg px-4">
        <h1 className="text-3xl sm:text-6xl text-background font-black text-center tracking-tight">
          My <span className="text-primary-foreground/70">ToDo</span>
        </h1>
      </div>
      {component}
    </div>
  );
};
