import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
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
    { path: '/voting', label: t('menu.voting') },
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-gray-500'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-6 pl-6 border-l border-gray-100">
              {isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 text-sm font-bold text-primary bg-primary/5 px-4 py-2 rounded-xl hover:bg-primary/10 transition-all border border-primary/10"
                  >
                    <User size={16} />
                    {user.firstName}
                  </Link>
                  <button
                    onClick={logout}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    title="Sair"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
                >
                  Acesso Associado
                </Link>
              )}

              <div className="flex items-center gap-3">
                <Globe size={16} className="text-gray-400" />
                <div className="flex gap-2">
                  <button
                    onClick={() => changeLanguage('pt')}
                    className={`text-xs font-bold transition-colors ${i18n.language === 'pt' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
                      }`}
                  >
                    PT
                  </button>
                  <span className="text-gray-200">|</span>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`text-xs font-bold transition-colors ${i18n.language === 'en' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
                      }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>{/* Mobile Menu Button */}
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
            <div className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-2xl font-bold uppercase tracking-widest text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-2xl font-bold uppercase tracking-widest text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Painel ({user.firstName})
                  </Link>
                  <button
                    onClick={() => { logout(); setIsMenuOpen(false); }}
                    className="text-2xl font-bold uppercase tracking-widest text-red-500 text-left"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-2xl font-bold uppercase tracking-widest text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Acesso Associado
                </Link>
              )}
            </div>
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
