import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, Users, FileText, ChevronRight } from 'lucide-react';

const Assemblies = () => {
    const { t } = useTranslation();

    const assembliesList = [
        {
            id: 1,
            title: "Assembleia-Geral Ordinária 2025",
            date: "25 de Março de 2025, 18:30",
            location: "Sede Bureau Social, Lisboa",
            status: "scheduled",
            type: "Ordinária",
            quorum: "50%"
        },
        {
            id: 2,
            title: "Assembleia Extraordinária de Orçamento",
            date: "10 de Janeiro de 2025, 14:00",
            location: "Online / Microsoft Teams",
            status: "closed",
            type: "Extraordinária",
            quorum: "30%"
        }
    ];

    const getStatusBadge = (status) => {
        switch (status) {
            case 'scheduled':
                return <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{t('status.scheduled')}</span>;
            case 'active':
                return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{t('status.active')}</span>;
            default:
                return <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-bold uppercase">{t('status.closed')}</span>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4">{t('menu.assemblies')}</h1>
                    <p className="text-xl text-gray-600">Calendário e atas das reuniões deliberativas do Bureau Social.</p>
                </header>

                <div className="grid gap-6">
                    {assembliesList.map((assembly) => (
                        <div key={assembly.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all group">
                            <div className="p-8 md:flex items-center justify-between gap-8">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-4">
                                        {getStatusBadge(assembly.status)}
                                        <span className="text-sm font-medium text-gray-400">{assembly.type}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                        {assembly.title}
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={18} className="text-primary" />
                                            <span>{assembly.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={18} className="text-primary" />
                                            <span>{assembly.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users size={18} className="text-primary" />
                                            <span>Quórum Mínimo: {assembly.quorum}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 md:mt-0 flex gap-3">
                                    {assembly.status === 'closed' ? (
                                        <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                                            <FileText size={18} />
                                            Ata (PDF)
                                        </button>
                                    ) : (
                                        <button className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">
                                            Ver Detalhes
                                            <ChevronRight size={18} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Assemblies;
