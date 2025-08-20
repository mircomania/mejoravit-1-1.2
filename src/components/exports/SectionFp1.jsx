import styles from '../../styles/modules/sectionFp1.module.css';

import { NavLink } from 'react-router-dom';

import logoHome from '../../assets/images/logo-mejoravit-home.webp';

import { Form } from './Form';

export const SectionFp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <img src={logoHome} alt="Logotipo de Mejoravit" className={styles.logo} />

            <div className={styles.sectionContenido}>
                <header className={styles.sectionTitulo}>
                    <h1 className="bold-text">Precalificación Mejoravit</h1>

                    <h2 className="light-text">
                        Ingresa tus datos para precalificar, y un asesor certificado se comunicará contigo para brindarte más información sobre tu
                        crédito Mejoravit.
                    </h2>
                </header>

                <div className={styles.sectionForm}>
                    <Form />
                </div>
            </div>

            <div className={styles.sectionFooter}>
                <p className="light-text">
                    Mejoravit | utilizará sus datos personales aquí recabados para la prospección comercial, la promoción de los productos y/o
                    servicios disponibles que Usted solicite a través de este sitio web. Asimismo, mejoravit.com.mx podrá compartir su información con
                    las sociedades o empresas con las que mantenga relaciones comerciales y/o de negocios. Para tener mayor información acerca del
                    tratamiento y de los derechos que puede hacer valer, usted puede acceder a las políticas de privacidad completa para nuestros
                    usuarios a través de este enlace.{' '}
                    <NavLink
                        to="/politica-privacidad"
                        title="Ver la política de privacidad sobre el Crédito Mejoravit"
                        data-link="form-politicas-link"
                    >
                        Conoce más Aquí.
                    </NavLink>
                </p>
            </div>

            <hr />
        </section>
    );
};
