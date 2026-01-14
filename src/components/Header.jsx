import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const menuItems = [
    { path: '/', label: t('menu.home') },
    { path: '/about', label: t('menu.about') },
    { path: '/projects', label: t('menu.projects') },
    { path: '/housing', label: 'Programa Moradia' },
    { path: '/join', label: t('menu.join') },
    { path: '/documents', label: 'Documentos' },
    { path: '/contact', label: t('menu.contact') }
  ];

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold">Bureau Social</div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-gray-200 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="flex items-center gap-2 border-l border-white/30 pl-6">
              <Globe size={20} />
              <button
                onClick={() => changeLanguage('pt')}
                className={`px-3 py-1 rounded ${i18n.language === 'pt' ? 'bg-white text-primary' : 'hover:bg-white/10'
                  }`}
              >
                PT
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-white text-primary' : 'hover:bg-white/10'
                  }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-white/20 pt-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 hover:text-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/20">
              <Globe size={20} />
              <button
                onClick={() => {
                  changeLanguage('pt');
                  setIsMenuOpen(false);
                }}
                className={`px-3 py-1 rounded ${i18n.language === 'pt' ? 'bg-white text-primary' : 'hover:bg-white/10'
                  }`}
              >
                PT
              </button>
              <button
                onClick={() => {
                  changeLanguage('en');
                  setIsMenuOpen(false);
                }}
                className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-white text-primary' : 'hover:bg-white/10'
                  }`}
              >
                EN
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
