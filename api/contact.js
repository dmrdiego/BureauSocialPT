import { Resend } from 'resend';
import dotenv from 'dotenv'; // Em produção na Vercel, as vars vêm do ambiente, mas localmente isso ajuda

// Garantir que variáveis de ambiente sejam carregadas localmente se necessário
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Lidar com preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await resend.emails.send({
            from: 'Bureau Social <onboarding@resend.dev>', // Atualizar para domínio verificado em produção se disponível
            to: process.env.CONTACT_EMAIL || 'diego@greencheck.pt',
            subject: `Novo Contato: ${subject}`,
            html: `<p><strong>Nome:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensagem:</strong> ${message}</p>`,
        });

        return res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Error sending email' });
    }
}
