import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BlogPage() {
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const allBlogPosts = [
    {
      title: "24/7 Technical Support to Ensure Seamless Operations for Clients",
      excerpt: "In today's fast-paced business world, downtime is not an option. Companies in the USA and…",
      category: "News",
      author: "wpusername0782",
      date: "January 6, 2025",
      image: "/images/blog/technical-support.jpg"
    },
    {
      title: "Cultural Fit in Outsourcing Partnerships is the Key to Long-Term Success",
      excerpt: "In today's globalized business environment, outsourcing has become a cornerstone of operational efficiency and growth…",
      category: "News",
      author: "wpusername0782",
      date: "January 6, 2025",
      image: "/images/blog/cultural-fit.jpg"
    },
    {
      title: "The Art of Debt Collection: Balancing Persistence with Professionalism",
      excerpt: "Debt collection is a critical yet sensitive aspect of business operations that rely on steady…",
      category: "News",
      author: "wpusername0782",
      date: "January 6, 2025",
      image: "/images/blog/debt-collection.jpg"
    },
    {
      title: "Utilizing Data Analytics for Improved Customer Insights",
      excerpt: "In the age of information, data is one of the most valuable assets a company…",
      category: "News",
      author: "wpusername0782",
      date: "January 6, 2025",
      image: "/images/blog/data-analytics.jpg"
    },
    {
      title: "Global Market Expansion Through Outsourcing",
      excerpt: "For businesses, expanding into global markets can unlock new revenue streams and enhance competitiveness. However…",
      category: "News Useful",
      author: "wpusername0782",
      date: "January 6, 2025",
      image: "/images/blog/global-market.jpg"
    },
    {
      title: "Evolving Trends in Outsourcing to Boost Business Efficiency",
      excerpt: "Outsourcing has long been a strategic choice for companies aiming to optimize costs and streamline…",
      category: "News Useful",
      author: "wpusername0782",
      date: "January 6, 2025",
      image: "/images/blog/outsourcing-trends.jpg"
    }
  ];

  const displayedPosts = showAllPosts ? allBlogPosts : allBlogPosts.slice(0, 4);

  const handleLoadMore = () => {
    setShowAllPosts(true);
    setNoMorePosts(true);
  };

  const recentPosts = [
    "Evolving Trends in Outsourcing to Boost Business Efficiency",
    "Global Market Expansion Through Outsourcing",
    "Utilizing Data Analytics for Improved Customer Insights",
    "The Art of Debt Collection: Balancing Persistence with Professionalism",
    "Cultural Fit in Outsourcing Partnerships is the Key to Long-Term Success"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Read our latest insights, news, and articles about business process management and outsourcing
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-8">
              {displayedPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="mx-2">•</span>
                      <span>By {post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      <Link href="#" className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              {!noMorePosts ? (
                <button 
                  onClick={handleLoadMore}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Load More
                </button>
              ) : (
                <p className="text-gray-600 italic">No more posts to load</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h3>
              <ul className="space-y-4">
                {recentPosts.map((title, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      {title}
                    </Link>
                    <div className="text-sm text-gray-500 mt-1">January 6, 2025</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg shadow-lg p-6 mt-8">
              <blockquote className="text-lg font-medium text-gray-900">
                "Read our blogs & articles."
              </blockquote>
              <div className="mt-4 text-blue-600 font-medium">
                - Auttono Tech
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 