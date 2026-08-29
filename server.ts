import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Resend client
let resendClient: Resend | null = null;
function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is missing.');
  }
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact and Enquiry Form Submission Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      organization,
      division,
      service,
      budget,
      timeline,
      message,
    } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide full name, email, and message.',
      });
    }

    const resend = getResendClient();
    const recipient = process.env.NOTIFICATION_EMAIL || 'omegalinksse@gmail.com';

    const divisionLabels: Record<string, string> = {
      'digital-technology': 'Digital Technology & Software Engineering',
      'skills-training': 'Hands-on Technology Skills Training & Academy',
      'cyber-security': 'Cyber Security & Network Defense Solutions',
      'brand-design': 'Brand Identity, Creative Media & Design',
      'general': 'General Corporate Inquiry',
    };

    const divisionName = divisionLabels[division] || division || 'General Inquiry';
    const isTraining = division === 'skills-training' || (service && service.toLowerCase().includes('enroll'));
    const inquiryType = isTraining ? '🎓 Training Enrollment' : '💼 Project & Service Inquiry';

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0b132b; color: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #1e293b;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%); padding: 24px; text-align: center;">
          <h1 style="margin: 0; color: #ffffff; font-size: 22px; letter-spacing: 0.5px;">OMEGALINKS DIGITAL TECHNOLOGY</h1>
          <p style="margin: 6px 0 0 0; color: #bae6fd; font-size: 14px; font-weight: 500;">${inquiryType} Notification</p>
        </div>

        <div style="padding: 24px; background-color: #0f172a;">
          <div style="background-color: #1e293b; border-left: 4px solid #38bdf8; padding: 14px 18px; border-radius: 6px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 15px; color: #f1f5f9; font-weight: 600;">Sender: <span style="color: #38bdf8;">${fullName}</span></p>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">Email: <a href="mailto:${email}" style="color: #67e8f9; text-decoration: none;">${email}</a> ${phone ? `| Phone: <a href="tel:${phone}" style="color: #67e8f9; text-decoration: none;">${phone}</a>` : ''}</p>
            ${organization ? `<p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">Organization: <strong style="color: #e2e8f0;">${organization}</strong></p>` : ''}
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr style="border-bottom: 1px solid #334155;">
              <td style="padding: 10px 0; color: #94a3b8; width: 140px;">Division:</td>
              <td style="padding: 10px 0; color: #f8fafc; font-weight: 500;">${divisionName}</td>
            </tr>
            ${service ? `
            <tr style="border-bottom: 1px solid #334155;">
              <td style="padding: 10px 0; color: #94a3b8;">Service / Course:</td>
              <td style="padding: 10px 0; color: #38bdf8; font-weight: 600;">${service}</td>
            </tr>` : ''}
            ${budget ? `
            <tr style="border-bottom: 1px solid #334155;">
              <td style="padding: 10px 0; color: #94a3b8;">Estimated Budget:</td>
              <td style="padding: 10px 0; color: #34d399; font-weight: 600;">${budget}</td>
            </tr>` : ''}
            ${timeline ? `
            <tr style="border-bottom: 1px solid #334155;">
              <td style="padding: 10px 0; color: #94a3b8;">Target Timeline:</td>
              <td style="padding: 10px 0; color: #f8fafc;">${timeline}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #94a3b8;">Submitted At:</td>
              <td style="padding: 10px 0; color: #cbd5e1; font-size: 12px;">${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })} (West Africa Time)</td>
            </tr>
          </table>

          <div style="margin-top: 15px;">
            <h3 style="margin: 0 0 8px 0; color: #38bdf8; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Client Message / Brief:</h3>
            <div style="background-color: #020617; border: 1px solid #334155; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${email}?subject=Re:%20Omegalinks%20Inquiry%20-%20${encodeURIComponent(service || 'Project / Training')}" style="display: inline-block; background-color: #0284c7; color: #ffffff; font-weight: 600; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; margin-right: 8px;">Reply via Email</a>
            ${phone ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background-color: #10b981; color: #ffffff; font-weight: 600; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px;">WhatsApp Client</a>` : ''}
          </div>
        </div>

        <div style="background-color: #020617; padding: 14px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b;">
          Omegalinks Digital Technology &bull; Automated Inquiry Gateway
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Omegalinks Portal <onboarding@resend.dev>',
      to: [recipient],
      replyTo: email,
      subject: `${inquiryType}: ${service || divisionName} - ${fullName}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({
        success: false,
        error: error.message || 'Failed to dispatch email via Resend.',
      });
    }

    return res.status(200).json({
      success: true,
      messageId: data?.id,
      message: 'Your inquiry has been successfully sent to Omegalinks Digital Technology!',
    });
  } catch (err: any) {
    console.error('Server error handling contact submission:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'An unexpected error occurred while processing your request.',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Omegalinks server running on port ${PORT}`);
  });
}

startServer();
