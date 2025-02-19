import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <section className="w-full pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-center justify-center text-white bg-gradient-to-b from-black to-blue-900">
      <div className="text-center px-4 md:px-8 mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Industrial Automation Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Transforming industries with cutting-edge automation technology
        </p>
        <button 
          onClick={() => router.push('/ContactPage')}
          className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Get Started
        </button>
      </div>
      
      <div className="text-center max-w-4xl px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What we do</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Auttono Tech solves the challenges of fast-growing, disruptive companies by delivering tailored outsourcing solutions. We know what it takes to grow, our team is scaling rapidly. We support the Unicorns of tomorrow with customer experience, sales & marketing and back office support. We are specialised into "Business process management" and "Contact Center".
        </p>
      </div>
    </section>
  );
}
