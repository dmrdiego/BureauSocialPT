import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogIn, Mail, ShieldCheck, ArrowRight } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple mock login
        if (email) {
            login({ email, firstName: email.split('@')[0], isAdmin: email === 'admin@bureausocial.pt' });
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
            <div className="max-w-md w-full">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/5 rounded-3xl text-primary mb-6">
                        <ShieldCheck size={40} />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Acesso Reservado</h1>
                    <p className="text-gray-500 font-medium">Portal do Associado & Governança</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
                                Email Institucional
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    required
                                    placeholder="exemplo@bureausocial.pt"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
                        >
                            Entrar no Portal
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-gray-50 text-center">
                        <p className="text-sm text-gray-400 font-medium mb-4">Ainda não é associado?</p>
                        <button
                            onClick={() => navigate('/join')}
                            className="text-primary font-bold hover:underline"
                        >
                            Solicitar Inscrição
                        </button>
                    </div>
                </div>

                <p className="mt-8 text-center text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
                    Este é um sistema seguro. O acesso é restrito a associados e colaboradores do Bureau Social.
                </p>
            </div>
        </div>
    );
};

export default Login;
