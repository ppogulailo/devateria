import {ActionSection} from "@/components/Action/ActionSection";
import {FAQ, FAQItem} from "@/components/FAQ";
import {Card} from "@/components/ui/card/Card";
import {BgSection} from "@/components/ui/PrimaryBackground";
import {CardBackground} from "@/components/ui/card/CardBackground";
import {iosAppDevelopmentPageData} from "@/data";
import {HeroSection} from "@/components/sections/HeroSection";
import {SectionTitle} from "@/components/ui/SectionTitle";

export default function IosAppDevelopmentPage() {
  const { hero, whyChooseIos, impactApps, fullCycleDevelopment, industries, faqItems } = iosAppDevelopmentPageData;
  return (
      <main className="py-12">
        <HeroSection
            title={hero.title}
            subtitle={hero.subtitle}
            ctaLabel={hero.ctaLabel}
            ctaHref={hero.ctaHref}
            image={hero.image}
            imageAlt="iOS development hero image"
        />
        <section className=" py-24">
          <div className="max-w-7xl mx-auto px-6">

            {/* TITLE */}
            <SectionTitle>
              The Deveteria iOS <br/>
              development team <br/>
              creates impactful apps for <br/>
              all Apple devices
            </SectionTitle>

            {/* SUBTITLE */}
            <p className="text-center text-[--color-muted] max-w-3xl mx-auto mb-16">
              Our team’s rich expertise in iOS application development ensures that your app will be
              engaging, beautiful, and consistent – no matter your industry or the complexity of the
              project.
            </p>

            {/* 6 cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* CARD */}
              {impactApps.features.map((item, i) => (
                  <Card key={i}
                  >
                    <img src={item.icon} className="h-12 w-12" alt={item.title} />

                    <h3 className="font-semibold text-xl text-[--color-text] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-[--color-muted] leading-relaxed">
                      {item.text}
                    </p>
                  </Card>
              ))}

            </div>
          </div>
        </section>
        <section className="py-24 ">
          <div className="max-w-7xl mx-auto px-6">

            <div className="flex flex-col lg:flex-row w-full gap-6">

              {/* LEFT IMAGE */}
              <div className="flex-1">
                <img
                    src="https://develux.com/wp-content/uploads/2022/04/1-768x432.jpeg"
                    alt="iPhones"
                    className="rounded-xl w-full h-full object-cover"
                />
              </div>

              {/* MIDDLE BLACK PANEL */}
              <div
                  className="w-full lg:w-1/3 bg-[#1E1E1E] rounded-l-xl rounded-r-xl lg:rounded-r-none flex items-center justify-center p-10">
                <div className="relative">
                  {/* Semicircle SVG Stack */}
                  <svg width="104" height="54" viewBox="0 0 104 54" fill="none" className="mb-3">
                    <path
                        d="M51.985 1C38.4611 1.00533 25.4929 6.41532 15.932 16.0404C6.37099 25.6654 0.999999 38.7175 1 52.3267H103C103 45.5855 101.68 38.9104 99.1165 32.6825C96.5527 26.4546 92.7947 20.7959 88.0574 16.0297C83.3201 11.2634 77.6962 7.48296 71.5068 4.90414C65.3175 2.32533 58.684 0.998682 51.985 1Z"
                        stroke="#D6D6D6"
                        strokeWidth="2"
                    />
                  </svg>

                  <svg width="104" height="54" viewBox="0 0 104 54" fill="none" className="mb-3">
                    <path
                        d="M51.985 1C38.4602 1.00799 25.492 6.42016 15.9314 16.0468C6.37067 25.6734 0.999998 38.7266 1 52.3367H103C103 38.7213 97.6252 25.6636 88.058 16.0361C78.4909 6.40863 65.5151 1 51.985 1Z"
                        fill="#584EE5"
                        stroke="#584EE5"
                        strokeWidth="2"
                    />
                  </svg>

                  <svg width="104" height="54" viewBox="0 0 104 54" fill="none">
                    <path
                        d="M51.985 1.66309C38.4602 1.67107 25.492 7.08325 15.9314 16.7099C6.37067 26.3365 0.999998 39.3897 1 52.9998H103C103 39.3844 97.6252 26.3268 88.058 16.6993C78.4909 7.07177 65.5151 1.66309 51.985 1.66309Z"
                        stroke="#D6D6D6"
                        strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1 bg-white rounded-xl p-10 shadow-sm">
                <SectionTitle className='mb-4 !text-4xl' align='left'>
                  iOS apps for any <br/> device
                </SectionTitle>

                <p className="text-[--color-muted] leading-relaxed mb-6">
                  Whether you are looking to build a product specifically for iPhone, or an app
                  that can be used with satisfaction no matter the device, we can ably assist.
                  Our iOS application development services are tailored to your unique project.
                  Ongoing maintenance means you can be assured of beautiful, engaging and bug-free
                  apps for:
                </p>

                <ul className="text-[--color-text] space-y-2">
                  <li><p>• iPhone</p></li>
                  <li><p>• iPad</p></li>
                  <li><p>• iWatch</p></li>
                  <li><p>• Apple TV</p></li>
                </ul>
              </div>

            </div>
          </div>
        </section>
        <BgSection>
          <div className="max-w-7xl mx-auto px-6">

            {/* TITLE */}
            <SectionTitle className='!mb-4'>
              Full cycle development
            </SectionTitle>

            <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
              With strong communication, flexibility and in-depth knowledge,
              we craft customized iOS applications for any and all devices
              that really make an impact.
            </p>

            {/* 3 COLUMN CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {fullCycleDevelopment.cards.map((card, idx) => (
                  <CardBackground key={idx}
                  >
                    <div className="text-4xl font-bold mb-6 leading-none">{card.number}</div>

                    <h3 className="text-white text-xl font-semibold mb-4">
                      {card.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {card.text}
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
            // className="mt-10"
            icon={
              <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                <circle cx="130" cy="50" r="36" fill="black" />
              </svg>
            }
        />

        (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* TEXT */}
              <div>
                <SectionTitle align='left'>
                  Hire an iOS app<br />developer or team
                </SectionTitle>

                <p className="text-[#444] leading-relaxed mb-6">
                  For a completely new venture we can gather a dedicated team with the right
                  mix of skills and the ability to work collaboratively, delivering successful
                  results without hassle. Leave the nitty gritty to us so you can focus on the
                  bigger picture. Hire an iOS developer with a company you can trust.
                </p>

                <p className="text-[#444] leading-relaxed mb-6">
                  Our sleek in-house operation and strong links to the developer community mean
                  that we can quickly find the perfect candidate for your operation.
                </p>

                <ul className="text-[#444] leading-relaxed space-y-3 list-disc pl-6">
                  <li>Screening, trialling and onboarding of specialists in less than 10 days</li>
                  <li>Any level of seniority, from mid-level developers to senior project managers</li>
                  <li>Continuous support and handling of all administrative issues</li>
                  <li>Complete transparency and all costs up front.</li>
                </ul>
              </div>

              {/* IMAGE */}
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                    src="https://develux.com/wp-content/uploads/2023/05/1-30-768x520.jpeg"
                    alt="iOS developers working"
                    className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </div>
        </section>
        <BgSection>
          <div className="max-w-7xl mx-auto px-6">

            {/* Title */}
            <SectionTitle>
              Why Choose iOS Application Development?
            </SectionTitle>

            {/* Cards */}
            <div className="mt-16 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

              {whyChooseIos.cards.map((c, idx) => (
                  <CardBackground key={idx}
                  >
                    {/* Number */}
                    <div className="text-4xl font-bold mb-6">
                      {idx + 1}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-4">
                      {c.title}
                    </h3>

                    {/* Text */}
                    <p className="text-gray-300 leading-relaxed text-[15px]">
                      {c.text}
                    </p>
                  </CardBackground>
              ))}

            </div>

          </div>
        </BgSection>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">

            {/* --- Title --- */}
            <SectionTitle>
              IOS application for your industry
            </SectionTitle>

            {/* --- Subtitle --- */}
            <p className="text-center text-lg max-w-4xl mx-auto text-[--color-muted] leading-relaxed mb-16">
              No matter what your niche, Deveteria can bring strong product knowledge and flexibility,
              making sure your application is successful. Whether your business is HR, Fintech,
              Logistics or Healthcare, we can design and deliver a personalized Android application
              that has ease of use and versatility at its core. We have developed white-label
              solutions for finance and e-commerce, which speed up development time and slash costs,
              and utilize our team’s marketing specialists to make sure your product is positioned
              for maximum initial impact and ongoing strength in a rapidly changing market.
            </p>

            {/* ---- Cards ---- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">

              {/* Top row: 3 cards */}
              {industries.items.slice(0, 3).map((item, idx) => (
                  <Card key={idx}
                  >
                    <img src={item.icon} className="h-14 mb-4"></img>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <ul className="text-[--color-muted] space-y-1">
                      {item.bullets.map((b, i) => (
                          <li key={i} className="list-disc ml-5"><p>{b}</p></li>
                      ))}
                    </ul>
                  </Card>
              ))}

              {/* Bottom row: 2 centered cards */}
              <div className="md:col-span-3 flex flex-col md:flex-row gap-8 justify-center">
                {industries.items.slice(3).map((item, idx) => (
                    <Card
                        key={idx}
                    >
                      <img src={item.icon} className="h-14 mb-4"></img>
                      <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                      <ul className="text-[--color-muted] space-y-1">
                        {item.bullets.map((b, i) => (
                            <li key={i} className="list-disc ml-5"><p>{b}</p></li>
                        ))}
                      </ul>
                    </Card>
                ))}
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
            // className="mt-10"
            icon={
              <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                <circle cx="130" cy="50" r="36" fill="black" />
              </svg>
            }
        />
        <section className=" py-24">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* LEFT TEXT BLOCK */}
              <div className="bg-white rounded-2xl p-10 shadow-sm">
                <SectionTitle align='left'>
                  Why Deveteria?
                </SectionTitle>

                <p className="text-[--color-text] font-semibold mb-3">
                  Outstanding developers
                </p>

                <p className="text-[--color-muted] leading-relaxed mb-6">
                  Hire iOS app developers through us, knowing they will have the necessary
                  tools to make an immediate impact on your project. Outsourced employees work
                  remotely on flexible schedules that we manage, while outstaffed employees
                  work on your schedule and on your premises. We help you pick the best model
                  for your success.
                </p>

                <p className="text-[--color-text] font-semibold mb-3">
                  Full product development
                </p>

                <p className="text-[--color-muted] leading-relaxed">
                  As your dedicated iOS application development partner, we handle all facets
                  of mobile development — HR, design, marketing managers, and senior developers.
                  We create custom applications from scratch, maintain close communication, and
                  deliver full transparency in scope and cost.
                </p>
              </div>

              {/* RIGHT SIDE BLACK PANEL + IMAGE */}
              <div className="flex flex-col lg:flex-row items-center gap-6">

                {/* BLACK PANEL WITH SEMICIRCLES */}
                <div className="bg-[#1E1E1E] rounded-xl flex items-center justify-center p-10 w-full lg:w-1/3">
                  <div className="relative flex flex-col items-center gap-3">

                    {/* top outline */}
                    <svg width="104" height="54" viewBox="0 0 104 54" fill="none">
                      <path
                          d="M51.985 1C38.4611 1.00533 25.4929 6.41532 15.932 16.0404C6.37099 25.6654 0.999999 38.7175 1 52.3267H103C103 45.5855 101.68 38.9104 99.1165 32.6825C96.5527 26.4546 92.7947 20.7959 88.0574 16.0297C83.3201 11.2634 77.6962 7.48296 71.5068 4.90414C65.3175 2.32533 58.684 0.998682 51.985 1Z"
                          stroke="#D6D6D6"
                          strokeWidth="2"
                      />
                    </svg>

                    {/* middle filled */}
                    <svg width="104" height="54" viewBox="0 0 104 54" fill="none">
                      <path
                          d="M51.985 1C38.4602 1.00799 25.492 6.42016 15.9314 16.0468C6.37067 25.6734 0.999998 38.7266 1 52.3367H103C103 38.7213 97.6252 25.6636 88.058 16.0361C78.4909 6.40863 65.5151 1 51.985 1Z"
                          fill="#584EE5"
                          stroke="#584EE5"
                          strokeWidth="2"
                      />
                    </svg>

                    {/* bottom outline */}
                    <svg width="104" height="54" viewBox="0 0 104 54" fill="none">
                      <path
                          d="M51.985 1.66309C38.4602 1.67107 25.492 7.08325 15.9314 16.7099C6.37067 26.3365 0.999998 39.3897 1 52.9998H103C103 39.3844 97.6252 26.3268 88.058 16.6993C78.4909 7.07177 65.5151 1.66309 51.985 1.66309Z"
                          stroke="#D6D6D6"
                          strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="rounded-xl overflow-hidden flex-1 shadow-sm">
                  <img
                      src="https://develux.com/wp-content/uploads/2023/05/1-28-768x512.jpeg"
                      alt="team working"
                      className="w-full h-full object-cover"
                  />
                </div>

              </div>

            </div>
          </div>
        </section>
        <FAQ items={faqItems}/>

      </main>
  );
}

