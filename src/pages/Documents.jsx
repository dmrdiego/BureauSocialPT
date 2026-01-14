import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText, Download, Search } from 'lucide-react';
import { useState } from 'react';

const Documents = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');

    const docs = [
        {
            title: "Material para Artesãos e Artistas",
            category: "Programas",
            path: "/documentos/MATERIAL_ARTESAOS_ARTISTAS_MORADIA.pdf",
            size: "429 KB",
            date: "2025"
        },
        {
            title: "Projeto Técnico Imóvel Graça/Alfama",
            category: "Projetos",
            path: "/documentos/PROJETO_IMOVEL_GRACA_ALFAMA_LISBOA.pdf",
            size: "546 KB",
            date: "2025"
        },
        {
            title: "Relatório de Sinergias Quinta de Salreu",
            category: "Relatórios",
            path: "/documentos/Sinergias_Quinta_Visconde_Salreu.pdf",
            size: "646 KB",
            date: "2025"
        }
    ];

    const filteredDocs = docs.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gradient-to-br from-primary to-secondary text-white py-20"
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Biblioteca de Documentos</h1>
                    <p className="text-xl opacity-90">Transparência e conhecimento ao seu alcance</p>
                </div>
            </motion.section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-12 relative max-w-xl mx-auto">
                            <input
                                type="text"
                                placeholder="Pesquisar documentos..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl border-none shadow-lg focus:ring-2 focus:ring-primary"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredDocs.map((doc, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col"
                                >
                                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                        <FileText size={24} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">{doc.category}</span>
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex-grow leading-tight">{doc.title}</h3>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                        <span>{doc.date}</span>
                                        <span>{doc.size}</span>
                                    </div>
                                    <a
                                        href={doc.path}
                                        download
                                        className="flex items-center justify-center gap-2 bg-[#044050] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                                    >
                                        <Download size={18} />
                                        Download PDF
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        {filteredDocs.length === 0 && (
                            <div className="text-center py-20 text-gray-500">
                                Nenhum documento encontrado para "{searchTerm}"
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Documents;
