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

          <div className="md:hidden">
            <Link to="/contato" aria-label="Contato" className="inline-flex items-center justify-center gap-3 px-4 py-2 rounded-lg text-base font-semibold bg-transparent text-white border border-white hover:bg-white/5 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .002 5.373 0 12a12 12 0 001.86 6.03L0 24l6.15-1.61A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-2.98-1.06-5.72-2.48-7.52zM12 22c-1.95 0-3.86-.5-5.52-1.44l-.39-.22-3.65.96.98-3.56-.25-.37A9.98 9.98 0 012 12c0-5.52 4.48-10 10-10 2.7 0 5.2 1.05 7.07 2.93A9.95 9.95 0 0122 12c0 5.52-4.48 10-10 10zM17.3 14.25c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.015-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.8-.2-.48-.4-.4-.54-.4-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3s-.84.82-.84 2 .86 2.34.98 2.5c.12.16 1.7 2.6 4.12 3.64 1.62.7 2.28.78 3.09.66.5-.08 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
              </svg>
              <span>Contato</span>
            </Link>
          </div>

        </div>
      </nav>

    </header>
  );
};

export default Header;
