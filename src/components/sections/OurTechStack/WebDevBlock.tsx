"use client";

import {ReactNode} from "react";
import {Card} from "@/components/ui/card/Card";

export const WebDevBlock = () => {
    const width = 45;
    return (
        <div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {/* FRONTEND */}
                <Card>
                    <div className="rounded-2xl ">
                        <div className="mb-4 text-xl font-semibold text-[--color-text]">
                            <h3>Frontend</h3>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <img width={width} src="/icons/technologies/web_development/frontend/javascript.svg" />
                            <img width={width} src="/icons/technologies/web_development/frontend/angular.svg" />
                            <img width={width} src="/icons/technologies/web_development/frontend/Vue.js.svg" />
                            <img width={width} src="/icons/technologies/web_development/frontend/React.svg" />
                            <img width={width} src="/icons/technologies/web_development/frontend/Next.js.svg" />
                            <img width={width} src="/icons/technologies/web_development/frontend/CSS3.svg" />
                            <img width={width} src="/icons/technologies/web_development/frontend/HTML5.svg" />
                        </div>
                    </div>
                </Card>

                {/* BACKEND */}
                <Card>
                    <div className="rounded-2xl ">
                        <div className="mb-4 text-xl font-semibold text-[--color-text]">
                            <h3>Backend</h3>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <img width={width} src="/icons/technologies/web_development/backend/Node.js.png" />
                            <img width={width} src="/icons/technologies/web_development/backend/Nest.js.png" />
                            <img width={width} src="/icons/technologies/web_development/backend/Express.png" />
                            <img width={width} src="/icons/technologies/web_development/backend/PHP.png" />
                            <img width={width} src="/icons/technologies/web_development/backend/Symfony.png" />
                            <img width={width} src="/icons/technologies/web_development/backend/Laravel.png" />
                            <img width={width} src="/icons/technologies/web_development/backend/Java.png" />
                            <img width={width} src="/icons/technologies/web_development/backend/Laravel.png" />
                        </div>
                    </div>
                </Card>


                {/* CMS */}
                <Card>
                    <div className="rounded-2xl ">
                        <div className="mb-4 text-xl font-semibold text-[--color-text]">
                            <h3>CMS</h3>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <img width={width} src="/icons/technologies/web_development/cms/WordPress.svg" />
                            <img width={width} src="/icons/technologies/web_development/cms/Drupal.svg" />
                            <img width={width} src="/icons/technologies/web_development/cms/Webflow.svg" />
                            <img width={width} src="/icons/technologies/web_development/cms/WooCommerce.svg" />
                        </div>
                    </div>
                </Card>

                {/* JS FRAMEWORKS */}
                <Card>
                    <div className="rounded-2xl ">
                        <div className="mb-4 text-xl font-semibold text-[--color-text]">
                            <h3>JavaScript Frameworks</h3>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <img width={width} src="/icons/technologies/web_development/frontend/angular.svg" />
                            <img width={width} src="/icons/technologies/web_development/frontend/Vue.js.svg" />
                            <img width={width} src="/icons/technologies/web_development/frontend/React.svg" />
                            <img width={width} src="/icons/technologies/web_development/frontend/Next.js.svg" />
                        </div>
                    </div>
                </Card>

                {/* HTML / CSS */}
                <Card>
                    <div className="rounded-2xl ">
                        <div className="mb-4 text-xl font-semibold text-[--color-text]">
                            <h3>HTML5, CSS3</h3>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <img width={width} src="/icons/technologies/web_development/frontend/CSS3.svg" />
                            <img width={width} src="/icons/technologies/web_development/frontend/HTML5.svg" />
                        </div>
                    </div>
                </Card>

                {/* DATABASES */}
                <Card>
                    <div className="rounded-2xl ">
                        <div className="mb-4 text-xl font-semibold text-[--color-text]">
                            <h3>Databases</h3>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <img width={width} src="/icons/technologies/web_development/databases/PostgresSQL.svg" />
                            <img width={width} src="/icons/technologies/web_development/databases/MySQL.svg" />
                            <img width={width} src="/icons/technologies/web_development/databases/SQLite.svg" />
                            <img width={width} src="/icons/technologies/web_development/databases/MongoDB.svg" />
                        </div>
                    </div>
                </Card>

                {/* CACHING */}
                <Card>
                    <div className="rounded-2xl ">
                        <div className="mb-4 text-xl font-semibold text-[--color-text]">
                            <h3>Caching systems</h3>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <img width={width} src="/icons/technologies/web_development/caching/Redis.svg" />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
