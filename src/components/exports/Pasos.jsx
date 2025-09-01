import styles from '../../styles/modules/pasos.module.css';

import { PasosLista } from '../utils/pasosLista';

import useAnimationScroll from '../../hooks/UseAnimationScroll';

import { NavLink } from 'react-router-dom';

export const Pasos = () => {
    const objRef = useAnimationScroll('slide-in');

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                {PasosLista.map((paso) => (
                    <div key={paso.id} className={`${styles.paso} bold-text`}>
                        <NavLink
                            ref={objRef}
                            className={`${styles.pasoNumero} animacion-up`}
                            to={paso.to}
                            aria-label={`Ir al paso ${paso.id}: ${paso.titulo}`}
                            {...(paso.dataCTA && { 'data-cta': paso.dataCTA })}
                            {...(paso.dataLink && { 'data-link': paso.dataLink })}
                        >
                            {paso.id}
                        </NavLink>

                        <div className={`${styles.pasoTexto} animacion-down`} ref={objRef}>
                            <h3 className="bold-text">{paso.titulo}</h3>

                            <p className="light-text">{paso.texto}</p>
                        </div>
                    </div>
                ))}
            </div>

            <hr />
        </section>
    );
};
