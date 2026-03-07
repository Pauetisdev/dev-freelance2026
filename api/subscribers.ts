import type { VercelRequest, VercelResponse } from '@vercel/node';

// Upstash Redis REST API
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Solo permitir GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    if (!UPSTASH_URL || !UPSTASH_TOKEN) {
      return res.status(500).json({ error: 'Upstash no configurado' });
    }

    // Obtener todos los suscriptores de Redis
    const response = await fetch(`${UPSTASH_URL}/smembers/subscribers`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error obteniendo suscriptores');
    }

    const data = await response.json();
    const subscribers = data.result || [];

    return res.status(200).json({
      count: subscribers.length,
      subscribers: subscribers,
    });
  } catch (error) {
    console.error('Error en /api/subscribers:', error);
    return res.status(500).json({
      error: 'Error al obtener suscriptores',
    });
  }
}
