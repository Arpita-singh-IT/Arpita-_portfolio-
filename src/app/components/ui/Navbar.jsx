import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'skills', label: 'skills' },
    { id: 'projects', label: 'projects' },
    { id: 'contact', label: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-emerald-400 font-mono text-lg hover:text-emerald-300 transition-colors"
          >
            {'<AS />'}
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-400 hover:text-emerald-400 transition-colors font-mono text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu - simplified */}
          <div className="md:hidden flex gap-4">
            {navItems.slice(1, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-400 hover:text-emerald-400 transition-colors font-mono text-xs"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
