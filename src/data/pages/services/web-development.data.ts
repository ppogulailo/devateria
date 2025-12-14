// src/data/pages/services/web-development.data.ts

export const webDevelopmentPageData = {
    whyChooseUs: { img: '/icons/pages/web-development/Team work-amico.svg'},
    steps: [
        {
            number: "1",
            title: "Analysis:",
            text: "Determination of requirements for the project, including its necessary functionality, during the first stage of web development service."
        },
        {
            number: "2",
            title: "Planning:",
            text: "Identifying project needs, creating a comprehensive plan, and securing approval before the development process begins."
        },
        {
            number: "3",
            title: "Development:",
            text: "Writing code and creating design using a range of different tech stacks and involving people with relevant experience."
        },
        {
            number: "4",
            title: "Testing:",
            text: "Ensuring the project meets high functionality, usability and security standards."
        },
        {
            number: "5",
            title: "Launch:",
            text: "Uploading the project to the web server and setting it up for use after all technical work is completed."
        },
        {
            number: "6",
            title: "Support:",
            text: "Keeping the project safe and functional, which involves regular monitoring and management."
        }
    ],

    faqItems: [
        {
            question: "What are web service development services?",
            answer:
                "The development process involves building a website from scratch, including designing a layout, writing code, and launching. Website development services cover a wide range of activities, from custom website design to e-commerce website development and other related services. With website development services, businesses and individuals can create an online presence and provide visitors with an intuitive and user-friendly interface."
        },
        {
            question: "How does web development outsourcing service work?",
            answer:
                "At the beginning of outsourcing web development, selecting a provider with a strong portfolio, references, and customer reviews demonstrating their expertise is essential. Depending on the project’s size and complexity, a collaborative model may be chosen, allowing the company’s team members to work closely with the outsourcing team’s professionals. Alternatively, the outsourcing partner may be responsible for building a website or web application from start to finish. In either case, the company retains complete control over the project and its direction throughout development."
        },
        {
            question: "Does your company take on custom web development projects?",
            answer:
                "Yes. We provide custom web development solutions tailored to your requirements and business needs. Our team works closely with your organization to understand specific goals and create solutions accordingly. Whether building a new system or improving an existing one, we deliver fully customized results using the right technical expertise."
        },
        {
            question: "In what areas are web development companies experienced?",
            answer:
                "Web development companies design, build, launch, and support websites or web applications. They typically specialize in areas such as e-commerce platforms, CMS solutions, UI/UX design, backend development, integrations, digital transformation, and long-term support. Depending on the company’s focus, they may also work with advanced technologies or niche industries."
        }
    ],

    serviceItems: [
        {
            title: "Website Development:",
            icon: "https://crystalogic.net/wp-content/uploads/2020/10/frontend-icon.svg",
            text: `It includes setting goals and objectives, developing technical specifications, 
layout design, and integration with accounting systems.`,
        },
        {
            title: "E-commerce Development:",
            icon: "/icons/pages/web-development/serviceItems/shopping-bag-commerce-and-shopping-svgrepo-com.svg",
            text: `Deveteria can combine convenience and attractiveness for sales for E-commerce platforms.`,
        },
        {
            title: "The Development of Plugins for CMS Systems:",
            icon: "/icons/pages/web-development/serviceItems/plugin-svgrepo-com.svg",
            text: `Our team develops mini-applications that extend CRM functionality and perform specific tasks.`,
        },
        {
            title: "REST API Development:",
            icon: "/icons/pages/web-development/serviceItems/api-svgrepo-com (1).svg",
            text: `Developers create interfaces that two systems can use for secure data exchange over the Internet.`,
        },
        {
            title: "Recovery of Hacked Sites:",
            icon: "/icons/pages/web-development/serviceItems/gear-svgrepo-com.svg",
            text: `We help restore access and functionality after security incidents or hacking attempts.`,
        },
        {
            title: "Website Support:",
            icon: "/icons/pages/web-development/serviceItems/cloud-coding-svgrepo-com.svg",
            text: `We provide technical support tasks to ensure stable and continuous operation of your project.`,
        }
    ],
    hero: {
        title: "Empower your Web <br/> Development with <br/> Deveteria's expertise",
        subtitle: "", // empty → because your original hero has no subtitle
        ctaLabel: "Let’s Cooperate",
        ctaHref: "#contact-us",
        image: "/icons/pages/web-development/Open source-bro.svg",
        imageAlt: "Web Development Illustration",

        // optional decorative boxes if you want to support them later
        decorations: {
            purpleBox: { top: -40, right: 40, width: 224, height: 160 },
            whiteBox: { bottom: 0, right: 0, width: 288, height: 224 },
        },
    },
    benefitItems: [
        {
            icon: "/icons/pages/web-development/benefits/document-search-svgrepo-com (1).svg",
            strong: "Receive a comprehensive understanding of the project",
            text: `to study opportunities and growth points of the project. Timely detection of project
development directly shapes future success in the market among competitors.`,
        },
        {
            icon: "/icons/pages/web-development/benefits/dollar-finance-money-49-svgrepo-com.svg",
            strong: "Optimize the cost of the project",
            text: `for equal budget distribution. Proper financial planning ensures sufficient coverage
of all development needs in the future.`,
        },
        {
            icon: "/icons/pages/web-development/benefits/gear-mobile-optimization-svgrepo-com.svg",
            strong: "Access extensive technical expertise",
            text: `to acquire needed skills and tech stacks. Outsourcing web development allows you to bring
in the right specialists at the right time.`,
        },
        {
            icon: "/icons/pages/web-development/benefits/dollar-finance-money-9-svgrepo-com.svg",
            strong: "Apply a market-oriented development strategy",
            text: `to stay aligned with business goals. A project must evolve in terms of both functionality
and real market demand.`,
        },
        {
            icon: "/icons/pages/web-development/benefits/bugs-search-svgrepo-com.svg",
            strong: "Analyze and test at the initial stage",
            text: `to ensure quality. Early testing prevents bugs and issues that would be harder and more
expensive to fix later.`,
        },
        {
            icon: "/icons/pages/web-development/benefits/shield-settings-svgrepo-com.svg",
            strong: "Maintain business stability",
            text: `by avoiding financial and reputational risks. High-quality development work ensures
consistent performance and smooth project execution.`,
        },

        // LAST ROW, centered items
        {
            icon: "/icons/pages/web-development/benefits/website-connection-communication-svgrepo-com.svg",
            strong: "Communicate clearly and transparently",
            text: `to ensure timely decision-making throughout the project. Consistent communication helps
teams adapt to changes smoothly.`,
            className: "lg:col-span-1 md:col-span-2 lg:col-start-2",
        },
        {
            icon: "/icons/pages/web-development/benefits/clock-hour-timer-svgrepo-com.svg",
            strong: "Meet deadlines successfully",
            text: `thanks to coordinated teamwork. Timely development leads to high-quality final results
and faster product delivery.`,
            className: "lg:col-span-1 md:col-span-2 lg:col-start-3",
        }
    ],
};
