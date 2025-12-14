import {Button} from "@/components/ui/Button";
import {Card} from "@/components/ui/card/Card";
import {PageSection} from "@/components/ui/PageSection";
import {BgSection} from "@/components/ui/PrimaryBackground";
import {ActionSection} from "@/components/Action/ActionSection";
import Link from "next/link";
import {FAQ, FAQItem} from "@/components/FAQ";
import {CardBackground} from "@/components/ui/card/CardBackground";
import {ChevronRightIcon} from "@radix-ui/react-icons";
import {outstaffData} from "@/data/pages/services/outstaff.data";
import {HeroSection} from "@/components/sections/HeroSection";
import {SectionTitle} from "@/components/ui/SectionTitle";
import {TechnologiesGrid} from "@/components/ui/TechnologiesGrid";

export default function DedicatedTeamsPage() {
    const {
        benefits,
        whyChoose,
        techStacks,
        services,
        faqItems,
        cooperationModels,
        stats,
        hero
    } = outstaffData;

    const sections = [
        {
            title: "Mobile",
            items: [
                { src: "/icons/technologies/software_development/mobile/Android%20Studio.svg" },
                { src: "/icons/technologies/software_development/mobile/Objective-C.svg" },
                { src: "/icons/technologies/software_development/mobile/Swift.svg" },
                { src: "/icons/technologies/software_development/mobile/Kotlin.svg" },
                { src: "/icons/technologies/software_development/mobile/Apple.svg" },
                { src: "/icons/technologies/software_development/mobile/Android.svg" },
                { src: "/icons/technologies/software_development/mobile/Ionic.svg" }
            ]
        },
        {
            title: "Data",
            items: [
                { src: "/icons/technologies/web_development/databases/PostgresSQL.svg" },
                { src: "/icons/technologies/web_development/databases/MySQL.svg" },
                { src: "/icons/technologies/web_development/databases/SQLite.svg" },
                { src: "/icons/technologies/web_development/databases/MongoDB.svg" },
                { src: "/icons/technologies/software_development/Data/Apache%20Kafka.svg" },
                { src: "/icons/technologies/software_development/Data/aws-dynamodb-svgrepo-com.svg" },
                { src: "/icons/technologies/software_development/Data/Azure%20SQL%20Database.svg" },
                { src: "/icons/technologies/software_development/Data/Elastic%20Search.svg" },
                { src: "/icons/technologies/software_development/Data/Firebase.svg" }
            ]
        },
        {
            title: "DevOps",
            items: [
                { src: "/icons/technologies/software_development/DevOps/png-clipart-continuous-integration-devops-continuous-delivery-software-testing-ci-cd-le-bio-au-risque-de-se-perdre-text-logo.png" },
                { src: "/icons/technologies/software_development/DevOps/HashiCorp%20Terraform.svg" },
                { src: "/icons/technologies/software_development/DevOps/Kubernetes.svg" },
                { src: "/icons/technologies/software_development/DevOps/Docker.svg" }
            ]
        },
        {
            title: "Infrastructure",
            items: [
                { src: "/icons/technologies/software_development/Infrastructure/Digital%20Ocean.svg" },
                { src: "/icons/technologies/software_development/Infrastructure/Azure.svg" },
                { src: "/icons/technologies/software_development/Infrastructure/Google%20Cloud.svg" },
                { src: "/icons/technologies/software_development/Infrastructure/AWS.svg" }
            ]
        },
        {
            title: "Fullstack Development",
            items: [{ src: "/icons/technologies/software_development/full-stack/MERN.svg", width: 150 }]
        }
    ];
    return (
        <main className="py-12 [&_p]:text-black/70">
            <HeroSection {...hero} />
            <PageSection className="py-20">

                {/* TITLE */}
                <SectionTitle>
                    Our Cooperation Models
                </SectionTitle>

                {/* SUBTITLE */}
                <p className="text-center text-black/70 max-w-3xl mx-auto mb-16 leading-relaxed">
                    Partnering with a reliable outsourcing provider can help businesses
                    achieve their goals and focus on their core competencies. Outsourcing IT
                    services allows you to delegate tasks to external specialists, expanding
                    your capabilities. This helps reduce costs, improve efficiency, and gain
                    access to expert knowledge.
                </p>

                {/* CARDS GRID */}
                <div className="grid md:grid-cols-3 gap-10">
                    {cooperationModels.map((item, index) => (
                        <Card key={index} className={item.fullWidth ? "md:col-span-3" : ""}>
                            <div className="flex items-start gap-4">
                                <img src={item.icon} className="h-14 mb-4"></img>
                                <div>
                                    <h3 className={`text-xl font-semibold mb-4 ${item.color}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[--color-muted] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </PageSection>
            <PageSection className="py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* TEXT BLOCK */}
                    <div>
                        <SectionTitle align='left'>
                            What Is IT <br /> Outsourcing Services
                        </SectionTitle>

                        <p className="text-lg leading-relaxed text-black/70">
                            Outsourcing development services involve entrusting software development
                            tasks to external providers, including a large pool of development
                            tasks, industries, and technologies. This allows companies to tap into
                            a wider range of skills, expertise, and resources than they may have
                            in-house.
                            <br /><br />
                            IT outsourcing services enable companies to enhance their development
                            capabilities, expedite project completion, and reduce costs associated
                            with hiring and training new staff. Partnering with a reliable
                            outsourcing provider can help businesses achieve their development
                            goals flexibly and efficiently.
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div>
                        <img
                            src="https://develux.com/wp-content/uploads/2023/05/programmer-working-with-program-code-2021-12-09-03-16-11-utc-1-1024x683.jpg"
                            alt="IT Outsourcing"
                            className="rounded-3xl w-full object-cover shadow-xl"
                        />
                    </div>

                </div>
            </PageSection>
            <section className="relative py-24">
                {/* BG IMAGE */}
                <div className="absolute inset-0">
                    <img
                        src="https://develux.com/wp-content/uploads/2023/05/1-27-1536x1024.jpeg"
                        className="w-full h-full object-cover opacity-40"
                        alt="Outsourcing background"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative max-w-4xl mx-auto text-center px-6">
                    <p className="text-white text-xl leading-relaxed">
                        "Outsourcing IT Services is not a simple execution of tasks but a deep
                        understanding of each client's specific requirements and an individual
                        approach to achieving stable results. This is not just about delegating
                        responsibilities; it's about working with clients to design and tailor
                        our services to unique needs."{" "}
                        <span>– Deveteria</span>
                    </p>
                </div>
            </section>
            <BgSection>
                <div className="max-w-6xl mx-auto px-4 text-center">

                    <SectionTitle>
                        Benefits of IT Outsourcing Services
                    </SectionTitle>

                    <p className="text-white/70 mb-16 max-w-3xl mx-auto">
                        Our team carefully selects individual solutions for each client to help
                        companies develop in modern market realities.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {benefits.map((benefit, index) => (
                            <CardBackground key={index}
                            >
                                <div className="text-4xl font-extrabold mb-4">
                                    {index + 1}
                                </div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {benefit.title}
                                </h3>

                                <p className=" text-sm leading-relaxed">
                                    {benefit.text}
                                </p>
                            </CardBackground>
                        ))}
                    </div>

                </div>
            </BgSection>
            <PageSection className="mt-20">
                <div className="max-w-6xl mx-auto px-4 text-center mb-16">
                    <SectionTitle>
                        Why Choose Deveteria
                    </SectionTitle>

                    <p className="text-[--color-muted] max-w-3xl mx-auto">
                        Our team offers businesses a range of advantages when it comes to outsourcing development services.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {whyChoose.map((item, idx) => (
                        <Card key={idx} className="p-8 relative">

                            {/* Icon placeholder */}
                            <div className="mb-4">
                                <img src={item.icon} className="h-14 mb-4"></img>
                            </div>

                            <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">
                                {item.title}
                            </h3>

                            <p className="text-sm text-[--color-muted] leading-relaxed">
                                {item.text}
                            </p>
                        </Card>
                    ))}
                </div>
            </PageSection>

            <ActionSection
                title="Ready to develop a project?"
                btnLabel="Let’s Start"
                btnHref="/contact-us"
                bgColor="bg-[--color-primary]"
                textColor="text-white"
                className="mt-20"
                icon={
                    <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                        <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                        <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                        <circle cx="130" cy="50" r="36" fill="black" />
                    </svg>
                }
            />
            <BgSection>
                <div className="max-w-7xl mx-auto px-4">
                    {/* TITLE */}
                    <SectionTitle>
                        Our Tech Stacks
                    </SectionTitle>

                    <p className="text-center text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed">
                        We use modern, flexible technologies to ensure excellent performance,
                        reliability, and scalability for every client project.
                    </p>

                    <TechnologiesGrid sections={sections} cols={{ md: 2, lg: 2 }} />
                    {/* GRID */}
                    {/*<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
                    {/*    {techStacks.map((category) => (*/}
                    {/*        <Card*/}
                    {/*            key={category.title}*/}
                    {/*        >*/}
                    {/*            <h3 className="text-lg font-semibold mb-6">*/}
                    {/*                {category.title}*/}
                    {/*            </h3>*/}

                    {/*            <div className="flex flex-wrap gap-6">*/}
                    {/*                {category.items.map((icon) => (*/}
                    {/*                    <div*/}
                    {/*                        key={icon.alt}*/}
                    {/*                    >*/}
                    {/*                        /!* DEFAULT ICON *!/*/}
                    {/*                        <img*/}
                    {/*                            src={icon.static}*/}
                    {/*                            alt={icon.alt}*/}
                    {/*                            // fill*/}
                    {/*                            className="object-contain transition-opacity duration-300 group-hover:opacity-0"*/}
                    {/*                        />*/}

                    {/*                        /!* HOVER ICON *!/*/}
                    {/*                        <img*/}
                    {/*                            src={icon.hover}*/}
                    {/*                            alt={icon.alt}*/}
                    {/*                            // fill*/}
                    {/*                            className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"*/}
                    {/*                        />*/}
                    {/*                    </div>*/}
                    {/*                ))}*/}
                    {/*            </div>*/}
                    {/*        </Card>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>
            </BgSection>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Title */}
                    <SectionTitle>
                        Related Services
                    </SectionTitle>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card key={service.title}>
                                <h3 className="text-xl font-semibold mb-8">{service.title}</h3>

                                <Link href={service.href} className="flex items-center gap-2 text-black font-semibold">
                                    Read more
                                    <ChevronRightIcon />
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <BgSection>
                <div className="max-w-7xl mx-auto px-4">
                    {/* TOP SECTION */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* TEXT BLOCK */}
                        <div>
                            <SectionTitle align='left'>
                                Why Are IT<br />Outsourcing<br />Services So Popular?
                            </SectionTitle>

                            <p className="leading-relaxed">
                                IT outsourcing services have become increasingly popular in recent
                                years due to their many benefits for companies of all sizes and
                                industries. By outsourcing IT services, businesses can save
                                significantly on infrastructure, hiring and training IT staff,
                                ongoing maintenance, and support. IT outsourcing providers have a
                                team of experienced and skilled professionals with expertise in
                                various IT industries, enabling businesses to access the latest
                                technologies, tools, and methodologies.
                            </p>
                        </div>

                        {/* IMAGE */}
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <img
                                src="https://develux.com/wp-content/uploads/2023/05/1-42-768x512.jpeg"
                                alt="IT Outsourcing"
                                width={768}
                                height={512}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* STATS SECTION */}
                    <div className="mt-20 pt-12 border-t border-white/10">
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            {stats.map((item, index) => (
                                <div key={index}>
                                    <p className="text-5xl font-bold text-[#A694FF] mb-3">
                                        {item.value}
                                    </p>
                                    <p className="text-white/70 leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </BgSection>
            <FAQ title="Frequently Asked Questions" items={faqItems} />

        </main>
    );
}

