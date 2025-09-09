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
            <Link to="/contato" className="inline-flex items-center justify-center gap-3 px-4 py-2 rounded-lg text-base font-semibold bg-primary text-white border border-transparent hover:opacity-90 transition">
              Contato
            </Link>
          </div>

        </div>
      </nav>

    </header>
  );
};

export default Header;
