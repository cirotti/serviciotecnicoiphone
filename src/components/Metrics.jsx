import { Users, Camera, Star, ShieldCheck } from "lucide-react";

export default function Metrics() {
  return (
    <section className="metrics">
      <div>
        <Users />
        <strong>+10.000</strong>
        <span>Seguidores que confían</span>
      </div>

      <div>
        <Camera />
        <strong>+200</strong>
        <span>Reparaciones documentadas</span>
      </div>

      <div>
        <Star />
        <strong>+5</strong>
        <span>Años reparando iPhone</span>
      </div>

      <div>
        <ShieldCheck />
        <strong>100%</strong>
        <span>Garantía en servicios</span>
      </div>
    </section>
  );
}