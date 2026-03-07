import express from 'express';
import crypto from 'crypto';

const app = express();
app.use(express.json({ limit: '256kb' }));

const PORT = process.env.PORT || 3100;
const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

if (!PIXEL_ID || !ACCESS_TOKEN) {
  console.error('Faltando META_PIXEL_ID ou META_ACCESS_TOKEN no ambiente.');
}

function sha256(value) {
  if (!value) return undefined;
  return crypto.createHash('sha256').update(String(value).trim().toLowerCase()).digest('hex');
}

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'meta-capi', pixelConfigured: Boolean(PIXEL_ID) });
});

app.post('/api/meta/events', async (req, res) => {
  try {
    if (!PIXEL_ID || !ACCESS_TOKEN) {
      return res.status(500).json({ ok: false, error: 'Servidor CAPI sem configuração de credenciais' });
    }

    const {
      event_name,
      event_time,
      event_id,
      event_source_url,
      action_source = 'website',
      custom_data = {},
      user_data = {},
    } = req.body || {};

    if (!event_name) {
      return res.status(400).json({ ok: false, error: 'event_name é obrigatório' });
    }

    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress;
    const ua = req.headers['user-agent'];

    const payload = {
      data: [
        {
          event_name,
          event_time: event_time || Math.floor(Date.now() / 1000),
          event_id,
          event_source_url,
          action_source,
          custom_data,
          user_data: {
            client_ip_address: ip,
            client_user_agent: ua,
            fbc: user_data.fbc,
            fbp: user_data.fbp,
            em: sha256(user_data.email),
            ph: sha256(user_data.phone),
            fn: sha256(user_data.first_name),
            ln: sha256(user_data.last_name),
          },
        },
      ],
    };

    if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE;

    const url = `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;
    const fbRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const fbData = await fbRes.json();

    if (!fbRes.ok) {
      return res.status(502).json({ ok: false, error: fbData });
    }

    res.json({ ok: true, meta: fbData });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Meta CAPI server rodando na porta ${PORT}`);
});
