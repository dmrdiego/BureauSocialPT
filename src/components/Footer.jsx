import { useTranslation } from 'react-i18next';
import { Mail, Phone } from 'lucide-react';
import Newsletter from './Newsletter';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.about')}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.about.desc')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <div>
                  <div className="text-sm text-gray-300">{t('footer.email')}</div>
                  <a href="mailto:diego@greencheck.pt" className="hover:text-gray-200">
                    diego@greencheck.pt
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <div>
                  <div className="text-sm text-gray-300">{t('footer.phone')}</div>
                  <a href="tel:+351931721901" className="hover:text-gray-200">
                    +351 931 721 901
                  </a>
                </div>
              </div>
            </div>
            <Newsletter />
          </div>
        </div>


        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
          <p>© {currentYear} Bureau Social. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
