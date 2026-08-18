import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
  ...props
}: SectionHeadingProps) {
  const alignments = {
    left: "text-start items-start",
    center: "text-center items-center mx-auto",
    right: "text-end items-end ms-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12", alignments[align], className)} {...props}>
      {eyebrow && (
        <Badge variant={dark ? "teal" : "default"} className="mb-3">
          {eyebrow}
        </Badge>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight sm:tracking-tighter leading-tight text-balance",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal",
            dark ? "text-slate-300" : "text-foreground-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
