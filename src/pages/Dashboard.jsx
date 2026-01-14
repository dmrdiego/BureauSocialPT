import { useTranslation } from 'react-i18next';
import { Calendar, Vote, FileText, Bell, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { t } = useTranslation();

    // Mock data representing the original system's summary
    const user = { firstName: "Associado" };
    const summary = {
        upcomingAssemblies: 1,
        pendingVotes: 2,
        recentDocuments: 5,
        unreadNotifications: 3,
        assemblies: [
            { id: 1, titulo: "Assembleia-Geral Ordinária 2025", status: "scheduled", dataAssembleia: "2025-03-25T18:30:00" }
        ],
        votingItems: [
            { id: 1, titulo: "Aprovação de Contas 2024", descricao: "Deliberação sobre o relatório e contas do exercício de 2024.", status: "aberta" },
            { id: 2, titulo: "Eleição da Mesa da Assembleia", descricao: "Eleição para o biénio 2025-2027.", status: "aberta" }
        ],
        documents: [
            { id: 1, titulo: "Estatutos IPNS 2024", tipo: "Regulamento", createdAt: "2024-12-01" },
            { id: 2, titulo: "Ata Assembleia Dezembro", tipo: "Ata", createdAt: "2024-12-15" }
        ]
    };

    const StatCard = ({ title, value, icon: Icon, colorClass }) => (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${colorClass}`}>
                    <Icon size={24} />
                </div>
                <span className="text-3xl font-bold text-gray-900">{value}</span>
            </div>
            <h3 className="text-gray-500 font-medium">{title}</h3>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <header className="mb-10">
                    <h1 className="text-4xl font-bold text-primary mb-2">
                        {t('dashboard.welcome', { name: user.firstName })}
                    </h1>
                    <p className="text-xl text-gray-500">{t('dashboard.summary')}</p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <StatCard
                        title={t('dashboard.upcomingAssemblies')}
                        value={summary.upcomingAssemblies}
                        icon={Calendar}
                        colorClass="bg-blue-50 text-blue-600"
                    />
                    <StatCard
                        title={t('dashboard.pendingVotes')}
                        value={summary.pendingVotes}
                        icon={Vote}
                        colorClass="bg-amber-50 text-amber-600"
                    />
                    <StatCard
                        title={t('dashboard.recentDocuments')}
                        value={summary.recentDocuments}
                        icon={FileText}
                        colorClass="bg-emerald-50 text-emerald-600"
                    />
                    <StatCard
                        title={t('dashboard.notifications')}
                        value={summary.unreadNotifications}
                        icon={Bell}
                        colorClass="bg-purple-50 text-purple-600"
                    />
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Upcoming Assemblies Section */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900">{t('dashboard.upcomingAssemblies')}</h2>
                            <Link to="/assemblies" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                                {t('dashboard.viewAll')} <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="p-6 space-y-4">
                            {summary.assemblies.map(assembly => (
                                <div key={assembly.id} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                    <div className="bg-primary/5 p-3 rounded-lg text-primary">
                                        <Calendar size={20} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-bold text-gray-900">{assembly.titulo}</h4>
                                            <span className="bg-blue-100 text-blue-700 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                                                {t(`status.${assembly.status}`)}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            {new Date(assembly.dataAssembleia).toLocaleDateString()} - 18:30h
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pending Votes Section */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900">{t('dashboard.pendingVotes')}</h2>
                            <Link to="/voting" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                                {t('dashboard.viewAll')} <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="p-6 space-y-4">
                            {summary.votingItems.map(item => (
                                <div key={item.id} className="p-4 rounded-xl border border-gray-100 hover:border-primary/20 transition-all">
                                    <h4 className="font-bold text-gray-900 mb-1">{item.titulo}</h4>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-1">{item.descricao}</p>
                                    <Link to="/voting" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all">
                                        <Vote size={14} />
                                        {t('dashboard.voteNow')}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Documents Section */}
                <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-900">{t('dashboard.recentDocuments')}</h2>
                        <Link to="/documents" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                            {t('dashboard.viewAll')} <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="p-6 grid md:grid-cols-2 gap-4">
                        {summary.documents.map(doc => (
                            <div key={doc.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                                <div className="bg-gray-100 p-3 rounded-lg text-gray-500">
                                    <FileText size={20} />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-bold text-gray-900 text-sm">{doc.titulo}</h4>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <span className="bg-gray-100 px-1.5 py-0.5 rounded uppercase font-bold text-[9px]">{doc.tipo}</span>
                                        <span>{doc.createdAt}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
