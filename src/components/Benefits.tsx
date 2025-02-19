import Image from 'next/image';

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Outsourcing Benefits
          </h2>
          <p className="text-xl text-gray-600">
            Partner with us to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Cost Efficiency",
              icon: "/icons/cost-efficiency.svg",
              description: "Reduce operational costs while maintaining high-quality service delivery"
            },
            {
              title: "Scalability",
              icon: "/icons/scalability.svg",
              description: "Quickly scale your operations up or down based on business needs"
            },
            {
              title: "Expert Teams",
              icon: "/icons/expert-teams.svg",
              description: "Access to skilled professionals and industry expertise"
            },
            {
              title: "24/7 Operations",
              icon: "/icons/24-7-operations.svg",
              description: "Round-the-clock service availability for global coverage"
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={32}
                  height={32}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 