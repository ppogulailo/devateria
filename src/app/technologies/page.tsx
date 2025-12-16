import {TechAccordion} from "@/components/TechAccordion";
import {ActionSection} from "@/components/Action/ActionSection";
import {HeroSection} from "@/components/sections/HeroSection";
import {SectionTitle} from "@/components/ui/SectionTitle";
import {technologiesPageData} from "@/data/pages/technologiesPage.data";

export default function TechnologiesPage() {
    const { hero, sections } = technologiesPageData;
  return (
    <div>
        <div className="bg-[--color-bg] text-[--color-text]  px-4">
            <HeroSection {...hero} />

            <section className="our_technologies bg-[--color-bg-alt] py-20 md:py-28">
                <div className="container mx-auto max-w-6xl px-4">

                    {/* Title + Subtitle */}
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <SectionTitle>
                            Our Technologies
                        </SectionTitle>
                        <p className="text-[--color-muted] text-sm md:text-base leading-relaxed">
                            Our team constantly masters new and relevant tech stacks and
                            individually selects them for each project to provide customers with
                            the most suitable solution in terms of productivity, efficiency,
                            business goals and budget.
                        </p>
                    </div>

                    {/* Main Layout */}
                    {sections.map((section, idx) => (
                        <section
                            key={idx}
                            className={`py-20 ${idx === 0 ? "bg-[--color-bg-alt]" : "bg-[--color-bg-alt] pb-20"}`}
                        >
                            <div className="container mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12">

                                {/* LEFT — Text + Image */}
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <h2 className="text-3xl font-semibold text-[var(--color-primary)]">{section.title}</h2>
                                        <p className="text-sm leading-relaxed text-[--color-muted]">{section.subtitle}</p>
                                    </div>

                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="rounded-3xl w-full object-cover"
                                    />
                                </div>

                                {/* RIGHT — Accordions */}
                                <div className="space-y-6">
                                    {section.accordions.map((a) => (
                                        <TechAccordion key={a.title} title={a.title} logos={a.logos} />
                                    ))}
                                </div>

                            </div>
                        </section>
                    ))}

                </div>
            </section>
        </div>
        <ActionSection
            title="Ready to develop a project?"
            btnLabel="Let’s Start"
            btnHref="/contact-us"
            bgColor="bg-[--color-primary]"
            textColor="text-white"
            // className="mt-20"
            icon={
                <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                    <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                    <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                    <circle cx="130" cy="50" r="36" fill="black" />
                </svg>
            }
        />
    </div>
  );
}