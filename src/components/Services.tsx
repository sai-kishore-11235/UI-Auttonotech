import Image from 'next/image';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Results-focused Contact Center
          </h2>
          <p className="text-xl text-gray-600">
            Delivering exceptional customer experiences through our comprehensive contact center solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Customer Support",
              icon: "/icons/customer-support.svg",
              description: "24/7 multilingual support across all channels including voice, email, chat, and social media"
            },
            {
              title: "Sales & Marketing",
              icon: "/icons/sales-marketing.svg",
              description: "Lead generation, telemarketing, and customer acquisition services to drive business growth"
            },
            {
              title: "Back Office Support",
              icon: "/icons/back-office.svg",
              description: "Streamline operations with our efficient back-office processing and management solutions"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
