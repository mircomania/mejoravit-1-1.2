import LogoNavbar from '../../assets/images/logo-navbar.webp';

import { navLinks } from '../utils/navbarMenu';

import { BurgerMenu } from './BurgerMenu';

import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header>
            <nav className="navbar" aria-label="Menú de navegación principal">
                {/* LOGO  */}

                <div className="logo-container">
                    <NavLink to="/" aria-label="Ir a la página principal" data-link="navbar-logo-btn">
                        <img src={LogoNavbar} alt="Logotipo de Infonavit en la barra de navegación" className="logo-navbar" />
                    </NavLink>
                </div>

                {/* LISTA  */}

                <ul className="menu-nav light-text">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <NavLink to={item.to} title={item.title} data-link={item.dataLink}>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* BURGERMENU */}

            <BurgerMenu />
        </header>
    );
};
