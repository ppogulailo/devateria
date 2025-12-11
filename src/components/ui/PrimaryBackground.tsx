interface BgSectionProps {
    id?: string;
    title?: string;
    subtitle?: string;
    background?: string;
    padding?: string;
    children: React.ReactNode;
    className?: string;
}

export const BgSection = ({
                              id,
                              title,
                              subtitle,
                              background = "bg-[var(--color-bg-alt)]",
                              padding = "py-20",
                              children,
                              className = "",
                          }: BgSectionProps) => {
    return (
        <section
            id={id}
            className={`
                ${background} 
                ${padding} 
                ${className}
                [&_p]:text-white/70 
                [&_h1]:text-white 
                [&_h3]:text-[var(--color-primary)] 
                [&_h2]:text-white 
                [&_h4]:text-white 
                [&_h5]:text-white 
                [&_h6]:text-white
            `}
        >
            <div className="max-w-6xl mx-auto px-4">

                {title && (
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
                        {title}
                    </h2>
                )}

                {subtitle && (
                    <p className="text-center max-w-2xl mx-auto mb-12">
                        {subtitle}
                    </p>
                )}

                {children}
            </div>
        </section>
    );
};
