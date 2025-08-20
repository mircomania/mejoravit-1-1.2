import styles from '../../styles/modules/pasos.module.css';

import { NavLink } from 'react-router-dom';

import { PasosLista } from '../utils/pasosLista';

export const Pasos = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                {PasosLista.map((paso) => (
                    <div key={paso.id} className={`${styles.paso} ${'bold-text'}`}>
                        <NavLink
                            className={styles.pasoNumero}
                            to={paso.to}
                            aria-label={`Ir al paso ${paso.id}: ${paso.titulo}`}
                            {...(paso.dataCTA && { 'data-cta': paso.dataCTA })}
                            {...(paso.dataLink && { 'data-link': paso.dataLink })}
                        >
                            {paso.id}
                        </NavLink>

                        <div className={styles.pasoTexto}>
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
