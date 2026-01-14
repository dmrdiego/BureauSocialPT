import { useTranslation } from 'react-i18next';
import { Target, Eye, Heart, Users } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Eye, text: t('about.value1') },
    { icon: Target, text: t('about.value2') },
    { icon: Users, text: t('about.value3') },
    { icon: Heart, text: t('about.value4') }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#044050] to-[#788b92] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-2xl opacity-90">{t('about.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4 text-[#044050] flex items-center gap-3">
                <Target size={32} />
                {t('about.mission.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-4 text-[#044050] flex items-center gap-3">
                <Eye size={32} />
                {t('about.vision.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.vision.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#044050]">
            {t('about.values.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#044050] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="text-white" size={28} />
                </div>
                <p className="text-gray-800 font-medium">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#044050]">
              {t('about.history.title')}
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.history.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#044050]">
            {t('about.team.title')}
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Nossa equipe é composta por profissionais dedicados com experiência em negócios sociais, sustentabilidade e impacto comunitário.
            </p>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-500 italic">
                Seção em desenvolvimento. Em breve apresentaremos nossa equipe completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#044050]">
            {t('about.partners.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-[#044050] rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-[#044050] mb-2">Santa Casa da Misericórdia de Lisboa</h3>
                  <p className="text-gray-600">Parceiro institucional em projetos de habitação social</p>
                </div>
                <div className="border-2 border-[#044050] rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-[#044050] mb-2">GreenCheck</h3>
                  <p className="text-gray-600">Certificação ESG e validação de impacto socioambiental</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#044050] to-[#788b92] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Junte-se a Nós</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Seja parte da transformação social em Portugal. Associe-se ao Bureau Social ou participe dos nossos projetos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/housing"
              className="inline-flex items-center gap-2 bg-white text-[#044050] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Programa de Moradia
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
