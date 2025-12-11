"use client";

import { Button } from "@/components/ui/Button";
import { ActionSection } from "@/components/Action/ActionSection";

export default function ManualTestingPage() {
    return (
        <div className="bg-[--color-bg] text-[--color-text] mx-auto max-w-7xl px-4">

            {/* ================= HERO ================= */}
            <section className="py-20 md:py-28 bg-[--color-bg-alt]">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* TEXT */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--color-primary)]">
                            Manual Testing <br /> Services
                        </h1>

                        <p className="text-lg text-[--color-muted]">
                            Manual testing remains the most reliable way to uncover subtle,
                            unexpected, or user-behavior–driven issues that automated tools
                            cannot detect.
                        </p>

                        <Button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl hover:bg-[var(--color-secondary)] transition">
                            Get a Free Quote
                        </Button>
                    </div>

                    {/* IMAGE */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/images/testing/manual/banner.svg"
                            alt="Manual Testing Services"
                            className="rounded-3xl w-full max-w-lg object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* ================= WHAT IS MANUAL TESTING ================= */}
            <section className="py-20">
                <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
                    What Is Manual Testing?
                </h2>

                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* IMAGE */}
                    <img
                        src="/images/testing/manual/what-is.svg"
                        className="rounded-3xl w-full"
                        alt="What is Manual Testing"
                    />

                    {/* TEXT */}
                    <div className="space-y-6 text-[--color-muted] leading-relaxed">
                        <p className="font-semibold">
                            Manual testing is performed by QA specialists who interact with
                            your application in carefully modeled scenarios — validating
                            functionality, usability, and system behavior with real human
                            insight.
                        </p>

                        <p>
                            Every manual testing cycle is documented and executed against
                            pre-defined requirements to ensure full coverage and predictable
                            results.
                        </p>

                        <p className="font-semibold">Main goals:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Reveal obvious and hidden functional defects</li>
                            <li>Identify deeper logic or architectural issues through structured test cycles</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* ================= WHEN TO USE MANUAL TESTING ================= */}
            <section className="py-20 bg-[--color-primary]/5">
                <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
                    When Should Manual Testing Be Used?
                </h2>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6 text-[--color-muted] leading-relaxed">
                        <p className="font-semibold">
                            Manual testing is essential in situations where precision,
                            flexibility, and human evaluation are critical.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>The application is early-stage or not stable enough for automation</li>
                            <li>Standard test scenarios have not been previously applied</li>
                            <li>Detailed analysis of documentation and logic is required</li>
                        </ul>
                    </div>

                    <img
                        src="/images/testing/manual/scenarios.svg"
                        className="rounded-3xl w-full"
                        alt="Manual Testing Scenarios"
                    />
                </div>
            </section>

            {/* ================= BENEFITS ================= */}
            <section className="py-20">
                <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
                    Benefits of Manual Testing
                </h2>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <img
                        src="/images/testing/manual/benefits.svg"
                        className="rounded-3xl w-full"
                        alt="Manual Testing Benefits"
                    />

                    <div className="space-y-6 text-[--color-muted] leading-relaxed">
                        <p className="font-semibold">
                            Automated testing is efficient — but manual testing ensures
                            precision and complete user-centric validation.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Testers can use variable inputs across cycles to widen coverage
                            </li>
                            <li>
                                Human evaluation detects UX and usability issues automation misses
                            </li>
                            <li>
                                Testing can adapt to new features and changing product requirements
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* ================= MANUAL TESTING METHODS ================= */}
            <section className="py-20 bg-[--color-primary]/5">
                <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
                    Major Manual Testing Methods
                </h2>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6 text-[--color-muted] leading-relaxed">
                        <p className="font-semibold">
                            Manual testing techniques allow QA engineers to detect a wide range
                            of issues in early and advanced development stages.
                        </p>

                        <p>
                            These methods help reveal inconsistencies, validate architecture,
                            and ensure that the application behaves as intended before full
                            automation workflows begin.
                        </p>
                    </div>

                    <img
                        src="/images/testing/manual/methods.svg"
                        alt="Manual Testing Methods"
                        className="rounded-3xl w-full"
                    />
                </div>
            </section>

            {/* ================= TYPES OF MANUAL TESTING ================= */}
            <section className="py-20">
                <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-14">
                    Types of Manual Testing
                </h2>

                {/* CARD LIST */}
                <div className="space-y-14">
                    <ManualCard
                        title="Initial Walkthrough & Inspection"
                        img="/images/testing/manual/types-1.svg"
                        text="A QA specialist reviews code and logic from top to bottom, identifying errors, grouping defects, and outlining next steps for deeper validation."
                    />

                    <ManualCard
                        title="Scheduled Functional Checks"
                        img="/images/testing/manual/types-2.svg"
                        text="Regular functional review cycles help detect recurring issues that may not appear during initial launches."
                    />

                    <ManualCard
                        title="Testing After Testing"
                        img="/images/testing/manual/types-3.svg"
                        text="Independent experts re-evaluate existing test results to ensure accuracy and identify overlooked problem areas."
                    />

                    <ManualCard
                        title="Express Testing"
                        img="/images/testing/manual/types-4.svg"
                        text="A fast, combined inspection approach performed by a specialist who was not involved in development — bringing fresh perspective and objectivity."
                    />
                </div>
            </section>

            {/* ================= DIFFERENT DEVELOPMENT STAGES ================= */}
            <section className="py-20 bg-[--color-primary]/5">
                <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
                    Testing at Different Development Stages
                </h2>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    <img
                        src="/images/testing/manual/stages.svg"
                        className="rounded-3xl w-full"
                        alt="Testing Stages"
                    />

                    <div className="space-y-6 text-[--color-muted] leading-relaxed">
                        <p>
                            Effective manual testing requires precise timing. QA specialists
                            contribute value from the earliest project stages.
                        </p>

                        <p>
                            Testers participate in requirement validation, UI/UX analysis,
                            design reviews, and early functional evaluations — ensuring the
                            product structure supports future quality goals.
                        </p>

                        <p>
                            As development progresses, they create test cases, conduct smoke
                            tests, regression cycles, and prepare the product for final release.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= TOOLS ================= */}
            <section className="py-20">
                <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
                    Tools Used for Manual Testing
                </h2>

                <p className="text-center text-[--color-muted] max-w-3xl mx-auto mb-14">
                    Our QA teams use an extensive toolkit to improve flexibility, accuracy,
                    and visibility across the testing process.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {[
                        "Testing management tools",
                        "XML editors",
                        "Graphic comparison tools",
                        "File search & comparison utilities",
                        "File managers",
                        "Screenshot & video capture tools",
                    ].map((tool, i) => (
                        <div
                            key={i}
                            className="bg-[--color-bg-alt] p-6 rounded-xl text-center shadow-sm border border-white/10"
                        >
                            <img
                                src={`/images/testing/manual/tool-${i + 1}.svg`}
                                alt={tool}
                                className="h-20 mx-auto mb-4"
                            />
                            <h6 className="font-semibold">{tool}</h6>
                        </div>
                    ))}

                </div>
            </section>

            {/* ================= MANUAL TESTING STAGES ================= */}
            <section className="py-20 bg-[--color-primary]/5">
                <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
                    Manual Testing Stages
                </h2>

                <div className="grid md:grid-cols-2 gap-16 items-start">

                    <img
                        src="/images/testing/manual/stages-full.svg"
                        alt="Manual Testing Stages"
                        className="rounded-3xl w-full"
                    />

                    <div className="space-y-6 text-[--color-muted] leading-relaxed">

                        <StageBlock
                            title="Prep Stage"
                            items={[
                                "Analysis of documentation and requirements",
                                "Planning manual test cycles",
                                "Risk identification and prioritization",
                            ]}
                        />

                        <StageBlock
                            title="Main Stage"
                            items={[
                                "Executing manual tests based on test cases",
                                "Logging defects and monitoring fixes",
                            ]}
                        />

                        <StageBlock
                            title="Final Stage"
                            items={[
                                "Comprehensive reporting",
                                "Recommendations for further optimization",
                            ]}
                        />

                    </div>
                </div>
            </section>

            {/* ================= FINAL SECTION ================= */}
            <section className="py-20">
                <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
                    Manual Testing With Deveteria
                </h2>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6 text-[--color-muted] leading-relaxed">
                        <p className="font-semibold">
                            Even in a world increasingly driven by automation, manual testing
                            remains irreplaceable for precise, user-focused quality assurance.
                        </p>

                        <p>
                            Our QA engineers apply proven methodologies, human judgment, and
                            deep experience to ensure your software launches stable, intuitive,
                            and error-free.
                        </p>

                        <p>
                            Partner with Deveteria early to avoid costly post-release issues and
                            accelerate your development lifecycle with confidence.
                        </p>
                    </div>

                    <img
                        src="/images/testing/manual/top-notch.svg"
                        alt="Top Notch Manual Testing"
                        className="rounded-3xl w-full"
                    />

                </div>
            </section>

            {/* CTA */}
            <ActionSection
                title="Need manual testing for your project?"
                btnLabel="Get a Free Quote"
                btnHref="/contact-us"
                bgColor="bg-[--color-primary]"
                textColor="text-white"
            />

        </div>
    );
}


/* ================== SMALL COMPONENTS ================== */

function ManualCard({ title, text, img }: any) {
    return (
        <div className="grid md:grid-cols-5 gap-6 items-start">
            <img src={img} alt={title} className="w-full md:col-span-1 rounded-xl" />
            <div className="space-y-3 md:col-span-4">
                <h5 className="text-xl font-semibold">{title}</h5>
                <p className="text-[--color-muted]">{text}</p>
            </div>
        </div>
    );
}

function StageBlock({ title, items }:any) {
    return (
        <div className="space-y-2">
            <h5 className="text-xl font-semibold">{title}</h5>
            <ul className="list-disc pl-6 space-y-1 text-[--color-muted]">
                {items.map((item:any, i:number) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
