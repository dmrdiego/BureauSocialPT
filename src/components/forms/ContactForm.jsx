import { useForm } from 'react-hook-form';
import { useState } from 'react';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setSubmitted(true);
            } else {
                alert('Erro ao enviar mensagem. Tente novamente.');
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
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">Mensagem Enviada!</h3>
                <p className="text-gray-600 mb-6">
                    Obrigado por entrar em contato. Responderemos assim que possível.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all"
                >
                    Enviar nova mensagem
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Nome *</label>
                    <input
                        {...register('name', { required: 'Nome é obrigatório' })}
                        className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="Seu nome"
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
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
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Assunto *</label>
                    <input
                        {...register('subject', { required: 'Assunto é obrigatório' })}
                        className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="Assunto da mensagem"
                    />
                    {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Mensagem *</label>
                    <textarea
                        rows="5"
                        {...register('message', { required: 'Mensagem é obrigatória' })}
                        className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent`}
                        placeholder="Sua mensagem"
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
