import {ActionSection} from "@/components/Action/ActionSection";
import { Card } from "@/components/ui/card/Card";
import Link from "next/link";
import {FAQ, FAQItem} from "@/components/FAQ";
import {BgSection} from "@/components/ui/PrimaryBackground";
import {CardBackground} from "@/components/ui/card/CardBackground";
import {ChevronRightIcon} from "@radix-ui/react-icons";
import {dedicatedTeamsData} from "@/data/pages/services/dedicated-teams.data";
import {HeroSection} from "@/components/sections/HeroSection";
import {SectionTitle} from "@/components/ui/SectionTitle";

export default function DedicatedTeamsPage() {

  const { benefits, techData, services, steps, faqItems, hero } = dedicatedTeamsData;


  return (
    <main className="py-12">
      <HeroSection
          title={hero.title}
          subtitle={hero.subtitle}
          ctaLabel={hero.ctaLabel}
          ctaHref={hero.ctaHref}
          image={hero.image}
          imageAlt={hero.imageAlt}
      />
      <section className="py-24 ">
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
            <div className="p-10 rounded-3xl shadow-md">
              <SectionTitle className='!text-4xl' align='left'>
                How a Dedicated Development Team <br /> Can Transform Your Business Model
              </SectionTitle>

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
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE TEXT */}
            <div>
              <SectionTitle align='left'>
                Looking to hire a team of dedicated developers?
              </SectionTitle>

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
      <BgSection>
        <div className="container mx-auto max-w-7xl px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* LEFT COLUMN */}
            <div>
              <SectionTitle align='left'>
                Why choose us?
              </SectionTitle>

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
      </BgSection>

      <section className="relative w-full h-[260px] flex items-center justify-center overflow-hidden">

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

      <section className="py-24 ">
        <div className="container mx-auto max-w-7xl px-6">

          {/* Title */}
          <SectionTitle className='!mb-4'>
            The Benefits of Our Dedicated Team Model
          </SectionTitle>

          {/* Subtitle */}
          <p className="text-center text-[--color-muted] mb-14">
            You delegate, we innovate
          </p>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

            {benefits.slice(0, 3).map((benefit, i) => (
                <Card key={i}
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
                </Card>
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

      <BgSection>
        <div className="container mx-auto max-w-7xl px-6">

          {/* Title */}
          <SectionTitle>
            Here's How it Works
          </SectionTitle>

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
                <CardBackground
                    key={index}
                >
                  <p className="text-[var(--color-primary)] text-4xl font-bold mb-4">
                    {step.number}
                  </p>
                  <h3 className="text-xl font-semibold leading-snug">
                    {step.text}
                  </h3>
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
        <div className="container mx-auto max-w-7xl px-6">

          {/* Title */}
          <SectionTitle>
            Our Technological Expertise
          </SectionTitle>

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

                  {group.icons.map((icon, i) => (
                      <CardBackground key={i} >
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
                      </CardBackground>
                  ))}
                </div>
            ))}
          </div>
        </div>
      </BgSection>
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <div>
              <SectionTitle align='left'>
                Where Do You Acquire Your Specialists?
              </SectionTitle>

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

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">

          {/* Title */}
          <SectionTitle className="mb-12">
            Related Services
          </SectionTitle>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <Card key={index} className="p-8 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold leading-snug mb-8">
                    {service.title}
                  </h3>

                  <Link
                      href={service.href}
                      className="flex items-center gap-2  font-semibold hover:opacity-80 transition"
                  >
                    Read more
                    <ChevronRightIcon />
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

