import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from '../components/forms/ContactForm';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-primary to-secondary text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t('menu.contact')}</h1>
          <p className="text-xl opacity-90">Entre em contato conosco</p>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <Mail size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a href="mailto:diego@greencheck.pt" className="text-primary hover:underline">
                  diego@greencheck.pt
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <Phone size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Telefone</h3>
                <a href="tel:+351931721901" className="text-primary hover:underline">
                  +351 931 721 901
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <MapPin size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-lg mb-2">Localização</h3>
                <p className="text-gray-600">Lisboa, Portugal</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">Envie uma Mensagem</h2>
              <ContactForm />

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
