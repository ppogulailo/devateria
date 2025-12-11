interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
}

export const SectionHeader = ({
                                  title,
                                  subtitle,
                                  className = "",
                                  align = "center",
                              }: SectionHeaderProps) => {
    return (
        <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)]">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-4 text-lg text-[--color-muted] max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
