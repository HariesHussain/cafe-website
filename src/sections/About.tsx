import { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-[#0a2e2a] overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a4a42]/20 to-transparent" />
      
      <div className="relative z-10 w-full section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="relative aspect-[4/3] lg:aspect-square">
              {/* Main Image */}
              <div
                className={`absolute top-0 left-0 w-[75%] h-[75%] rounded-2xl overflow-hidden
                          shadow-2xl transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-x-0 rotate-0'
                    : 'opacity-0 -translate-x-20 -rotate-6'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                <img
                  src="/images/about-1.jpg"
                  alt="Authentic Irani Cafe exterior and ambiance"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e2a]/40 to-transparent" />
              </div>

              {/* Secondary Image */}
              <div
                className={`absolute bottom-0 right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden
                          shadow-2xl border-4 border-[#0a2e2a] transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-x-0 rotate-0'
                    : 'opacity-0 translate-x-10 rotate-3'
                }`}
                style={{ 
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transitionDelay: '200ms'
                }}
              >
                <img
                  src="/images/about-2.jpg"
                  alt="Freshly prepared traditional Irani snacks and chai"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e2a]/40 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div 
                className={`absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#d4a574]/40 
                          rounded-full transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{ transitionDelay: '400ms' }}
              />
              <div 
                className={`absolute top-1/4 -right-4 w-16 h-16 bg-[#d4a574]/20 
                          rounded-full transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{ transitionDelay: '500ms' }}
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Label */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <span className="text-[#d4a574] text-sm tracking-[0.3em] uppercase">
                Nandyal
              </span>
            </div>

            {/* Title */}
            <h2
              className={`heading-md text-[#f5e6d3] transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Authentic Taste of Nandyal is Back
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p
                className={`body-md text-white/80 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                Relive the classic flavors with Nandyal – bringing the timeless 
                taste of Irani Chai and more to every corner of India.
              </p>
              <p
                className={`body-md text-white/70 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                Nandyal is your gateway to the authentic and cherished flavors of 
                Irani cafés. Rooted in tradition and infused with a modern twist, we 
                offer a wide range of beverages and snacks that cater to every palate. 
                From the iconic Irani Chai to delicious puffs and refreshing mocktails, 
                Nandyal ensures every bite and sip is a nostalgic journey back to 
                the golden era of taste.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 pt-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              {[
                { value: '100%', label: 'Authentic Taste' },
                { value: '10+', label: 'Years Legacy' },
                { value: '1000+', label: 'Happy Customers' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-serif text-[#d4a574] font-bold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`pt-4 transition-all duration-700 flex flex-wrap items-center gap-6 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <a href="#menu" className="btn-primary inline-block">
                Explore Our Menu
              </a>

              {/* Trust Badges */}
              <div className="flex items-center gap-4 text-white/80 text-sm mt-4 sm:mt-0">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#d4a574]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#d4a574]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Fresh Every Day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
