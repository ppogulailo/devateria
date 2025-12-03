import React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options?: string[];
  wrapperClassName?: string;
};

export const Select: React.FC<SelectProps> = ({ options = [], wrapperClassName = "", className = "", children, ...props }) => {
  const base = "w-full bg-transparent border-b border-[var(--color-input-border)] text-[var(--color-form-text)] placeholder-[var(--color-muted)] focus:outline-none";
  const combined = [base, className].filter(Boolean).join(" ");

  return (
    <div className={["flex items-center gap-2", wrapperClassName].filter(Boolean).join(" ")}>
      <select {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)} className={combined}>
        {options.length ? options.map((opt) => <option key={opt} value={opt}>{opt}</option>) : children}
      </select>
    </div>
  );
};
