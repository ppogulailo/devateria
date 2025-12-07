"use client";

import {ReactNode} from "react";

const Card = ({ title, children }: {title:string, children: ReactNode}) => (
    <div className="rounded-2xl border border-[--color-muted]/20 p-6">
        <div className="mb-4 text-xl font-semibold text-[--color-text]">
            {title}
        </div>
        <div className="flex flex-wrap gap-4">{children}</div>
    </div>
);

export const WebDevBlock = () => {
    const width = 45;
    return (
        <div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {/* FRONTEND */}
                <Card title="Frontend">
                    <img width={width} src="/icons/technologies/web_development/frontend/javascript.svg" />
                    <img width={width} src="/icons/technologies/web_development/frontend/angular.svg" />
                    <img width={width} src="/icons/technologies/web_development/frontend/Vue.js.svg" />
                    <img width={width} src="/icons/technologies/web_development/frontend/React.svg" />
                    <img width={width} src="/icons/technologies/web_development/frontend/Next.js.svg" />
                    <img width={width} src="/icons/technologies/web_development/frontend/CSS3.svg" />
                    <img width={width} src="/icons/technologies/web_development/frontend/HTML5.svg" />
                </Card>

                {/* BACKEND */}
                <Card title="Backend">
                    <img width={width} src="/icons/technologies/web_development/backend/Node.js.png" />
                    <img width={width} src="/icons/technologies/web_development/backend/Nest.js.png" />
                    <img width={width} src="/icons/technologies/web_development/backend/Express.png" />
                    <img width={width} src="/icons/technologies/web_development/backend/PHP.png" />
                    <img width={width} src="/icons/technologies/web_development/backend/Symfony.png" />
                    <img width={width} src="/icons/technologies/web_development/backend/Laravel.png" />
                    <img width={width} src="/icons/technologies/web_development/backend/Java.png" />
                    <img width={width} src="/icons/technologies/web_development/backend/Laravel.png" />
                </Card>


                {/* CMS */}
                <Card title="CMS">
                    <img width={width} src="/icons/technologies/web_development/cms/WordPress.svg" />
                    <img width={width} src="/icons/technologies/web_development/cms/Drupal.svg" />
                    <img width={width} src="/icons/technologies/web_development/cms/Webflow.svg" />
                    <img width={width} src="/icons/technologies/web_development/cms/WooCommerce.svg" />
                </Card>

                {/* JS FRAMEWORKS */}
                <Card title="JavaScript Frameworks">
                    <img width={width} src="/icons/technologies/web_development/frontend/angular.svg" />
                    <img width={width} src="/icons/technologies/web_development/frontend/Vue.js.svg" />
                    <img width={width} src="/icons/technologies/web_development/frontend/React.svg" />
                    <img width={width} src="/icons/technologies/web_development/frontend/Next.js.svg" />
                </Card>

                {/* HTML / CSS */}
                <Card title="HTML5, CSS3">
                    <img width={width} src="/icons/technologies/web_development/frontend/CSS3.svg" />
                    <img width={width} src="/icons/technologies/web_development/frontend/HTML5.svg" />
                </Card>

                {/* DATABASES */}
                <Card title="Databases">
                    <img width={width} src="/icons/technologies/web_development/databases/PostgresSQL.svg" />
                    <img width={width} src="/icons/technologies/web_development/databases/MySQL.svg" />
                    <img width={width} src="/icons/technologies/web_development/databases/SQLite.svg" />
                    <img width={width} src="/icons/technologies/web_development/databases/MongoDB.svg" />
                </Card>
                <div></div>
                {/* CACHING */}
                <Card title="Caching systems">
                    <img width={width} src="/icons/technologies/web_development/caching/Redis.svg" />
                </Card>

            </div>
        </div>
    );
};
