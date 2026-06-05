import { Smartphone, BatteryCharging, Camera, Plug, Activity } from "lucide-react";

const services = [
  {
    icon: <Smartphone />,
    title: "Pantallas",
    text: "Cambio de pantallas originales y premium."
  },
  {
    icon: <BatteryCharging />,
    title: "Baterías",
    text: "Recupera la autonomía de tu iPhone."
  },
  {
    icon: <Camera />,
    title: "Cámaras",
    text: "Reparación de cámaras delanteras y traseras."
  },
  {
    icon: <Plug />,
    title: "Puerto de carga",
    text: "Solución para problemas de carga y conexión."
  },
  {
    icon: <Activity />,
    title: "Diagnóstico",
    text: "Diagnóstico avanzado con equipos profesionales."
  }
];

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="section-head">
        <span>NUESTROS SERVICIOS</span>
        <h2>
          Reparamos todo lo que tu <b>iPhone</b> necesita
        </h2>
      </div>

      <div className="service-grid">
        {services.map((item) => (
          <article className="service-card" key={item.title}>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}