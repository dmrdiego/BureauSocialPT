import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    { path: '/documents', label: 'Documentos' },
    { path: '/contact', label: t('menu.contact') }
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary tracking-tight">
              Bureau<span className="font-light text-secondary">Social</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${isActive
                      ? 'text-primary font-bold'
                      : 'text-gray-600 hover:text-primary'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Language Selector */}
            <div className="flex items-center gap-2 border-l border-gray-200 pl-6 ml-2">
              <Globe size={18} className="text-gray-400" />
              <button
                onClick={() => changeLanguage('pt')}
                className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${i18n.language === 'pt'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                PT
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${i18n.language === 'en'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-gray-100 py-4">
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4 px-4 pb-4">
              <button
                onClick={() => { changeLanguage('pt'); setIsMenuOpen(false); }}
                className="text-sm font-medium text-gray-600 border px-3 py-1 rounded"
              >
                Português
              </button>
              <button
                onClick={() => { changeLanguage('en'); setIsMenuOpen(false); }}
                className="text-sm font-medium text-gray-600 border px-3 py-1 rounded"
              >
                English
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
