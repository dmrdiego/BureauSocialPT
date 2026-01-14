import { Resend } from 'resend';
import dotenv from 'dotenv';

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

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, phone, craft, experience, motivation } = req.body;

    try {
        await resend.emails.send({
            from: 'Bureau Social <onboarding@resend.dev>',
            to: process.env.APPLICATION_RECEIVER || 'diego@greencheck.pt',
            subject: `Nova Candidatura: ${name} (${craft})`,
            html: `
        <h2>Nova Candidatura Recebida</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Ofício:</strong> ${craft}</p>
        <p><strong>Experiência:</strong> ${experience} anos</p>
        <p><strong>Motivação:</strong> ${motivation}</p>
      `,
        });

        return res.status(200).json({ success: true, message: 'Application sent successfully' });
    } catch (error) {
        console.error('Error sending application:', error);
        return res.status(500).json({ error: 'Error sending application' });
    }
}
