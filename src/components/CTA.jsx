import {
  MessageCircle,
  ShieldCheck,
  Home,
  Zap,
  Sparkles,
  Clock,
} from "lucide-react";

const whatsappMessage = encodeURIComponent(
  `Hola, vengo desde su sitio web y me gustaría solicitar un diagnóstico.

• Modelo del iPhone:
• Descripción de la falla:
• Comuna:

Quedo atento a su respuesta.`
);

export default function CTA() {
  return (
    <section className="cta cta-premium">
      <div className="cta-glow cta-glow-one" />
      <div className="cta-glow cta-glow-two" />

      <div className="cta-content">
        <span className="cta-pill">
          <Sparkles size={14} />
          Atención premium para iPhone
        </span>

        <h2>
          Tu iPhone podría quedar <b>listo hoy.</b>
        </h2>

        <p>
          Recibe una reparacion rápida, atención a domicilio a todas las comunas de Santiago. 
          Escríbenos y te ayudaremos a encontrar la mejor solución.
        </p>

        <a
          href={`https://wa.me/56940777743?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="cta-main-btn"
        >
          <MessageCircle size={19} />
          Solicitar diagnóstico
        </a>
      </div>

      <div className="cta-items">
        <span>
          <Zap size={20} />
          <strong>Respuesta rápida</strong>
          <small>Atención directa por WhatsApp</small>
        </span>

        <span>
          <Home size={20} />
          <strong>A domicilio</strong>
          <small>Servicio disponible en Santiago</small>
        </span>

        <span>
          <ShieldCheck size={20} />
          <strong>Garantía incluida</strong>
          <small>Respaldo en cada reparación</small>
        </span>

        <span>
          <Clock size={20} />
          <strong>Agenda flexible</strong>
          <small>Lunes a sábado</small>
        </span>
      </div>
    </section>
  );
}