# 📧 Configuración Newsletter con MailerLite + RSS Feed

Sistema de newsletter 100% gratuito y automático para tu blog de DevFreelance Spain 2026.

## 🎯 Arquitectura Simple

```
Blog Post Nuevo
    ↓
RSS Feed (público/rss.xml)
    ↓
MailerLite detecta cambios (cada hora)
    ↓
Email automático a suscriptores
```

---

## 🚀 Paso 1: Configurar MailerLite (Gratis)

### 1.1 Crear cuenta gratuita

1. Ve a [MailerLite.com](https://www.mailerlite.com/)
2. Crea una cuenta gratuita (hasta 1,000 suscriptores sin coste)
3. Verifica tu email

### 1.2 Obtener tu API Key

1. Entra en tu dashboard de MailerLite
2. Ve a **Integrations** → **Developer API**
3. Copia tu **API Key**
4. Guárdala de forma segura

### 1.3 Crear un Grupo para la Newsletter

1. En MailerLite, ve a **Subscribers** → **Groups**
2. Crea un nuevo grupo llamado "Newsletter Blog 2026"
3. Copia el **Group ID** (aparece en la URL o en la configuración del grupo)

### 1.4 Configurar el proyecto

Crea un archivo `.env` en la raíz del proyecto:

```bash
VITE_MAILERLITE_API_KEY=tu_api_key_aquí
```

Edita `src/components/Newsletter.tsx` y reemplaza:

```typescript
const MAILERLITE_GROUP_ID = 'YOUR_GROUP_ID_HERE'; 
```

Por tu Group ID real:

```typescript
const MAILERLITE_GROUP_ID = '123456789'; // Tu ID
```

---

## 📰 Paso 2: RSS Feed Automático

El RSS Feed ya está configurado y se genera automáticamente en cada build.

### Cómo funciona

1. Cada vez que ejecutas `npm run build`, se genera `/public/rss.xml`
2. El script lee todos los posts de `src/data/posts.ts`
3. Genera un XML RSS 2.0 estándar con los últimos 20 posts
4. Se despliega en Vercel en `https://devfreelance.es/rss.xml`

### Generar RSS manualmente

```bash
npm run generate-rss
```

---

## 🔗 Paso 3: Conectar RSS con MailerLite

### 3.1 Crear una Campaña RSS

1. En MailerLite, ve a **Campaigns** → **Create campaign**
2. Selecciona **RSS campaign**
3. Introduce tu RSS Feed URL: `https://devfreelance.es/rss.xml`
4. Configura la frecuencia de comprobación: **Cada hora** o **Cada día**

### 3.2 Diseñar el email

MailerLite te permite diseñar el email con placeholders RSS:

- `{rss:title}` → Título del post
- `{rss:description}` → Descripción/excerpt
- `{rss:link}` → Link al post
- `{rss:pubDate}` → Fecha de publicación

**Template sugerido:**

```html
Hola {$name},

Nuevo artículo en DevFreelance Spain 2026:

🔥 {rss:title}

{rss:description}

👉 Leer más: {rss:link}

---
No quieres recibir más emails? {$unsubscribe}
```

### 3.3 Activar la campaña

1. Selecciona el grupo "Newsletter Blog 2026"
2. Revisa y activa la campaña
3. MailerLite revisará el RSS automáticamente y enviará emails cuando detecte posts nuevos

---

## ✅ Despliegue en Vercel

### Configurar variable de entorno en Vercel

1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Settings → **Environment Variables**
3. Añade:
   - **Key:** `VITE_MAILERLITE_API_KEY`
   - **Value:** Tu API Key de MailerLite
   - **Environments:** Production, Preview, Development

4. Redeploy tu proyecto

### Verificar que funciona

Después del deploy:

1. Visita `https://devfreelance.es/rss.xml` (debería mostrar XML)
2. Prueba el formulario de newsletter en tu web
3. Verifica que el email aparece en MailerLite → Subscribers

---

## 🧪 Testing Local

### Probar el RSS Feed

```bash
npm run generate-rss
# Abre public/rss.xml en tu navegador
```

### Probar el Newsletter

1. Crea un archivo `.env` con tu API Key
2. Ejecuta `npm run dev`
3. Rellena el formulario de newsletter
4. Verifica en MailerLite que el suscriptor se ha añadido

---

## 🎨 Personalización Avanzada (Opcional)

### Añadir más campos al formulario

Edita `Newsletter.tsx` para recoger nombre, apellidos, etc:

```typescript
body: JSON.stringify({
  email: email,
  fields: {
    name: nombre,
    last_name: apellido
  },
  groups: [MAILERLITE_GROUP_ID]
})
```

### Cambiar frecuencia del RSS

MailerLite permite configurar:
- Cada hora
- Cada día (a las XX:XX)
- Cada semana

### Añadir tracking & analytics

MailerLite incluye analytics automáticos:
- Tasa de apertura
- Clicks en links
- Desuscripciones

---

## 💰 Costes

- **MailerLite:** Gratis hasta 1,000 suscriptores
- **Vercel:** Gratis (plan Hobby)
- **RSS Feed:** Gratis (generado estáticamente)

**Total: 0€/mes** hasta que superes 1,000 suscriptores.

---

## 🐛 Troubleshooting

### "El RSS no se genera"

```bash
node scripts/generate-rss.js
```

Si hay errores, revisa que `src/data/posts.ts` tiene el formato correcto.

### "MailerLite da error 401"

Tu API Key no es válida. Verifica:
1. Que has copiado bien la API Key
2. Que está en el archivo `.env` como `VITE_MAILERLITE_API_KEY=...`
3. Que has reiniciado el servidor (`npm run dev`)

### "El email no llega"

1. Verifica que el RSS Feed es válido: https://validator.w3.org/feed/
2. Comprueba en MailerLite → Campaigns que la campaña está activa
3. Revisa que el email del suscriptor está confirmado (MailerLite envía confirmation email)

---

## 📚 Referencias

- [MailerLite API Docs](https://developers.mailerlite.com/)
- [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

---

## 🎉 ¡Listo!

Tu newsletter está configurada. Cada vez que añadas un post nuevo en `posts.ts`:

1. Haz `git push`
2. Vercel hace el build automático
3. Se genera el RSS actualizado
4. MailerLite detecta el cambio (en 1h max)
5. Envía email a todos los suscriptores

**Todo automático. Todo gratis. Todo simple.** 🚀
