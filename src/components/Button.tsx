import React from "react";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
};

export const Button: React.FC<ButtonProps> = ({
  href,
  children,
  className,
  variant = "outline",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors";
  const variants: Record<typeof variant, string> = {
    primary:
      "bg-[--color-primary] text-[--color-bg] hover:bg-[--color-primary-soft]",
    outline:
      "border border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-[--color-bg]",
  };

  const classes = clsx(baseClasses, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
};