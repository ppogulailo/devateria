export default function AwsPage() {
  return (
    <main className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">AWS Services</h1>
          <p className="text-sm text-gray-600 mt-1">AWS design, migration and managed services.</p>
        </header>

        <section>
          <p className="text-gray-700 leading-relaxed">
            Our AWS expertise covers compute (EC2, Lambda), storage (S3, EFS), databases (RDS,
            DynamoDB), networking and monitoring. We help plan migrations, optimise architectures
            for cost and performance, and implement secure, production-ready deployments.
          </p>
        </section>
      </div>
    </main>
  );
}

