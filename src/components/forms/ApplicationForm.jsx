import { useForm } from 'react-hook-form';
import { useState } from 'react';

const ApplicationForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/application', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setSubmitted(true);
            } else {
                alert('Erro ao enviar candidatura. Tente novamente.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Erro de conexão. Verifique se o servidor está rodando.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">Candidatura Enviada!</h3>
                <p className="text-gray-600 mb-6">
                    Obrigado pelo seu interesse. Analisaremos sua candidatura e entraremos em contato em breve.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all"
                >
                    Enviar outra candidatura
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#044050]">Formulário de Candidatura</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Nome Completo *</label>
                        <input
                            {...register('name', { required: 'Nome é obrigatório' })}
                            className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
                            placeholder="Digite seu nome"
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email *</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email é obrigatório',
                                pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' }
                            })}
                            className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
                            placeholder="seu@email.com"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Telefone *</label>
                        <input
                            {...register('phone', { required: 'Telefone é obrigatório' })}
                            className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
                            placeholder="+351 --- --- ---"
                        />
                        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Ofício/Arte Principal *</label>
                        <select
                            {...register('craft', { required: 'Selecione uma opção' })}
                            className={`w-full px-4 py-2 border ${errors.craft ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
                        >
                            <option value="">Selecione...</option>
                            <option value="construcao">Construção Tradicional</option>
                            <option value="artes">Artes Visuais</option>
                            <option value="performanc">Artes Performativas</option>
                            <option value="oficios">Ofícios Artísticos</option>
                            <option value="outros">Outros</option>
                        </select>
                        {errors.craft && <span className="text-red-500 text-sm">{errors.craft.message}</span>}
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Anos de Experiência *</label>
                    <input
                        type="number"
                        {...register('experience', { required: 'Experiência é obrigatória' })}
                        className={`w-full px-4 py-2 border ${errors.experience ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="Ex: 5"
                    />
                    {errors.experience && <span className="text-red-500 text-sm">{errors.experience.message}</span>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Por que deseja participar deste programa? *</label>
                    <textarea
                        rows="4"
                        {...register('motivation', { required: 'Motivação é obrigatória' })}
                        className={`w-full px-4 py-2 border ${errors.motivation ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="Conte-nos um pouco sobre você e sua motivação..."
                    ></textarea>
                    {errors.motivation && <span className="text-red-500 text-sm">{errors.motivation.message}</span>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#044050] text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? 'Enviando...' : 'Submeter Candidatura'}
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;
