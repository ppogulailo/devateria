import {ActionSection} from "@/components/Action/ActionSection";
import {OurTechStackSection} from "@/components/sections/OurTechStack/OurTechStackSection";
import {Card} from "@/components/ui/card/Card";
import {BgSection} from "@/components/ui/PrimaryBackground";
import {ChevronRight} from "lucide-react";
import {HeroSection} from "@/components/sections/HeroSection";
import {serviceData} from "@/data/pages/services/service.data";
import {SectionTitle} from "@/components/ui/SectionTitle";

export default function DedicatedTeamsPage() {
    const { hero, services, industryCards, steps } = serviceData;
    return (
        <main className="py-12">
            <HeroSection {...hero} />
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Title */}
                    <SectionTitle>Our Services</SectionTitle>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {services.map((s, i) => (
                            <Card
                                key={i}
                            >
                                {/* Icon */}
                                <img src={s.icon} className="h-14 mb-4"></img>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-[--color-text] mb-3">
                                    {s.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[--color-muted] leading-relaxed">
                                    {s.description}
                                </p>
                            </Card>
                        ))}

                    </div>
                </div>
            </section>
            <BgSection>
                <div className="max-w-7xl mx-auto px-6">

                    {/* Title */}
                    <SectionTitle className="mb-16">
                        Framework of Cooperation
                    </SectionTitle>

                    {/* Numbers with arrows */}
                    <div className="flex justify-between max-w-4xl mx-auto mb-16">
                        {steps.map((s, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="text-3xl text-white/70 font-semibold">{s.number}</span>
                                {i < steps.length - 1 && (
                                    <ChevronRight
                                        size={32}
                                        strokeWidth={2.5}
                                        className="text-white/70"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">

                        {steps.map((s, i) => (
                            <div key={i} className="flex flex-col items-center text-center">

                                {/* Title box */}
                                <div className="border border-white/10 rounded-xl py-4 mb-6 w-full  h-20 flex items-center justify-center">
                                    <h3 className="font-semibold !text-white/70">{s.title}</h3>
                                </div>

                                {/* Icon */}
                                <img src={s.icon} alt={s.title}/>


                                {/* Description */}
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    {s.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </BgSection>
            <ActionSection
                title="Ready to develop a project?"
                btnLabel="Let’s Start"
                btnHref="/contact-us"
                bgColor="bg-[--color-primary]"
                textColor="text-white"
                // className="mt-10"
                icon={
                    <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                        <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3"/>
                        <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4"/>
                        <circle cx="130" cy="50" r="36" fill="black"/>
                    </svg>
                }
            />
            <OurTechStackSection/>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <SectionTitle className="!mb-4">
                        Our Solutions
                    </SectionTitle>

                    <p className="text-center max-w-2xl mx-auto text-[--color-muted] mb-12">
                        Be open to more than ready-made solutions for business needs, and use the opportunity
                        to customise the software to suit yourself and not the other way around
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        {industryCards.map((card, index) => (
                            <Card
                                key={index}
                                // className="border border-[--color-muted]/20 rounded-2xl p-8 bg-[--color-bg-alt]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <img src={card.icon} className="h-12 w-12" alt={card.title} />

                                    <h3 className="text-xl font-extrabold text-[var(--color-primary)]">
                                        {card.title}
                                    </h3>
                                </div>

                                <p className="text-[--color-muted] mb-6">{card.description}</p>

                                <h4 className="font-extrabold text-[var(--color-primary)] mb-2 text-lg">We can offer:</h4>

                                <ul className="space-y-1 text-black/70">
                                    {card.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

