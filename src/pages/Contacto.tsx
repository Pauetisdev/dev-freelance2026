import { Layout } from "@/components/Layout";
import { Helmet } from "react-helmet-async";

export default function Contacto() {
  return (
    <Layout>
      <Helmet>
        <title>Contacto - DevFreelance España</title>
        <meta name="description" content="Contacta con nosotros para resolver tus dudas sobre fiscalidad y gestión de autónomos en España." />
        <link rel="canonical" href="https://devfreelance.es/contacto" />
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Contacto</h1>
        
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-lg text-muted-foreground">
            ¿Tienes alguna pregunta, sugerencia o quieres colaborar con nosotros? 
            Estaremos encantados de ayudarte.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Envíanos un Mensaje</h2>
          
          <form 
            action="https://formsubmit.co/info.devfreelance2026@gmail.com" 
            method="POST"
            className="space-y-4"
          >
            {/* Configuración de FormSubmit */}
            <input type="hidden" name="_subject" value="Nuevo mensaje desde DevFreelance España" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://devfreelance.es/contacto?success=true" />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="Nombre"
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Asunto *
              </label>
              <input
                type="text"
                id="subject"
                name="Asunto"
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="Mensaje"
                required
                rows={6}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Enviar Mensaje
            </button>

            <p className="text-sm text-muted-foreground text-center">
              Al enviar este formulario, aceptas nuestra{' '}
              <a href="/politica-privacidad" className="text-accent hover:underline">
                Política de Privacidad
              </a>
            </p>
          </form>
        </div>

        <div className="mt-8 p-6 bg-muted/30 border border-border rounded-lg">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <span>💡</span>
            <span>¿Prefieres email directo?</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            Si tienes problemas con el formulario, puedes escribirnos directamente a{' '}
            <a href="mailto:info.devfreelance2026@gmail.com" className="text-accent hover:underline">
              info.devfreelance2026@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
