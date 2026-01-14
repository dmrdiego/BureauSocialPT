import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">Bureau<span className="font-light text-secondary">Social</span></h3>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              {t('footer.about.desc')}
            </p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <Mail size={18} className="mt-0.5 text-secondary" />
                <a href="mailto:diego@greencheck.pt" className="hover:text-primary transition-colors">
                  diego@greencheck.pt
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <Phone size={18} className="mt-0.5 text-secondary" />
                <a href="tel:+351931721901" className="hover:text-primary transition-colors">
                  +351 931 721 901
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin size={18} className="mt-0.5 text-secondary" />
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
          </div>

          {/* Legal / Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Bureau Social. Todos os direitos reservados.</p>
          <p>Impacto & Inovação Social</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
