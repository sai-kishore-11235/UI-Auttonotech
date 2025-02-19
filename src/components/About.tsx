import Image from 'next/image';

export default function About() {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            {/* <Image
              src="/images/about-image.jpg"
              alt="Industrial Automation"
              fill
              className="object-cover rounded-lg"
            /> */}
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Auttonotech</h2>
            <p className="text-gray-600 mb-6">
              We are a leading provider of industrial automation solutions, dedicated to 
              transforming manufacturing processes through innovative technology and 
              expert implementation. Our team brings years of experience in PLC programming, 
              SCADA systems, and industrial IoT solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-900">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
