// ANDROID APP DEVELOPMENT PAGE DATA

export interface TechIcon {
    static: string;
    hover: string;
    alt: string;
}

export interface TechCategory {
    title: string;
    icons: TechIcon[];
}

export interface IndustryItem {
    icon: string;
    title: string;
    content: string[];
}

export interface StepItem {
    number: string;
    title: string;
    points: string[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export const androidAppDevelopmentPageData = {
    hero: {
        title: `Android Application <br/> Development <br/> Services`,
        subtitle: "",
        ctaLabel: "Let’s talk",
        ctaHref: "#id_footer_form",
        image:
            "https://develux.com/wp-content/uploads/2023/05/developer-connecting-smartphone-with-laptop-2022-11-29-19-17-57-utc-1-1-1.jpg",
        imageAlt: "Android mobile development",
    },

    items: [
        { label: "Custom mobile applications" },
        { label: "Mobile Software Development Kits (SDKs)" },
        { label: "Utilities development" },
    ],

    items2: [
        {
            title: "Expert Android Developers",
            text: "Our experienced in-house team boasts skilled Android developers that are ready to dedicate themselves to your project. Drawing on a large network of vetted specialists, we can also grow your custom team quickly, ensuring continued quality and efficiency."
        },
        {
            title: "Quality Controlled Code",
            text: "Having capable software developers is not enough when creating a technically-advanced application. We strive to have the cleanest code that is overseen by senior developers that value precision."
        },
        {
            title: "Custom Agile Process",
            text: "Our unique agile framework is utilized to give you peace of mind and value for money. With a professional mobile development workflow we can proactively manage any risks, competently control costs and resources, and ensure transparent and effective collaboration."
        },
        {
            title: "Complete Service",
            text: "Deveteria’s entire company is dedicated to the success of your project. Our Android development services leverage the abilities of skilled staff in consulting, product strategy, UX/UI, testing, and technical delivery."
        },
        {
            title: "Google Play Deployment",
            text: "Having ably developed your customized product, we also handle the entire Google Play submission process, including listing, description, assets, and more. Our marketing team can help ensure your app gets the attention it deserves."
        },
        {
            title: "Maintenance & Support",
            text: "Right behind you every step of the way, Deveteria dispatches a team to monitor and proactively deal with any issues, manage platform updates and version releases, and provide ongoing general support."
        }
    ],

    techData: [
        {
            title: "Fullstack Development",
            icons: [
                { static: "/icons/java.svg", hover: "/icons/java-hover.svg", alt: "Java" },
                { static: "/icons/kotlin.svg", hover: "/icons/kotlin-hover.svg", alt: "Kotlin" },
                { static: "/icons/js.svg", hover: "/icons/js-hover.svg", alt: "JavaScript" },
                { static: "/icons/xml.svg", hover: "/icons/xml-hover.svg", alt: "XML" },
            ],
        },
        {
            title: "Databases",
            icons: [
                { static: "/icons/sqlite.svg", hover: "/icons/sqlite2.svg", alt: "SQLite" },
                { static: "/icons/realm.svg", hover: "/icons/realm2.svg", alt: "Realm" },
                { static: "/icons/redis.svg", hover: "/icons/redis-hover.svg", alt: "Redis" },
                { static: "/icons/mongo.svg", hover: "/icons/mongo-hover.svg", alt: "MongoDB" },
                { static: "/icons/elastic.svg", hover: "/icons/elastic-hover.svg", alt: "ElasticSearch" },
            ],
        },
        {
            title: "Tools",
            icons: [
                { static: "/icons/android-sdk.svg", hover: "/icons/android-sdk2.svg", alt: "Android SDK" },
                { static: "/icons/android-ndk.svg", hover: "/icons/android-ndk2.svg", alt: "Android NDK" },
            ],
        },
        {
            title: "IDE",
            icons: [
                { static: "/icons/android-studio.svg", hover: "/icons/android-studio2.svg", alt: "Android Studio" },
            ],
        },
        {
            title: "Android Frameworks",
            icons: [
                { static: "/icons/react-native.svg", hover: "/icons/react-native2.svg", alt: "React Native" },
                { static: "/icons/gradle.svg", hover: "/icons/gradle2.svg", alt: "Gradle" },
                { static: "/icons/glide.svg", hover: "/icons/glide2.svg", alt: "Glide" },
                { static: "/icons/junit.svg", hover: "/icons/junit2.svg", alt: "JUnit" },
                { static: "/icons/robolectric.svg", hover: "/icons/robolectric2.svg", alt: "Robolectric" },
                { static: "/icons/mockito.svg", hover: "/icons/mockito2.svg", alt: "Mockito" },
                { static: "/icons/rails.svg", hover: "/icons/rails2.svg", alt: "Rails" },
                { static: "/icons/trailblazer.svg", hover: "/icons/trailblazer2.svg", alt: "Trailblazer" },
                { static: "/icons/rspec.svg", hover: "/icons/rspec2.svg", alt: "RSpec" },
            ],
        },
        {
            title: "Libraries",
            icons: [],
        },
    ],

    industries: [
        {
            icon: "/icons/industry.svg",
            title: "Retail",
            content: [
                "<strong>E-commerce platforms</strong>",
                "As part of our Android application development services, we design, implement, and support apps that allow your e-commerce business to manage marketing, sales and operations, and website processes. Our e-commerce platforms are visually stunning and user-friendly.",
                "<strong>Consumer analytics applications</strong>",
                "These specialized apps give you insight into customer behavior and experience, thus helping you target marketing campaigns accordingly.",
            ],
        },
        {
            icon: "/icons/industry.svg",
            title: "Healthcare",
            content: [
                "<strong>Tracking and patient management software</strong>",
                "This kind of platform streamlines your medical practice’s patient visits from start to finish – appointment scheduling, collecting medical information, the appointment itself, and follow-up care.",
                "<strong>Diagnostic tools</strong>",
                "Using our Android app development expertise, we develop diagnostic tools that enable patients and physicians alike to analyze symptoms and receive potential diagnoses.",
            ],
        },
        {
            icon: "/icons/industry.svg",
            title: "FinTech",
            content: [
                "<strong>Mobile banking platforms</strong>",
                "We create state-of-the-art Android apps for your end-users; embrace the digital age with an innovative online banking system.",
                "<strong>E-wallet applications</strong>",
                "Well-designed wallets let banks cater to customers’ demands without compromising security. We handle everything from P2P payments to in-app currency.",
            ],
        },
        {
            icon: "/icons/industry.svg",
            title: "Logistics",
            content: [
                "<strong>Delivery management systems</strong>",
                "Intelligent delivery management platforms help shrink delivery times, execute operations, increase driver productivity, ensure customer loyalty, and boost profitability.",
                "<strong>Parcel navigation software</strong>",
                "Navigation solutions increase productivity, reduce costs, improve fuel efficiency, and enable real-time parcel tracking.",
            ],
        },
        {
            icon: "/icons/industry.svg",
            title: "Education",
            content: [
                "<strong>Online course platforms</strong>",
                "Education platforms must be user-friendly, accessible, and provide timely notifications. We build solutions that support learning success.",
                "<strong>Student registration systems</strong>",
                "We create registration systems that handle scheduling, class load, tuition payments, and student information searches.",
            ],
        },
    ],

    steps: [
        {
            number: "1",
            title: "Initiation",
            points: [
                "We gather and analyze your initial requirements.",
                "Based on your needs, we compile a team of experts for your project.",
                "We create technical documents and build a prototype.",
            ],
        },
        {
            number: "2",
            title: "Development",
            points: [
                "We choose a relevant methodology (Agile, Lean, Waterfall, etc.)",
                "We maintain high code quality",
                "The team performs User Acceptance Testing and releases the solution to production",
            ],
        },
        {
            number: "3",
            title: "Ongoing Support",
            points: [
                "After implementation, we provide ongoing monitoring and maintenance",
                "We work with bugs and provide 24/7 assistance",
            ],
        },
    ],

    androidExpertise: [
        { number: "1", title: "Google Cloud", text: "Store app and user data in Google’s secure cloud infrastructure." },
        { number: "2", title: "Google Pay", text: "Request and process Google Pay transactions in apps, on wearables, and on the web." },
        { number: "3", title: "Google Assistant", text: "Handle user requests with Google Assistant in mobile apps, smart speakers, cars, TVs, wearables, and more devices." },
        { number: "4", title: "Android Auto", text: "Allow users to connect their Android apps to their cars and offer hands-free functionality for a variety of app services." },
        { number: "5", title: "Google Fit", text: "Access and share health and fitness data while maintaining user privacy." },
        { number: "6", title: "Social Media Integration", text: "Post content to supported social media platforms with familiar user interfaces." },
        { number: "7", title: "In-App Purchases", text: "Sell digital content in your app and support in-app purchases using Google Play Billing." },
        { number: "8", title: "Google Admob", text: "Monetize and generate revenue from your app using Google’s mobile advertising platform." }
    ],

    faqItems: [
        {
            question: "Where to hire a mobile app developer?",
            answer: `Before you hire a developer, consider the size and complexity of the project, specific requirements, budget, and remote working expectations.
You generally have two options:
• Put out a job ad — This gives full control but is time-consuming, expensive, and risky if the developer leaves mid-project.
• Work with an IT recruiting company — A premium option with vetted developers, contract handling, and ongoing communication support.`,
        },
        {
            question: "What should I look for when hiring a mobile app development company?",
            answer: `When selecting a development company, evaluate the following:
• Company profile — portfolio, website, reviews, and public presence.
• Team structure — size, seniority, specialization, and experience.
• Clients & testimonials — real feedback from previous projects.
• Communication — tools used, English level, transparency, and availability.
• Development practices — SDLC, methodologies, tech stack, and post-launch support.
• Agreements & pricing — clarify expectations, timelines, and billing terms upfront.`,
        },
        {
            question: "What is the cost of hiring mobile app developers?",
            answer: `The cost depends on several factors:
• Type and complexity of the app
• Number of platforms (iOS, Android, or both)
• Developer location
Native apps for both platforms cost more than a simple single-platform app. Developer geography can significantly impact budget as well.`,
        },
        {
            question: "Which industries do you have experience building custom mobile apps for?",
            answer: `We have delivered custom mobile applications across a wide range of industries:
• Retail
• Healthcare
• FinTech
• Logistics
• Education
We also use internal white-label solutions to accelerate delivery and reduce costs for clients.`,
        },
    ],
};
