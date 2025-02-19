import Image from 'next/image';

export default function IndustriesPage() {
  const industries = [
    {
      title: "Banking & financial",
      description: "The banking and financial services industry has a brand new avatar as the world moves from everything brick and mortar to digital. We offer a comprehensive range of BPM services across the entire spectrum of banking and financial services to help rein in the cost of processing transactions owing to increased regulatory requirements.",
      icon: "/icons/banking.svg"
    },
    {
      title: "Healthcare",
      description: "We deliver intelligent health operations that improve patient outcomes, keep costs under control and increase consumer and provider engagement. Our services include medical transcription, patient contact and support and all backend data processing for the healthcare industry.",
      icon: "/icons/healthcare.svg"
    },
    {
      title: "Insurance",
      description: "Our digital-led insurance services help businesses scale faster and respond quickly to changing market conditions, achieve improved risk mitigation, reduce indemnity spends, lower cost of service and enhance end-customer experience.",
      icon: "/icons/insurance.svg"
    },
    {
      title: "Retail",
      description: "We enable retail businesses to re-imagine integration of people, data and processes to create competitive advantage in a digital-first world. Our industry specific Retail solutions include 24X7 Customer support, claims and product returns, refund processing and complaint handling.",
      icon: "/icons/retail.svg"
    },
    {
      title: "Telecom",
      description: "The presence of Internet service providers, social media companies and app makers is compelling telecom companies to constantly evolve new business models and innovative offerings to enhance customer experience and reduce customer churn.",
      icon: "/icons/telecom.svg"
    },
    {
      title: "Travel",
      description: "Our solutions span core to non-core functions for companies in this industry, driving business outcomes such as building sustainable customer relationships, improving operational efficiencies, adopting new technologies and entering new markets.",
      icon: "/icons/travel.svg"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industry Diversification</h1>
            <p className="text-xl md:text-2xl mb-8">Outperform with Auttono Tech</p>
            <p className="text-lg max-w-3xl mx-auto">
              Experience the exemplary business process management solutions
            </p>
          </div>
        </div>
      </section>

      {/* What we do Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What we do</h2>
            <p className="text-lg text-gray-600">
              Auttono Tech is an end-to-end bpm outsourcing services provider. With proven capabilities and deep domain expertise, we address your business challenges through our integrated IT and business process outsourcing solutions that address critical business functions.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry diversification</h2>
            <p className="text-lg text-gray-600">
              Every industry has different requirements of outsourcing services. Some need help in sales and others in debt collection. Here is how we help by customizing the services according to the business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Image
                      src={industry.icon}
                      alt={industry.title}
                      width={32}
                      height={32}
                      className="text-blue-600"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 