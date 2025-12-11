interface PageSectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const PageSection = ({ children, className = "", id }: PageSectionProps) => {
    return (
        <section id={id} className={`mx-auto w-full max-w-6xl px-4 ${className}`}>
            {children}
        </section>
    );
};
