import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 text-gray-500 font-sans tracking-wide">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Bureau<span className="font-light">Social</span></h3>
            <p className="max-w-xs leading-relaxed mb-6">
              {t('footer.about.desc')}
            </p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-xs uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-gray-400" />
                <a href="mailto:diego@greencheck.pt" className="hover:text-blue-600 transition-colors">
                  diego@greencheck.pt
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-gray-400" />
                <a href="tel:+351931721901" className="hover:text-blue-600 transition-colors">
                  +351 931 721 901
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-gray-400" />
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
          </div>

          {/* Legal / Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-xs uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Bureau Social. Todos os direitos reservados.</p>
          <p className="text-gray-400">Desenvolvido com impacto.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
