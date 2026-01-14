import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const menuItems = [
    { path: '/', label: t('menu.home') },
    { path: '/about', label: t('menu.about') },
    { path: '/projects', label: t('menu.projects') },
    { path: '/housing', label: 'Moradia' },
    { path: '/join', label: t('menu.join') },
    { path: '/documents', label: 'Doc' },
    { path: '/contact', label: t('menu.contact') }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen
            ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-3 shadow-sm'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-4 lg:bg-transparent lg:backdrop-blur-none lg:border-transparent lg:py-6'
          }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className={`text-xl font-semibold tracking-tight transition-colors duration-300 ${scrolled || isMenuOpen ? 'text-gray-900' : 'text-gray-900 lg:text-gray-900'
                }`}>
                Bureau<span className="font-light opacity-80">Social</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-1">
              <ul className="flex items-center gap-1 bg-gray-100/50 p-1 rounded-full backdrop-blur-sm border border-white/50">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
                          }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Language Selector */}
              <div className="ml-4 flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-white/50">
                <button
                  onClick={() => changeLanguage('pt')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${i18n.language === 'pt'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  PT
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${i18n.language === 'en'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  EN
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-2xl font-semibold text-gray-800 py-3 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 mt-6">
                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Idioma</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => { changeLanguage('pt'); setIsMenuOpen(false); }}
                    className={`px-4 py-2 rounded-lg font-medium ${i18n.language === 'pt' ? 'bg-gray-100 text-gray-900' : 'text-gray-400'}`}
                  >
                    Português
                  </button>
                  <button
                    onClick={() => { changeLanguage('en'); setIsMenuOpen(false); }}
                    className={`px-4 py-2 rounded-lg font-medium ${i18n.language === 'en' ? 'bg-gray-100 text-gray-900' : 'text-gray-400'}`}
                  >
                    English
                  </button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
