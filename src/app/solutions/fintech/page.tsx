import Link from "next/link";
import { ActionSection } from "@/components/Action/ActionSection";
import { FAQ } from "@/components/FAQ";
import { BgSection } from "@/components/ui/PrimaryBackground";
import { Card } from "@/components/ui/card/Card";
import { bankingPageData } from "@/data/pages/solutions/fintech";
import {HeroSection} from "@/components/sections/HeroSection";
import {SectionTitle} from "@/components/ui/SectionTitle";

export default function Page() {
  const { customers, bankingFaq, features, bankingServices, hero } = bankingPageData;

  return (
      <div>

        <HeroSection {...hero} />

        {/* =====================================
          CUSTOMERS
      ====================================== */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-6">

            <SectionTitle className='mb-10'>
              Our Customers
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {customers.map((item, i) => (
                  <Card key={i}>
                      <img src={item.icon} className="h-14 mb-4"></img>

                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                    <p className="text-black/70 text-sm leading-relaxed whitespace-pre-line">
                      {item.text}
                    </p>
                  </Card>
              ))}

              {/*/!* Full width 4th item *!/*/}
              {/*<Card className="md:col-span-2 lg:col-span-1 bg-white">*/}
              {/*  <svg width="32" height="32" viewBox="0 0 24 24" className="text-[--color-primary] mb-4" fill="currentColor">*/}
              {/*    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4*/}
              {/*  1.79-4 4 1.79 4 4 4zm0 2c-2.67*/}
              {/*  0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>*/}
              {/*  </svg>*/}

              {/*  <h3 className="text-xl font-bold mb-3">{customers[3].title}</h3>*/}

              {/*  <p className="text-black/70 text-sm leading-relaxed whitespace-pre-line">*/}
              {/*    {customers[3].text}*/}
              {/*  </p>*/}
              {/*</Card>*/}

            </div>
          </div>
        </section>

        <ActionSection
            title="Ready to develop a project?"
            btnLabel="Let’s Start"
            btnHref="/contact-us"
            bgColor="bg-[--color-primary]"
            textColor="text-white"
            className="mt-10"
        />

        {/* =====================================
          SECURITY SECTION
      ====================================== */}
        <BgSection>
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

            <SectionTitle align='left'>
              We Prioritize<br />
              Security in FinTech<br />
              Software<br />
              Development
            </SectionTitle>

            <div className="text-lg text-white/70 space-y-6">
              <p className="font-semibold">Deveteria always prioritizes the protection of financial information and personal data.</p>
              <p>Therefore, whenever we create banking software, we use the latest security tools and equipment to ensure that our solutions are free of vulnerabilities.</p>
              <p>What’s more, as part of our custom finance services, we can audit your current finance company software for any security issues.</p>
            </div>

          </div>
        </BgSection>

        {/* =====================================
          BANKING SERVICES
      ====================================== */}
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-6">

            <SectionTitle>
              What Custom Banking and Software Services<br />Do We Offer?
            </SectionTitle>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {bankingServices.map((item, idx) => (
                  <Card key={idx}>
                      <img src={item.icon} className="h-14 mb-4"></img>
                    <h3 className="text-lg font-semibold mb-4 text-[--color-primary]">
                      {item.title}
                    </h3>

                    {item.textTop && <p className="text-black/70 mb-3">{item.textTop}</p>}

                    {item.list && (
                        <ul className="list-disc ml-6 text-black/70 space-y-1">
                          {item.list.map((li, i) => <li key={i}>{li}</li>)}
                        </ul>
                    )}

                    {item.textBottom && <p className="text-black/70 mt-3">{item.textBottom}</p>}

                    {item.text && <p className="text-black/70">{item.text}</p>}
                  </Card>
              ))}
            </div>

          </div>
        </section>

        <ActionSection
            title="Ready to develop a project?"
            btnLabel="Let’s Start"
            btnHref="/contact-us"
            bgColor="bg-[--color-primary]"
            textColor="text-white"
            className="mt-10"
        />

        {/* =====================================
          FEATURES SECTION
      ====================================== */}
        <BgSection>
          <div className="container mx-auto max-w-7xl px-6">

            <SectionTitle className='!mb-4'>
              Our FinTech Solution Features
            </SectionTitle>

            <p className="text-center text-white/60 mb-14">
              We offer a wide range of features for the following niches:
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((item, i) => (
                  <Card key={i}>
                    <div className="text-3xl font-bold mb-4">
                      {i + 1}
                    </div>

                    <h3 className="text-xl font-semibold mb-4 text-[--color-primary]">
                      {item.title}
                    </h3>

                    <ul className="list-disc ml-6 text-black/70 space-y-1 text-sm leading-relaxed">
                      {item.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                    </ul>
                  </Card>
              ))}
            </div>

          </div>
        </BgSection>

        <FAQ items={bankingFaq} />

      </div>
  );
}
