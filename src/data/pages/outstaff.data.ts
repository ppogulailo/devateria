export interface BenefitItem {
    title: string;
    text: string;
}

export interface ServiceItem {
    title: string;
    href: string;
}

export interface TechIcon {
    static: string;
    hover: string;
    alt: string;
}

export interface TechCategory {
    title: string;
    items: TechIcon[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface WhyChooseItem {
    title: string;
    text: string;
}

export const outsourcingPageData = {
    hero: {
        title: "IT Outsourcing Services",
        description:
            "Take advantage of the opportunity to acquire a team with the right skills and experience to expand your development capabilities with IT outsourcing services.",
        image: "https://develux.com/wp-content/uploads/2023/05/Outstaff.png",
    },

    cooperationModels: {
        items: [
            {
                title: "Staff Augmentation",
                text: "Fill skill gaps or add experts to your existing team quickly and efficiently.",
                icon: "/icons/general/team.svg",
            },
            {
                title: "Dedicated Team",
                text: "A flexible model where you fully control the development process and scale teams as needed.",
                icon: "/icons/general/team.svg",
            },
            {
                title: "Remote Development Team",
                text: "Access global developers capable of handling projects of any complexity.",
                icon: "/icons/general/team.svg",
            },
            {
                title: "IT Recruiting",
                text: "Professional hiring support to help you quickly find the right talent.",
                icon: "/icons/general/team.svg",
                fullWidth: true,
            },
        ],
    },

    whatIsOutsourcing: {
        title: "What Is IT Outsourcing Services",
        image:
            "https://develux.com/wp-content/uploads/2023/05/programmer-working-with-program-code-2021-12-09-03-16-11-utc-1-1024x683.jpg",
        text: [
            "Outsourcing development services involve entrusting software development tasks to external providers, including many industries and technologies.",
            "This allows companies to access wider expertise than they may have internally.",
            "With outsourcing, companies enhance development capabilities, reduce delivery time, and avoid hiring overhead.",
        ],
    },

    benefits: <BenefitItem[]>[
        {
            title: "Additional expertise:",
            text: "Gain access to specialists who can manage complex tasks and deliver high-quality results.",
        },
        {
            title: "Cost savings:",
            text: "Reduce operational costs by avoiding full-time hires or new infrastructure expenses.",
        },
        {
            title: "Focus on important tasks:",
            text: "Let your core team focus on marketing, sales, and strategy.",
        },
        {
            title: "Flexible Scalability:",
            text: "Easily scale up or down based on business needs.",
        },
        {
            title: "Access to the latest technology:",
            text: "Leverage modern tools without paying for expensive licenses.",
        },
        {
            title: "Better risk management:",
            text: "Outsourcing partners help reduce cybersecurity and operational risks.",
        },
        {
            title: "Faster time-to-market:",
            text: "Boost delivery speed using extra development capacity.",
        },
        {
            title: "Global talent pool:",
            text: "Gain worldwide expertise, including rare or niche skillsets.",
        },
    ],

    whyChooseUs: <WhyChooseItem[]>[
        {
            title: "Experienced Developers",
            text: "Specialists across multiple industries delivering tailored high-quality results.",
        },
        {
            title: "Customized Solutions",
            text: "We shape our approach around your business goals and workflows.",
        },
        {
            title: "Quality Assurance",
            text: "Strong QA practices ensure reliability, security, and scalability.",
        },
        {
            title: "Competitive Pricing",
            text: "Transparent, cost-effective engagement models with no hidden fees.",
        },
        {
            title: "Communication and Collaboration",
            text: "We keep you fully informed with seamless collaboration.",
        },
        {
            title: "On-Time Delivery",
            text: "Optimized processes and strong management ensure deadlines are met.",
        },
    ],

    techStacks: <TechCategory[]>[
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

    services: <ServiceItem[]>[
        { title: "Web Development", href: "/service/web-development" },
        { title: "Custom Software Development", href: "/service/custom-software-development" },
        { title: "Custom Mobile Development", href: "/service/custom-mobile-app-development" },
        { title: "IT Project Management", href: "/service/it-project-management" },
        { title: "IT Consulting Services", href: "/service/it-consulting" },
        { title: "Custom CRM Development", href: "/service/custom-crm-development" },
    ],

    faqItems: <FAQItem[]>[
        {
            question: "What is IT outsourcing?",
            answer:
                "IT outsourcing is delegating IT-related tasks to an external team to reduce costs and scale quickly.",
        },
        {
            question: "How can outsourcing benefit my business?",
            answer:
                "It reduces costs, speeds up delivery, gives access to senior talent, and eliminates hiring overhead.",
        },
        {
            question: "Which services can be outsourced?",
            answer:
                "Software development, mobile apps, UX/UI, QA, DevOps, cloud, security, infrastructure, and more.",
        },
        {
            question: "Is outsourcing secure?",
            answer:
                "We use NDAs, encryption, access controls, and GDPR-compliant handling to protect your IP.",
        },
    ],
};
