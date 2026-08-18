import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean;
}

export function Container({ children, className, clean = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-site",
        clean && "px-0 sm:px-0 lg:px-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
