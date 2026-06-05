import {
  BatteryCharging,
  ShieldCheck,
  Smartphone,
  Wrench,
  Sparkles,
  Zap,
} from "lucide-react";
import IphoneMockup from "./IphoneMockup";

const diagnosticMessage = encodeURIComponent(
  `Hola, vengo desde su sitio web y me gustaría solicitar un diagnóstico.

• Modelo del iPhone:
• Descripción de la falla:
• Comuna:

Quedo atento a su respuesta.`
);

export default function Hero() {
  return (
    <section id="inicio" className="hero hero-premium">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <span className="pill">
          <Sparkles size={15} />
          SERVICIO TÉCNICO ESPECIALIZADO EN IPHONE
        </span>

        <h1>
          Reparamos tu <span>iPhone</span> con precisión de nivel premium.
        </h1>

        <p>
          Servicio técnico iPhone en Santiago. Pantallas, baterías, cámaras,
          puertos de carga y diagnóstico profesional con atención a domicilio y
          garantía real.
        </p>

        <div className="hero-list premium-list">
          <div>
            <Smartphone size={20} /> Especialistas en iPhone
          </div>
          <div>
            <BatteryCharging size={20} /> Repuestos de calidad
          </div>
          <div>
            <ShieldCheck size={20} /> Garantía en cada reparación
          </div>
          <div>
            <Wrench size={20} /> Atención a domicilio
          </div>
        </div>

        <div className="hero-actions">
          <a
            href={`https://wa.me/56940777743?text=${diagnosticMessage}`}
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Solicitar diagnóstico
          </a>

          <a href="#servicios" className="outline-btn">
            Ver servicios
          </a>
        </div>

        <div className="hero-trust">
          <span>
            <Zap size={15} /> Diagnóstico rápido
          </span>
          <span>Garantía incluida</span>
          <span>Reparación premium</span>
        </div>
      </div>

      <div className="hero-device">
        <div className="floating-card floating-card-two">
          Garantía real
        </div>
        <IphoneMockup />
      </div>
    </section>
  );
}