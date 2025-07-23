import LogoBurger from '../../assets/images/logo-navbar.webp';

import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { navLinks } from '../utils/NavBarMenu';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="burger-menu" ref={menuRef}>
            {/* ICONO  */}

            <FontAwesomeIcon icon={faBars} className="burger-menu-icon" onClick={toggleMenu} data-link="burgermenu-btn" />

            {/* CONTENEDOR LISTA */}

            <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
                {/* BOTON X */}

                {isScrolled && <FontAwesomeIcon icon={faTimes} className="close-burger-menu" onClick={toggleMenu} data-link="burgermenu-x-btn" />}

                {/* LISTA  */}

                <ul className="burger-menu-nav light-text">
                    {navLinks.map((link) => (
                        <div className="link-container" key={link.id}>
                            <li>
                                <NavLink to={link.to} onClick={toggleMenu} title={link.title} data-link={link.dataLink}>
                                    {link.label}
                                </NavLink>
                            </li>
                        </div>
                    ))}
                </ul>

                <div className="container-bajo-mobile">
                    {/* LOGO  */}

                    <div className="logo-mobile-menu">
                        <img src={LogoBurger} alt="Logotipo de Mejoravit" loading="lazy" decoding="async" />
                    </div>
                </div>
            </div>
        </div>
    );
};
