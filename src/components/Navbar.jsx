import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import logo from "../assets/serviciotecnicoiphone.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <img className="real-logo" src={logo} alt="Servicio Técnico iPhone" />

      <nav className="desktop-nav">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#precision">Tecnología</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a
        className="whatsapp-btn navbar-whatsapp"
        href="https://wa.me/56940777743"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <a href="#inicio" onClick={closeMenu}>Inicio</a>
        <a href="#servicios" onClick={closeMenu}>Servicios</a>
        <a href="#precision" onClick={closeMenu}>Tecnología</a>
        <a href="#contacto" onClick={closeMenu}>Contacto</a>

        <a
          className="mobile-whatsapp"
          href="https://wa.me/56940777743"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </header>
  );
}