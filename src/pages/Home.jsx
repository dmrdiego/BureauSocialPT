import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-primary to-secondary text-white py-32"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            {t('home.hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg font-semibold"
            >
              {t('home.hero.cta')}
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t('menu.projects')}
              </h3>
              <p className="text-gray-600 mb-4">
                Conheça nossos projetos de impacto socioambiental
              </p>
              <Link
                to="/projects"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
              >
                Ver Projetos
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Financiamento
              </h3>
              <p className="text-gray-600 mb-4">
                Saiba como captamos recursos para projetos sociais
              </p>
              <Link
                to="/projects#financing"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
              >
                Saiba Mais
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Parcerias
              </h3>
              <p className="text-gray-600 mb-4">
                Torne-se parceiro e faça parte da mudança
              </p>
              <Link
                to="/projects#partnership"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
              >
                Seja Parceiro
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
