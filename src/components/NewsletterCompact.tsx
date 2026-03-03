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
    
    // Simula el envío (aquí podrías integrar tu servicio de newsletter)
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
    
    // Resetea el mensaje de éxito después de 5 segundos
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
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
