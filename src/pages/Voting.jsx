import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThumbsUp, ThumbsDown, Minus, Clock, CheckCircle2, AlertCircle, Users, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Voting = () => {
    const { t } = useTranslation();
    const { user } = useAuth();
    const [votedItems, setVotedItems] = useState({});

    const votingItems = [
        {
            id: 1,
            title: t('voting.proposal1.title'),
            desc: t('voting.proposal1.desc'),
            type: 'Maioria Simples',
            quorum: '50%',
            status: 'aberta',
            results: { favor: 42, against: 5, abstain: 3 }
        },
        {
            id: 2,
            title: t('voting.proposal2.title'),
            desc: t('voting.proposal2.desc'),
            type: 'Maioria Qualificada (2/3)',
            quorum: '66%',
            status: 'aberta',
            results: { favor: 12, against: 2, abstain: 1 }
        }
    ];

    const handleVote = (itemId, choice) => {
        setVotedItems(prev => ({ ...prev, [itemId]: choice }));
    };

    const ResultBar = ({ label, count, total, colorClass }) => {
        const percentage = total > 0 ? (count / total) * 100 : 0;
        return (
            <div className="mb-4">
                <div className="flex justify-between items-center text-sm mb-1">
                    <span className="font-semibold text-gray-700">{label}</span>
                    <span className="text-gray-500">{count} ({percentage.toFixed(1)}%)</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className={`h-full ${colorClass} transition-all duration-1000`}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-5xl">
                <header className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <h1 className="text-4xl font-bold text-primary mb-4">{t('voting.title')}</h1>
                        <p className="text-xl text-gray-600">{t('voting.subtitle')}</p>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex items-center gap-4">
                        <div className="bg-primary text-white p-2 rounded-lg">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase">Identidade Verificada</p>
                            <p className="text-sm font-bold text-primary">{user?.email}</p>
                        </div>
                    </div>
                </header>

                <section className="space-y-8">
                    {votingItems.map((item) => {
                        const userChoice = votedItems[item.id];
                        const totalVotes = item.results.favor + item.results.against + item.results.abstain + (userChoice ? 1 : 0);
                        const displayResults = userChoice;

                        return (
                            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1">
                                                    <CheckCircle2 size={12} />
                                                    {t('status.active')}
                                                </span>
                                                <span className="text-sm font-medium text-gray-400">{item.type}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                                        </div>
                                        <div className="text-right text-gray-500">
                                            <p className="flex items-center justify-end gap-1 text-sm">
                                                <Users size={14} />
                                                Quórum: {item.quorum}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {displayResults ? (
                                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-2 animate-in fade-in slide-in-from-top-4 duration-500">
                                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <CheckCircle2 className="text-green-500" />
                                                Seu voto foi registrado: <span className="text-primary capitalize">{t(`vote.${userChoice}`)}</span>
                                            </h4>
                                            <ResultBar
                                                label={t('vote.favor')}
                                                count={item.results.favor + (userChoice === 'favor' ? 1 : 0)}
                                                total={totalVotes}
                                                colorClass="bg-green-500"
                                            />
                                            <ResultBar
                                                label={t('vote.against')}
                                                count={item.results.against + (userChoice === 'against' ? 1 : 0)}
                                                total={totalVotes}
                                                colorClass="bg-red-500"
                                            />
                                            <ResultBar
                                                label={t('vote.abstain')}
                                                count={item.results.abstain + (userChoice === 'abstain' ? 1 : 0)}
                                                total={totalVotes}
                                                colorClass="bg-gray-400"
                                            />
                                        </div>
                                    ) : (
                                        <div className="grid md:grid-cols-3 gap-4 border-t border-gray-100 pt-8">
                                            <button
                                                onClick={() => handleVote(item.id, 'favor')}
                                                className="flex items-center justify-center gap-2 bg-white border-2 border-green-500 text-green-600 px-6 py-4 rounded-xl font-bold hover:bg-green-500 hover:text-white transition-all transform active:scale-95"
                                            >
                                                <ThumbsUp size={20} />
                                                {t('vote.favor')}
                                            </button>
                                            <button
                                                onClick={() => handleVote(item.id, 'against')}
                                                className="flex items-center justify-center gap-2 bg-white border-2 border-red-500 text-red-600 px-6 py-4 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all transform active:scale-95"
                                            >
                                                <ThumbsDown size={20} />
                                                {t('vote.against')}
                                            </button>
                                            <button
                                                onClick={() => handleVote(item.id, 'abstain')}
                                                className="flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-500 px-6 py-4 rounded-xl font-bold hover:bg-gray-300 hover:text-white transition-all transform active:scale-95"
                                            >
                                                <Minus size={20} />
                                                {t('vote.abstain')}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </section>

                <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
                    <AlertCircle className="text-primary shrink-0" size={24} />
                    <div className="text-sm text-gray-700 leading-relaxed">
                        <h4 className="font-bold mb-1">Nota sobre Governança</h4>
                        <p>O sistema de votação do Bureau Social garante o anonimato e a integridade dos dados. Conforme os estatutos, associados com quotas em atraso poderão ter o direito de voto suspenso.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Voting;
