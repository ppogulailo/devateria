"use client";

import { Button } from "@/components/ui/Button";
import { ActionSection } from "@/components/Action/ActionSection";
import { Card } from "@/components/ui/card/Card";
import { BgSection } from "@/components/ui/PrimaryBackground";
import { PageSection } from "@/components/ui/PageSection";
import { FAQ } from "@/components/FAQ";
import {softwareTestingPageData} from "@/data";
export default function SoftwareTestingPage() {
    return (
        <div className="[&_p]:text-black/70]">

            <PageSection>

                {/* ================= HERO ================= */}
                <section className="py-20 md:py-28">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--color-primary)] leading-tight">
                                Software Testing <br /> & Quality Assurance
                            </h1>

                            <p className="text-lg">
                                Testing is challenging — but with the right team, you achieve reliability, stability, and confidence.
                            </p>

                            <a href="/contact-us">
                                <Button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl hover:bg-[var(--color-secondary)] transition">
                                    Let’s Improve Your Quality
                                </Button>
                            </a>
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <img
                                src="/icons/pages/software-testing/Software%20Testing.webp"
                                alt="Software Testing"
                                className="rounded-3xl w-full max-w-lg object-cover shadow-xl"
                            />
                        </div>

                    </div>
                </section>

                {/* ================= PRIORITIES ================= */}
                <section className="py-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[var(--color-primary)]">
                        Our Testing Priorities
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {softwareTestingPageData.priorities.map((p, i) => (
                            <Card key={i}>
                                <h3 className="text-xl font-semibold mb-4">{p.title}</h3>
                                <p className="text-sm leading-relaxed text-[--color-muted]">{p.text}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* ================= SERVICES ================= */}
                <section className="py-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[var(--color-primary)]">
                        Quality Assurance Services We Provide
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {softwareTestingPageData.services.map((s, i) => (
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
                        <h2 className="text-5xl font-extrabold text-[var(--color-primary)]">
                            Deveteria as Your Testing Partner
                        </h2>

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
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-[var(--color-primary)]">
                        Why Choose Deveteria for QA?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {softwareTestingPageData.reasons.map((r, i) => (
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
            <FAQ title="Frequently Asked Questions" items={softwareTestingPageData.faq} />

        </div>
    );
}
