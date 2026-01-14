import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Users, Star } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';

const Join = () => {
    const { t } = useTranslation();

    const categories = [
        {
            title: "Fundador",
            price: "Sob consulta",
            features: [
                "Direito a voto pleno",
                "Participação na direção",
                "Acesso a todos os projetos",
                "Networking estratégico"
            ],
            icon: Star,
            color: "border-amber-500"
        },
        {
            title: "Efetivo",
            price: "€10 / mês",
            features: [
                "Direito a voto pleno",
                "Acesso a documentos internos",
                "Descontos em formações",
                "Participação em assembleias"
            ],
            icon: Shield,
            color: "border-primary"
        },
        {
            title: "Participativo",
            price: "€5 / mês",
            features: [
                "Participação em eventos",
                "Newsletter exclusiva",
                "Acesso a projetos sociais",
                "Voto consultivo"
            ],
            icon: Users,
            color: "border-secondary"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-br from-primary to-secondary text-white py-20"
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">{t('menu.join')}</h1>
                    <p className="text-xl opacity-90 text-balance">Faça parte da nossa rede de impacto socioambiental</p>
                </div>
            </motion.section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-primary">Categorias de Associação</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {categories.map((cat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-white p-8 rounded-xl shadow-lg border-t-8 ${cat.color} flex flex-col h-full`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <cat.icon className="text-primary" size={32} />
                                    <h3 className="text-2xl font-bold">{cat.title}</h3>
                                </div>
                                <div className="text-3xl font-bold mb-8 text-gray-800">{cat.price}</div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {cat.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600">
                                            <CheckCircle className="text-emerald-500 mt-1 shrink-0" size={18} />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                                    Selecionar
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Manifeste o seu interesse</h2>
                        <p className="text-center text-gray-600 mb-12">
                            Preencha o formulário abaixo e nossa equipe entrará em contato para formalizar sua inscrição.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Join;
