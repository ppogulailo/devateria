import {ActionSection} from "@/components/Action/ActionSection";
import { Card } from "@/components/ui/card/Card";
import Link from "next/link";
import {FAQ, FAQItem} from "@/components/FAQ";

export default function DedicatedTeamsPage() {
  const benefits = [
    {
      title: "High Quality Talent",
      text: `A dedicated team model provides companies with unparalleled flexibility when it comes to talent acquisition. In a nutshell, this means instead of hiring full-time specialists, you simply rent our professionals to complete your project. This makes the recruitment process easier and provides access to a comprehensive array of talented IT specialists.`,
      icon: "/icons/dedicated/icon1.svg",
    },
    {
      title: "Save Time & Money",
      text: `If you need to hire dedicate developers, Deveteria will help your businesses save time and money. We do the hard work, so you can focus on the big picture. In addition to saving resources on talent acquisition, our experts are located in a cost-efficient region, so you’ll lower your costs even more.`,
      icon: "/icons/dedicated/icon1.svg",
    },
    {
      title: "100% Transparency",
      text: `We guarantee total transparency. At any time, our clients can directly communicate with their team to engage with the project, receive important progress updates, or to learn about the allocation of resources such as salaries, fees, office costs, and so on.`,
      icon: "/icons/dedicated/icon1.svg",
    },
    {
      title: "Complete Confidentiality",
      text: `Protecting a client’s privacy and their trade secrets is our top priority. We always sign an NDA to safeguard your business’ private data, project details, and intellectual property.`,
      icon: "/icons/dedicated/icon1.svg",
    },
  ];

  const techData = [
    {
      title: "Frontend",
      icons: [
        {
          static: "/tech/frontend/vue.svg",
          hover: "/tech/frontend/vue-hover.svg",
          alt: "Vue.js",
        },
        {
          static: "/tech/frontend/angular.svg",
          hover: "/tech/frontend/angular-hover.svg",
          alt: "Angular",
        },
        {
          static: "/tech/frontend/react.svg",
          hover: "/tech/frontend/react-hover.svg",
          alt: "React",
        },
        {
          static: "/tech/frontend/webflow.svg",
          hover: "/tech/frontend/webflow-hover.svg",
          alt: "Webflow",
        },
      ],
    },
    {
      title: "Backend",
      icons: [
        {
          static: "/tech/backend/python.svg",
          hover: "/tech/backend/python-hover.svg",
          alt: "Python",
        },
        {
          static: "/tech/backend/php.svg",
          hover: "/tech/backend/php-hover.svg",
          alt: "PHP",
        },
        {
          static: "/tech/backend/go.svg",
          hover: "/tech/backend/go-hover.svg",
          alt: "Golang",
        },
        {
          static: "/tech/backend/dotnet.svg",
          hover: "/tech/backend/dotnet-hover.svg",
          alt: ".NET",
        },
        {
          static: "/tech/backend/scala.svg",
          hover: "/tech/backend/scala-hover.svg",
          alt: "Scala",
        },
        {
          static: "/tech/backend/node.svg",
          hover: "/tech/backend/node-hover.svg",
          alt: "Node.js",
        },
      ],
    },
    {
      title: "Fullstack Development",
      icons: [
        {
          static: "/tech/fullstack/mean.svg",
          hover: "/tech/fullstack/mean-hover.svg",
          alt: "MEAN",
        },
        {
          static: "/tech/fullstack/go-react.svg",
          hover: "/tech/fullstack/go-react-hover.svg",
          alt: "Golang + React",
        },
        {
          static: "/tech/fullstack/php-vue.svg",
          hover: "/tech/fullstack/php-vue-hover.svg",
          alt: "PHP + Vue.js",
        },
        {
          static: "/tech/fullstack/net-angular.svg",
          hover: "/tech/fullstack/net-angular-hover.svg",
          alt: ".NET + Angular",
        },
      ],
    },
    {
      title: "Mobile",
      icons: [
        {
          static: "/tech/mobile/ios.svg",
          hover: "/tech/mobile/ios-hover.svg",
          alt: "iOS",
        },
        {
          static: "/tech/mobile/android.svg",
          hover: "/tech/mobile/android-hover.svg",
          alt: "Android",
        },
        {
          static: "/tech/mobile/react-native.svg",
          hover: "/tech/mobile/react-native-hover.svg",
          alt: "React Native",
        },
        {
          static: "/tech/mobile/ionic.svg",
          hover: "/tech/mobile/ionic-hover.svg",
          alt: "Ionic",
        },
      ],
    },
  ];

  const services = [
    { title: "Python Developers for Hire", href: "/python-devs" },
    { title: "Video Production Services", href: "/video-production" },
    { title: "Research & Development Software Services", href: "/rnd" },
    { title: "Digital Marketing Services", href: "/marketing" },
    { title: "IT Consulting Services", href: "/consulting" },
    { title: "Hire AngularJS Developer", href: "/angular-devs" },
    { title: "Talent Mapping Service", href: "/talent-mapping" },
    { title: "Offshore Software Development", href: "/offshore" },
    { title: "IT Recruiting Services", href: "/it-recruiting" },
  ];
  const faqItems: FAQItem[] = [
    {
      question: "Can You Meet the Needs of Large-Scale Projects?",
      answer:
          "Yes. Our dedicated teams are structured to scale quickly and efficiently. Whether your project requires a small group of engineers or a fully staffed development unit, we assemble specialists with the right experience, ensure seamless onboarding, and maintain consistent delivery quality as your project grows."
    },
    {
      question: "What Steps Should I Take to Hire Developers?",
      answer:
          "The hiring process is simple:\n1. Share your goals, requirements, and preferred tech stack.\n2. We shortlist candidates who match your needs.\n3. You interview and select the developers you want.\n4. We handle onboarding and integrate the team into your workflow. You remain fully in control throughout the process."
    },
    {
      question: "How to Hire Remote Software Developers Effectively?",
      answer:
          "Successful remote hiring requires clear communication, defined responsibilities, and reliable processes. We provide vetted specialists with proven remote experience, ensure transparency in every step, and help set up efficient communication and project management so your team delivers smoothly from day one."
    },
    {
      question: "What Specialists Work at Your Service?",
      answer:
          "We provide a wide range of specialists, including frontend and backend engineers, full-stack developers, QA experts, UI/UX designers, DevOps engineers, project managers, business analysts, and mobile developers. Every expert is selected based on your project’s specific requirements."
    },
    {
      question: "Why Should I Hire a Complete Team?",
      answer:
          "A full dedicated team offers better synergy, faster execution, and clearer communication. Instead of coordinating multiple freelancers, you get a structured, aligned, and highly collaborative team that works as a unified extension of your business. This reduces risks, eliminates delays, and accelerates delivery."
    },
    {
      question: "Where Do You Source Team Members From?",
      answer:
          "We recruit software engineers from top European tech hubs known for their strong technical education, English proficiency, and high software development standards. This ensures consistent quality, cultural alignment, and excellent communication across your project."
    },
    {
      question: "Why Should I Choose You to Create a Dedicated Software Development Team?",
      answer:
          "We offer a proven approach: carefully selected senior engineers, transparent pricing, fast team assembly, and flexible scaling. You receive full control over the team, while we handle administration, processes, onboarding, and retention—allowing you to focus entirely on building your product."
    }
  ];
  return (
    <main className="py-12">
      <section className="bg-[#eef0f8] py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
                Dedicated Development <br /> Teams Drive Success
              </h1>

              <p className="mt-6 text-lg text-black/70 leading-relaxed max-w-md">
                We’re here to help you save time and beat the competition.
              </p>

              <a
                  href="#contact"
                  className="inline-block mt-10 px-10 py-4 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-lg shadow-md hover:opacity-90 transition"
              >
                Let's talk
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                  src="https://develux.com/wp-content/uploads/2023/05/lead-developer-managing-team-2022-07-12-14-37-20-utc-1-1-1.jpg"
                  alt="Dedicated Development Team"
                  className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#eef0f8]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

            {/* LEFT IMAGE */}
            <div className="w-full">
              <img
                  src="https://develux.com/wp-content/uploads/2023/05/group-of-developers-working-in-team-2022-12-23-00-03-01-utc-1-1-1.jpg"
                  alt="Developers working"
                  className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>

            {/* MIDDLE SEMICIRCLE DECORATION */}
            <div className="hidden lg:flex justify-center">
              <div className="w-[140px] h-[260px] bg-[#1c1c1c] rounded-3xl flex items-center justify-center relative">
                {/* Center semicircle graphic */}
                <div className="flex flex-col items-center gap-4">
                  {/* Top outline arc */}
                  <svg width="104" height="54" viewBox="0 0 104 54" fill="none">
                    <path
                        d="M51.985 1C38.4611 1.00533 25.4929 6.41532 15.932 16.0404C6.37099 25.6654 1 38.7175 1 52.3267H103C103 45.5855
                                        101.68 38.9104 99.1165 32.6825C96.5527 26.4546 92.7947 20.7959 88.0574 16.0297C83.3201 11.2634 77.6962 7.48296
                                        71.5068 4.90414C65.3175 2.32533 58.684 0.998682 51.985 1Z"
                        stroke="#D6D6D6"
                        strokeWidth="2"
                    />
                  </svg>

                  {/* Filled semicircle */}
                  <svg width="104" height="54" viewBox="0 0 104 54" fill="none">
                    <path
                        d="M51.985 1C38.4602 1.00799 25.492 6.42016 15.9314 16.0468C6.37067 25.6734 1 38.7266 1 52.3367H103C103 38.7213
                                        97.6252 25.6636 88.058 16.0361C78.4909 6.40863 65.5151 1 51.985 1Z"
                        fill="#584EE5"
                        stroke="#584EE5"
                        strokeWidth="2"
                    />
                  </svg>

                  {/* Bottom outline arc */}
                  <svg width="104" height="54" viewBox="0 0 104 54" fill="none">
                    <path
                        d="M51.985 1.66309C38.4602 1.67107 25.492 7.08325 15.9314 16.7099C6.37067 26.3365 1 39.3897 1 52.9998H103C103 39.3844
                                        97.6252 26.3268 88.058 16.6993C78.4909 7.07177 65.5151 1.66309 51.985 1.66309Z"
                        stroke="#D6D6D6"
                        strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT BLOCK */}
            <div className="bg-white p-10 rounded-3xl shadow-md">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-6">
                How a Dedicated Development Team <br /> Can Transform Your Business Model
              </h2>

              <p className="text-black/70 leading-relaxed mb-4">
                Organizations of all shapes and sizes are hiring dedicated development teams — but why?
              </p>

              <ul className="list-disc pl-5 space-y-3 text-black/70 leading-relaxed">
                <li>
                  By accessing the global talent pool, you can significantly expand your technology stack
                  skills, removing the need to retrain your staff. Modern tools allow hired developers to
                  collaborate seamlessly with your in-house engineers.
                </li>
                <li>
                  A dedicated development team model offers excellent agility. As teams grow, flexibility drops —
                  but outside experts stay fully engaged, adapt fast, and deliver work on time even during
                  changing requirements.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      <section className="py-24 bg-[#eef0f8]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE TEXT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black">
                Looking to hire a team of dedicated developers?
              </h2>

              <p className="text-lg font-semibold text-black mb-4">
                Acquiring talented IT specialists is a time consuming and costly process,
                but there’s a better way!
              </p>

              <p className="text-black/70 leading-relaxed mb-4">
                With the dedicated development model, your company can build a team of highly-skilled
                engineers that will seamlessly merge into your organization.
              </p>

              <p className="text-black/70 leading-relaxed">
                This process saves valuable business resources, provides a significant competitive
                advantage, and will quickly deliver the talent you need to build a successful software product.
              </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex justify-center">
              <img
                  src="https://develux.com/wp-content/uploads/2023/05/young-team-of-professional-developers-using-skills-2022-12-01-07-24-10-utc-1-1-1.jpg"
                  alt="Developers working together"
                  className="rounded-2xl shadow-md w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
      <section className="py-24 bg-[#1e1e1e]">
        <div className="container mx-auto max-w-7xl px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* LEFT COLUMN */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
                Why choose us?
              </h2>

              <p className="text-white/80 leading-relaxed">
                Deveteria has the talent, resources, and expertise to meet the requirements of any
                project. We select the top IT experts from our wide range of dedicated specialists,
                to craft a development team that matches your project’s needs and seamlessly
                integrates into your organization. This enables you to meet your business goals
                with fast, effective, and actionable results.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="text-white/80 leading-relaxed space-y-6">
              <p>
                However, we’re not just another outsourcing service.
                We began our journey as a startup and grew Deveteria into a large product company
                that leads our market segment.
              </p>

              <p>
                This unique experience enabled our experts to develop an incredible talent for
                building quality software and delivering amazing results.
              </p>

              <p className="font-semibold text-white">
                Deveteria has successfully helped over 20 different businesses with their outsourced
                projects, so partner with us and get ahead of the competition!
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="relative w-full h-[260px] flex items-center justify-center bg-[#f1f1f8] overflow-hidden">

        {/* Background Image */}
        <img
            src="https://develux.com/wp-content/uploads/2023/05/business-meeting-creative-team-of-young-multiethn-2021-09-10-02-17-02-utc-1-1-1.jpg"
            alt="team working"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-6xl">

          {/* Divider Line */}
          <div className="w-full max-w-4xl border-t border-white/50 mb-6"></div>

          {/* Centered Text */}
          <p className="text-white text-center text-xl md:text-2xl font-medium drop-shadow">
            Now it's our mission to share our expertise so that you can reach your goals.
          </p>

        </div>
      </section>

      <section className="py-24 bg-[#f2f2f8]">
        <div className="container mx-auto max-w-7xl px-6">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
            The Benefits of Our Dedicated Team Model
          </h2>

          {/* Subtitle */}
          <p className="text-center text-[--color-muted] mb-14">
            You delegate, we innovate
          </p>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

            {benefits.slice(0, 3).map((benefit, i) => (
                <div
                    key={i}
                    className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm flex flex-col"
                >
                  <img
                      src={benefit.icon}
                      width={40}
                      height={40}
                      alt={benefit.title}
                      className="mb-6"
                  />

                  <h3 className="text-xl font-semibold mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-[--color-muted] text-sm leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
            ))}

          </div>

          {/* Single full-width card for last item */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm">
              <img
                  src={benefits[3].icon}
                  width={40}
                  height={40}
                  alt={benefits[3].title}
                  className="mb-6"
              />

              <h3 className="text-xl font-semibold mb-4">
                {benefits[3].title}
              </h3>

              <p className="text-[--color-muted] text-sm leading-relaxed">
                {benefits[3].text}
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-[#1a1a1a] py-24 text-white">
        <div className="container mx-auto max-w-7xl px-6">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
            Here's How it Works
          </h2>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto text-center text-white/70 leading-relaxed mb-16">
            <p>
              Our process maximizes customers’ benefits by making the development process
              agile, flexible, and easy to manage. This approach reduces your risk, increases
              transparency between teams, and keeps the project on schedule.
            </p>
            <p className="mt-4 font-semibold text-white">
              When you hire a dedicated development team, there are 3 key elements:
            </p>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="border border-white/10 rounded-2xl p-8 bg-[#131313]">
              <p className="text-[var(--color-primary)] text-4xl font-bold mb-4">1</p>
              <h3 className="text-xl font-semibold leading-snug">
                You Share Your Vision, Values, and Goals.
              </h3>
            </div>

            {/* Card 2 */}
            <div className="border border-white/10 rounded-2xl p-8 bg-[#131313]">
              <p className="text-[var(--color-primary)] text-4xl font-bold mb-4">2</p>
              <h3 className="text-xl font-semibold leading-snug">
                We Handpick Top IT Specialists and Launch Your Project.
              </h3>
            </div>

            {/* Card 3 */}
            <div className="border border-white/10 rounded-2xl p-8 bg-[#131313]">
              <p className="text-[var(--color-primary)] text-4xl font-bold mb-4">3</p>
              <h3 className="text-xl font-semibold leading-snug">
                We Guide You through the Onboarding Process.
              </h3>
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
      <section className="py-28 bg-[#1a1a1c] text-white">
        <div className="container mx-auto max-w-7xl px-6">

          {/* Title */}
          <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-6">
            Our Technological Expertise
          </h2>

          {/* Subtitle */}
          <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-16">
            We build dedicated developers teams, who are perfectly tailored to your needs!
            Here are the teams of experts we can build for you.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {techData.map((group, index) => (
                <div
                    key={index}
                    className="border border-white/10 rounded-2xl p-8 flex flex-col items-center"
                >
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap justify-center gap-6">
                    {group.icons.map((icon, i) => (
                        <div key={i} className="relative w-16 h-16">
                          {/* Static icon */}
                          <img
                              src={icon.static}
                              alt={icon.alt}
                              // fill
                              className="opacity-100 transition-opacity duration-200 hover:opacity-0"
                          />

                          {/* Hover icon */}
                          <img
                              src={icon.hover}
                              alt={icon.alt}
                              // fill
                              className="opacity-0 absolute top-0 left-0 transition-opacity duration-200 hover:opacity-100"
                          />
                        </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f1f1f8] py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[--color-text] leading-tight mb-6">
                Where Do You Acquire Your Specialists?
              </h2>

              <p className="text-lg text-[--color-muted] max-w-xl leading-relaxed">
                To deliver the best experts for your team, we discover and recruit
                top-level software engineers from all across Europe.
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                    src="/images/specialists.jpg"
                    alt="Developers working together"
                    width={620}
                    height={430}
                    className="object-cover"
                />
              </div>
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

      <section className="bg-[#E8E8F3] py-24">
        <div className="max-w-7xl mx-auto px-4">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Related Services
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <Card key={index} className="p-8 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold leading-snug mb-8">
                    {service.title}
                  </h3>

                  <Link
                      href={service.href}
                      className="flex items-center gap-2 text-[#6A4DFF] font-semibold hover:opacity-80 transition"
                  >
                    Read more
                    <svg
                        width="12"
                        height="18"
                        viewBox="0 0 12 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
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
      <FAQ items={faqItems} />
    </main>
  );
}

