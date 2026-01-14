import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Coins, Handshake } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 lg:py-32 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-8 tracking-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-opacity-90 transition-colors"
              >
                {t('home.hero.cta')}
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                Documentos e Relatórios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1: Projects */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-green-700">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('menu.projects')}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Conheça nossos projetos de regeneração socioambiental, incluindo a Quinta do Visconde de Salreu.
              </p>
              <Link to="/projects" className="text-primary font-semibold hover:underline inline-flex items-center">
                Ver Projetos <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Card 2: Financing */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-700">
                <Coins size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financiamento</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Modelos de captação transparentes e fundos dedicados ao impacto social.
              </p>
              <Link to="/projects" className="text-primary font-semibold hover:underline inline-flex items-center">
                Saiba Mais <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Card 3: Partnerships */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 text-purple-700">
                <Handshake size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Parcerias</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Colabore conosco. Buscamos parceiros alinhados com nossos valores.
              </p>
              <Link to="/join" className="text-primary font-semibold hover:underline inline-flex items-center">
                Seja Parceiro <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="py-20 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Junte-se a nós nesta jornada</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Seja como investidor, parceiro ou apoiador, sua participação é fundamental para o sucesso de nossos projetos.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
