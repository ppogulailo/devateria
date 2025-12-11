// app/services/software-testing/automation-testing/page.tsx

import { ActionSection } from "@/components/Action/ActionSection";

export default function AutomationTestingPage() {
    return (
        <div className="bg-[--color-bg] text-[--color-text] mx-auto w-full max-w-6xl px-4">
            <main>
                {/* HERO / BANNER */}
                <section
                    id="banner-main"
                    className="banners-section py-20 md:py-24 bg-[--color-bg-alt]"
                >
                    <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2 md:items-center">
                        {/* TEXT */}
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--onblack-color-text)]">
                                Automation testing <br /> services
                            </h1>
                            <p className="text-lg text-[--color-muted]">
                                We use test automation to accelerate regression checks, increase
                                coverage, and keep your product stable while it grows in
                                complexity.
                            </p>
                            <p className="mt-4">
                                <a
                                    href="/contact-us"
                                    className="inline-flex items-center rounded-xl bg-[var(--color-primary)] px-8 py-3 text-base font-semibold text-white transition hover:bg-[var(--color-secondary)]"
                                >
                                    Get a free quote
                                </a>
                            </p>
                        </div>

                        {/* IMAGE */}
                        <div className="flex justify-center md:justify-end">
                            <div className="relative w-full max-w-md">
                                <div className="absolute -left-6 -bottom-6 h-32 w-32 rounded-3xl bg-[var(--color-primary)]/10" />
                                <img
                                    src="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/automation-testing-banner.svg"
                                    alt="Automation testing illustration"
                                    className="relative z-10 w-full rounded-3xl bg-[--color-bg] object-contain p-4 shadow-xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* BREADCRUMB */}
                <section className="py-4 text-sm text-[--color-muted]">
                    <nav aria-label="breadcrumb">
                        <ol className="flex flex-wrap gap-2">
                            <li>
                                <a href="/" className="hover:text-[var(--color-primary)]">
                                    Home
                                </a>
                            </li>
                            <li className="text-[--color-muted]">/</li>
                            <li className="text-[--color-muted]">
                                Automation Testing Services
                            </li>
                        </ol>
                    </nav>
                </section>

                {/* WHAT IS AUTOMATION TESTING */}
                <section
                    id="what-is-automation-testing"
                    className="py-16 md:py-20 border-t border-[--color-muted]/10"
                >
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center mb-10">
                            <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-[var(--onblack-color-text)]">
                                What is Automation Testing?
                                <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.3em] text-[--color-muted]/40">
                  Automation testing
                </span>
                            </h2>
                        </div>

                        <div className="grid gap-10 md:grid-cols-[1fr,2fr] md:items-center">
                            <div className="flex justify-center">
                                <img
                                    src="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/what-automation-testing.svg"
                                    alt="What is automation testing"
                                    className="w-full max-w-xs object-contain"
                                    loading="lazy"
                                />
                            </div>

                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-[--color-muted]">
                                <p className="font-semibold text-[--onblack-color-text]">
                                    Test automation is a way to execute repeatable tests with
                                    tools instead of people, so your team can focus on debugging,
                                    feature work, and edge cases.
                                </p>
                                <p>
                                    Scripts trigger actions like launching the app, filling forms,
                                    clicking flows, validating responses, and collecting reports.
                                    But to be useful, those scripts must be designed by engineers
                                    who understand both your domain and testing strategy.
                                </p>
                                <p>
                                    At Deveteria, we build and maintain automation suites that
                                    align with your architecture, CI/CD, and release cadence so
                                    they remain an asset rather than extra noise.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHEN IS IT APPLIED */}
                <section
                    id="when-is-it-applied"
                    className="py-16 md:py-20 bg-[--color-bg-alt]"
                >
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center mb-10">
                            <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-[var(--onblack-color-text)]">
                                When do we use automation?
                                <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.3em] text-[--color-muted]/40">
                  Use cases
                </span>
                            </h2>
                        </div>

                        <div className="grid gap-10 md:grid-cols-[2fr,1fr] md:items-center">
                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-[--color-muted]">
                                <p className="font-semibold text-[--onblack-color-text]">
                                    We recommend automation wherever tests are repetitive,
                                    high-risk, or too heavy to run manually on each release.
                                </p>
                                <ul className="mt-2 space-y-2 list-disc list-inside">
                                    <li>
                                        Large structured forms and flows that must behave the same
                                        across many data sets.
                                    </li>
                                    <li>
                                        Regression runs after backend or integration changes where
                                        manual retesting would be too slow.
                                    </li>
                                    <li>
                                        Long end-to-end scenarios that touch multiple services or
                                        domains.
                                    </li>
                                    <li>
                                        Hard-to-reach backend logic, logs, and data layers where
                                        errors are expensive or critical.
                                    </li>
                                    <li>
                                        Flows with strict calculations (billing, fees, financial
                                        logic) that must remain exact.
                                    </li>
                                    <li>
                                        Targeted data search and validation to detect issues early
                                        during development.
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-center md:justify-end">
                                <img
                                    src="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/when-is-it-applied.svg"
                                    alt="When automation is applied"
                                    className="w-full max-w-xs object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENEFITS */}
                <section
                    id="benefits-of-automation"
                    className="py-16 md:py-20 border-t border-[--color-muted]/10"
                >
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center mb-10">
                            <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-[var(--onblack-color-text)]">
                                Benefits of automation testing
                                <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.3em] text-[--color-muted]/40">
                  Why automate
                </span>
                            </h2>
                        </div>

                        <div className="grid gap-10 md:grid-cols-[1fr,2fr] md:items-center">
                            <div className="flex justify-center">
                                <img
                                    src="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/at-benefits.svg"
                                    alt="Automation benefits"
                                    className="w-full max-w-xs object-contain"
                                    loading="lazy"
                                />
                            </div>

                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-[--color-muted]">
                                <p className="font-semibold text-[--onblack-color-text]">
                                    Automation is not about replacing testers — it&apos;s about
                                    giving your team leverage.
                                </p>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li>Faster execution of repetitive regression suites.</li>
                                    <li>
                                        Engineers can focus on analysis, edge cases, and exploratory
                                        testing instead of clicking the same path all day.
                                    </li>
                                    <li>
                                        Stable, repeatable checks following a single verification
                                        algorithm.
                                    </li>
                                    <li>
                                        Clear machine-readable results and reports that integrate
                                        into your CI/CD.
                                    </li>
                                    <li>
                                        Reusable suites that evolve together with your product and
                                        can be scheduled to run automatically.
                                    </li>
                                    <li>
                                        Ability to test before the final UI is ready by targeting
                                        APIs and services directly.
                                    </li>
                                    <li>
                                        Stress and multi-user simulations that would be impossible
                                        to reproduce manually.
                                    </li>
                                    <li>
                                        Quick safety net after refactors or hotfixes to confirm the
                                        system is still healthy.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TYPES OF AUTOMATION TESTING */}
                <section
                    id="types-of-automation-testing"
                    className="py-16 md:py-20 bg-[--color-bg-alt]"
                >
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center mb-10">
                            <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-[var(--onblack-color-text)]">
                                Types of automation testing
                                <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.3em] text-[--color-muted]/40">
                  Coverage
                </span>
                            </h2>
                        </div>

                        <div className="grid gap-10 md:grid-cols-[2fr,1fr] md:items-center">
                            <div className="space-y-3 text-sm md:text-base leading-relaxed text-[--color-muted]">
                                <ul className="space-y-2 list-disc list-inside">
                                    <li>
                                        <strong>Functional testing.</strong> Verifies that features
                                        behave according to requirements and protect key user flows.
                                    </li>
                                    <li>
                                        <strong>Non-functional testing.</strong> Focuses on
                                        performance, reliability, and overall experience rather than
                                        specific features.
                                    </li>
                                    <li>
                                        <strong>Structural testing.</strong> Targets internal
                                        structure (components, branches, conditions) to increase
                                        coverage inside the code.
                                    </li>
                                    <li>
                                        <strong>Change-based testing.</strong> Confirms that fixed
                                        defects do not reappear when new versions are shipped.
                                    </li>
                                    <li>
                                        <strong>Regression testing.</strong> Guards core flows from
                                        breaking as your team ships new functionality.
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-center md:justify-end">
                                <img
                                    src="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/types-of-automation-testing-at.svg"
                                    alt="Types of automation testing"
                                    className="w-full max-w-xs object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* AUTOMATION TESTING COMPANY / WHY US */}
                <section
                    id="automation-testing-company"
                    className="py-16 md:py-20 border-t border-[--color-muted]/10"
                >
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center mb-10">
                            <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-[var(--onblack-color-text)]">
                                Automation testing with Deveteria
                                <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.3em] text-[--color-muted]/40">
                  Why choose us
                </span>
                            </h2>
                        </div>

                        <div className="grid gap-10 md:grid-cols-[1fr,2fr] md:items-center">
                            <div className="flex justify-center">
                                <img
                                    src="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/automation-testing-company.svg"
                                    alt="Automation testing company"
                                    className="w-full max-w-xs object-contain"
                                    loading="lazy"
                                />
                            </div>

                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-[--color-muted]">
                                <p className="font-semibold text-[--onblack-color-text]">
                                    Deveteria is a full-cycle engineering partner — automation is
                                    tightly integrated with development, DevOps, and QA, not an
                                    afterthought.
                                </p>
                                <p>
                                    Our team combines strong engineering backgrounds with real
                                    project experience in web, mobile, and cloud-native systems.
                                    We help you choose where automation brings the most value,
                                    design a roadmap, and embed tests into CI/CD.
                                </p>
                                <p>
                                    Whether you need to bootstrap a new automation suite or
                                    stabilize an existing one, we focus on maintainability,
                                    performance, and clear reporting so your team can rely on
                                    tests during every release.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT DO WE TEST */}
                <section
                    id="what-do-we-test"
                    className="py-16 md:py-20 bg-[--color-bg-alt]"
                >
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center mb-10">
                            <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-[var(--onblack-color-text)]">
                                What do we test?
                                <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.3em] text-[--color-muted]/40">
                  Scope
                </span>
                            </h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    title: "Code",
                                    icon: "https://crystalogic.net/wp-content/themes/crystal-master/assets/img/icons/code-icon.svg",
                                    text: "Unit and integration tests that validate modules and services in isolation before they hit production.",
                                },
                                {
                                    title: "API",
                                    icon: "https://crystalogic.net/wp-content/themes/crystal-master/assets/img/icons/api-icon.svg",
                                    text: "Contract and scenario tests for REST and GraphQL APIs, including edge cases and failure paths.",
                                },
                                {
                                    title: "GUI",
                                    icon: "https://crystalogic.net/wp-content/themes/crystal-master/assets/img/icons/gui-icon.svg",
                                    text: "End-to-end flows that interact with the UI just like real users, across devices and browsers.",
                                },
                            ].map((card) => (
                                <div
                                    key={card.title}
                                    className="rounded-2xl border border-[--color-muted]/20 bg-[--color-bg] p-6 shadow-sm"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="h-10 w-10 rounded-xl bg-[--color-bg-alt] flex items-center justify-center">
                                            <img
                                                src={card.icon}
                                                alt={card.title}
                                                className="h-7 w-7 object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold text-[--onblack-color-text]">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-[--color-muted] leading-relaxed">
                                        {card.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TOOLS FOR AUTOMATION TESTING */}
                <section
                    id="tools-for-automation-testing"
                    className="py-16 md:py-20 border-t border-[--color-muted]/10"
                >
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center mb-10">
                            <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-[var(--onblack-color-text)]">
                                Tools for automation testing
                                <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.3em] text-[--color-muted]/40">
                  Stack
                </span>
                            </h2>
                        </div>

                        <div className="grid gap-10 md:grid-cols-[2fr,1fr] md:items-center">
                            <div className="space-y-4 text-sm md:text-base leading-relaxed text-[--color-muted]">
                                <p className="font-semibold text-[--onblack-color-text]">
                                    We select tools based on your tech stack, team skills, and
                                    infrastructure — not just what&apos;s popular.
                                </p>
                                <p>
                                    Our automation solutions cover script creation, execution,
                                    reporting, and integration into CI/CD pipelines. We focus on
                                    reliable element recognition, low maintenance effort, and
                                    clean APIs for new tests.
                                </p>
                                <p className="font-semibold text-[--onblack-color-text]">
                                    When choosing tools, we look at:
                                </p>
                                <ul className="space-y-2 list-disc list-inside">
                                    <li>How robustly the tool recognizes UI controls.</li>
                                    <li>
                                        Time and effort required to maintain test suites as your UI
                                        evolves.
                                    </li>
                                    <li>
                                        Developer experience when writing and reviewing new tests.
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-center md:justify-end">
                                <img
                                    src="https://crystalogic.net/wp-content/themes/crystal-master/assets/img/tools-for-automation-testing.svg"
                                    alt="Tools for automation testing"
                                    className="w-full max-w-xs object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* TOOL GRID */}
                        <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {[
                                "Selenium",
                                "Cypress",
                                "Playwright",
                                "TestComplete",
                                "Katalon Studio",
                                "Appium",
                                "JUnit / NUnit",
                                "Jest / Vitest",
                            ].map((tool) => (
                                <div
                                    key={tool}
                                    className="flex h-24 items-center justify-center rounded-2xl border border-[--color-muted]/20 bg-[--color-bg-alt]"
                                >
                  <span className="text-sm font-semibold text-[--onblack-color-text]">
                    {tool}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* CTA SECTION */}
            <ActionSection
                title="Ready to automate your testing?"
                btnLabel="Let’s talk"
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
        </div>
    );
}
