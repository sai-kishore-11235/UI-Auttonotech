import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/Auttono-Tech-Final-Logo.png"
              alt="Auttono Tech Logo"
              width={180}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-400">
              Transforming businesses through innovative outsourcing solutions and exceptional customer experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@auttonotech.in</li>
              <li>Phone: +91 XXXXXXXXXX</li>
              <li>Location: Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Auttono Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}