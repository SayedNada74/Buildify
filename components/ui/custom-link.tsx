import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  showIcon?: boolean;
  dark?: boolean;
}

export function CustomLink({
  href,
  children,
  external = false,
  showIcon = false,
  dark = false,
  className,
  ...props
}: CustomLinkProps) {
  const styles = cn(
    "inline-flex items-center gap-1 font-medium transition-colors duration-200 underline-offset-4 hover:underline",
    dark ? "text-slate-200 hover:text-brand-teal" : "text-foreground hover:text-brand-teal",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles} {...props}>
        <span>{children}</span>
        {showIcon && <ArrowUpRight className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <Link href={href} className={styles} {...props}>
      <span>{children}</span>
      {showIcon && <ArrowUpRight className="w-4 h-4" />}
    </Link>
  );
}
