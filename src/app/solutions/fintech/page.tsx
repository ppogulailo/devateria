import Link from "next/link";
import Image from "next/image";
import {ActionSection} from "@/components/Action/ActionSection";
import {FAQ, FAQItem} from "@/components/FAQ";

export default function Page() {
  const customers = [
    {
      title: "Banks",
      text: `Whether you are a retail bank, community bank, corporate bank, 
or a credit union, we’d be happy to create a solution for you. 
While working on banking software development, we take your bank’s 
specifications into account – each piece of bank software is 
custom-tailored to help you achieve your business goals.`,
    },
    {
      title: "Insurance Companies",
      text: `At Develux, our software experts create all-in-one insurance 
applications for insurance companies, presenting their customers, 
partners, agents, and employees with a more comprehensive experience.`,
    },
    {
      title: "Investment Companies",
      text: `We are well-versed in creating a wide array of investment banking 
solutions – from the development of trading platforms to portfolio 
management applications, we’ll do it all.`,
    },
    {
      title: "Funds & Trusts",
      text: `With Develux, you never have to think twice about keeping track 
of crucial fund case documents, contacts, and messages – with our 
trusts & funds development service, you’ll get a solution with 
simplified legal billing, easily retrievable documents, coordinated 
law firm calendars, and more.`,
    },
  ];

  const bankingFaq: FAQItem[] = [
    {
      question: "Do you use the latest financial software development tools?",
      answer: `Yes. We always use the newest, most secure, and industry-approved technologies to ensure your banking or financial platform is stable and future-proof.`,
    },
    {
      question: "Is your software reliable?",
      answer: `Absolutely. We build enterprise-level, secure, reliable systems that follow industry regulations and best practices.`,
    },
    {
      question: "What can I expect from your finance software?",
      answer: `You can expect high performance, data accuracy, security compliance, advanced analytics, and full customization for your financial operations.`,
    },
    {
      question: "How long does it take for you to build financial software?",
      answer: `It depends on the project scope, but most financial software solutions take between 3–12 months depending on complexity.`,
    },
  ];
  const features = [
    {
      title: "Accounting",
      bullets: [
        "Tax processing",
        "Forecasting and budgeting",
        "Payroll management",
      ],
    },
    {
      title: "Insurance Management",
      bullets: [
        "Metrics tracking",
        "Monitoring of claim activity",
        "Calculations of renewals and lapses",
      ],
    },
    {
      title: "Cryptocurrency",
      bullets: [
        "Integration with Blockchain platforms",
        "Cryptocurrency exchanges",
        "Cryptocurrency wallets",
      ],
    },
    {
      title: "Billing",
      bullets: [
        "Payment scheduling",
        "Credit card processing",
        "Deposits",
        "Account credits",
        "International remittance",
      ],
    },
    {
      title: "Mobile Banking and Payments",
      bullets: [
        "Internet banking",
        "Mobile wallets",
        "Biometrics",
        "QR code payments",
        "Contactless payments",
      ],
    },
    {
      title: "More Features",
      bullets: [
        "Multicurrency support",
        "Automatic payment reminders",
        "Advanced analytics & reporting",
        "Charge calculations",
        "Country-specific features",
      ],
    },
  ];

  return (
      <div className="bg-[--color-bg] text-[--color-text]">
        <section className="py-20 ">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* LEFT SIDE */}
              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[--onblack-color-text] mb-6">
                  Banking and Financial Software<br />
                  Development Services
                </h1>

                <p className="text-lg text-[--color-muted] mb-8">
                  At Develux, we build intelligent financial apps and intuitive enterprise banking software.
                </p>

                <Link
                    href="#id_footer_form"
                    className="inline-block bg-[var(--color-primary)] text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition"
                >
                  Let&apos;s talk
                </Link>
              </div>

              {/* RIGHT SIDE IMAGE */}
              <div className="flex justify-center md:justify-end">
                <img
                    src="https://develux.com/wp-content/uploads/2023/05/smiling-banking-specialist-meeting-with-couple-2021-12-09-15-12-44-utc-1-1.jpg"
                    alt="banking software development"
                    width={630}
                    height={430}
                    className="rounded-2xl object-cover shadow-md"
                />
              </div>

            </div>
          </div>
        </section>


        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-6">

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 ">
              Our Customers
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {customers.slice(0, 3).map((item, i) => (
                  <div
                      key={i}
                      className="border border-black/10 rounded-2xl p-8 bg-white"
                  >
                    {/* ICON */}
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        className="text-[var(--color-primary)] mb-4"
                        fill="currentColor"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4
                  1.79-4 4 1.79 4 4 4zm0 2c-2.67
                  0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>

                    <h3 className="text-xl font-bold mb-3 text-[--onblack-color-text]">
                      {item.title}
                    </h3>

                    <p className="text-black/70 text-sm leading-relaxed whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
              ))}

              {/* FULL-WIDTH card (Funds & Trusts) */}
              <div className="md:col-span-2 lg:col-span-1 border border-black/10 rounded-2xl p-8 bg-white">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="text-[var(--color-primary)] mb-4"
                    fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4
                1.79-4 4 1.79 4 4 4zm0 2c-2.67
                0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>

                <h3 className="text-xl font-bold mb-3 text-[--onblack-color-text]">
                  {customers[3].title}
                </h3>

                <p className="text-[--color-muted] text-sm leading-relaxed whitespace-pre-line">
                  {customers[3].text}
                </p>
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
            className="mt-10"
            icon={
              <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                <circle cx="130" cy="50" r="36" fill="black" />
              </svg>
            }
        />

        <section className="bg-[var(--color-primary)] text-white py-24 mt-40">
          <div className="container mx-auto max-w-7xl px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* LEFT COLUMN — BIG TITLE */}
              <div>
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                  We Prioritize<br />
                  Security in FinTech<br />
                  Software<br />
                  Development
                </h2>
              </div>

              {/* RIGHT COLUMN — TEXT */}
              <div className="text-lg text-white/70 space-y-6">
                <p className="font-semibold text-white/70">
                  Develux always prioritizes the protection of financial information and personal data.
                </p>

                <p>
                  Therefore, whenever we create banking software, we use the latest security
                  tools and equipment to ensure that our solutions are free of vulnerabilities.
                </p>

                <p>
                  What’s more, as part of our custom finance services, we can audit your current
                  finance company software for any security issues.
                </p>
              </div>

            </div>

          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-6">

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-[var(--color-primary)]">
              What Custom Banking and Software Services<br />Do We Offer?
            </h2>

            {/* Cards Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {/* Card 1 */}
              <div className="border border-black/10 rounded-2xl p-8 bg-white">
                <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">
                  Payment & Billing Solutions
                </h3>

                <p className="text-black/70 mb-3">
                  At Develux, the premier financial software development company, we can create
                  all sorts of custom banking solutions to meet your organization’s needs. Some
                  examples include:
                </p>

                <ul className="list-disc ml-6 text-black/70 space-y-1">
                  <li>Automated payment processing/billing</li>
                  <li>Invoice management tools</li>
                  <li>Real-time change management</li>
                  <li>Comprehensive transaction statistics</li>
                  <li>Custom payment term storage</li>
                </ul>

                <p className="text-black/70 mt-3">
                  Need a payments/billing feature not listed? We’ll take on any task.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-black/10 rounded-2xl p-8 bg-white">
                <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">
                  Insurance Software
                </h3>

                <p className="text-black/70">
                  Our software experts create end-to-end insurance solutions for intermediaries.
                  Brokers and agents can easily manage customers, policies, and reporting.
                  Cloud-based platforms simplify workflows and administrative tasks.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border border-black/10 rounded-2xl p-8 bg-white">
                <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">
                  Stock Analytics
                </h3>

                <p className="text-black/70">
                  Need accurate stock market technical analysis software? We can build scalable
                  repositories, AI-powered analytics, financial data tools, and real-time stock
                  exchange simulators.
                </p>
              </div>

              {/* Card 4 */}
              <div className="border border-black/10 rounded-2xl p-8 bg-white">
                <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">
                  Financial Management of Healthcare Organizations
                </h3>

                <p className="text-black/70">
                  We build healthcare billing systems, claims management tools, and processing
                  software — fully integrable with existing EMR/EHR systems.
                </p>
              </div>

              {/* Card 5 */}
              <div className="border border-black/10 rounded-2xl p-8 bg-white">
                <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">
                  Electronic Document Management Systems
                </h3>

                <p className="text-black/70">
                  We create secure document management platforms for banks — with automated
                  file compilation, scheduling, notifications, and integrity tracking across
                  the document lifecycle.
                </p>
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
            className="mt-10"
            icon={
              <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                <circle cx="130" cy="50" r="36" fill="black" />
              </svg>
            }
        />
        <section className="py-24 bg-[var(--color-primary)] text-white">
          <div className="container mx-auto max-w-7xl px-6">

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6">
              Our FinTech Solution Features
            </h2>

            <p className="text-center text-white/60 mb-14">
              We offer a wide range of features for the following niches:
            </p>

            {/* Grid */}
            <div className="grid gap-8
                        md:grid-cols-2
                        lg:grid-cols-3">

              {features.map((item, i) => (
                  <div
                      key={i}
                      className="border border-white/10 bg-white rounded-2xl p-8 relative"
                  >
                    {/* Number */}
                    <div className="text-[var(--color-primary)] text-3xl font-bold mb-4">
                      {i + 1}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">{item.title}</h3>

                    {/* Bullets */}
                    <ul className="list-disc ml-6 text-black/70 space-y-1 text-sm leading-relaxed">
                      {item.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
              ))}

            </div>

          </div>
        </section>

        <FAQ items={bankingFaq} />
      </div>
  );
}
