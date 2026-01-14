import { useTranslation } from 'react-i18next';
import { Download, TreePine, Building2, Zap, Users, Target, Leaf, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

import PhotoGallery from '../components/PhotoGallery';

const Projects = () => {
  const { t } = useTranslation();

  const objectives = [
    {
      icon: TreePine,
      title: t('projects.quinta.obj1.title'),
      desc: t('projects.quinta.obj1.desc'),
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: Building2,
      title: t('projects.quinta.obj2.title'),
      desc: t('projects.quinta.obj2.desc'),
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Zap,
      title: t('projects.quinta.obj3.title'),
      desc: t('projects.quinta.obj3.desc'),
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      icon: Users,
      title: t('projects.quinta.obj4.title'),
      desc: t('projects.quinta.obj4.desc'),
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  const impacts = [
    { value: '5.000', label: t('projects.quinta.impact.trees'), icon: TreePine },
    { value: '300-400', label: t('projects.quinta.impact.co2'), icon: Leaf },
    { value: '30-40', label: t('projects.quinta.impact.jobs'), icon: Users },
    { value: '100+', label: t('projects.quinta.impact.training'), icon: Target }
  ];

  const financingSources = [
    {
      title: t('financing.source1.title'),
      desc: t('financing.source1.desc'),
      icon: '🇪🇺'
    },
    {
      title: t('financing.source2.title'),
      desc: t('financing.source2.desc'),
      icon: '🤝'
    },
    {
      title: t('financing.source3.title'),
      desc: t('financing.source3.desc'),
      icon: '👥'
    },
    {
      title: t('financing.source4.title'),
      desc: t('financing.source4.desc'),
      icon: '💰'
    },
    {
      title: t('financing.source5.title'),
      desc: t('financing.source5.desc'),
      icon: '🌳'
    },
    {
      title: t('financing.source6.title'),
      desc: t('financing.source6.desc'),
      icon: '📚'
    }
  ];

  const partnershipTypes = [
    {
      title: t('partnership.type1.title'),
      desc: t('partnership.type1.desc'),
      icon: '🎯'
    },
    {
      title: t('partnership.type2.title'),
      desc: t('partnership.type2.desc'),
      icon: '💼'
    },
    {
      title: t('partnership.type3.title'),
      desc: t('partnership.type3.desc'),
      icon: '🔬'
    },
    {
      title: t('partnership.type4.title'),
      desc: t('partnership.type4.desc'),
      icon: '🏘️'
    }
  ];

  const partnershipBenefits = [
    t('partnership.benefit1'),
    t('partnership.benefit2'),
    t('partnership.benefit3'),
    t('partnership.benefit4'),
    t('partnership.benefit5'),
    t('partnership.benefit6')
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-primary to-secondary text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            {t('projects.title')}
          </motion.h1>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-xl opacity-90"
          >
            {t('projects.subtitle')}
          </motion.p>
        </div>
      </motion.section>

      {/* Quinta do Visconde de Salreu Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                {t('projects.quinta.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                {t('projects.quinta.subtitle')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('projects.quinta.description')}
              </p>
            </div>

            {/* Download Button */}
            <div className="flex justify-center mb-12">
              <a
                href="/documentos/Sinergias_Quinta_Visconde_Salreu.pdf"
                download
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
              >
                <Download size={24} />
                <span className="font-semibold">{t('projects.quinta.download')}</span>
              </a>
            </div>

            {/* Objectives Grid */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-primary">
                {t('projects.quinta.objectives.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {objectives.map((obj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${obj.color}`}>
                        <obj.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{obj.title}</h4>
                        <p className="text-gray-600">{obj.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Impact Numbers */}
            <div className="mb-16 bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-center mb-8">
                {t('projects.quinta.impact.title')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {impacts.map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <impact.icon size={32} className="mx-auto mb-2" />
                    <div className="text-3xl font-bold mb-1">{impact.value}</div>
                    <div className="text-sm opacity-90">{impact.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Synergy Section */}
            <div className="bg-blue-50 p-8 rounded-xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-center mb-6 text-primary">
                {t('projects.quinta.synergy.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-primary">Bureau Social</h4>
                  <p className="text-gray-700">{t('projects.quinta.synergy.bureau')}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2 text-green-700">GreenCheck</h4>
                  <p className="text-gray-700">{t('projects.quinta.synergy.greencheck')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                {t('financing.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('financing.subtitle')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {t('financing.model.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('financing.model.desc')}
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              {t('financing.sources.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {financingSources.map((source, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{source.icon}</div>
                  <h4 className="font-bold text-lg mb-2 text-primary">{source.title}</h4>
                  <p className="text-gray-600">{source.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-green-50 p-8 rounded-xl border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {t('financing.transparency.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('financing.transparency.desc')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Project Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">
                {t('technical.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('technical.subtitle')}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#044050] to-[#788b92] text-white rounded-2xl p-8 mb-8">
              <p className="text-lg mb-6 opacity-90">
                {t('technical.description')}
              </p>
              <a
                href="/documentos/PROJETO_IMOVEL_GRACA_ALFAMA_LISBOA.pdf"
                download
                className="inline-flex items-center gap-2 bg-white text-[#044050] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                <Download size={20} />
                {t('technical.download')}
              </a>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">€1.1M</div>
                <div className="text-gray-700 font-medium">{t('technical.investment')}</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24-30</div>
                <div className="text-gray-700 font-medium">{t('technical.timeline')}</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">8-10</div>
                <div className="text-gray-700 font-medium">{t('technical.units')}</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">15-20</div>
                <div className="text-gray-700 font-medium">{t('technical.jobs')}</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#044050]">Destaques do Projeto</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {/* ... existing highlights ... */}
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-xl">✓</div>
                  <div>
                    <div className="font-semibold text-gray-800">Restauro com Técnicas Tradicionais</div>
                    <div className="text-gray-600 text-sm">Mestres pedreiros portugueses e materiais compatíveis</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-xl">✓</div>
                  <div>
                    <div className="font-semibold text-gray-800">Habitação Social</div>
                    <div className="text-gray-600 text-sm">Programa de moradia para artesãos e artistas</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-xl">✓</div>
                  <div>
                    <div className="font-semibold text-gray-800">Espaços Culturais</div>
                    <div className="text-gray-600 text-sm">Oficinas, ateliês e salas de formação</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-xl">✓</div>
                  <div>
                    <div className="font-semibold text-gray-800">Certificação ESG</div>
                    <div className="text-gray-600 text-sm">Validação de impacto via GreenCheck</div>
                  </div>
                </div>
              </div>
            </div>

            <PhotoGallery />

          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                {t('partnership.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('partnership.subtitle')}
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              {t('partnership.types.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{type.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-primary">{type.title}</h4>
                      <p className="text-gray-600">{type.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                {t('partnership.benefits.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {partnershipBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg"
                  >
                    <div className="text-green-600">✓</div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
              >
                <TrendingUp size={24} />
                <span className="font-semibold">{t('partnership.cta')}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
