import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/hero-4.jpg',
  '/images/hero-5.jpg',
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextSlide();
    }
    if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0a2e2a]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2e2a] via-[#0f3d38] to-[#0a2e2a]" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a574] rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4a574] rounded-full blur-[150px] animate-float" 
             style={{ animationDelay: '-3s' }} />
      </div>

      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full section-padding py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-6">
                {/* Subtitle */}
                <p 
                  className="text-[#d4a574] text-lg sm:text-xl tracking-[0.3em] uppercase animate-fade-in"
                  style={{ animationDelay: '0.3s' }}
                >
                  Sip into
                </p>
                
                {/* Main Title */}
                <h1 className="heading-xl text-[#f5e6d3] text-shadow-gold animate-slide-up"
                    style={{ animationDelay: '0.6s' }}>
                  Authentic<br />Irani Cafe
                </h1>
                
                {/* Tagline */}
                <p 
                  className="body-lg text-white/70 max-w-md mx-auto lg:mx-0 animate-slide-up"
                  style={{ animationDelay: '0.8s' }}
                >
                  Timeless Refreshment, Irani Style. Experience the authentic flavors of traditional Irani Chai and snacks in Nandyal.
                </p>
                
                {/* CTA Buttons */}
                <div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-scale-in"
                  style={{ animationDelay: '1s' }}
                >
                  <button onClick={scrollToMenu} className="btn-primary" aria-label="Explore our menu">
                    Explore Menu
                  </button>
                  <a 
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-outline inline-flex items-center justify-center"
                    aria-label="Find us"
                  >
                    Visit Us
                  </a>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center lg:justify-start gap-2 mt-12">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentSlide(index);
                        setTimeout(() => setIsAnimating(false), 800);
                      }
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? 'w-12 bg-[#d4a574]'
                        : 'w-4 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Content - Carousel */}
            <div className="order-1 lg:order-2 relative">
              <div 
                className="relative aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden
                            shadow-2xl shadow-black/50 border border-[rgba(212,165,116,0.2)]"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* Images */}
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-800 ${
                      index === currentSlide
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                    style={{
                      transitionTimingFunction: 'var(--ease-expo-out)',
                    }}
                  >
                    <img
                      src={image}
                      alt={`Nandyal Cafe in Nandyal - View ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e2a]/60 via-transparent to-transparent" />
                  </div>
                ))}

                {/* Carousel Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                           bg-black/30 backdrop-blur-sm border border-white/20
                           flex items-center justify-center text-white
                           hover:bg-[#d4a574] hover:border-[#d4a574] hover:text-[#0a2e2a]
                           transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                           bg-black/30 backdrop-blur-sm border border-white/20
                           flex items-center justify-center text-white
                           hover:bg-[#d4a574] hover:border-[#d4a574] hover:text-[#0a2e2a]
                           transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Slide Counter */}
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full
                              bg-black/40 backdrop-blur-sm border border-white/10">
                  <span className="text-[#d4a574] font-medium">
                    {String(currentSlide + 1).padStart(2, '0')}
                  </span>
                  <span className="text-white/50 mx-2">/</span>
                  <span className="text-white/50">
                    {String(heroImages.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-[#d4a574]/30 rounded-full" />
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#d4a574]/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a2e2a] to-transparent" />
    </section>
  );
};

export default Hero;
