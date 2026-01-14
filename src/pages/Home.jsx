import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Coins, Handshake } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-apple-gray-50 text-apple-gray-600 font-sans selection:bg-apple-blue selection:text-white pt-20">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 lg:py-48 flex flex-col items-center justify-center text-center px-6">
        {/* Subtle Background Mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-blue-100/50 via-purple-100/30 to-teal-100/50 rounded-full blur-3xl -z-10 opacity-60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-8 leading-[1.1]">
            <span className="block">{t('home.hero.title')}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
              Impacto Real.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            {t('home.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/projects"
              className="px-8 py-4 rounded-full bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-gray-200/50 flex items-center gap-2"
            >
              {t('home.hero.cta')}
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold text-lg hover:bg-gray-50 border border-gray-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              Documentos
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">

          {/* Main Feature - Projects (Large Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-sm border border-gray-100 lg:col-span-2 flex flex-col justify-between hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                <Leaf size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('menu.projects')}</h3>
              <p className="text-lg text-gray-500 max-w-md">
                Conheça nossos projetos de regeneração socioambiental, incluindo a Quinta do Visconde de Salreu.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-tl from-green-50 to-transparent -z-0 opacity-50 group-hover:scale-110 transition-transform duration-700 origin-bottom-right" />
            <div className="relative z-10 mt-8">
              <Link to="/projects" className="inline-flex items-center text-gray-900 font-semibold text-lg hover:gap-3 transition-all">
                Explorar Projetos <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Secondary Feature - Financing (Tall Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-gray-900 text-white p-10 shadow-xl border border-gray-800 flex flex-col justify-between hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gray-700/50 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <Coins size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Financiamento</h3>
              <p className="text-gray-400">
                Transparência total em nossos modelos de captação e fundos.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 mt-8">
              <Link to="/projects#financing" className="inline-flex items-center text-white font-semibold text-lg hover:gap-3 transition-all">
                Ver Modelos <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Third Feature - Partnerships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 lg:col-span-1"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Handshake size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Parcerias</h3>
              <p className="text-lg text-gray-500">
                Junte-se a nós e faça parte desta transformação social.
              </p>
            </div>
            <div className="relative z-10 mt-8">
              <Link to="/join" className="inline-flex items-center text-gray-900 font-semibold text-lg hover:gap-3 transition-all">
                Seja Parceiro <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Call to Action - Join */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-50 to-indigo-50 p-10 shadow-sm border border-blue-100 lg:col-span-2 flex items-center justify-between hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative z-10 max-w-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Pronto para colaborar?</h3>
              <p className="text-lg text-gray-600">
                Entre em contato conosco e descubra como podemos trabalhar juntos.
              </p>
            </div>
            <div className="relative z-10">
              <Link to="/contact" className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <ArrowRight size={28} />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Home;
