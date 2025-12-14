import React from "react";
import { OurTechStackSection } from "@/components/sections/OurTechStack/OurTechStackSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ActionSection } from "@/components/Action/ActionSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { BgSection } from "@/components/ui/PrimaryBackground";
import { CardBackground } from "@/components/ui/card/CardBackground";
import { homePageData } from "@/data/pages/main.data";

export default function Home() {
    const { aboutDeveteriaHeroData, aboutStats, SERVICES, valuesData, principlesData } = homePageData;

    return (
        <main className="w-full">

            {/* ================= HERO + STATS ================= */}
            <section id="banner-main" className="w-full py-20 md:py-28 bg-cover bg-no-repeat"     style={{ backgroundImage: "url('/icons/pages/home/hero_background.svg')" }}>
                <div className="max-w-6xl mx-auto px-6">
                    <HeroSection {...aboutDeveteriaHeroData} />

                    {/* Stats */}
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {aboutStats.map((item, i) => (
                            <div key={i} className="text-center">
                                <p className="text-3xl font-bold">{item.number}</p>
                                <p className="mt-1 text-sm ">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* spacer section (was empty) */}
            <section className="max-w-6xl mx-auto px-4" />

            {/* ================= WHAT WE DO ================= */}
            <section id="what-we-do" className="py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <div className="relative mb-6">
                        <span className="
                            absolute left-1/2 -translate-x-1/2 -top-12
                            text-[90px] md:text-[120px] font-extrabold uppercase
                            text-black/5 select-none pointer-events-none
                        ">
                            WHAT WE DO
                        </span>

                        <h2 className="relative text-5xl font-extrabold uppercase tracking-wide text-[var(--color-primary)]">
                            What We Do
                        </h2>
                    </div>

                    <p className="text-gray-500 max-w-3xl mx-auto mb-12">
                        Our custom software development company offers a wide range of services
                        in numerous niches of IT, including:
                    </p>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map(item => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="p-8 rounded-xl shadow-sm bg-[#F3F9FF] hover:bg-[#e7f3ff] transition flex flex-col items-center text-center"
                            >
                                <img src={item.img} alt={item.alt} className="h-14 mb-4" />
                                <p className="font-semibold uppercase text-sm text-gray-700">
                                    {item.label}
                                </p>
                            </a>
                        ))}
                    </div>

                    <p className="text-gray-600 max-w-3xl mx-auto mt-12">
                        If you are interested in any of the above software development services or if you didn’t find
                        exactly what you need, please contact us and we will get you a dedicated team of highly-qualified
                        specialists tailored to your project.
                    </p>
                </div>
            </section>

            <IndustriesSection />

            {/* ================= OUR VALUES ================= */}
            <section className="py-16 md:py-24 bg-[--color-bg]">
                <div className="max-w-6xl mx-auto px-4">

                    <h2 className="text-4xl font-semibold uppercase text-[var(--color-primary)]">
                        Our Values
                    </h2>

                    <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {valuesData.map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col gap-3 p-6 rounded-2xl border border-[--color-muted]/20 bg-[--color-bg]"
                            >
                                <img width={50} src={item.icon} alt={item.title} />

                                <h3 className="text-xl font-bold text-[var(--color-primary)]">
                                    {item.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-[--color-muted]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= PRINCIPLES OF COOPERATION ================= */}
            <BgSection>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-5xl font-semibold">
                        Principles of Cooperation
                    </h2>

                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {principlesData.map((p, i) => (
                            <CardBackground key={i}>
                                <img
                                    width={60}
                                    height={60}
                                    src={p.icon}
                                    alt={`${p.title} icon`}
                                    className="size-thumbnail"
                                />

                                <h3 className="text-base font-semibold text-[--color-text]">
                                    {p.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-[--color-muted]">
                                    {p.description}
                                </p>
                            </CardBackground>
                        ))}
                    </div>
                </div>
            </BgSection>

            {/* ================= CTA ACTION SECTION ================= */}
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

            {/* ================= TECH STACK ================= */}
            <OurTechStackSection />

        </main>
    );
}
