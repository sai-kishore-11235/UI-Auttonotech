import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      title: "Business Process Outsourcing (BPO)",
      description: "Many businesses, from small startups to large companies, opt to outsource processes, as new and innovative services are increasingly available in today's ever-changing, highly competitive business climate.",
      features: [
        "Contact Center",
        "Data Processing",
        "Customer support",
        "Inbound",
        "Outbound sales",
        "Tech Support"
      ]
    },
    {
      title: "Knowledge Process Outsourcing (KPO)",
      description: "Knowledge Process Outsourcing (KPO) means information related business task or knowledge-based processes such as research, analysis, consultancy or any other high-level task are outsourced",
      features: [
        "Research services",
        "Customer analysis",
        "Portfolio analysis",
        "Claims processing",
        "Credit underwriting"
      ]
    },
    {
      title: "Human Resource Outsourcing (HRO)",
      description: "HRO, or human resource outsourcing, is an arrangement in which a third-party administers HR on behalf of another business, allowing it to focus more attention on growth-related objectives.",
      features: [
        "Recruitment",
        "Training and development",
        "Contract staffing",
        "Payroll processing",
        "Accounting",
        "Book keeping"
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Exemplary services in Business Process Management
          </h1>
          <p className="text-xl text-center text-gray-600">
            Experience the exemplary business process management solutions
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Advantages Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Auttono Tech Advantages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Skilled Workforce", description: "We hire skilled people with expertise in outsourcing field" },
              { title: "Cost-Effectiveness", description: "Delivering cost-effective solutions without compromising quality" },
              { title: "Level of Expertise", description: "Track record for solving criticalities and providing subpar outsourcing solutions" },
              { title: "Scalability", description: "Known for agility and scalability in continuous delivery" },
              { title: "Turnaround Time", description: "Skilled workforce and latest technologies for lesser turnaround time" },
              { title: "Latest Technology", description: "Offering advanced connectivity, IVR, CRM, and data privacy solutions" }
            ].map((advantage, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}