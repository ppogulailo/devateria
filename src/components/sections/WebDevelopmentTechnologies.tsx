import { Card } from "./OurTechStack/WebDevBlock";

export const WebDevelopmentTechnologies = () => {
    const width = 60;
    return (
<section className="py-24 ">
    <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-6">
            Web Development Technology Expertise
        </h2>

        <p className="text-center max-w-3xl mx-auto text-black/70 mb-16">
            Let us help take your business to the next level by conducting web development
            services with the right tech stacks for your unique requirements. You can rely
            on our technology expertise to ensure the most professional development practices.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* PHP FRAMEWORKS */}
            <Card title="PHP Frameworks">
                <img width={width} src="/icons/technologies/web_development/backend/Symfony.png" />
                <img width={width} src="/icons/technologies/web_development/backend/Laravel.png" />
            </Card>

            {/* CMS */}
            <Card title="Frontend">
                <img width={width} src="/icons/technologies/web_development/cms/WordPress.svg" />
                <img width={width} src="/icons/technologies/web_development/cms/Drupal.svg" />
                <img width={width} src="/icons/technologies/web_development/cms/Webflow.svg" />
                <img width={width} src="/icons/technologies/web_development/cms/WooCommerce.svg" />
            </Card>

            {/* JAVASCRIPT FRAMEWORKS */}
            <Card title="JavaScript Frameworks">
                <img width={width} src="/icons/technologies/web_development/frontend/React.svg" />
                <img width={width} src="/icons/technologies/web_development/frontend/angular.svg" />
                <img width={width} src="/icons/technologies/web_development/frontend/Vue.js.svg" />
            </Card>

            {/* HTML & CSS */}
            <Card title="HTML5, CSS3">
                <img width={50} src="/icons/technologies/web_development/frontend/CSS3.svg" />
                <img width={50} src="/icons/technologies/web_development/frontend/HTML5.svg" />
            </Card>

            {/* DATABASES */}
            <Card title="Databases">
                <img width={width} src="/icons/technologies/web_development/databases/PostgresSQL.svg" />
                <img width={width} src="/icons/technologies/web_development/databases/MySQL.svg" />
                <img width={width} src="/icons/technologies/web_development/databases/SQLite.svg" />
                <img width={width} src="/icons/technologies/web_development/databases/MongoDB.svg" />
            </Card>

            {/* CACHING SYSTEMS */}
            <Card title="Caching systems">
                <img width={width} src="/icons/technologies/web_development/caching/Redis.svg" />
            </Card>

        </div>
    </div>
</section>
    )
};