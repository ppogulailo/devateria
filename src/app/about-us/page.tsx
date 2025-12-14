import { aboutUsPageData } from "@/data/pages/about-us.data";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BgSection } from "@/components/ui/PrimaryBackground";
import { ActionSection } from "@/components/Action/ActionSection";
import {Card} from "@/components/ui/card/Card";

export default function AboutUsPage() {
    const { hero, aboutCompany, stats, values, countries, mapImage } = aboutUsPageData;

    return (
        <main>

            {/* HERO */}
            <HeroSection {...hero} />

            {/* ABOUT COMPANY */}
            <BgSection>
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <SectionTitle align="left">About Our Company</SectionTitle>

                            <div className="space-y-6 text-lg leading-relaxed text-[--color-muted]">
                                {aboutCompany.text.map((t, i) => (
                                    <p key={i}>{t}</p>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <img
                                src={aboutCompany.image}
                                alt={aboutCompany.imageAlt}
                                className="rounded-2xl shadow-lg max-w-full"
                            />
                        </div>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((item, i) => (
                            <div key={i} className="text-center">
                                <p className="text-4xl font-bold text-[--color-text]">{item.number}</p>
                                <p className="text-[--color-muted] mt-2">{item.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </BgSection>

            {/* VALUES */}
            <section className="py-24 bg-[--color-bg-alt]">
                <div className="container mx-auto px-4">
                    <SectionTitle>Our Values</SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {values.map((v, i) => (
                            <Card key={i} >
                                <img src={v.icon} className="h-14 mb-4"></img>

                                <h3 className="text-xl font-semibold mb-4">{v.title}</h3>

                                <p className="text-[--color-muted] leading-relaxed">{v.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <ActionSection
                title="Ready to develop a project?"
                btnLabel="Let’s Start"
                btnHref="/contact-us"
                bgColor="bg-[--color-primary]"
                textColor="text-white"
                icon={
                    <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                        <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                        <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                        <circle cx="130" cy="50" r="36" fill="black" />
                    </svg>
                }
            />

            {/* COUNTRIES */}
            <section className="py-24 bg-[--color-bg-alt]">
                <div className="container mx-auto px-4">
                    <SectionTitle>Customer Geography</SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        <div className="border border-[--color-muted]/20 rounded-2xl p-10 w-full max-w-md bg-[--color-bg]">
                            <div className="grid grid-cols-2 gap-y-3 text-[--color-text] leading-relaxed text-lg">
                                {countries.map((c, i) => (
                                    <span key={i}>{c}</span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <img src={mapImage} alt="World Map" className="w-full max-w-3xl" />
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
