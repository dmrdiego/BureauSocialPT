import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Search, Edit, Shield, User, Filter, MoreVertical, CheckCircle2 } from 'lucide-react';

const AdminAssociados = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategoria, setFilterCategoria] = useState("todas");

    const users = [
        { id: '1', name: "António Silva", email: "antonio.silva@email.pt", categoria: "fundador", numeroSocio: "BS-001", isAdmin: true, isDirecao: true },
        { id: '2', name: "Maria Santos", email: "maria.santos@email.pt", categoria: "efetivo", numeroSocio: "BS-142", isAdmin: false, isDirecao: false },
        { id: '3', name: "João Pereira", email: "joao.p@email.pt", categoria: "contribuinte", numeroSocio: "BS-556", isAdmin: false, isDirecao: false },
        { id: '4', name: "Ana Rodrigues", email: "ana.r@email.pt", categoria: "honorario", numeroSocio: "BS-012", isAdmin: false, isDirecao: true },
        { id: '5', name: "Pedro Costa", email: "pedro.costa@email.pt", categoria: "efetivo", numeroSocio: "BS-210", isAdmin: false, isDirecao: false }
    ];

    const stats = {
        total: users.length,
        fundador: users.filter(u => u.categoria === 'fundador').length,
        efetivo: users.filter(u => u.categoria === 'efetivo').length,
        contribuinte: users.filter(u => u.categoria === 'contribuinte').length,
    };

    const getCategoriaStyle = (cat) => {
        switch (cat) {
            case 'fundador': return 'bg-amber-100 text-amber-700';
            case 'efetivo': return 'bg-blue-100 text-blue-700';
            case 'contribuinte': return 'bg-emerald-100 text-emerald-700';
            case 'honorario': return 'bg-purple-100 text-purple-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const filteredUsers = users.filter(u => {
        const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            u.numeroSocio.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCat = filterCategoria === 'todas' || u.categoria === filterCategoria;
        return matchesSearch && matchesCat;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <header className="mb-10">
                    <h1 className="text-4xl font-bold text-primary mb-2">Gestão de Associados</h1>
                    <p className="text-xl text-gray-500">Administre categorias, permissões e informações dos membros.</p>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    {[
                        { label: 'Total', value: stats.total, icon: Users, color: 'text-primary' },
                        { label: 'Fundadores', value: stats.fundador, icon: Shield, color: 'text-amber-500' },
                        { label: 'Efetivos', value: stats.efetivo, icon: CheckCircle2, color: 'text-blue-500' },
                        { label: 'Contribuintes', value: stats.contribuinte, icon: User, color: 'text-emerald-500' }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                                <stat.icon size={18} className={stat.color} />
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</span>
                            </div>
                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8 flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-grow w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Pesquisar por nome, email ou número de sócio..."
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        className="bg-gray-50 border border-gray-200 rounded-xl py-3 px-6 font-bold text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 min-w-[200px]"
                        value={filterCategoria}
                        onChange={(e) => setFilterCategoria(e.target.value)}
                    >
                        <option value="todas">Todas Categorias</option>
                        <option value="fundador">Fundador</option>
                        <option value="efetivo">Efetivo</option>
                        <option value="contribuinte">Contribuinte</option>
                        <option value="honorario">Honorário</option>
                    </select>
                </div>

                {/* Table/List */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Membro</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Nº Sócio</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Categoria</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Permissões</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filteredUsers.map((u) => (
                                    <tr key={u.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary font-bold">
                                                    {u.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900 leading-none mb-1">{u.name}</p>
                                                    <p className="text-xs text-gray-500">{u.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm font-medium text-gray-600">{u.numeroSocio}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${getCategoriaStyle(u.categoria)}`}>
                                                {u.categoria}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium">
                                            <div className="flex gap-2">
                                                {u.isAdmin && <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Admin</span>}
                                                {u.isDirecao && <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Direção</span>}
                                                {!u.isAdmin && !u.isDirecao && <span className="text-gray-400 text-[10px] font-bold uppercase">Associado</span>}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-100">
                                                <Edit size={16} className="text-gray-400 group-hover:text-primary" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAssociados;
