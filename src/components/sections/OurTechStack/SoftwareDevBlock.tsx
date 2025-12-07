"use client";

import {ReactNode} from "react";

const Card = ({ title, children }: {title: string, children: ReactNode}) => (
    <div className="rounded-2xl border border-[--color-muted]/20 p-6">
        <div className="mb-4 text-xl font-semibold text-[--color-text]">
            {title}
        </div>
        <div className="flex flex-wrap gap-4">{children}</div>
    </div>
);

export const SoftwareDevBlock = () => {
    const width = 45;
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">

            {/* MOBILE */}
            <Card title="Mobile">
                <img width={width} src="/icons/technologies/software_development/mobile/Android%20Studio.svg" />
                <img width={width} src="/icons/technologies/software_development/mobile/Objective-C.svg" />
                <img width={width} src="/icons/technologies/software_development/mobile/Swift.svg" />
                <img width={width} src="/icons/technologies/software_development/mobile/Kotlin.svg" />
                <img width={width} src="/icons/technologies/software_development/mobile/Apple.svg" />
                <img width={width} src="/icons/technologies/software_development/mobile/Android.svg" />
                <img width={width} src="/icons/technologies/software_development/mobile/Ionic.svg" />
            </Card>

            {/* DATA */}
            <Card title="Data">
                <img width={width} src="/icons/technologies/web_development/databases/PostgresSQL.svg" />
                <img width={width} src="/icons/technologies/web_development/databases/MySQL.svg" />
                <img width={width} src="/icons/technologies/web_development/databases/SQLite.svg" />
                <img width={width} src="/icons/technologies/web_development/databases/MongoDB.svg" />
                <img width={width} src="/icons/technologies/software_development/Data/Apache%20Kafka.svg" />
                <img width={width} src="/icons/technologies/software_development/Data/aws-dynamodb-svgrepo-com.svg" />
                <img width={width} src="/icons/technologies/software_development/Data/Azure%20SQL%20Database.svg" />
                <img width={width} src="/icons/technologies/software_development/Data/Elastic%20Search.svg" />
                <img width={width} src="/icons/technologies/software_development/Data/Firebase.svg" />
            </Card>

            {/* DEVOPS */}
            <Card title="DevOps">
                <img width={width} src="/icons/technologies/software_development/DevOps/png-clipart-continuous-integration-devops-continuous-delivery-software-testing-ci-cd-le-bio-au-risque-de-se-perdre-text-logo.png" />
                <img width={width} src="/icons/technologies/software_development/DevOps/HashiCorp%20Terraform.svg" />
                <img width={width} src="/icons/technologies/software_development/DevOps/Kubernetes.svg" />
                <img width={width} src="/icons/technologies/software_development/DevOps/Docker.svg" />
            </Card>

            {/* INFRASTRUCTURE */}
            <Card title="Infrastructure">
                <img width={width} src="/icons/technologies/software_development/Infrastructure/Digital%20Ocean.svg" />
                <img width={width} src="/icons/technologies/software_development/Infrastructure/Azure.svg" />
                <img width={width} src="/icons/technologies/software_development/Infrastructure/Google%20Cloud.svg" />
                <img width={width} src="/icons/technologies/software_development/Infrastructure/AWS.svg" />
            </Card>

            {/* FULLSTACK */}
            <div className="md:col-span-2">
                <div className="rounded-2xl border border-[--color-muted]/20 p-6">
                    <div className="mb-4 text-xl font-semibold text-[--color-text]">
                        Fullstack Development
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <img width={150} src="/icons/technologies/software_development/full-stack/MERN.svg" />
                    </div>
                </div>
            </div>

        </div>
    );
};
