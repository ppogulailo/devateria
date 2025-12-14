import Link from "next/link";

interface HeroSectionProps {
    title: string;        // can contain <br/>
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    image: string;
    imageAlt?: string;
}

export function HeroSection({
                                title,
                                subtitle,
                                ctaLabel,
                                ctaHref,
                                image,
                                imageAlt = "Hero image"
                            }: HeroSectionProps) {
    const titleLines = title.split("<br/>");

    return (
        <section className="relative py-20"  style={{ backgroundImage: "url('/icons/pages/home/hero_background.svg')" }}>
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                {/* TEXT */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--color-primary)]">
                        {titleLines.map((line, i) => (
                            <span key={i}>
                {line}
                                <br />
              </span>
                        ))}
                    </h1>

                    <p className="text-lg text-[--color-muted] max-w-xl">
                        {subtitle}
                    </p>

                    <Link
                        href={ctaHref}
                        className="inline-block px-10 py-4 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-lg hover:opacity-90 transition"
                    >
                        {ctaLabel}
                    </Link>
                </div>

                {/* IMAGE */}
                <div className="relative flex justify-center">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="w-full max-w-lg drop-shadow-xl"
                    />

                    <div className="absolute -z-10 top-1/2 right-0 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-[40px] border-[--color-primary]/20"></div>
                </div>
            </div>
        </section>
    );
}
