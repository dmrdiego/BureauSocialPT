import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Search, Download, Filter, ChevronRight, BookOpen, BarChart3, Users, Handshake } from 'lucide-react';

const Documents = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = [
        { id: 'all', label: t('repository.filter.all'), icon: BookOpen },
        { id: 'statutes', label: t('repository.cat.statutes'), icon: BookOpen },
        { id: 'reports', label: t('repository.cat.reports'), icon: BarChart3 },
        { id: 'minutes', label: t('repository.cat.minutes'), icon: Users },
        { id: 'partnership', label: t('repository.cat.partnership'), icon: Handshake }
    ];

    const documentsList = [
        { id: 1, title: "Estatutos IPNS Revisados 2024", category: "statutes", type: "PDF", size: "2.4 MB", date: "2024-12-01" },
        { id: 2, title: "Relatório de Atividades 2023", category: "reports", type: "PDF", size: "5.1 MB", date: "2024-03-15" },
        { id: 3, title: "Plano Estratégico 2024-2027", category: "reports", type: "PDF", size: "3.8 MB", date: "2024-01-10" },
        { id: 4, title: "Ata da Assembleia Geral Ordinária Março", category: "minutes", type: "PDF", size: "1.2 MB", date: "2024-03-25" },
        { id: 5, title: "Regulamento Interno de Moradia", category: "statutes", type: "PDF", size: "1.8 MB", date: "2024-06-20" },
        { id: 6, title: "Protocolo de Parceria IPSS Lisboa", category: "partnership", type: "PDF", size: "2.1 MB", date: "2024-05-12" }
    ];

    const filteredDocs = documentsList.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4">{t('repository.title')}</h1>
                    <p className="text-xl text-gray-600">{t('repository.subtitle')}</p>
                </header>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="lg:w-72 flex-shrink-0">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-32">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Filter size={16} />
                                {t('repository.filter.type')}
                            </h3>
                            <div className="space-y-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeCategory === cat.id
                                                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                                : 'text-gray-500 hover:bg-gray-50'
                                            }`}
                                    >
                                        <cat.icon size={18} />
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-grow">
                        {/* Search Bar */}
                        <div className="relative mb-8">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder={t('repository.search')}
                                className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Document Grid */}
                        <div className="grid md:grid-cols-2 gap-4">
                            {filteredDocs.length > 0 ? (
                                filteredDocs.map((doc) => (
                                    <div key={doc.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="bg-primary/5 p-4 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                <FileText size={24} />
                                            </div>
                                            <div className="flex-grow min-w-0">
                                                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors leading-tight truncate">
                                                    {doc.title}
                                                </h4>
                                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                                    <span className="font-bold bg-gray-50 px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wide">
                                                        {doc.type}
                                                    </span>
                                                    <span>{doc.size}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                            <span className="text-xs text-gray-400 font-medium">Postado em: {doc.date}</span>
                                            <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                                                <Download size={16} />
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center">
                                    <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                                        <Search size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum documento encontrado</h3>
                                    <p className="text-gray-500 font-medium">Tente ajustar sua busca ou categoria.</p>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Documents;
