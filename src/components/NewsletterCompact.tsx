import { useState, FormEvent } from 'react';
import { Mail, Check } from 'lucide-react';

export function NewsletterCompact() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) return;

    setIsLoading(true);
    
    try {
      // MailerLite API - Hardcoded temporalmente
      const response = await fetch(`https://connect.mailerlite.com/api/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZDBhYTI3NTA3NDA4ZTNiMzA0MWM1OWI2M2ZiOTdjZWUzZmE3ZTY2YWJiM2U3YTk1YWIxYjc0YmRkYmRkMzc3MDMyNTA0MzA0NTAxYjQ5MDYiLCJpYXQiOjE3NzI3NTAyMTQuMDUwMjEzLCJuYmYiOjE3NzI3NTAyMTQuMDUwMjE3LCJleHAiOjQ5Mjg0MjM4MTQuMDQxODc2LCJzdWIiOiIyMTg0Njk2Iiwic2NvcGVzIjpbXX0.rJhhGifasIBLzD8n-jkyoOWhlBsaiepjm9fFo-JDRv-YJjFovpYgupi8LdBjGp73uUIcpHGXMpONl-ybWej7LTt5ZKG1jBPiMoQ1jU82DcUiaDL2E9XLcahvgmqXH4teeKHXgmNfL0Z5zDqLw6kbzjxZDIrJhbF3Dj9cP7yxCzHoYdsqfTUIYn51174l0F--8EYfaAPZwaOKnuv4RuwC3jT8FWKb--uZUFFV39fTdBEhYBbAl3e9i3BrI3cKgAmua5UzalOWNg0Y51nGdUqgJrphi5bBxhUfMyMmHztUMyzYoWgZDn49ySnomVVv_n57G8JQ7k5rs28Kx_AsHNIffH2JC8k_jbLkam3mmzno_XCw3KcT1g-PE9OVcNkjoLKb4Zg8IARub3IOhYNdjI6GPmASJhxPZpJcHwBvfldEY4CYpB6IIwd8GLokBzuIPHYl6zLueRaKnFETt0eElESG1kQRwWEh8B68MxmTvyC6jFoqh2vjw74yxzQgAiKqWFDCkLd1cy73a_ICQLzOQYQkZFdeyM0TxkocJmGon_atVHqu7AMQIdkqbc5liqLEvepkMSM6VbIIJIfdhc0Bdp67eIyof91QDj7QP_kBEoYtfpoh_TsuTbt-gPbCK7_C8fGxfnxxRj2v3g_T4DmsDdAiQX2k5v1GA6vKSXVp4NQd-3A'
        },
        body: JSON.stringify({
          email: email,
          status: 'active'
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error de MailerLite:', errorData);
        throw new Error('Error al suscribirse');
      }
      
      setIsSubmitted(true);
      setEmail('');
      
      // Resetea el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al suscribirte. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-xs">
      {/* Card compacta */}
      <div className="bg-gradient-to-br from-card via-card to-blue-950/5 dark:to-blue-500/5 border-2 border-border hover:border-cyan-500/50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col">
          {/* Icon y Title juntos */}
          <div className="flex items-center gap-2 mb-3">
            <div className="inline-flex p-2.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gradient">
              Newsletter
            </h3>
          </div>

          {/* Subtitle compacto */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            Tips fiscales y cambios legales 2026 en tu email.
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-200 dark:border-emerald-500/30 rounded-lg px-4 py-3 text-sm">
              <Check className="w-4 h-4 flex-shrink-0" />
              <span className="font-semibold">
                ¡Genial! Ya estás en la lista.
              </span>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className="space-y-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                disabled={isLoading}
                className="w-full px-4 py-2.5 rounded-lg bg-background border-2 border-border focus:border-cyan-500 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isLoading ? 'Enviando...' : '¡Me apunto!'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
