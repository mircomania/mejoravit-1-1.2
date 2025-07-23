import styles from '../../styles/modules/sectionLp1.module.css';

import logoHome from '../../assets/images/logo-mejoravit-home.webp';
import imgHome from '../../assets/images/imagen-home.webp';
import flechaHome from '../../assets/images/flecha-home.webp';

import { BotonNav } from '../utils/BotonNav';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionTitulo}>
                <img src={logoHome} alt="Logotipo de Mejoravit" />
            </div>

            <div className={styles.sectionContenido}>
                <div className={styles.sectionContenido1}>
                    <img src={imgHome} alt="La futura casa de tus sueños, gracias al crédito Mejoravit" />
                </div>

                <div className={styles.sectionContenido2}>
                    <h1 className="bold-text">¡SOLICITA TU CRÉDITO!</h1>

                    <h2 className="light-text">Obtén hasta $162,030 en efectivo</h2>

                    <img src={flechaHome} alt="Flecha apuntando al botón de precalificación del crédito Mejoravit" />

                    <BotonNav dataCta="home-btn-1" />

                    <p className="light-text">¡Fácil y rápido! Solo ingresa tus datos</p>
                </div>
            </div>

            <hr />
        </section>
    );
};
