import { NavLink } from 'react-router-dom';

import LogoFooter from '../../assets/images/logo-navbar.webp';

export const Footer = () => {
    return (
        <footer className="footer">
            {/* LOGO  */}
            <div>
                <div className="img-logo-footer">
                    <NavLink to="/" aria-label="Ir a la página de inicio" data-link="footer-logo-btn">
                        <img src={LogoFooter} alt="Logotipo de Mejoravit Infonavit en el pie de página" loading="lazy" decoding="async" />
                    </NavLink>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="utiles-footer light-text">
                <p>© Mejoravit 2025</p>

                <div className="links-footer">
                    <NavLink to="/politica-privacidad" title="Ver la política de privacidad del crédito Mejoravit" data-link="footer-politica-link">
                        Política de privacidad
                    </NavLink>

                    <NavLink to="/faq" title="Ver las preguntas preguntas frecuentes del crédito Mejoravit" data-link="footer-faq-link">
                        FAQ
                    </NavLink>
                </div>
            </div>
        </footer>
    );
};
