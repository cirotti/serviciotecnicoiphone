import { motion } from "framer-motion";
import { Camera, Heart, Home, Search, Send, UserCircle } from "lucide-react";
import logo from "../assets/serviciotecnicoiphone.png";

export default function IphoneMockup() {
    return (
        <div className="mockup-stage">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="phone-shadow" />

            <motion.div
                className="iphone-pro"
                animate={{ y: [0, -18, 0], rotateY: [-18, -8, -18], rotateZ: [5, 7, 5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="side-button left" />
                <div className="side-button right" />

                <div className="phone-glass">
                    <div className="dynamic-island" />

                    <div className="instagram-screen">
                        <div className="ig-status">
                            <span>9:41</span>
                            <span>● ● ▰</span>
                        </div>

                        <div className="ig-nav">
                            <span>@serviciotecnicoiphone</span>
                            <span>✓</span>
                        </div>

                        <div className="ig-profile-row">
                            <img className="ig-avatar-img" src={logo} alt="Servicio Técnico iPhone" />

                            <div className="ig-data">
                                <h3>Servicio Técnico iPhone 🇨🇱</h3>

                                <div className="ig-numbers">
                                    <div>
                                        <strong>910</strong>
                                        <small>posts</small>
                                    </div>
                                    <div>
                                        <strong>10 mil</strong>
                                        <small>seguidores</small>
                                    </div>
                                    <div>
                                        <strong>3.083</strong>
                                        <small>seguidos</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="ig-description">
                            A domicilio en todas las comunas de Santiago<br />
                            Pantallas · Baterías · Cámaras · Carga<br />
                            Agenda para hoy mismo
                        </p>

                        <div className="ig-link">wa.me/56940777743</div>

                        <div className="ig-proof">
                            <div>
                                <strong>10.000+</strong>
                                <span>clientes y seguidores</span>
                            </div>
                            <div>
                                <strong>5.0 ★★★★★</strong>
                                <span>referencias reales</span>
                            </div>
                        </div>

                        <div className="ig-actions">
                            <button>Mensaje</button>
                            <button>Contacto</button>
                        </div>

                        <div className="ig-stories">
                            <div>Baterías</div>
                            <div>Domicilio</div>
                            <div>Pagos</div>
                            <div>Cámaras</div>
                        </div>

                        <div className="ig-grid">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className="ig-bottom">
                            <Home size={15} />
                            <Search size={15} />
                            <Send size={15} />
                            <Heart size={15} />
                            <UserCircle size={15} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}