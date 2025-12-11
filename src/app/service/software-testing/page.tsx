"use client";

import { ActionSection } from "@/components/Action/ActionSection";
import { Card } from "@/components/ui/card/Card";
import { BgSection } from "@/components/ui/PrimaryBackground";
import { PageSection } from "@/components/ui/PageSection";
import { FAQ } from "@/components/FAQ";
import {HeroSection} from "@/components/sections/HeroSection";
import {softwareTestingPageData} from "@/data";
import {SectionTitle} from "@/components/ui/SectionTitle";
export default function SoftwareTestingPage() {
   const {hero, priorities, reasons, services, faq} = softwareTestingPageData
    return (
        <div className="[&_p]:text-black/70]">

            <PageSection>
                <HeroSection {...hero} />

                {/* ================= PRIORITIES ================= */}
                <section className="py-20">
                    <SectionTitle>
                        Our Testing Priorities
                    </SectionTitle>

                    <div className="grid md:grid-cols-3 gap-10">
                        {priorities.map((p, i) => (
                            <Card key={i}>
                                <h3 className="text-xl font-semibold mb-4">{p.title}</h3>
                                <p className="text-sm leading-relaxed text-[--color-muted]">{p.text}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* ================= SERVICES ================= */}
                <section className="py-20">
                    <SectionTitle>
                        Quality Assurance Services We Provide
                    </SectionTitle>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((s, i) => (
                            <Card key={i}>
                                <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
                                <p className="text-sm leading-relaxed text-[--color-muted]">{s.text}</p>
                            </Card>
                        ))}
                    </div>
                </section>

            </PageSection>

            {/* ================= COMPANY STATEMENT ================= */}
            <BgSection>
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <img
                        src="/icons/pages/software-testing/Types-of-Software-Testing.jpg"
                        alt="QA Team"
                        className="rounded-3xl w-full object-cover shadow-xl"
                    />

                    <div className="space-y-6">
                        <SectionTitle align='left'>
                            Deveteria as Your Testing Partner
                        </SectionTitle>

                        <p className="leading-relaxed text-[--color-muted]">
                            Our QA engineers follow proven methodologies and use advanced tools to guarantee stability and reliability.
                        </p>

                        <p className="leading-relaxed text-[--color-muted]">
                            Testing for us is strategic — we reduce risks, improve satisfaction, and deliver trustworthy applications.
                        </p>
                    </div>

                </div>
            </BgSection>

            {/* ================= WHY CHOOSE ================= */}
            <PageSection>
                <section className="py-20">
                    <SectionTitle className='mb-10'>
                        Why Choose Deveteria for QA?
                    </SectionTitle>

                    <div className="grid md:grid-cols-3 gap-10">
                        {reasons.map((r, i) => (
                            <Card key={i}>
                                <h3 className="text-xl font-semibold mb-4">{r.title}</h3>
                                <p className="text-sm leading-relaxed text-[--color-muted]">{r.text}</p>
                            </Card>
                        ))}
                    </div>
                </section>
            </PageSection>

            {/* ================= CTA ================= */}
            <ActionSection
                title="Need reliable testing for your product?"
                btnLabel="Get a Quote"
                btnHref="/contact-us"
                bgColor="bg-[var(--color-primary)]"
                textColor="text-white"
            />

            {/* ================= FAQ ================= */}
            <FAQ title="Frequently Asked Questions" items={faq} />

        </div>
    );
}
