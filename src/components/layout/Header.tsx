import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header
      className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl bg-background/80 shadow-lg ring-1 ring-white/10 border border-white/10",
        isScrolled ? 'backdrop-blur-lg' : 'backdrop-blur-sm'
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold font-heading text-foreground hover:text-primary transition-colors flex items-center"
          >
            <span>Davi Code</span>
            <img
              src="/favicon-dark.png"
              alt="logo"
              className="hidden dark:inline-block w-7 h-7 rounded-md ml-2 object-cover border border-white/10"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative font-medium transition-colors duration-200",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300",
                  "hover:text-primary hover:after:w-full",
                  location.pathname === item.path
                    ? "text-primary after:w-full"
                    : "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((s) => !s)}
              className="text-foreground hover:text-primary transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {!menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay & cascading menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* backdrop */}
          <button
            aria-hidden
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-[9999]"
          />

          <div className="relative flex justify-end h-full">
            <div className={cn(
              'w-full max-w-xs h-full bg-card/95 backdrop-saturate-150 shadow-2xl border-l border-white/10 p-6 z-[10000]',
              mounted ? 'translate-x-0' : 'translate-x-2'
            )}>
              <nav className="mt-10">
                <ul className="flex flex-col gap-4">
                  {navItems.map((item, i) => {
                    const delay = `${i * 80}ms`;
                    return (
                      <li
                        key={item.path}
                        style={{ transitionDelay: delay }}
                        className={cn(
                          'transform transition-all duration-300 ease-out',
                          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        )}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setMenuOpen(false)}
                          className="block text-lg font-medium text-foreground hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
