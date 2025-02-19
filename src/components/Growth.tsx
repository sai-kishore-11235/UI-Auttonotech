export default function Growth() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powering Growth
          </h2>
          <p className="text-xl text-gray-600">
            Enabling businesses to scale and succeed in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-600 h-96 rounded-lg">
            {/* Placeholder for image or animation */}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Auttono Tech?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Industry-leading expertise and proven track record</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Customized solutions tailored to your business needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Cutting-edge technology and infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Dedicated support and transparent communication</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 