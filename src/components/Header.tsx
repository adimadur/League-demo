import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Champions', href: '/champions' },
    { name: 'Game Modes', href: '/game-modes' },
    { name: 'Esports', href: '/esports' },
    { name: 'News', href: '/news' },
    { name: 'Rankings', href: '/rankings' }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-foreground">League of Legends</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-accent font-semibold'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-accent text-accent-foreground hover:bg-accent-600 glow-effect flex items-center gap-2">
              <Download className="h-4 w-4" />
              Play Free Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-accent bg-accent/10 font-semibold'
                      : 'text-foreground hover:text-accent hover:bg-accent/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-600 flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Play Free Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;