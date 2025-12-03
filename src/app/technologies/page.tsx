import Dropdown from "../../components/Dropdown";

export default function TechnologiesPage() {
  const items = [
    { label: "Option 1", href: "#" },
    { label: "Option 2", href: "#" },
    { label: "Option 3" },
  ]
  const name_1="Select Option";
  return (
    <main className="bg-[--color-bg] text-[--color-text]">
      <section className="banner_about py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="wrapper grid gap-10 md:grid-cols-2 md:items-center">
            <div className="col6">
              <div className="content_banner space-y-6">
                <h1 className="name_banner text-3xl font-semibold leading-tight md:text-4xl">
                  Technology <br />
                  expertise
                </h1>
                <div className="description_banner text-sm text-[--color-muted]">
                  Create your project with well-chosen tech stacks
                </div>
                <div className="button_banner flex items-center gap-4">
                  <Dropdown
                    name={name_1}
                    items={items}
                  />

                  <a
                    href="#id_footer_form"
                    className="blue_btn banner-btn inline-flex items-center rounded-full bg-[--color-primary] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[--color-secondary]"
                    title="Let’s Cooperate"
                  >
                    Let’s Cooperate
                  </a>
                </div>
              </div>
            </div>

            <div className="col6">
              <div className="image_banner flex justify-center md:justify-end">
                <img
                  width={630}
                  height={470}
                  src="https://develux.com/wp-content/uploads/2023/05/image-04.webp"
                  alt="Technology expertise illustration"
                  className="h-auto w-full max-w-xl rounded-3xl object-cover"
                  // priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technologies / Software Development */}
      <section className="our_technologies bg-[--color-bg-alt] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="wrapper grid gap-12 lg:grid-cols-2">
            {/* Left: tech groups */}
            <div className="col6">
              <div className="tech_wrapper grid gap-8">
                {/* Frontend */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    Frontend
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeJavascript.svg" alt="JavaScript" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeAngular.svg" alt="Angular" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeVue.js.svg" alt="Vue.js" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeCSS.svg" alt="CSS3" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeHTML.svg" alt="HTML5" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeReact.js.svg" alt="React" />
                  </div>
                </div>

                {/* Backend */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    Backend
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/NET.svg" alt=".NET" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/django.svg" alt="Django" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypePHP.svg" alt="PHP" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeGolang.svg" alt="Go" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeNode.js.svg" alt="Node.js" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeJava-1.svg" alt="Java" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/python.svg" alt="Python" />
                  </div>
                </div>

                {/* Mobile */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    Mobile
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/Statedefault-TypeAndroid-StuDio-dagger-Hilt.svg" alt="Android Studio dagger-Hilt" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/Ionic.svg" alt="Ionic" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeObjective-C.svg" alt="Objective-C" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeSwift.svg" alt="Swift" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeKotlin.svg" alt="Kotlin" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeFlutter.svg" alt="Flutter" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeReact-Native.svg" alt="React Native" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeiOS.svg" alt="iOS" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeAndroid.svg" alt="Android" />
                  </div>
                </div>

                {/* Data */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    Data
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/firebase.svg" alt="Firebase" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeElastic-Search.svg" alt="Elastic-Search" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeDynamo-DB.svg" alt="Dynamo-DB" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeGoogle-Cloud-SQL.svg" alt="Google Cloud SQL" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeAzure-SQL.svg" alt="Azure SQL" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeMongo-DB.svg" alt="MongoDB" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypePostgreSQL.svg" alt="PostgreSQL" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeKafka.svg" alt="Kafka" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeSQL.svg" alt="SQL" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeMySQL.svg" alt="MySQL" />
                  </div>
                </div>

                {/* DevOps */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    DevOps
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/CD-tools-1.svg" alt="CI/CD tools" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeTerraform.svg" alt="Terraform" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeKubernetes.svg" alt="Kubernetes" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeDocker.svg" alt="Docker" />
                  </div>
                </div>

                {/* Infrastructure */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    Infrastructure
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeDigital-Ocean.svg" alt="Digital Ocean" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeAzure.svg" alt="Azure" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeGCP.svg" alt="GCP" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeAWS.svg" alt="AWS" />
                  </div>
                </div>

                {/* Fullstack Development */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    Fullstack Development
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/Statedefault-Typenetangular.svg" alt=".NET + Angular" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/statehover.svg" alt="PHP + Vue.js" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/icons-1.svg" alt="Golang + React" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: text + image */}
            <div className="col6">
              <div className="block_text space-y-8">
                <div className="text space-y-3">
                  <div className="title text-xl font-semibold text-[--color-text]">
                    Software Development
                  </div>
                  <div className="desc text-sm leading-relaxed text-[--color-muted]">
                    In order to help clients achieve their business aims, our specialists
                    choose tech stacks depending on project requirements such as scalability,
                    real-time data processing needs, or the level of interactivity. Niche,
                    launch speed, plans for the development of additional functionality and
                    possibilities of budget distribution are also important aspects of tech
                    stack choice.
                  </div>
                </div>
                <div className="image">
                  <img
                    width={630}
                    height={600}
                    src="https://develux.com/wp-content/uploads/2023/05/image-04-2.webp"
                    alt="Software development illustration"
                    className="h-auto w-full rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action block blue (Ready to develop a project?) */}
      <section className="action_block_blue bg-[--color-bg] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="wrapper">
            <div className="col12">
              <div className="flex_action flex flex-col items-center gap-6 rounded-3xl border border-[--color-muted]/20 bg-[--color-bg-alt] px-6 py-10 md:flex-row md:justify-between md:px-10">
                <div className="icon flex-shrink-0">
                  {/* inline SVG copied as-is */}
                  <svg
                    width="188"
                    height="94"
                    viewBox="0 0 188 94"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="140.875" cy="47" rx="47.1253" ry="47" fill="#222222" />
                    <path
                      d="M93.7507 47C93.7507 72.68 72.877 93.5 47.1253 93.5C21.3736 93.5 0.5 72.68 0.5 47C0.5 21.32 21.3736 0.5 47.1253 0.5C72.877 0.5 93.7507 21.32 93.7507 47Z"
                      stroke="white"
                    />
                    <mask
                      id="mask0_384_5810"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="46"
                      y="0"
                      width="95"
                      height="94"
                    >
                      <ellipse cx="93.7497" cy="46.75" rx="46.8747" ry="46.75" fill="black" />
                    </mask>
                    <g mask="url(#mask0_384_5810)">
                      <path d="M31.9609 1.0625H151.278V2.125H31.9609V1.0625Z" fill="white" />
                      <path d="M31.9609 6.375H151.278V7.4375H31.9609V6.375Z" fill="white" />
                      <path d="M31.9609 11.6875H151.278V12.75H31.9609V11.6875Z" fill="white" />
                      <path d="M31.9609 17H151.278V18.0625H31.9609V17Z" fill="white" />
                      <path d="M31.9609 22.3125H151.278V23.375H31.9609V22.3125Z" fill="white" />
                      <path d="M31.9609 27.625H151.278V28.6875H31.9609V27.625Z" fill="white" />
                      <path d="M31.9609 32.9375H151.278V34H31.9609V32.9375Z" fill="white" />
                      <path d="M31.9609 38.25H151.278V39.3125H31.9609V38.25Z" fill="white" />
                      <path d="M31.9609 43.5625H151.278V44.625H31.9609V43.5625Z" fill="white" />
                      <path d="M31.9609 48.875H151.278V49.9375H31.9609V48.875Z" fill="white" />
                      <path d="M31.9609 54.1875H151.278V55.25H31.9609V54.1875Z" fill="white" />
                      <path d="M31.9609 59.5H151.278V60.5625H31.9609V59.5Z" fill="white" />
                      <path d="M31.9609 64.8125H151.278V65.875H31.9609V64.8125Z" fill="white" />
                      <path d="M31.9609 70.125H151.278V71.1875H31.9609V70.125Z" fill="white" />
                      <path d="M31.9609 75.4375H151.278V76.5H31.9609V75.4375Z" fill="white" />
                      <path d="M31.9609 80.75H151.278V81.8125H31.9609V80.75Z" fill="white" />
                      <path d="M31.9609 86.0625H151.278V87.125H31.9609V86.0625Z" fill="white" />
                      <path d="M31.9609 91.375H151.278V92.4375H31.9609V91.375Z" fill="white" />
                    </g>
                  </svg>
                </div>
                <div className="text text-center text-lg font-semibold text-[--color-text] md:text-left md:text-xl">
                  Ready to develop a project?
                </div>
                <div className="button">
                  <a
                    href="#id_footer_form"
                    title="Let’s Start"
                    className="black_btn inline-flex items-center rounded-full bg-[--color-text] px-6 py-3 text-sm font-semibold text-[--color-bg] transition hover:bg-white"
                  >
                    Let’s Start
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technologies / Web Development */}
      <section className="our_technologies bg-[--color-bg-alt] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="wrapper revers grid gap-12 lg:grid-cols-2">
            {/* Left: tech groups (PHP Frameworks, CMS, JS Frameworks, etc.) */}
            <div className="col6">
              <div className="tech_wrapper grid gap-8">
                {/* PHP Frameworks */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    PHP Frameworks
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeSymfony.svg" alt="Symfony" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeLaravel.svg" alt="Laravel" />
                  </div>
                </div>

                {/* CMS */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    CMS
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/wordpress-2.svg" alt="WordPress" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeOpenCart.svg" alt="OpenCart" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeDrupal.svg" alt="Drupal" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeWebflow.svg" alt="Webflow" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeWooCommerce.svg" alt="WooCommerce" />
                  </div>
                </div>

                {/* JavaScript Frameworks */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    JavaScript Frameworks
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeAngular.svg" alt="Angular" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeVue.js.svg" alt="Vue.js" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeReact.js.svg" alt="React" />
                  </div>
                </div>

                {/* HTML5, CSS3 */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    HTML5, CSS3
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeBootstrap.svg" alt="Bootstrap" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeFoundation.svg" alt="Foundation" />
                  </div>
                </div>

                {/* Databases */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    Databases
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/SQlite.svg" alt="SQLite.NET" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/REALM.svg" alt="Realm Mobile Database" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/Core.svg" alt="Core Data" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/REALM.svg" alt="Realm" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/05/SQlite.svg" alt="SQLite" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeMongo-DB.svg" alt="Mongo-DB" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypePostgreSQL.svg" alt="PostgreSQL" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeSQL.svg" alt="SQL" />
                  </div>
                </div>

                {/* Caching systems */}
                <div className="item">
                  <div className="head_name mb-4 text-sm font-semibold text-[--color-text]">
                    Caching systems
                  </div>
                  <div className="caption_logos flex flex-wrap gap-3">
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeMemcached.svg" alt="Memcached" />
                    <TechLogo src="https://develux.com/wp-content/uploads/2023/04/Statedefault-TypeRedis.svg" alt="Redis" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Web Development text + image */}
            <div className="col6">
              <div className="block_text space-y-8">
                <div className="text space-y-3">
                  <div className="title text-xl font-semibold text-[--color-text]">
                    Web Development
                  </div>
                  <div className="desc text-sm leading-relaxed text-[--color-muted]">
                    When choosing tech stacks for web development, we consider the required
                    level of interaction with the user interface, the ability to handle a
                    certain amount of traffic, the degree of security, and the time and cost
                    of development. A deep understanding of these factors helps our team
                    choose a technology package that best meets the client&apos;s needs.
                  </div>
                </div>
                <div className="image">
                  <img
                    width={630}
                    height={600}
                    src="https://develux.com/wp-content/uploads/2023/05/image-04-3.webp"
                    alt="Web development illustration"
                    className="h-auto w-full rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Small helper to keep logo markup DRY */
function TechLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="logo">
      <img
        src={src}
        alt={alt}
        width={80}
        height={80}
        className="h-16 w-16 md:h-20 md:w-20"
        loading="lazy"
      />
    </div>
  );
}
