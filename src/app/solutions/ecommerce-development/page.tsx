import {ActionSection} from "@/components/Action/ActionSection";
import {FAQ} from "@/components/FAQ";

export default function Page() {
  const ecommerceFaq = [
    {
      question: "What will my eCommerce site be able to do?",
      answer: "When we create an ecommerce site for you, your customers will be able to easily navigate your available products and purchase them. Your checkout will be easy-to-use, and you can offer whichever payment methods you prefer. Each purchase is a sales transaction that impacts your bottom line – therefore, it must be done conveniently and efficiently for the customer. This is why we work hard to ensure your ecommerce site’s UI/UX is stellar.\n" +
          "\n" +
          "What’s more, you’ll get seller features like content management capabilities, discount code tools, order fulfillment, and anything else you might need. Get product specifics like variations, SKUS, names, and images, enabling you to catalog and organize items. Receive notifications if your inventory is running low, and get insights into which items are fast-moving. Simplify your eCommerce marketing with built-in SEO from our expert in-house SEO team. Automate taxation and shipping by calculating sales tax based on the buyer’s location and printing shipping labels. This is just a small taste of what you’ll be able to accomplish!"
    },
    {
      question: "What kind of eCommerce sites do you make?",
      answer: "Whether you need your site to be B2B, B2C, an online marketplace, or an online multi-store, we can do that for you. Perhaps you need an auction site or an affiliate eCommerce platform. No matter which kind of eCommerce platform you need, our developers are well-suited for the task."
    },
    {
      question: "Are your eCommerce services reliable?",
      answer: "Yes, we are not only reliable but also fully transparent during our consultative phase. Before we begin the project, you’ll know exactly what to expect from us and a projected timeframe. You can also see our portfolio (Client Stories) on our site."
    }
  ];
  return (
      <div>
        <div className="bg-[--color-bg] text-[--color-text] mx-auto w-full max-w-6xl px-4">
          <section className="banner_about bg-[--color-bg-alt] py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="wrapper grid gap-12 md:grid-cols-2 md:items-center">

                {/* LEFT SIDE — TEXT */}
                <div className="col6">
                  <div className="content_banner space-y-6">
                    <h1 className="name_banner text-4xl md:text-6xl font-extrabold leading-tight text-[--color-text]">
                      Our Ecommerce Development Services
                    </h1>

                    <div className="description_banner text-lg text-[--color-muted] leading-relaxed">
                      <p>
                        If you’re thinking of starting or revamping an ecommerce store, work smarter,
                        not harder, with ecommerce software development from Develux!
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE — IMAGE */}
                <div className="col6">
                  <div className="image_banner flex justify-center md:justify-end">
                    <img
                        width={630}
                        height={430}
                        src="https://develux.com/wp-content/uploads/2023/05/company-accountant-doing-e-commerce-paperwork-in-o-2022-03-14-14-24-52-utc-1-1.jpg"
                        alt="Ecommerce Development"
                        className="rounded-3xl object-cover w-full max-w-xl shadow-md"
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>
        <section className="why section-2-columns py-16 md:py-24 bg-[var(--color-primary)] text-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="wrapper">
              <div className="col12">
                <div className="why__wrapper grid gap-12 md:grid-cols-2 md:items-start">

                  {/* LEFT COLUMN — TEXT BLOCK */}
                  <div className="why__text space-y-6">
                    <h2 className="why-title section_title text-5xl md:text-5xl font-extrabold text-[--color-text]">
                      What Is Ecommerce Software?
                    </h2>

                    <p className="text-[--color-muted] leading-relaxed text-base md:text-lg text-white/70">
                      At Develux, we offer ecommerce development services; our tailored solutions
                      are designed to align with your business goals. Don’t limit yourself to an
                      off-the-shelf product; our custom ecommerce development solutions are made for you!
                    </p>
                  </div>

                  {/* RIGHT COLUMN — LIST BLOCK */}
                  <div className="why__img space-y-4 text-white/70">

                    <p className="leading-relaxed text-base md:text-lg text-white">
                      Ecommerce software forms the backbone of your online store. They allow you to:
                    </p>

                    <ul className="space-y-3 text-[--color-text]">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[--color-primary]"></span>
                        Create a website for selling products
                      </li>

                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[--color-primary]"></span>
                        Manage your inventory
                      </li>

                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[--color-primary]"></span>
                        Accept and process transactions
                      </li>

                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[--color-primary]"></span>
                        Fulfill orders
                      </li>

                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[--color-primary]"></span>
                        Provide users with an intuitive, enjoyable shopping experience
                      </li>
                    </ul>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <ActionSection
            title="Kick Off a Great Store"
            btnLabel="Let’s Start"
            btnHref="/contact-us"
            bgColor="bg-[--color-primary]"
            textColor="text-white"
            // className="mt-20"
            icon={
              <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                <circle cx="130" cy="50" r="36" fill="black" />
              </svg>
            }
        />
        <section className="service-blocks py-20 bg-[--color-bg]">
          <div className="container mx-auto max-w-7xl px-6">

            {/* Section Title */}
            <h2 className="service-blocks__title text-3xl md:text-5xl font-extrabold text-center mb-14 text-[--color-text]">
              What eCommerce Development Services Do We Offer?
            </h2>

            {/* Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {/* Item 1 */}
              <div className="service-blocks__item border border-[--color-muted]/30 rounded-2xl p-6 bg-[--color-bg-alt]">
                <div className="service-blocks__item-label text-lg font-semibold text-[--color-text] mb-2">
                  Enhanced User Experience
                </div>
                <div className="service-blocks__item-text text-[--color-muted] text-sm leading-relaxed">
                  Our talented team of UX designers will coordinate with the development team and,
                  taking your overall ecommerce business development strategy into account, lay the
                  foundation for your store’s functionality.
                </div>
              </div>

              {/* Item 2 */}
              <div className="service-blocks__item border border-[--color-muted]/30 rounded-2xl p-6 bg-[--color-bg-alt]">
                <div className="service-blocks__item-label text-lg font-semibold text-[--color-text] mb-2">
                  Ecommerce Site Design
                </div>
                <div className="service-blocks__item-text text-[--color-muted] text-sm leading-relaxed">
                  In the site design phase of our ecommerce web development services, our skilled
                  designers will use illustrations, vivid imagery, and engaging animations — with
                  the goal of increasing engagement and inspiring conversions.
                </div>
              </div>

              {/* Item 3 */}
              <div className="service-blocks__item border border-[--color-muted]/30 rounded-2xl p-6 bg-[--color-bg-alt]">
                <div className="service-blocks__item-label text-lg font-semibold text-[--color-text] mb-2">
                  Ecommerce Site Development
                </div>
                <div className="service-blocks__item-text text-[--color-muted] text-sm leading-relaxed">
                  Our Deveteria ecommerce development team will use custom, responsible functionality
                  to bring your site design to life.
                </div>
              </div>

              {/* Item 4 */}
              <div className="service-blocks__item border border-[--color-muted]/30 rounded-2xl p-6 bg-[--color-bg-alt]">
                <div className="service-blocks__item-label text-lg font-semibold text-[--color-text] mb-2">
                  SEO Optimization
                </div>
                <div className="service-blocks__item-text text-[--color-muted] text-sm leading-relaxed">
                  As part of our ecommerce development SEO service, our marketing team coordinates
                  with your developers, optimizing your site’s content so it will be found by the
                  right consumers.
                </div>
              </div>

              {/* Item 5 */}
              <div className="service-blocks__item border border-[--color-muted]/30 rounded-2xl p-6 bg-[--color-bg-alt]">
                <div className="service-blocks__item-label text-lg font-semibold text-[--color-text] mb-2">
                  Quality Assurance
                </div>
                <div className="service-blocks__item-text text-[--color-muted] text-sm leading-relaxed">
                  As part of the Quality Assurance ecommerce service, we optimize your buttons,
                  calls-to-action, and other UI elements, ensuring your site’s performance is the
                  best it can be.
                </div>
              </div>

              {/* Item 6 */}
              <div className="service-blocks__item border border-[--color-muted]/30 rounded-2xl p-6 bg-[--color-bg-alt]">
                <div className="service-blocks__item-label text-lg font-semibold text-[--color-text] mb-2">
                  Consumer Optimization
                </div>
                <div className="service-blocks__item-text text-[--color-muted] text-sm leading-relaxed">
                  From navigation to design, product descriptions to blog content, every aspect
                  of your site will guide visitors toward making a purchase.
                </div>
              </div>

              {/* Item 7 */}
              <div className="service-blocks__item border border-[--color-muted]/30 rounded-2xl p-6 bg-[--color-bg-alt]">
                <div className="service-blocks__item-label text-lg font-semibold text-[--color-text] mb-2">
                  Post-Launch Support
                </div>
                <div className="service-blocks__item-text text-[--color-muted] text-sm leading-relaxed">
                  From design tweaks to software updates and new features, we ensure your ecommerce
                  site continues performing as well (or better!) than it did on launch day.
                </div>
              </div>

            </div>
          </div>
        </section>
        <ActionSection
            title="Get eCommerce Development"
            btnLabel="Get Started"
            btnHref="/contact-us"
            bgColor="bg-[--color-primary]"
            textColor="text-white"
            // className="mt-20"
            icon={
              <svg width="140" height="80" viewBox="0 0 200 100" fill="none">
                <circle cx="60" cy="50" r="36" stroke="white" strokeWidth="3" />
                <circle cx="95" cy="50" r="36" stroke="white" strokeWidth="3" opacity="0.4" />
                <circle cx="130" cy="50" r="36" fill="black" />
              </svg>
            }
        />

        <section className="py-20 bg-[var(--color-primary)] text-white">
          <div className="container mx-auto max-w-7xl px-6">

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14">
              Our Process
            </h2>

            {/* Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {/* Card 1 */}
              <div className="border border-white/10 rounded-2xl p-8 bg-white text-black">
                <div className="text-[var(--color-primary)] text-3xl font-bold mb-4">1</div>

                <div className="text-2xl font-semibold mb-3">Design</div>

                <p className="text-black/70 leading-relaxed text-sm">
                  As a premier ecommerce development company, we know what makes an attractive
                  website — and how to create one that both looks stunning and performs well.
                  During the design portion of our ecommerce development services, we prioritize
                  your site’s basic elements to ensure engaging user experiences and maximize
                  conversions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-white/10 rounded-2xl p-8 bg-white text-black">
                <div className="text-[var(--color-primary)] text-3xl font-bold mb-4">2</div>

                <div className="text-2xl font-semibold mb-3">Development</div>

                <p className="text-black/70 leading-relaxed text-sm">
                  When providing ecommerce development solutions, our team follows your
                  requirements and creates an interactive website with the highest-quality
                  standards. Your ecommerce platform will align with your business vision and
                  target audience demographics.
                </p>
              </div>

              {/* Card 3 */}
              <div className="border border-white/10 rounded-2xl p-8 bg-white text-black">
                <div className="text-3xl font-bold mb-4 text-[var(--color-primary)]">3</div>

                <div className="text-2xl font-semibold mb-3">Marketing</div>

                <p className="text-black/70 leading-relaxed text-sm">
                  SEO is constantly evolving — but our SEO experts stay ahead of the curve.
                  Throughout your ecommerce development cycle, we provide strategic insights,
                  implement effective optimization techniques, and use conversion testing methods
                  to maximize your organic reach.
                </p>
              </div>

            </div>

          </div>
        </section>

        <FAQ
            title="Ecommerce FAQ"
            items={ecommerceFaq}
        />
      </div>
  );
}
