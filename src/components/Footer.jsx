import {
  Camera,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import logo from "../assets/serviciotecnicoiphone.png";

const contactMessage = encodeURIComponent(
  `Hola, vengo desde su sitio web.

Me gustaría recibir información sobre sus servicios para iPhone.

Quedo atento a su respuesta.`
);

export default function Footer() {
  return (
    <footer id="contacto" className="footer footer-premium">
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-brand">
        <img
          className="real-logo footer-logo"
          src={logo}
          alt="Servicio Técnico iPhone"
        />

        <div>
          <span className="footer-pill">
            <Sparkles size={14} />
            Servicio técnico premium
          </span>

          <h2>
            Reparaciones confiables para quienes no quieren arriesgar su iPhone.
          </h2>

          <p>
            Recibe una reparacion rápido, atención a domicilio a todas las comunas de Santiago.
            Escríbenos y te ayudaremos a encontrar la mejor solución.
          </p>

          <div className="footer-actions">
            <a
              href={`https://wa.me/56940777743?text=${contactMessage}`}
              target="_blank"
              rel="noreferrer"
              className="footer-main-btn"
            >
              <MessageCircle size={18} />
              Escribir por WhatsApp
            </a>
            <a
              href="https://www.instagram.com/serviciotecnicoiphone"
              target="_blank"
              rel="noreferrer"
              className="footer-secondary-btn"
            >
              <Camera size={18} />
              Ver Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-info-grid">
        <div className="footer-card">
          <MapPin />
          <strong>Ubicación</strong>
          <span>Santiago, Chile</span>
          <small>Vamos a cada rincón de la Región Metropolitana</small>
        </div>

        <div className="footer-card">
          <Phone />
          <strong>WhatsApp</strong>
          <span>+56 9 4077 7743</span>
          <small>Atención rápida para diagnóstico</small>
        </div>

        <div className="footer-card">
          <Clock />
          <strong>Horario</strong>
          <span>Lunes a Sábado</span>
          <small>10:00 - 20:00 hrs</small>
        </div>

        <div className="footer-card">
          <Camera />
          <strong>Instagram</strong>
          <span>@serviciotecnicoiphone</span>
          <small>Más de 10.000 personas nos siguen</small>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 Servicio Técnico iPhone · Santiago de Chile
        </span>

        <span>
          <ShieldCheck size={15} />
          Atención a domicilio • Garantía • Soporte
        </span>
      </div>
    </footer>
  );
}