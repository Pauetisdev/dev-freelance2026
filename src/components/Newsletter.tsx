import { useState, FormEvent } from 'react';
import { Mail, Check } from 'lucide-react';

export function Newsletter() {
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
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-80"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-card via-card to-blue-950/5 dark:to-blue-500/5 border-2 border-border hover:border-cyan-500/30 rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/80 transition-all">
                  <Mail className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gradient">
                  Mantente al día
                </h3>

                {/* Subtitle */}
                <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-xl leading-relaxed">
                  No te pierdas los cambios legales de 2026. Recibe trucos de fiscalidad y gestión IT.
                </p>

                {/* Form */}
                {isSubmitted ? (
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-200 dark:border-emerald-500/30 rounded-lg px-4 py-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-base">
                      ¡Genial! Ya estás en la lista.
                    </span>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit} 
                    className="w-full max-w-lg"
                  >
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        required
                        disabled={isLoading}
                        className="flex-1 px-4 py-3 rounded-lg bg-background border-2 border-border focus:border-cyan-500 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      />
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap text-sm"
                      >
                        {isLoading ? 'Enviando...' : '¡Me apunto!'}
                      </button>
                    </div>
                    <p className="text-muted-foreground text-xs mt-3">
                      📧 Sin spam. Recibirás un enlace para darte de baja en cada email.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
