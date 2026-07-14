import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#d4a574] flex items-center justify-center
                          transition-transform duration-300 group-hover:rotate-[15deg] flex-shrink-0">
              <span className="text-[#d4a574] font-serif text-xs sm:text-sm font-bold">ID</span>
            </div>
            <div>
              <h1 className="font-serif text-lg sm:text-xl md:text-2xl text-[#f5e6d3] font-bold tracking-wide leading-tight">
                Irani Dude
              </h1>
              <p className="text-[10px] sm:text-xs text-[#d4a574] tracking-widest uppercase">
                Vintage Taste is Back
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="relative text-white/80 hover:text-[#d4a574] transition-colors duration-300
                         text-sm font-medium tracking-wide group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4a574]
                               transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/919966166698"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm inline-block animate-pulse-glow"
              aria-label="Contact us on WhatsApp"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#d4a574] hover:text-[#f5e6d3] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-effect border-t border-[rgba(212,165,116,0.2)]
                   transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col py-6 section-padding">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="py-3 text-white/80 hover:text-[#d4a574] transition-colors duration-300
                       text-lg font-medium border-b border-[rgba(212,165,116,0.1)] last:border-0"
              style={{
                animation: isMobileMenuOpen ? `slideUp 0.4s ease-out ${index * 80}ms forwards` : 'none',
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/919966166698"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 w-full text-center inline-block"
            aria-label="Contact us on WhatsApp"
          >
            WhatsApp Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
