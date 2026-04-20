import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Phone, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Contact = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Nandyal, Andhra Pradesh, India',
      href: '#',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@nandyal.com',
      href: 'mailto:info@nandyal.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9966166698',
      href: 'tel:9966166698',
    },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/nandyal' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/nandyal' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-[#0a2e2a] overflow-hidden"
    >
      {/* Main Contact Section */}
      <div className="relative py-20 lg:py-32">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#d4a574]/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full section-padding">
          {/* Large Title */}
          <div className="text-center mb-16">
            <h2
              className={`heading-lg text-[#f5e6d3] transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              Get In Touch
            </h2>
            <p className={`body-md text-white/70 max-w-2xl mx-auto mt-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
              We'd love to hear from you. Drop us a message or visit us in Nandyal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20 lg:mb-32">
            {/* Contact Info */}
            <div className={`flex flex-col justify-center gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: '300ms' }}>
              <div className="grid sm:grid-cols-1 gap-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center p-5 rounded-xl bg-[#1a4a42]/30 border border-[rgba(212,165,116,0.2)] hover:border-[rgba(212,165,116,0.5)] hover:bg-[#1a4a42]/50 transition-all duration-300 gap-5"
                  >
                    <div className="w-14 h-14 flex-shrink-0 rounded-full bg-[#d4a574]/10 flex items-center justify-center group-hover:bg-[#d4a574]/20 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-[#d4a574]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-white/50 mb-1 uppercase tracking-wider">{item.label}</span>
                      <span className="text-white text-base group-hover:text-[#d4a574] transition-colors duration-300 break-all">
                        {item.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className={`w-full min-h-[350px] rounded-2xl overflow-hidden border border-[rgba(212,165,116,0.2)] relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '500ms' }}>
              <iframe
                src="https://www.google.com/maps?q=Nandyal,+Andhra Pradesh,+India&hl=en&z=12&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location of Nandyal Cafe"
              ></iframe>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(212,165,116,0.3)] to-transparent mb-12" />

          {/* Bottom Section */}
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Brand */}
            <div
              className={`text-center md:text-left transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#d4a574] flex items-center justify-center">
                  <span className="text-[#d4a574] font-serif text-sm font-bold">N</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#f5e6d3] font-bold">Nandyal</h3>
                  <p className="text-xs text-[#d4a574] tracking-wider uppercase">Vintage Taste is Back</p>
                </div>
              </div>
              <p className="text-sm text-white/60 max-w-xs">
                Bringing the authentic flavors of Irani cafés to every corner of India.
              </p>
            </div>

            {/* Quick Links */}
            <div
              className={`text-center transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <h4 className="text-[#d4a574] text-sm tracking-wider uppercase mb-4">Quick Links</h4>
              <nav className="flex flex-wrap justify-center gap-4">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/60 hover:text-[#d4a574] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div
              className={`text-center md:text-right transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <h4 className="text-[#d4a574] text-sm tracking-wider uppercase mb-4">Follow Us</h4>
              <div className="flex justify-center md:justify-end gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1a4a42]/50 border border-[rgba(212,165,116,0.2)]
                             flex items-center justify-center text-white/60
                             hover:bg-[#d4a574] hover:text-[#0a2e2a] hover:border-[#d4a574]
                             hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative py-6 border-t border-[rgba(212,165,116,0.1)]">
        <div className="w-full section-padding">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50 text-center sm:text-left">
              © 2024 <span className="text-[#d4a574]">Nandyal</span> | All Rights Reserved.
            </p>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-white/50 hover:text-[#d4a574]
                       transition-colors duration-300"
            >
              <span>Back to Top</span>
              <div className="w-8 h-8 rounded-full bg-[#1a4a42]/50 border border-[rgba(212,165,116,0.2)]
                            flex items-center justify-center group-hover:bg-[#d4a574] group-hover:border-[#d4a574]
                            group-hover:text-[#0a2e2a] transition-all duration-300">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
