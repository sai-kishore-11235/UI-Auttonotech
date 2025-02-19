import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/images/Auttono-Tech-Final-Logo.png"
                alt="Auttono Tech Logo"
                width={180}
                height={60}
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/ServicesPage" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/IndustriesPage" className="text-gray-700 hover:text-blue-600">Industries</Link>
            <Link href="/BlogPage" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link href="/ContactPage" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
