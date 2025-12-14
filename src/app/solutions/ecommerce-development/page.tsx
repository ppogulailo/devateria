import { ActionSection } from "@/components/Action/ActionSection";
import { FAQ } from "@/components/FAQ";
import { BgSection } from "@/components/ui/PrimaryBackground";
import { Card } from "@/components/ui/card/Card";
import {CardBackground} from "@/components/ui/card/CardBackground";
import {HeroSection} from "@/components/sections/HeroSection";
import {SectionTitle} from "@/components/ui/SectionTitle";
import {ecommerceData} from "@/data";

export default function Page() {
    const { hero , serviceBlocks, ecommerceProcess, ecommerceFaq } = ecommerceData
  return (
      <div className="text-[--color-text] bg-[--color-bg]">

        {/* HERO */}
          <HeroSection {...hero} />

        {/* WHAT IS ECOMMERCE SOFTWARE */}
        <BgSection>
          <div className="container mx-auto max-w-7xl px-4 grid gap-12 md:grid-cols-2">

            {/* LEFT TEXT */}
            <div className="space-y-6">
              <SectionTitle align="left">
                What Is Ecommerce Software?
              </SectionTitle>

              <p className=" leading-relaxed md:text-lg ">
                At Deveteria, we offer ecommerce development services; our tailored solutions
                are designed to align with your business goals. Don’t limit yourself to an
                off-the-shelf product; our custom ecommerce development solutions are made for you!
              </p>
            </div>

            {/* RIGHT LIST */}
            <div className="space-y-4 text-white/70">
              <p className="leading-relaxed md:text-lg text-white">
                Ecommerce software forms the backbone of your online store. They allow you to:
              </p>

              <ul className="space-y-3 text-[--color-text]">
                {[
                  "Create a website for selling products",
                  "Manage your inventory",
                  "Accept and process transactions",
                  "Fulfill orders",
                  "Provide users with an intuitive, enjoyable shopping experience",
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[--color-primary]"></span>
                      {item}
                    </li>
                ))}
              </ul>
            </div>

          </div>
        </BgSection>

        {/* ACTION */}
        <ActionSection
            title="Kick Off a Great Store"
            btnLabel="Let’s Start"
            btnHref="/contact-us"
            bgColor="bg-[--color-primary]"
            textColor="text-white"
            icon={
              <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                <circle cx="130" cy="50" r="36" fill="black" />
              </svg>
            }
        />

        {/* SERVICES GRID */}
        <section className="py-20 bg-[--color-bg]">
          <div className="container mx-auto max-w-7xl px-6">

            <SectionTitle>
              What eCommerce Development Services Do We Offer?
            </SectionTitle>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {serviceBlocks.map((item, idx) => (
                  <Card key={idx}>
                      <img src={item.icon} className="h-14 mb-4"></img>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed">{item.text}</p>
                  </Card>
              ))}
            </div>

          </div>
        </section>

        {/* SECOND ACTION */}
        <ActionSection
            title="Get eCommerce Development"
            btnLabel="Get Started"
            btnHref="/contact-us"
            bgColor="bg-[--color-primary]"
            textColor="text-white"
            icon={
              <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                <circle cx="130" cy="50" r="36" fill="black" />
              </svg>
            }
        />

        {/* PROCESS */}
        <BgSection>
          <div className="container mx-auto max-w-7xl">

            <SectionTitle>
              Our Process
            </SectionTitle>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {ecommerceProcess.map((item, idx) => (
                  <CardBackground key={idx}>
                    <div className="text-3xl font-bold mb-4">
                      {item.number}
                    </div>

                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>

                    <p className="text-black">{item.text}</p>
                  </CardBackground>
              ))}
            </div>

          </div>
        </BgSection>

        {/* FAQ */}
        <FAQ title="Ecommerce FAQ" items={ecommerceFaq} />

      </div>
  );
}
