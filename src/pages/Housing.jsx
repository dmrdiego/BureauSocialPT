import { useTranslation } from 'react-i18next';
import { Download, Home, Users, Heart, Briefcase } from 'lucide-react';
import ApplicationForm from '../components/forms/ApplicationForm';

export default function Housing() {
  const { t } = useTranslation();

  const professions = [
    {
      icon: Briefcase,
      title: t('housing.professions.construction'),
      desc: t('housing.professions.construction.desc'),
      color: 'bg-amber-500'
    },
    {
      icon: Heart,
      title: t('housing.professions.arts'),
      desc: t('housing.professions.arts.desc'),
      color: 'bg-rose-500'
    },
    {
      icon: Users,
      title: t('housing.professions.performance'),
      desc: t('housing.professions.performance.desc'),
      color: 'bg-purple-500'
    },
    {
      icon: Home,
      title: t('housing.professions.crafts'),
      desc: t('housing.professions.crafts.desc'),
      color: 'bg-teal-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#044050] to-[#788b92] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t('housing.hero.title')}</h1>
            <p className="text-2xl mb-8 opacity-90">{t('housing.hero.subtitle')}</p>
            <p className="text-lg mb-8 opacity-80">{t('housing.description')}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/documentos/MATERIAL_ARTESAOS_ARTISTAS_MORADIA.pdf"
                download
                className="inline-flex items-center gap-2 bg-white text-[#044050] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Download size={20} />
                {t('housing.download')}
              </a>
              <a
                href="#application"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {t('housing.apply')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#044050]">
            {t('housing.professions.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {professions.map((prof, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${prof.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <prof.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{prof.title}</h3>
                <p className="text-gray-600">{prof.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#044050]">
            {t('housing.how.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#044050] to-[#788b92] text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{t('housing.how.offer.title')}</h3>
              <p className="text-lg opacity-90">{t('housing.how.offer.desc')}</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">{t('housing.how.receive.title')}</h3>
              <p className="text-lg opacity-90">{t('housing.how.receive.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#044050]">
            {t('housing.options.title')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white border-l-4 border-green-500 p-6 rounded-lg shadow">
              <p className="text-lg font-semibold text-gray-800">{t('housing.option.a')}</p>
            </div>
            <div className="bg-white border-l-4 border-yellow-500 p-6 rounded-lg shadow">
              <p className="text-lg font-semibold text-gray-800">{t('housing.option.b')}</p>
            </div>
            <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow">
              <p className="text-lg font-semibold text-gray-800">{t('housing.option.c')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="py-20 bg-gradient-to-br from-[#044050] to-[#788b92]">
        <div className="container mx-auto px-4">
          <ApplicationForm />
        </div>
      </section>

    </div>
  );
}
