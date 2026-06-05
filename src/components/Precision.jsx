import {
  BatteryCharging,
  Camera,
  CheckCircle,
  Cpu,
  ShieldCheck,
  Smartphone,
  Wrench,
  Zap,
  Sparkles,
} from "lucide-react";

const checks = [
  "Diagnóstico profesional antes de reparar",
  "Repuestos de calidad y pruebas finales",
  "Herramientas de precisión para iPhone",
  "Garantía escrita en cada trabajo",
];

export default function Precision() {
  return (
    <section id="precision" className="precision precision-pro precision-luxury">
      <div className="precision-ambient" />

      <div className="precision-text">
        <span className="section-kicker">
          <Sparkles size={14} />
          TECNOLOGÍA Y PRECISIÓN
        </span>

        <h2>
          Ingeniería limpia para cuidar cada <b>detalle.</b>
        </h2>

        <p>
          Cada reparación pasa por diagnóstico, desmontaje cuidadoso, pruebas
          internas y validación final. No improvisamos: trabajamos como un
          laboratorio técnico premium.
        </p>

        <ul>
          {checks.map((item) => (
            <li key={item}>
              <CheckCircle size={18} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="iphone-lab luxury-lab">
        <div className="lab-glow" />
        <div className="lab-grid" />
        <div className="lab-ring" />

        <div className="iphone-exploded luxury-exploded">
          <div className="iphone-screen-part">
            <div className="screen-reflection" />
            <div className="screen-island" />
          </div>

          <div className="iphone-frame-part">
            <div className="speaker-hole" />

            <div className="battery-real">
              <span>Li-ion</span>
              <small>Battery</small>
            </div>

            <div className="taptic-engine" />

            <div className="camera-housing">
              <i />
              <i />
              <i />
            </div>

            <div className="frame-lines">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="logic-board">
            <div className="chip big" />
            <div className="chip" />
            <div className="chip small" />
            <div className="gold-lines" />
          </div>

          <div className="camera-module">
            <span />
            <span />
          </div>

          <div className="charge-flex">
            <div />
            <div />
            <div />
          </div>
        </div>

        <div className="precision-tags">
          <div className="part-label label-screen">
            <Smartphone size={15} />
            Pantalla OLED
          </div>

          <div className="part-label label-battery">
            <BatteryCharging size={15} />
            Batería
          </div>

          <div className="part-label label-camera">
            <Camera size={15} />
            Cámara
          </div>

          <div className="part-label label-board">
            <Cpu size={15} />
            Placa lógica
          </div>

          <div className="part-label label-charge">
            <Zap size={15} />
            Flex de carga
          </div>
        </div>

        <div className="lab-card lab-card-one">
          <ShieldCheck size={17} />
          Garantía incluida
        </div>

        <div className="lab-card lab-card-two">
          <Wrench size={17} />
          Reparación precisa
        </div>
      </div>
    </section>
  );
}