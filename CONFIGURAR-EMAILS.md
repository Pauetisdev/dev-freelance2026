# 🔧 Cómo configurar el sistema de emails (URGENTE)

## ✅ Código ARREGLADO

Ya he modificado los componentes para usar las serverless functions de forma segura:
- ✅ [Newsletter.tsx](src/components/Newsletter.tsx) - Ahora usa `/api/subscribe`
- ✅ [NewsletterCompact.tsx](src/components/NewsletterCompact.tsx) - Ahora usa `/api/subscribe`
- ✅ API Key eliminado del código público

---

## 🚀 Pasos para activar el sistema

### 1. Configurar variables de entorno en Vercel

Ve a tu proyecto en Vercel: https://vercel.com/tu-usuario/freelance-spain-2026/settings/environment-variables

Añade estas **3 variables de entorno**:

#### Variable 1: MAILERLITE_API_KEY
```
Nombre: MAILERLITE_API_KEY
Valor: eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZDBhYTI3NTA3NDA4ZTNiMzA0MWM1OWI2M2ZiOTdjZWUzZmE3ZTY2YWJiM2U3YTk1YWIxYjc0YmRkYmRkMzc3MDMyNTA0MzA0NTAxYjQ5MDYiLCJpYXQiOjE3NzI3NTAyMTQuMDUwMjEzLCJuYmYiOjE3NzI3NTAyMTQuMDUwMjE3LCJleHAiOjQ5Mjg0MjM4MTQuMDQxODc2LCJzdWIiOiIyMTg0Njk2Iiwic2NvcGVzIjpbXX0.rJhhGifasIBLzD8n-jkyoOWhlBsaiepjm9fFo-JDRv-YJjFovpYgupi8LdBjGp73uUIcpHGXMpONl-ybWej7LTt5ZKG1jBPiMoQ1jU82DcUiaDL2E9XLcahvgmqXH4teeKHXgmNfL0Z5zDqLw6kbzjxZDIrJhbF3Dj9cP7yxCzHoYdsqfTUIYn51174l0F--8EYfaAPZwaOKnuv4RuwC3jT8FWKb--uZUFFV39fTdBEhYBbAl3e9i3BrI3cKgAmua5UzalOWNg0Y51nGdUqgJrphi5bBxhUfMyMmHztUMyzYoWgZDn49ySnomVVv_n57G8JQ7k5rs28Kx_AsHNIffH2JC8k_jbLkam3mmzno_XCw3KcT1g-PE9OVcNkjoLKb4Zg8IARub3IOhYNdjI6GPmASJhxPZpJcHwBvfldEY4CYpB6IIwd8GLokBzuIPHYl6zLueRaKnFETt0eElESG1kQRwWEh8B68MxmTvyC6jFoqh2vjw74yxzQgAiKqWFDCkLd1cy73a_ICQLzOQYQkZFdeyM0TxkocJmGon_atVHqu7AMQIdkqbc5liqLEvepkMSM6VbIIJIfdhc0Bdp67eIyof91QDj7QP_kBEoYtfpoh_TsuTbt-gPbCK7_C8fGxfnxxRj2v3g_T4DmsDdAiQX2k5v1GA6vKSXVp4NQd-3A
Entornos: Production, Preview, Development
```

#### Variable 2: UPSTASH_REDIS_REST_URL (OPCIONAL)
Si quieres backup de suscriptores en Redis gratuito:

1. Ve a [Upstash.com](https://upstash.com/)
2. Crea una cuenta gratuita
3. Crea una base de datos Redis
4. Copia el **UPSTASH_REDIS_REST_URL**

```
Nombre: UPSTASH_REDIS_REST_URL
Valor: https://tu-db.upstash.io
Entornos: Production, Preview, Development
```

#### Variable 3: UPSTASH_REDIS_REST_TOKEN (OPCIONAL)
```
Nombre: UPSTASH_REDIS_REST_TOKEN
Valor: tu-token-aqui
Entornos: Production, Preview, Development
```

---

### 2. Re-desplegar en Vercel

Después de añadir las variables de entorno:

**Opción A: Desde la interfaz de Vercel**
1. Ve a Deployments
2. Haz clic en los 3 puntos `...` del último deployment
3. Selecciona "Redeploy"
4. Marca "Use existing build cache" = NO
5. Haz clic en "Redeploy"

**Opción B: Hacer un push**
```bash
git add .
git commit -m "fix: usar serverless functions para newsletter"
git push
```

---

### 3. Verificar que funciona

1. Ve a tu sitio: https://devfreelance.es
2. Busca el formulario de newsletter
3. Introduce tu email de prueba
4. Haz clic en "¡Me apunto!"
5. Deberías ver el mensaje de éxito ✅

#### Verificar en MailerLite
1. Ve a tu dashboard de MailerLite
2. Ve a **Subscribers**
3. Deberías ver el nuevo email suscrito

---

## 📊 Monitorizar suscriptores

Para ver todos los suscriptores guardados en Upstash (si lo configuraste):

```bash
# Visita esta URL (requiere que Upstash esté configurado)
https://devfreelance.es/api/subscribers
```

---

## 🐛 Solución de problemas

### Error: "Error al suscribirse"
- Verifica que `MAILERLITE_API_KEY` esté configurada en Vercel
- Verifica que hiciste re-deploy después de añadir las variables
- Mira los logs en Vercel: Functions → Ver logs del endpoint `/api/subscribe`

### Error: "Upstash no configurado"
- Normal si no has configurado Upstash (es opcional)
- Los emails se seguirán guardando en MailerLite correctamente

### No recibo emails
- Verifica en MailerLite que el suscriptor está añadido
- MailerLite NO envía emails automáticamente, necesitas configurar una campaña RSS
- Lee el [README-NEWSLETTER.md](README-NEWSLETTER.md) para configurar la campaña RSS

---

## 🎯 Resumen

1. ✅ **Código arreglado** - Ya no expone API keys
2. ⏳ **Configurar Vercel** - Añade `MAILERLITE_API_KEY` en variables de entorno
3. ⏳ **Re-desplegar** - Push o redeploy manual
4. ✅ **Probar** - Suscríbete con tu email

---

## 📧 Próximos pasos (opcional)

Para emails automáticos cuando publiques posts:
- Ve a [README-NEWSLETTER.md](README-NEWSLETTER.md)
- Sección "Paso 3: Conectar RSS con MailerLite"
- Configura una campaña RSS en MailerLite
