import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Calculator, User, BookOpen, Home, Map, Mail } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const navItems = [
  { path: '/', label: 'Inicio', icon: Home },
  { path: '/blog', label: 'Blog', icon: BookOpen },
  { path: '/roadmap', label: 'Roadmap', icon: Map },
  { path: '/calculadora', label: 'Calculadora', icon: Calculator },
  { path: '/sobre-mi', label: 'Sobre el proyecto', icon: User },
  { path: '/contacto', label: 'Contacto', icon: Mail },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-accent">{'<'}</span>
            <span className="text-foreground">DevFreelance</span>
            <span className="text-accent">{'/>'}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link key={path} to={path}>
                <Button 
                  variant={location.pathname === path ? 'secondary' : 'ghost'} 
                  size="sm"
                  className="gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menú"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link 
                  key={path} 
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button 
                    variant={location.pathname === path ? 'secondary' : 'ghost'} 
                    className="w-full justify-start gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Button>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
