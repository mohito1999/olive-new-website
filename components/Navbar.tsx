import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white/95 backdrop-blur-md border-stone-200 py-3"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-olive-600 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-olive-100 rounded-full" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-stone-900">Olive</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Case Studies', href: '/case-studies' },
            { name: 'Problem', href: '/#problem' },
            { name: 'Engine', href: '/#engine' },
            { name: 'Modes', href: '/#modes' },
            { name: 'Use Cases', href: '/#use-cases' },
            { name: 'Industries', href: '/#industries' }
          ].map((item) => (
            item.href.startsWith('/') && !item.href.includes('#') ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-stone-600 hover:text-olive-600 transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-stone-600 hover:text-olive-600 transition-colors"
              >
                {item.name}
              </a>
            )
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* <a href="#" className="text-sm font-medium text-stone-900 hover:text-olive-600">Log in</a> */}
          <a href="https://cal.com/mohitatneurix/30min" target="_blank" rel="noopener noreferrer" className="bg-olive-600 hover:bg-olive-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm">
            Book Sprint
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stone-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 p-6 flex flex-col gap-4 shadow-xl">
          {[
            { name: 'Case Studies', href: '/case-studies' },
            { name: 'Problem', href: '/#problem' },
            { name: 'Engine', href: '/#engine' },
            { name: 'Modes', href: '/#modes' },
            { name: 'Use Cases', href: '/#use-cases' },
            { name: 'Industries', href: '/#industries' }
          ].map((item) => (
            item.href.startsWith('/') && !item.href.includes('#') ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-lg font-medium text-stone-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-stone-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            )
          ))}
          <hr className="border-stone-100" />
          {/* <a href="#" className="text-lg font-medium text-stone-900">Log in</a> */}
          <a href="https://cal.com/mohitatneurix/30min" target="_blank" rel="noopener noreferrer" className="bg-olive-600 text-white px-5 py-3 rounded-xl text-base font-medium w-full text-center">
            Book a Solution Sprint
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;