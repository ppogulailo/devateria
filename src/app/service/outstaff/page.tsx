import {Button} from "@/components/ui/Button";
import {Card} from "@/components/ui/card/Card";
import {PageSection} from "@/components/ui/PageSection";
import {BgSection} from "@/components/ui/PrimaryBackground";
import {ActionSection} from "@/components/Action/ActionSection";
import Link from "next/link";
import {FAQ, FAQItem} from "@/components/FAQ";

export default function DedicatedTeamsPage() {
    const benefits = [
        {
            title: "Additional expertise:",
            text: "If your company needs more expertise or resources to handle specific projects, outsourcing gives access to specialists who can manage complex tasks and deliver high-quality results.",
        },
        {
            title: "Cost savings:",
            text: "Outsourcing significantly reduces operational costs by eliminating the need for additional full-time hires and investments in new technology or infrastructure.",
        },
        {
            title: "Focus on important tasks:",
            text: "Outsource routine IT tasks so your team can focus on key business priorities such as sales, marketing, and customer service.",
        },
        {
            title: "Flexible Scalability:",
            text: "Scale your IT resources up or down depending on business needs without long-term commitments.",
        },
        {
            title: "Access to the latest technology:",
            text: "Get access to cutting-edge tools and technologies without the high costs of acquiring and maintaining them internally.",
        },
        {
            title: "Better risk management:",
            text: "Outsourcing partners are experienced in handling IT risks and security threats, helping reduce vulnerability and exposure.",
        },
        {
            title: "Faster time-to-market:",
            text: "Additional development capacity allows you to deliver products faster and gain a competitive advantage.",
        },
        {
            title: "Global talent pool:",
            text: "Access specialists worldwide — ideal for companies looking to expand into new markets or needing rare expertise.",
        },
    ];
    const items = [
        {
            title: "Experienced Developers:",
            text: "We have a team of professional developers specializing in various technologies and industries. They bring their knowledge and expertise to every project, ensuring your specific needs are met.",
        },
        {
            title: "Customized Solutions:",
            text: "We provide tailored solutions aligned with your business objectives. Our team collaborates with you to understand requirements and deliver solutions that match your expectations.",
        },
        {
            title: "Quality Assurance:",
            text: "We prioritize QA and testing to ensure your solutions meet industry standards. Our engineers use modern tools and methodologies to deliver reliable, scalable, secure software.",
        },
        {
            title: "Competitive Pricing:",
            text: "We offer cost-effective pricing with transparent engagement models that help you reduce expenses while maintaining high-quality project delivery.",
        },
        {
            title: "Communication and Collaboration:",
            text: "We value seamless communication, keeping you informed and involved throughout development. This ensures your project stays on track and aligned with your objectives.",
        },
        {
            title: "On-Time Delivery:",
            text: "We deliver on time and within budget. Our management and development processes ensure predictable schedules and successful outcomes.",
        },
    ];


    type TechItem = {
        title: string;
        items: {
            static: string;
            hover: string;
            alt: string;
        }[];
    };

    const techStacks: TechItem[] = [
        {
            title: "Backend",
            items: [
                { static: "/tech/python.svg", hover: "/tech/python-hover.svg", alt: "Python" },
                { static: "/tech/java.svg", hover: "/tech/java-hover.svg", alt: "Java" },
                { static: "/tech/php.svg", hover: "/tech/php-hover.svg", alt: "PHP" },
                { static: "/tech/node.svg", hover: "/tech/node-hover.svg", alt: "Node.js" },
                { static: "/tech/go.svg", hover: "/tech/go-hover.svg", alt: "Golang" },
            ],
        },
        {
            title: "Frontend",
            items: [
                { static: "/tech/html.svg", hover: "/tech/html-hover.svg", alt: "HTML5" },
                { static: "/tech/css.svg", hover: "/tech/css-hover.svg", alt: "CSS3" },
                { static: "/tech/react.svg", hover: "/tech/react-hover.svg", alt: "React" },
                { static: "/tech/vue.svg", hover: "/tech/vue-hover.svg", alt: "Vue.js" },
                { static: "/tech/angular.svg", hover: "/tech/angular-hover.svg", alt: "Angular" },
                { static: "/tech/js.svg", hover: "/tech/js-hover.svg", alt: "JavaScript" },
            ],
        },
        // Add other blocks: Mobile, Data, DevOps, Infrastructure, etc.
    ];

    const services = [
        { title: "Web Development", href: "/service/web-development" },
        { title: "Custom Software Development", href: "/service/custom-software-development" },
        { title: "Custom Mobile Development", href: "/service/custom-mobile-app-development" },
        { title: "IT Project Management", href: "/service/it-project-management" },
        { title: "IT Consulting Services", href: "/service/it-consulting" },
        { title: "Custom CRM Development", href: "/service/custom-crm-development" }
    ];

    const faqItems: FAQItem[] = [
        {
            question: "What is IT outsourcing?",
            answer:
                "IT outsourcing is the practice of delegating IT-related tasks—such as development, support, maintenance, DevOps, or QA—to an external specialized team. This allows companies to reduce costs, access global expertise, and scale faster."
        },
        {
            question: "How can outsourcing benefit my business?",
            answer:
                "Outsourcing helps companies reduce operational costs, speed up delivery, access senior-level talent, eliminate hiring overhead, and focus on core business activities. You get a stable and skilled team without additional recruitment or infrastructure expenses."
        },
        {
            question: "Which services can be outsourced?",
            answer:
                "Most IT functions can be outsourced, including software development, mobile app development, UI/UX design, QA testing, DevOps, infrastructure management, cloud migrations, cybersecurity, and ongoing product maintenance."
        },
        {
            question: "How do you ensure quality and reliability?",
            answer:
                "We use structured development processes, regular reporting, CI/CD pipelines, automated testing, code reviews, and modern project management tools. You receive full visibility into progress, performance metrics, and timelines."
        },
        {
            question: "Can I scale the team up or down?",
            answer:
                "Yes. One of the core benefits of outsourcing is flexibility. You can easily adjust team size depending on project requirements, deadlines, or budget. We help you scale quickly without long hiring cycles."
        },
        {
            question: "Is outsourcing secure?",
            answer:
                "Absolutely. We follow strict security standards, NDAs, encrypted communication, access controls, and GDPR-compliant data handling. Your information, codebase, and intellectual property are fully protected."
        },
        {
            question: "What is the typical onboarding process?",
            answer:
                "The process includes a discovery call, requirement analysis, team selection, project setup, onboarding sessions, and milestone planning. Once aligned, the team starts development within a few days."
        },
        {
            question: "Do I keep control over the project?",
            answer:
                "Yes. You maintain full ownership and control. We provide daily/weekly syncs, dashboards, transparent communication channels, and direct access to the entire team working on your project."
        },
        {
            question: "How do you handle time zone differences?",
            answer:
                "Our teams work with clients across the globe. We offer flexible overlap hours, dedicated communication windows, and use collaboration tools like Slack, Jira, and Zoom to ensure smooth coordination."
        },
        {
            question: "What is the cost structure of outsourcing?",
            answer:
                "You pay only for the services or dedicated team you need—no recruitment fees, HR overhead, software licensing costs, or infrastructure investments. Pricing depends on team size, experience level, and engagement model."
        }
    ];

    return (
        <main className="py-12 [&_p]:text-black/70">
            <section className="w-full  py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    {/* ============ LEFT CONTENT ============ */}
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--color-primary)] leading-tight">
                            IT Outsourcing <br /> Services
                        </h1>

                        <p className="text-lg text-black/70 max-w-xl leading-relaxed">
                            Take advantage of the opportunity to acquire a team with the right
                            skills and experience to expand your development capabilities with
                            IT outsourcing services.
                        </p>

                        <Button className="bg-[var(--color-primary)] text-white px-10 py-4 text-lg rounded-xl hover:bg-[var(--color-secondary)] transition">
                            Let’s Cooperate
                        </Button>
                    </div>

                    {/* ============ RIGHT IMAGE ============ */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="https://develux.com/wp-content/uploads/2023/05/Outstaff.png"
                            alt="Outsourcing Team"
                            className="w-full max-w-xl object-contain"
                        />
                    </div>
                </div>
            </section>
            <PageSection className="py-20">

                {/* TITLE */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-[var(--color-primary)]">
                    Our Cooperation Models
                </h2>

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

                    {/* Staff Augmentation */}
                    <Card>
                        <div className="flex items-start gap-4">
                            <img
                                src="/icons/general/team.svg"
                                alt="Staff Augmentation"
                                className="w-8 h-8 opacity-70"
                            />
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-[var(--color-header-text)]">
                                    Staff Augmentation
                                </h3>
                                <p className="text-sm text-[--color-muted] leading-relaxed">
                                    Unleash the power of your business with our staff/team
                                    augmentation services. Whether you need to fill a skills gap or
                                    add highly skilled professionals to your existing team, we’ve got
                                    you covered.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Dedicated Team */}
                    <Card>
                        <div className="flex items-start gap-4">
                            <img
                                src="/icons/general/team.svg"
                                alt="Dedicated Team"
                                className="w-8 h-8 opacity-70"
                            />
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">
                                    Dedicated Team
                                </h3>
                                <p className="text-sm text-[--color-muted] leading-relaxed">
                                    A flexible collaboration model empowering you to reach your goals
                                    through a dedicated team. Stay fully in control of the development
                                    process and adjust the team size based on your needs.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Remote Development Team */}
                    <Card>
                        <div className="flex items-start gap-4">
                            <img
                                src="/icons/general/team.svg"
                                alt="Remote Development Team"
                                className="w-8 h-8 opacity-70"
                            />
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-[var(--color-header-text)]">
                                    Remote Development Team
                                </h3>
                                <p className="text-sm text-[--color-muted] leading-relaxed">
                                    Access a global pool of highly skilled developers ready to take on
                                    projects of any complexity. Scale your team quickly using global
                                    expertise.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* IT Recruiting — full width on new row */}
                    <Card className="md:col-span-3">
                        <div className="flex items-start gap-4">
                            <img
                                src="/icons/general/team.svg"
                                alt="IT Recruiting"
                                className="w-8 h-8 opacity-70"
                            />
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">
                                    IT Recruiting
                                </h3>
                                <p className="text-sm text-[--color-muted] leading-relaxed">
                                    Maximize your business potential with our IT recruitment
                                    services. We help you find the right talent fast — saving you time
                                    and resources while ensuring high-quality hiring results.
                                </p>
                            </div>
                        </div>
                    </Card>

                </div>
            </PageSection>
            <PageSection className="py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* TEXT BLOCK */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[var(--color-header-text)]">
                            What Is IT <br /> Outsourcing Services
                        </h2>

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
                        <span className="text-[var(--color-primary)]">– Deveteria</span>
                    </p>
                </div>
            </section>
            <BgSection>
                <div className="max-w-6xl mx-auto px-4 text-center">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Benefits of IT Outsourcing Services
                    </h2>

                    <p className="text-white/70 mb-16 max-w-3xl mx-auto">
                        Our team carefully selects individual solutions for each client to help
                        companies develop in modern market realities.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {benefits.map((benefit, index) => (
                            <Card
                            >
                                <div className="text-4xl font-extrabold text-[var(--color-primary)] mb-4">
                                    {index + 1}
                                </div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {benefit.title}
                                </h3>

                                <p className=" text-sm leading-relaxed">
                                    {benefit.text}
                                </p>
                            </Card>
                        ))}
                    </div>

                </div>
            </BgSection>
            <PageSection className="mt-20">
                <div className="max-w-6xl mx-auto px-4 text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[var(--color-primary)]">
                        Why Choose Deveteria
                    </h2>

                    <p className="text-[--color-muted] max-w-3xl mx-auto">
                        Our team offers businesses a range of advantages when it comes to outsourcing development services.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.map((item, idx) => (
                        <Card key={idx} className="p-8 relative">

                            {/* Icon placeholder */}
                            <div className="mb-4">
                                <img
                                    src="/icons/default/service-icon.svg"
                                    className="w-10 h-10 opacity-80"
                                    alt="Service Icon"
                                />
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
                    <h2 className="text-center text-5xl font-bold mb-4">
                        Our Tech Stacks
                    </h2>

                    <p className="text-center text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed">
                        We use modern, flexible technologies to ensure excellent performance,
                        reliability, and scalability for every client project.
                    </p>

                    {/* GRID */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techStacks.map((category) => (
                            <Card
                                key={category.title}
                            >
                                <h3 className="text-lg font-semibold mb-6">
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-6">
                                    {category.items.map((icon) => (
                                        <div
                                            key={icon.alt}
                                        >
                                            {/* DEFAULT ICON */}
                                            <img
                                                src={icon.static}
                                                alt={icon.alt}
                                                // fill
                                                className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                                            />

                                            {/* HOVER ICON */}
                                            <img
                                                src={icon.hover}
                                                alt={icon.alt}
                                                // fill
                                                className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </BgSection>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        Related Services
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card>
                                <h3 className="text-xl font-semibold mb-8">{service.title}</h3>

                                <Link href={service.href} className="flex items-center gap-2 text-black font-semibold">
                                    Read more
                                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0.43934 0.43934C1.02513 -0.146447 1.97487 -0.146447 2.56066 0.43934L11.1213 9L2.56066 17.5607C1.97487 18.1464 1.02513 18.1464 0.43934 17.5607C-0.146447 16.9749 -0.146447 16.0251 0.43934 15.4393L6.87868 9L0.43934 2.56066C-0.146447 1.97487 -0.146447 1.02513 0.43934 0.43934Z"
                                            fill="#6A4DFF"
                                        />
                                    </svg>
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
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                Why Are IT<br />Outsourcing<br />Services So Popular?
                            </h2>

                            <p className="text-white/70 leading-relaxed">
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

                            {/* CARD 1 */}
                            <div>
                                <p className="text-5xl font-bold text-[#A694FF] mb-3">
                                    70%
                                </p>
                                <p className="text-white/70 leading-relaxed">
                                    of companies outsource their IT functions
                                </p>
                            </div>

                            {/* CARD 2 */}
                            <div>
                                <p className="text-5xl font-bold text-[#A694FF] mb-3">
                                    95%
                                </p>
                                <p className="text-white/70 leading-relaxed">
                                    of clients are satisfied with outsourcing services
                                </p>
                            </div>

                            {/* CARD 3 */}
                            <div>
                                <p className="text-5xl font-bold text-[#A694FF] mb-3">
                                    35%
                                </p>
                                <p className="text-white/70 leading-relaxed">
                                    of organizations transfer not only tasks but also infrastructure management
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </BgSection>
            <FAQ title="Frequently Asked Questions" items={faqItems} />

        </main>
    );
}

