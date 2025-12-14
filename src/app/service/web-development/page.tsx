import { ActionSection } from "@/components/Action/ActionSection";
import { FAQ } from "@/components/FAQ";
import { Card } from "@/components/ui/card/Card";
import { BgSection } from "@/components/ui/PrimaryBackground";
import { CardBackground } from "@/components/ui/card/CardBackground";
import { webDevelopmentPageData } from "@/data/pages/services/web-development.data";
// import { WebDevelopmentTechnologies } from "@/components/sections/WebDevelopmentTechnologies";
import {HeroSection} from "@/components/sections/HeroSection";
import {TechnologiesGrid} from "@/components/ui/TechnologiesGrid";

export default function DedicatedTeamsPage() {
    const { steps, faqItems, serviceItems, benefitItems, hero, whyChooseUs } = webDevelopmentPageData;

    const width = 45;

    const sections = [
        {
            title: "PHP Frameworks",
            items: [
                { src: "/icons/technologies/web_development/backend/Symfony.png", width },
                { src: "/icons/technologies/web_development/backend/Laravel.png", width },
            ],
        },
        {
            title: "Frontend",
            items: [
                { src: "/icons/technologies/web_development/cms/WordPress.svg", width },
                { src: "/icons/technologies/web_development/cms/Drupal.svg", width },
                { src: "/icons/technologies/web_development/cms/Webflow.svg", width },
                { src: "/icons/technologies/web_development/cms/WooCommerce.svg", width },
            ],
        },
        {
            title: "JavaScript Frameworks",
            items: [
                { src: "/icons/technologies/web_development/frontend/React.svg", width },
                { src: "/icons/technologies/web_development/frontend/angular.svg", width },
                { src: "/icons/technologies/web_development/frontend/Vue.js.svg", width },
            ],
        },
        {
            title: "HTML5, CSS3",
            items: [
                { src: "/icons/technologies/web_development/frontend/CSS3.svg", width: 50 },
                { src: "/icons/technologies/web_development/frontend/HTML5.svg", width: 50 },
            ],
        },
        {
            title: "Databases",
            items: [
                { src: "/icons/technologies/web_development/databases/PostgresSQL.svg", width },
                { src: "/icons/technologies/web_development/databases/MySQL.svg", width },
                { src: "/icons/technologies/web_development/databases/SQLite.svg", width },
                { src: "/icons/technologies/web_development/databases/MongoDB.svg", width },
            ],
        },
        {
            title: "Caching systems",
            items: [{ src: "/icons/technologies/web_development/caching/Redis.svg", width }],
        },
    ];

    return (
        <main className="py-12">
            {/* HERO */}
            <HeroSection {...hero} />

            {/* SERVICES */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-6">
                        Deveteria Web <br /> Development Services
                    </h2>

                    <p className="text-center text-[--color-muted] max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
                        Our team is able to deliver top-notch web development services that meet all your needs
                        thanks to our efficient cooperation process and extensive experience in the tech field.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceItems.map((item, i) => (
                            <Card key={i}>
                                <img src={item.icon} className="h-14 mb-4"></img>
                                <h3 className="font-bold text-xl mb-2 text-[--color-primary]">{item.title}</h3>
                                <p className="text-black/70 whitespace-pre-line">{item.text}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <BgSection>
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-14">
                        Benefits of Web <br /> Development Services
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefitItems.map((item, i) => (
                            <CardBackground key={i}>
                                <img src={item.icon} className="h-14 mb-4"></img>
                                <p className="text-black/70 leading-relaxed whitespace-pre-line">
                                    <strong className="text-black">{item.strong}</strong> {item.text}
                                </p>
                            </CardBackground>
                        ))}
                    </div>
                </div>
            </BgSection>

            {/* CTA */}
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

            {/* TECHNOLOGIES */}
            <section className="py-24 ">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TITLE */}
                    <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-6">
                        Web Development Technology Expertise
                    </h2>

                    <p className="text-center max-w-3xl mx-auto text-black/70 mb-16">
                        Let us help take your business to the next level by conducting web development
                        services with the right tech stacks for your unique requirements. You can rely
                        on our technology expertise to ensure the most professional development practices.
                    </p>

                    <TechnologiesGrid sections={sections} cols={{ md: 2, lg: 3 }} />
                </div>
            </section>

            {/* PROCESS */}
            <BgSection>
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16">
                        Our Web Development Process
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <CardBackground key={i}>
                                <div className="text-4xl font-extrabold mb-4 ">{step.number}</div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-white/70 leading-relaxed">{step.text}</p>
                            </CardBackground>
                        ))}
                    </div>
                </div>
            </BgSection>

            {/* WHY CHOOSE DEVETERIA */}
            <section className="py-24 bg-[--color-bg]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-8">
                            Why Choose Deveteria?
                        </h2>

                        <ul className="space-y-4 text-black/70 leading-relaxed">
                            <li>
                                We provide <strong>the best possible solution</strong> for each project while staying within budget and
                                corporate guidelines.
                            </li>
                            <li>
                                We ensure <strong>complete transparency</strong> by giving clients full access to project progress and
                                information.
                            </li>
                            <li>
                                Our team brings <strong>necessary tech expertise</strong> and niche knowledge to deliver exceptional
                                results.
                            </li>
                            <li>
                                If unexpected challenges arise, we respond quickly using <strong>a reliable communication system</strong>.
                            </li>
                            <li>
                                We prioritize confidentiality and guarantee <strong>complete privacy</strong> for all client data.
                            </li>
                            <li>
                                Our <strong>quality assurance</strong> workflow ensures the final product meets all requirements and
                                standards.
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-center">
                        <img src={whyChooseUs.img} alt="Programmer" />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQ title="Web Development FAQ" items={faqItems} />
        </main>
    );
}
