import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  dark?: boolean;
}

export function Divider({ dark = false, className, ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        "w-full border-t my-8 sm:my-12",
        dark ? "border-white/10" : "border-brand-navy/10",
        className
      )}
      {...props}
    />
  );
}
