import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const Voting = () => {
    const { t } = useTranslation();
    const [votedProposals, setVotedProposals] = useState([]);

    const proposals = [
        {
            id: 1,
            title: t('voting.proposal1.title'),
            desc: t('voting.proposal1.desc'),
            ends: '25 Jan 2025',
            status: 'open',
            votes: 124
        },
        {
            id: 2,
            title: t('voting.proposal2.title'),
            desc: t('voting.proposal2.desc'),
            ends: '30 Jan 2025',
            status: 'open',
            votes: 86
        }
    ];

    const handleVote = (id) => {
        if (!votedProposals.includes(id)) {
            setVotedProposals([...votedProposals, id]);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-5xl">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4">{t('voting.title')}</h1>
                    <p className="text-xl text-gray-600">{t('voting.subtitle')}</p>
                </header>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                        <Clock className="text-primary" />
                        {t('voting.active.proposals')}
                    </h2>

                    <div className="space-y-6">
                        {proposals.map((proposal) => {
                            const hasVoted = votedProposals.includes(proposal.id);
                            return (
                                <div key={proposal.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100 mb-4">
                                                    <CheckCircle2 size={12} />
                                                    {t('voting.status.open')}
                                                </span>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{proposal.title}</h3>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-gray-500">{t('voting.ends')}</p>
                                                <p className="font-bold text-gray-900">{proposal.ends}</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                            {proposal.desc}
                                        </p>

                                        <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                                            <div className="flex items-center gap-2 text-gray-500">
                                                <Users size={18} />
                                                <span className="font-medium">{proposal.votes + (hasVoted ? 1 : 0)} votos registrados</span>
                                            </div>

                                            <button
                                                onClick={() => handleVote(proposal.id)}
                                                disabled={hasVoted}
                                                className={`px-8 py-3 rounded-lg font-bold transition-all ${hasVoted
                                                        ? 'bg-green-100 text-green-700 cursor-default'
                                                        : 'bg-primary text-white hover:bg-opacity-90'
                                                    }`}
                                            >
                                                {hasVoted ? t('voting.thanks') : t('voting.vote.button')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <footer className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
                    <AlertCircle className="text-primary shrink-0" />
                    <p className="text-sm text-gray-700 leading-relaxed">
                        <strong>Nota:</strong> Este é um sistema seguro para associados. Seus dados são confidenciais e seu voto é criptografado. A participação é fundamental para a governança do Bureau Social.
                    </p>
                </footer>
            </div>
        </div>
    );
};

// Mock Users icon since it wasn't imported from lucide-react in the top section
import { Users } from 'lucide-react';

export default Voting;
