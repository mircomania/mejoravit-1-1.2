import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

import LogoNavbar from '../../assets/images/Logo Navbar.webp';

export const Footer = () => {
    return (
        <footer className="text-center text-white py-4 footer">
            <div className="container position-relative">
                {/* Logo y Redes Sociales */}
                <section>
                    <div>
                        <NavLink to="/" aria-label="Volver al inicio" data-link="footer-logo-btn">
                            <img
                                src={LogoNavbar}
                                alt="Logo de Mejoravit Infonavit"
                                className="imgLogoNavFooter mb-1"
                                loading="lazy"
                                decoding="async"
                            />
                        </NavLink>
                    </div>

                    {/* Redes Sociales */}
                    <div>
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="me-2" />
                        <FontAwesomeIcon icon={faTiktok} size="2x" className="me-2" />
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </div>
                </section>

                {/* Copyright */}
                <section className="poliCopy">
                    <p className="light-text">
                        © 2025 Mejoravit <br />
                        <NavLink to="/politica-privacidad" title="Ver la política de privacidad" data-link="footer-politica-link">
                            Política de privacidad
                        </NavLink>
                    </p>
                </section>
            </div>
        </footer>
    );
};
