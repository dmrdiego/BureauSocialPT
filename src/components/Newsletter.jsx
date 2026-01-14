import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Newsletter = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        // Simulating API call
        setTimeout(() => {
            console.log('Newsletter subscription:', data);
            setSubmitted(true);
            setIsSubmitting(false);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="text-emerald-400 font-medium py-2">
                Subscrição confirmada! Obrigado.
            </div>
        );
    }

    return (
        <div className="mt-6">
            <h4 className="text-lg font-bold mb-2">Subscreva a nossa Newsletter</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
                <div className="flex-grow">
                    <input
                        {...register('email', {
                            required: true,
                            pattern: /^\S+@\S+$/i
                        })}
                        placeholder="Seu email"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 outline-none text-white placeholder:text-gray-400"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-primary px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-all disabled:opacity-50"
                >
                    {isSubmitting ? '...' : 'OK'}
                </button>
            </form>
            {errors.email && <span className="text-red-400 text-xs mt-1">Email inválido</span>}
        </div>
    );
};

export default Newsletter;
