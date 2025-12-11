import {ActionSection} from "@/components/Action/ActionSection";
import {OurTechStackSection} from "@/components/sections/OurTechStack/OurTechStackSection";
import {HeroSection} from "@/components/sections/HeroSection";
import {ChevronRight} from "lucide-react";
import {solutionsPageData} from "@/data/pages/solutions/solutions.data";
import {SectionTitle} from "@/components/ui/SectionTitle";

export default function DedicatedTeamsPage() {
    const { hero, solutions, actionSection } = solutionsPageData;
    return (
        <main className="py-12">
            <HeroSection {...hero} />
            <ActionSection
                title="Ready to develop a project?"
                btnLabel="Let’s Start"
                btnHref="/contact-us"
                bgColor="bg-[--color-primary]"
                textColor="text-white"
                // className="mt-10"
                icon={
                    <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                        <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                        <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                        <circle cx="130" cy="50" r="36" fill="black" />
                    </svg>
                }
            />
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TITLE */}
                    <SectionTitle className="!mb-4">
                        Our Solutions
                    </SectionTitle>

                    <p className="text-center text-[--color-muted] max-w-3xl mx-auto leading-relaxed mb-16">
                        Learn more about how we develop unique solutions in accordance with the client’s
                        business needs, boosting project efficiency and potential.
                    </p>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center">

                        {solutions.map((s, idx) => (
                            <a
                                key={idx}
                                href={s.href}
                                className="w-full bg-white border border-black/20 rounded-2xl p-8 shadow-sm hover:shadow-md transition flex flex-col"
                            >
                                <img src={s.icon} alt={s.title} className="w-12 h-12 mb-6" />

                                <h3 className="text-xl font-semibold text-[--color-text] mb-6">
                                    {s.title}
                                </h3>

                                <div className="font-semibold flex items-center gap-2 mt-auto">
                                    Read more
                                    <ChevronRight
                                        size={32}
                                        strokeWidth={2.5}
                                        className="text-black/70"
                                    />
                                </div>
                            </a>
                        ))}

                    </div>
                </div>
            </section>
            <OurTechStackSection/>
        </main>
    );
}

