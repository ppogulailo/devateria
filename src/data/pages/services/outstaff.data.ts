// dedicated-teams.data.ts (recommended place)

import { FAQItem } from "@/components/FAQ";

export const outstaffData = {
    hero:  {
        title: "IT Outsourcing Services",
        subtitle:
            "Take advantage of the opportunity to acquire a team with the right skills and experience to expand your development capabilities with IT outsourcing services.",
        ctaLabel: "Let’s Cooperate",
        ctaHref: "#id_footer_form",
        image: "/icons/pages/outstaff/Team work-bro.svg",
        imageAlt: "Outsourcing Team",
    },
    benefits: [
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
    ],

    // whyChoose: [
    //     {
    //         title: "Experienced Developers:",
    //         icon:'/icons/our_values/shield-ribbon-svgrepo-com.svg',
    //         text: "We have a team of professional developers specializing in various technologies and industries. They bring their knowledge and expertise to every project, ensuring your specific needs are met.",
    //     },
    //     {
    //         title: "Customized Solutions:",
    //         text: "We provide tailored solutions aligned with your business objectives. Our team collaborates with you to understand requirements and deliver solutions that match your expectations.",
    //     },
    //     {
    //         title: "Quality Assurance:",
    //         text: "We prioritize QA and testing to ensure your solutions meet industry standards. Our engineers use modern tools and methodologies to deliver reliable, scalable, secure software.",
    //     },
    //     {
    //         title: "Competitive Pricing:",
    //         // title: "Global talent pool:",
    //         text: "Access specialists worldwide — ideal for companies looking to expand into new markets or needing rare expertise.",
    //     },
    // ],

    whyChoose: [
        {
            title: "Experienced Developers:",
            icon:'/icons/our_values/shield-ribbon-svgrepo-com.svg',
            text: "We have a team of professional developers specializing in various technologies and industries. They bring their knowledge and expertise to every project, ensuring your specific needs are met.",
        },
        {
            title: "Customized Solutions:",
            icon:'/icons/pages/outstaff/whyChoose/gear-svgrepo-com (3).svg',
            text: "We provide tailored solutions aligned with your business objectives. Our team collaborates with you to understand requirements and deliver solutions that match your expectations.",
        },
        {
            title: "Quality Assurance:",
            icon:'/icons/our_values/shield-ribbon-svgrepo-com.svg',
            text: "We prioritize QA and testing to ensure your solutions meet industry standards. Our engineers use modern tools and methodologies to deliver reliable, scalable, secure software.",
        },
        {
            title: "Competitive Pricing:",
            icon:'/icons/pages/outstaff/whyChoose/price-tag-3-svgrepo-com.svg',
            text: "We offer cost-effective pricing with transparent engagement models that help you reduce expenses while maintaining high-quality project delivery.",
        },
        {
            title: "Communication and Collaboration:",
            icon:'/icons/pages/outstaff/whyChoose/communication-world-svgrepo-com.svg',
            text: "We value seamless communication, keeping you informed and involved throughout development. This ensures your project stays on track and aligned with your objectives.",
        },
        {
            title: "On-Time Delivery:",
            icon:'/icons/pages/outstaff/whyChoose/clock-svgrepo-com.svg',
            text: "We deliver on time and within budget. Our management and development processes ensure predictable schedules and successful outcomes.",
        },
    ],

    stats: [
        { value: "70%", text: "of companies outsource their IT functions" },
        { value: "95%", text: "of clients are satisfied with outsourcing services" },
        { value: "35%", text: "of organizations transfer not only tasks but also infrastructure management" },
    ],

    techStacks: [
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
    ],

    services: [
        { title: "Web Development", href: "/service/web-development" },
        { title: "Custom Software Development", href: "/service/custom-software-development" },
        { title: "Custom Mobile Development", href: "/service/custom-mobile-app-development" },
        { title: "IT Project Management", href: "/service/it-project-management" },
        { title: "IT Consulting Services", href: "/service/it-consulting" },
        { title: "Custom CRM Development", href: "/service/custom-crm-development" },
    ],

    faqItems: [
        {
            question: "What is IT outsourcing?",
            answer: "IT outsourcing is the practice of delegating IT-related tasks—such as development, support, maintenance, DevOps, or QA—to an external specialized team.",
        },
        {
            question: "How can outsourcing benefit my business?",
            answer: "Outsourcing helps companies reduce operational costs, speed up delivery, access senior-level talent, and focus on core business activities.",
        },
        {
            question: "Which services can be outsourced?",
            answer: "Software development, QA, DevOps, cybersecurity, mobile apps, UI/UX design, cloud infrastructure, maintenance, and more.",
        },
        {
            question: "How do you ensure quality and reliability?",
            answer: "Through structured processes, CI/CD, automated testing, code reviews, and transparent reporting.",
        },
        {
            question: "Can I scale the team up or down?",
            answer: "Yes — you can scale quickly depending on deadlines, budget, or requirements.",
        },
        {
            question: "Is outsourcing secure?",
            answer: "We use NDAs, encryption, access control, and GDPR-compliant data handling.",
        },
        {
            question: "What is the onboarding process?",
            answer: "Discovery → Requirement analysis → Team selection → Project setup → Onboarding → Development.",
        },
        {
            question: "Do I keep control over the project?",
            answer: "Yes. You maintain full ownership and direct communication with the team.",
        },
        {
            question: "How do you handle time zone differences?",
            answer: "We provide flexible overlap hours and async communication support.",
        },
        {
            question: "What is the cost structure?",
            answer: "You pay only for the dedicated team or services you use — no HR or infrastructure overhead.",
        },
    ],

    cooperationModels: [
        {
            title: "Staff Augmentation",
            icon: '/icons/pages/mobile-development/superCharge/handshake-deal-svgrepo-com.svg',
            color: "text-[var(--color-header-text)]",
            description:
                "Unleash the power of your business with our staff/team augmentation services. Whether you need to fill a skills gap or add highly skilled professionals to your existing team, we’ve got you covered.",
        },
        {
            title: "Dedicated Team",
            icon: "/icons/pages/outstaff/group-people-svgrepo-com.svg",
            color: "text-[var(--color-primary)]",
            description:
                "A flexible collaboration model empowering you to reach your goals through a dedicated team.",
        },
        {
            title: "Remote Development Team",
            icon: "/icons/pages/outstaff/globe-1-svgrepo-com.svg",
            color: "text-[var(--color-header-text)]",
            description:
                "Access a global pool of highly skilled developers ready to take on projects of any complexity.",
        },
        {
            title: "IT Recruiting",
            icon: "/icons/pages/outstaff/human-resources-svgrepo-com (1).svg",
            color: "text-[var(--color-primary)]",
            fullWidth: true,
            description:
                "Maximize your business potential with our IT recruitment services — fast, efficient, high-quality hiring.",
        },
    ],
};
