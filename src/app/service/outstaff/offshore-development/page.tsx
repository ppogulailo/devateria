import {ActionSection} from "@/components/Action/ActionSection";
import {BgSection} from "@/components/ui/PrimaryBackground";
import {FAQ, FAQItem} from "@/components/FAQ";
import {CardBackground} from "@/components/ui/card/CardBackground";
import {offshoreOdcData} from "@/data/pages/services/offshore-development.data";
import {HeroSection} from "@/components/sections/HeroSection";
import {SectionTitle} from "@/components/ui/SectionTitle";

export default function DedicatedTeamsPage() {
//      const stats = [
//         {
//             value: "70%",
//             text: "of companies outsource their IT functions",
//         },
//         {
//             value: "95%",
//             text: "of clients are satisfied with outsourcing services",
//         },
//         {
//             value: "35%",
//             text: "of organizations transfer not only tasks but also infrastructure management",
//         },
//     ];
//
//     const odcModels = [
//         {
//             number: 1,
//             title: "Traditional ODC",
//             paragraphs: [
//                 `In the traditional offshore development center model, a customer only receives developers and oversees the team using their own project manager.`,
//                 `With this option, you'll maintain direct control over your outsourced staff of loyal and dedicated IT specialists.`,
//                 `This traditional model primarily benefits small projects.`,
//             ],
//         },
//         {
//             number: 2,
//             title: "Protected ODC",
//             paragraphs: [
//                 `The second option is designed specifically for projects that require 100% security and confidentiality. In this model, your company will receive an offshore team led by one of our specialized project managers.`,
//                 `The Protected model suits best:`,
//             ],
//             list: [
//                 "Larger projects",
//                 "PoC or MVP development",
//                 "Startups",
//                 "Projects requiring high-levels of security and confidentiality",
//                 "Enterprise projects",
//             ],
//         },
//     ];
//
//     const items = [
//         {
//             number: "1",
//             title: "Tailored Recruitment Model",
//             text: `We provide recruitment solutions which are perfectly tailored to your unique business needs. With Deveteria, you can easily optimize your in-house teams by reducing the number of full-time workers or by enhancing your existing staff’s capabilities with additional developers.`,
//         },
//         {
//             number: "2",
//             title: "Cost-Efficient",
//             text: `We help businesses discover the best offshore software developers, which provides significant cost savings. So our solution is designed to help you save money on recruitment, training, salary, supervision, and infrastructure!`,
//         },
//         {
//             number: "3",
//             title: "Safe and Transparent",
//             text: `We guarantee a safe and transparent experience for every client. With Deveteria, there are no hidden fees or terms, and you always have access to all information related to your project. Additionally, we always sign Non-Disclosure Agreements, Confidentiality Contracts, and take every step required to protect your intellectual property rights.`,
//         },
//         {
//             number: "4",
//             title: "Quality Control",
//             text: `To ensure only the best professionals join your team, we always thoroughly evaluate candidates’ skills and experience. Only after passing a rigorous review process will an applicant be assigned to your project.`,
//         },
//     ];
//
//     const steps = [
//         {
//             number: "1",
//             title: "Specialists Selection & Final Interview",
//             text: `Our offshore development company takes on the most challenging aspects of
// the recruitment process. We discover, interview, and thoroughly test the best
// candidates for your project. Once our experts have conducted this extensive
// evaluation process, we present the top matches and their results for your team
// to review. From there, you can hold a 1-on-1 interview with each applicant.`
//         },
//         {
//             number: "2",
//             title: "Select the Best Candidates for Your ODC",
//             text: `After reviewing the profiles of candidates who match your requirements
// and conducting final interviews, you then select those which are best for your
// project. This process provides you with talented specialists and total control
// over molding your perfect remote team.`
//         },
//         {
//             number: "3",
//             title: "Launch Your Offshore Development Center",
//             text: `After selecting your talented developers, you can now enjoy the
// benefits of an effective offshore team. We provide your remote staff with
// everything they need, including office space, equipment, HR support, managing
// onboarding, and addressing accounting matters.`
//         }
//     ];
//
//     const faqItems: FAQItem[] = [
//         {
//             question: "Can You Meet the Needs of Large-Scale Projects?",
//             answer:
//                 "Yes. Our dedicated teams are structured to scale quickly and efficiently. Whether your project requires a small group of engineers or a fully staffed development unit, we assemble specialists with the right experience, ensure seamless onboarding, and maintain consistent delivery quality as your project grows."
//         },
//         {
//             question: "What Steps Should I Take to Hire Developers?",
//             answer:
//                 "The hiring process is simple:\n1. Share your goals, requirements, and preferred tech stack.\n2. We shortlist candidates who match your needs.\n3. You interview and select the developers you want.\n4. We handle onboarding and integrate the team into your workflow. You remain fully in control throughout the process."
//         },
//         {
//             question: "How to Hire Remote Software Developers Effectively?",
//             answer:
//                 "Successful remote hiring requires clear communication, defined responsibilities, and reliable processes. We provide vetted specialists with proven remote experience, ensure transparency in every step, and help set up efficient communication and project management so your team delivers smoothly from day one."
//         },
//         {
//             question: "What Specialists Work at Your Service?",
//             answer:
//                 "We provide a wide range of specialists, including frontend and backend engineers, full-stack developers, QA experts, UI/UX designers, DevOps engineers, project managers, business analysts, and mobile developers. Every expert is selected based on your project’s specific requirements."
//         },
//         {
//             question: "Why Should I Hire a Complete Team?",
//             answer:
//                 "A full dedicated team offers better synergy, faster execution, and clearer communication. Instead of coordinating multiple freelancers, you get a structured, aligned, and highly collaborative team that works as a unified extension of your business. This reduces risks, eliminates delays, and accelerates delivery."
//         },
//         {
//             question: "Where Do You Source Team Members From?",
//             answer:
//                 "We recruit software engineers from top European tech hubs known for their strong technical education, English proficiency, and high software development standards. This ensures consistent quality, cultural alignment, and excellent communication across your project."
//         },
//         {
//             question: "Why Should I Choose You to Create a Dedicated Software Development Team?",
//             answer:
//                 "We offer a proven approach: carefully selected senior engineers, transparent pricing, fast team assembly, and flexible scaling. You receive full control over the team, while we handle administration, processes, onboarding, and retention—allowing you to focus entirely on building your product."
//         }
//     ];

    const {
        hero,
        stats,
        odcModels,
        items,
        steps,
        faqItems
    } = offshoreOdcData;
    return (
        <main className="py-12">
            <HeroSection {...hero} />

            <section className="relative w-full h-[420px] flex items-center justify-center text-center overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/icons/pages/offshore-development/offshore-development-bg.png"
                        alt="Offshore development background"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-snug">
                        Offshore development services will <br />
                        help your business succeed!
                    </h1>

                    {/* Divider */}
                    <div className="w-full flex justify-center mb-6">
                        <div className="h-px w-3/4 bg-white/50" />
                    </div>

                    <p className="text-lg md:text-xl leading-relaxed !text-white/90">
                        Recruiting talented engineers to develop incredible software is a costly and
                        time-consuming process. But fortunately there’s a better way! Offshore development
                        is the perfect solution for any business which seeks to optimize performance, save
                        substantial resources, and quickly acquire talented IT specialists.
                    </p>
                </div>

            </section>
            <BgSection>
                    {/* Title */}
                    <SectionTitle>
                        How Offshore Software <br /> Development Will Help You
                    </SectionTitle>

                    {/* Subtitle */}
                    <p className="text-center text-white/70 mb-16">
                        You delegate, we innovate
                    </p>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {items.map((item) => (
                            <CardBackground
                                key={item.number}
                            >
                            <span className="text-4xl font-bold ">
                                {item.number}
                            </span>

                                <h3 className="mt-6 text-xl font-semibold mb-4 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-white/70 leading-relaxed">
                                    {item.text}
                                </p>
                            </CardBackground>
                        ))}
                    </div>
            </BgSection>
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row w-full gap-6 items-stretch">

                        {/* LEFT IMAGE */}
                        <div className="flex-1 rounded-xl overflow-hidden">
                            <img
                                src="/icons/pages/offshore-development/developer_2.jpg"
                                alt="Developer working"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* MIDDLE BLACK PANEL */}
                        <div
                            className="w-full lg:w-1/3 bg-[var(--color-primary)] rounded-l-xl rounded-r-xl lg:rounded-r-none flex items-center justify-center p-10">
                            <div className="relative">
                                {/* Semicircle SVG Stack */}
                                <svg width="104" height="54" viewBox="0 0 104 54" fill="none" className="mb-3">
                                    <path
                                        d="M51.985 1C38.4611 1.00533 25.4929 6.41532 15.932 16.0404C6.37099 25.6654 0.999999 38.7175 1 52.3267H103C103 45.5855 101.68 38.9104 99.1165 32.6825C96.5527 26.4546 92.7947 20.7959 88.0574 16.0297C83.3201 11.2634 77.6962 7.48296 71.5068 4.90414C65.3175 2.32533 58.684 0.998682 51.985 1Z"
                                        stroke="#F6FCFE"
                                        strokeWidth="2"
                                    />
                                </svg>

                                <svg width="104" height="54" viewBox="0 0 104 54" fill="none" className="mb-3">
                                    <path
                                        d="M51.985 1C38.4602 1.00799 25.492 6.42016 15.9314 16.0468C6.37067 25.6734 0.999998 38.7266 1 52.3367H103C103 38.7213 97.6252 25.6636 88.058 16.0361C78.4909 6.40863 65.5151 1 51.985 1Z"
                                        fill="#F6FCFE"
                                        stroke="#2e536f"
                                        strokeWidth="2"
                                    />
                                </svg>

                                <svg width="104" height="54" viewBox="0 0 104 54" fill="none">
                                    <path
                                        d="M51.985 1.66309C38.4602 1.67107 25.492 7.08325 15.9314 16.7099C6.37067 26.3365 0.999998 39.3897 1 52.9998H103C103 39.3844 97.6252 26.3268 88.058 16.6993C78.4909 7.07177 65.5151 1.66309 51.985 1.66309Z"
                                        stroke="#F6FCFE"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                        </div>


                        {/* RIGHT CONTENT */}
                        <div className="flex-1 bg-white rounded-xl p-10 shadow-sm">
                            <SectionTitle align="left" className="mb-6">
                                Why choose us?
                            </SectionTitle>

                            <div className="text-[--color-muted] space-y-5 leading-relaxed">
                                <p>
                                    Deveteria provides the highest quality of offshore programming services.
                                    We have the talent, resources, and expertise to meet the requirements of any project.
                                    Our experts select top engineers to build offshore teams that integrate seamlessly
                                    into your organization.
                                </p>

                                <p>
                                    We began our journey as a startup and grew Deveteria into a strong product company.
                                    This experience helped us master recruiting exceptional engineers who build
                                    reliable, scalable software.
                                </p>

                                <p>
                                    Today, our mission is to share that expertise with you.
                                    Deveteria has successfully launched over 20 offshore projects and delivered
                                    measurable results for clients worldwide.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <BgSection>
                <div className="max-w-7xl mx-auto
">

                    {/* Title */}
                    <SectionTitle className='mb-10'>
                        Here's How it Works
                    </SectionTitle>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {steps.map((step, i) => (
                            <CardBackground
                                key={i}
                            >
                                {/* Number */}
                                <div className="text-3xl font-bold  mb-6">
                                    {step.number}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-4">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/70 leading-relaxed whitespace-pre-line">
                                    {step.text}
                                </p>
                            </CardBackground>
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
                // className="mt-20"
                icon={
                    <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                        <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                        <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                        <circle cx="130" cy="50" r="36" fill="black" />
                    </svg>
                }
            />
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row w-full gap-6 items-stretch">

                        {/* LEFT CONTENT CARD */}
                        <div className="flex-1 bg-white rounded-xl p-12 shadow-sm">
                            <SectionTitle align="left" className="mb-6 !text-4xl">
                                Where Do You Acquire <br /> Your Specialists?
                            </SectionTitle>

                            <p className="text-[--color-muted] text-lg leading-relaxed mb-6">
                                To deliver the best experts for your project, we discover and recruit
                                top-level software engineers from across Europe.
                            </p>

                            <a
                                href="/about-us"
                                className="inline-block font-semibold underline text-[var(--color-primary)] text-lg"
                            >
                                Our Story
                            </a>
                        </div>

                        {/* MIDDLE BLACK PANEL */}
                        <div
                            className="w-full lg:w-1/3 bg-[var(--color-primary)] rounded-l-xl rounded-r-xl lg:rounded-r-none flex items-center justify-center p-10">
                            <div className="relative">
                                {/* Semicircle SVG Stack */}
                                <svg width="104" height="54" viewBox="0 0 104 54" fill="none" className="mb-3">
                                    <path
                                        d="M51.985 1C38.4611 1.00533 25.4929 6.41532 15.932 16.0404C6.37099 25.6654 0.999999 38.7175 1 52.3267H103C103 45.5855 101.68 38.9104 99.1165 32.6825C96.5527 26.4546 92.7947 20.7959 88.0574 16.0297C83.3201 11.2634 77.6962 7.48296 71.5068 4.90414C65.3175 2.32533 58.684 0.998682 51.985 1Z"
                                        stroke="#F6FCFE"
                                        strokeWidth="2"
                                    />
                                </svg>

                                <svg width="104" height="54" viewBox="0 0 104 54" fill="none" className="mb-3">
                                    <path
                                        d="M51.985 1C38.4602 1.00799 25.492 6.42016 15.9314 16.0468C6.37067 25.6734 0.999998 38.7266 1 52.3367H103C103 38.7213 97.6252 25.6636 88.058 16.0361C78.4909 6.40863 65.5151 1 51.985 1Z"
                                        fill="#F6FCFE"
                                        stroke="#2e536f"
                                        strokeWidth="2"
                                    />
                                </svg>

                                <svg width="104" height="54" viewBox="0 0 104 54" fill="none">
                                    <path
                                        d="M51.985 1.66309C38.4602 1.67107 25.492 7.08325 15.9314 16.7099C6.37067 26.3365 0.999998 39.3897 1 52.9998H103C103 39.3844 97.6252 26.3268 88.058 16.6993C78.4909 7.07177 65.5151 1.66309 51.985 1.66309Z"
                                        stroke="#F6FCFE"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                        </div>


                        {/* RIGHT IMAGE */}
                        <div className="flex-1 rounded-xl overflow-hidden">
                            <img
                                src="/icons/pages/offshore-development/developer.jpg"
                                alt="Developer"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <BgSection>
                <div className="max-w-7xl mx-auto px-6">

                    {/* Title */}
                    <SectionTitle>
                        Our ODC Models
                    </SectionTitle>

                    {/* Subtitle */}
                    <p className="text-center text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed">
                        Our offshore software development service offers two different ODC models
                        to suit the needs of any project’s scale or scope:
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        {odcModels.map((model, index) => (
                            <CardBackground
                                key={index}
                            >
      <span className="text-3xl font-bold">
        {model.number}
      </span>

                                <h3 className="text-3xl font-semibold mt-4 mb-4">
                                    {model.title}
                                </h3>

                                {/* paragraphs */}
                                {model.paragraphs.map((text, i) => (
                                    <p
                                        key={i}
                                        className="text-white/70 leading-relaxed mb-4 last:mb-0"
                                    >
                                        {text}
                                    </p>
                                ))}

                                {/* list (optional) */}
                                {model.list && (
                                    <ul className="list-disc ml-6 text-white/70 space-y-1 mt-2">
                                        {model.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </CardBackground>
                        ))}
                    </div>

                </div>
            </BgSection>


            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* LEFT TEXT BLOCK */}
                        <div>
                            <SectionTitle align='left'>
                                Here's Why Our<br />Client's Choose<br />Deveteria
                            </SectionTitle>

                            <p className="text-black/70 text-lg leading-relaxed mb-8">
                                Our company was searching to hire a team of offshore developers who
                                could apply their knowledge and experience to our product and make
                                it flawless. That’s how we found this team and we were definitely
                                not mistaken when chose them. Deveteria performed great at every stage
                                of our project, so we can’t wait to work with them on even more new
                                and exciting products!
                            </p>

                            <p className="text-lg font-semibold">
                                Jeffrey McMichael
                            </p>
                            <p className="text-lg font-semibold text-black/70">
                                Product Manager, Fintech
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center md:justify-end">
                            <img
                                src="/icons/pages/offshore-development/Team%20page-bro.svg"
                                alt="Client testimonial"
                                className="w-full max-w-[620px] rounded-2xl object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>
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
                    {/* TOP SECTION */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* TEXT BLOCK */}
                        <div>
                            <SectionTitle align='center'>
                                Why Are IT<br />Outsourcing<br />Services So Popular?
                            </SectionTitle>

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
                                src="/icons/pages/offshore-development/Team-amico.svg"
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
                                    <p className="text-5xl font-bold  mb-3">
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
            <FAQ items={faqItems} />
        </main>
    );
}