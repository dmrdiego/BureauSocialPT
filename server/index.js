import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { Resend } from 'resend';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Bureau Social API is running' });
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log('Contact form submission:', { name, email, subject });

  try {
    await resend.emails.send({
      from: 'Bureau Social <onboarding@resend.dev>', // Usando onboarding para teste inicial
      to: process.env.CONTACT_EMAIL || 'diego@greencheck.pt',
      subject: `Novo Contato: ${subject}`,
      html: `<p><strong>Nome:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensagem:</strong> ${message}</p>`,
    });

    res.json({ success: true, message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Erro ao enviar mensagem.' });
  }
});

// Application Form Endpoint
app.post('/api/application', async (req, res) => {
  const { name, email, phone, craft, experience, motivation } = req.body;

  console.log('Application form submission:', { name, email, craft });

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
    res.json({ success: true, message: 'Candidatura enviada com sucesso!' });
  } catch (error) {
    console.error('Error sending application:', error);
    res.status(500).json({ success: false, message: 'Erro ao enviar candidatura.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
