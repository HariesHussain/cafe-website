import { useEffect, useRef, useState } from 'react';

const menuCategories = [
  { name: 'Cold Coffee', image: '/images/menu-coldcoffee.jpg' },
  { name: 'Lassi', image: '/images/menu-lassi.jpg' },
  { name: 'Milkshakes', image: '/images/menu-milkshake.jpg' },
  { name: 'Mocktails', image: '/images/menu-mocktail.jpg' },
  { name: 'Thickshakes', image: '/images/menu-thickshake.jpg' },
  { name: 'Irani\'s Special', image: '/images/menu-iranispecial.jpg' },
  { name: 'French Fries', image: '/images/menu-fries.jpg' },
  { name: 'Puffs', image: '/images/menu-puffs.jpg' },
  { name: 'Samosa', image: '/images/menu-samosa.jpg' },
  { name: 'Sandwich', image: '/images/menu-sandwich.jpg' },
  { name: 'Biscuits', image: '/images/menu-biscuits.jpg' },
  { name: 'Irani\'s Maggi', image: '/images/menu-maggi.jpg' },
];

const Menu = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-[#0a2e2a] overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#d4a574]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-[#d4a574] text-sm tracking-[0.3em] uppercase mb-4
                       transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            Our Menu
          </span>
          <h2
            className={`heading-md text-[#f5e6d3] transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Discover Our Delicious Offerings
          </h2>
          <p
            className={`body-md text-white/70 max-w-2xl mx-auto mt-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            From traditional Irani chai to modern mocktails, explore our wide range of 
            beverages and snacks crafted with love and authenticity.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {menuCategories.map((category, index) => (
            <div
              key={category.name}
              className={`group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer
                        transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${300 + index * 80}ms`,
                transitionTimingFunction: 'var(--ease-expo-out)',
              }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={`${category.name} menu item at Nandyal Cafe`}
                  className="w-full h-full object-cover transition-transform duration-700
                           group-hover:scale-110"
                  loading="lazy"
                  style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e2a] via-[#0a2e2a]/40 to-transparent
                            opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-serif text-white font-semibold
                             group-hover:text-[#d4a574] transition-colors duration-300">
                  {category.name}
                </h3>
                
                {/* Hover Indicator */}
                <div className="mt-2 h-0.5 w-0 bg-[#d4a574] transition-all duration-500 group-hover:w-12"></div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border border-[rgba(212,165,116,0.2)] rounded-xl
                            group-hover:border-[rgba(212,165,116,0.5)] transition-colors duration-500" />

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100
                            transition-opacity duration-500">
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#d4a574]" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <button className="btn-outline">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
