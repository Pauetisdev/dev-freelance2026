import type { VercelRequest, VercelResponse } from '@vercel/node';

// Upstash Redis REST API (gratis, sin SDK necesario)
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

// MailerLite API (usamos variable sin prefijo VITE_ para el servidor)
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY || process.env.VITE_MAILERLITE_API_KEY;

interface SubscribeRequest {
  email: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const { email } = req.body as SubscribeRequest;

    // Validar email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    // Verificar que existe la API key de MailerLite
    if (!MAILERLITE_API_KEY) {
      console.error('MAILERLITE_API_KEY no está configurada');
      return res.status(500).json({ 
        error: 'Sistema de newsletter no configurado. Contacta al administrador.',
        debug: 'MAILERLITE_API_KEY no encontrada en variables de entorno'
      });
    }

    // 1. Guardar en Upstash Redis (backup/analytics)
    if (UPSTASH_URL && UPSTASH_TOKEN) {
      try {
        // Usar REST API de Upstash (sin librería externa)
        const redisResponse = await fetch(`${UPSTASH_URL}/sadd/subscribers/${email}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${UPSTASH_TOKEN}`,
          },
        });

        if (!redisResponse.ok) {
          console.error('Error guardando en Upstash:', await redisResponse.text());
        }

        // Guardar timestamp
        await fetch(`${UPSTASH_URL}/set/subscriber:${email}:timestamp/${Date.now()}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${UPSTASH_TOKEN}`,
          },
        });
      } catch (error) {
        console.error('Error con Upstash:', error);
        // No fallar si Upstash falla
      }
    }

    // 2. Suscribir en MailerLite
    const mlResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        status: 'active',
      }),
    });

    if (!mlResponse.ok) {
      const errorData = await mlResponse.json().catch(() => ({}));
      console.error('Error de MailerLite:', mlResponse.status, errorData);
      return res.status(500).json({
        error: 'Error al suscribirse',
        debug: `MailerLite error: ${mlResponse.status}`,
        details: errorData
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Suscripción exitosa',
    });
  } catch (error) {
    console.error('Error en /api/subscribe:', error);
    return res.status(500).json({
      error: 'Error al procesar la suscripción',
    });
  }
}
