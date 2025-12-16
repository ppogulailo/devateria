import { FAQItem } from "@/components/FAQ";

export const dedicatedTeamsData = {
    hero: {
        title: "Dedicated Development <br/> Teams Drive Success",
        subtitle: "We’re here to help you save time and beat the competition.",
        ctaLabel: "Let's talk",
        ctaHref: "#contact",
        image: "/icons/pages/dedicated-teams/team%20checklist-amico.svg",
        imageAlt: "Dedicated Development Team",
    },

    benefits: [
        {
            title: "High Quality Talent",
            text: `A dedicated team model provides companies with unparalleled flexibility...`,
            icon: "/icons/pages/dedicated-teams/benefits/winner-quality-svgrepo-com.svg",
        },
        {
            title: "Save Time & Money",
            text: `If you need to hire dedicated developers, Deveteria will help...`,
            icon: "/icons/pages/dedicated-teams/benefits/investment-insurance-svgrepo-com.svg",
        },
        {
            title: "100% Transparency",
            text: `We guarantee total transparency...`,
            icon: "/icons/pages/dedicated-teams/benefits/eye-recognition-recognition-facial-biometric-smart-home-svgrepo-com.svg",
        },
        {
            title: "Complete Confidentiality",
            text: `Protecting a client’s privacy and their trade secrets...`,
            icon: "/icons/pages/dedicated-teams/benefits/settings-gear-svgrepo-com (1).svg",
        },
    ],

    techData: [
        {
            title: "Frontend",
            icons: [
                { static: "/tech/frontend/vue.svg", hover: "/tech/frontend/vue-hover.svg", alt: "Vue.js" },
                { static: "/tech/frontend/angular.svg", hover: "/tech/frontend/angular-hover.svg", alt: "Angular" },
                { static: "/tech/frontend/react.svg", hover: "/tech/frontend/react-hover.svg", alt: "React" },
                { static: "/tech/frontend/webflow.svg", hover: "/tech/frontend/webflow-hover.svg", alt: "Webflow" },
            ],
        },
        {
            title: "Backend",
            icons: [
                { static: "/tech/backend/python.svg", hover: "/tech/backend/python-hover.svg", alt: "Python" },
                { static: "/tech/backend/php.svg", hover: "/tech/backend/php-hover.svg", alt: "PHP" },
                { static: "/tech/backend/go.svg", hover: "/tech/backend/go-hover.svg", alt: "Golang" },
                { static: "/tech/backend/dotnet.svg", hover: "/tech/backend/dotnet-hover.svg", alt: ".NET" },
                { static: "/tech/backend/scala.svg", hover: "/tech/backend/scala-hover.svg", alt: "Scala" },
                { static: "/tech/backend/node.svg", hover: "/tech/backend/node-hover.svg", alt: "Node.js" },
            ],
        },
        {
            title: "Fullstack Development",
            icons: [
                { static: "/tech/fullstack/mean.svg", hover: "/tech/fullstack/mean-hover.svg", alt: "MEAN" },
                { static: "/tech/fullstack/go-react.svg", hover: "/tech/fullstack/go-react-hover.svg", alt: "Golang + React" },
                { static: "/tech/fullstack/php-vue.svg", hover: "/tech/fullstack/php-vue-hover.svg", alt: "PHP + Vue.js" },
                { static: "/tech/fullstack/net-angular.svg", hover: "/tech/fullstack/net-angular-hover.svg", alt: ".NET + Angular" },
            ],
        },
        {
            title: "Mobile",
            icons: [
                { static: "/tech/mobile/ios.svg", hover: "/tech/mobile/ios-hover.svg", alt: "iOS" },
                { static: "/tech/mobile/android.svg", hover: "/tech/mobile/android-hover.svg", alt: "Android" },
                { static: "/tech/mobile/react-native.svg", hover: "/tech/mobile/react-native-hover.svg", alt: "React Native" },
                { static: "/tech/mobile/ionic.svg", hover: "/tech/mobile/ionic-hover.svg", alt: "Ionic" },
            ],
        },
    ],

    services: [
        { title: "Python Developers for Hire", href: "/python-devs" },
        { title: "Video Production Services", href: "/video-production" },
        { title: "Research & Development Software Services", href: "/rnd" },
        { title: "Digital Marketing Services", href: "/marketing" },
        { title: "IT Consulting Services", href: "/consulting" },
        { title: "Hire AngularJS Developer", href: "/angular-devs" },
        { title: "Talent Mapping Service", href: "/talent-mapping" },
        { title: "Offshore Software Development", href: "/offshore" },
        { title: "IT Recruiting Services", href: "/it-recruiting" },
    ],

    steps: [
        { number: 1, text: "You Share Your Vision, Values, and Goals." },
        { number: 2, text: "We Handpick Top IT Specialists and Launch Your Project." },
        { number: 3, text: "We Guide You through the Onboarding Process." },
    ],

    faqItems: <FAQItem[]>[
        {
            question: "Can You Meet the Needs of Large-Scale Projects?",
            answer:
                "Yes. Our dedicated teams are structured to scale quickly and efficiently...",
        },
        {
            question: "What Steps Should I Take to Hire Developers?",
            answer:
                "1. Share your goals.\n2. We shortlist candidates.\n3. You interview.\n4. We onboard the team.",
        },
        {
            question: "How to Hire Remote Developers Effectively?",
            answer:
                "We provide vetted specialists with proven remote experience, structured processes...",
        },
        {
            question: "What Specialists Work at Your Service?",
            answer:
                "Frontend, backend, full-stack developers, QA, DevOps, PMs, designers, analysts...",
        },
        {
            question: "Why Should I Hire a Complete Team?",
            answer:
                "Better synergy, faster execution, and clearer communication...",
        },
        {
            question: "Where Do You Source Team Members From?",
            answer:
                "We recruit from top European tech hubs with excellent engineering education...",
        },
        {
            question: "Why Choose Deveteria?",
            answer:
                "Fast assembly, transparent pricing, flexible scaling, senior engineers...",
        },
    ],
};
