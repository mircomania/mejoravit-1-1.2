import styles from '../../styles/modules/sectionIp1.module.css';

import logoHome from '../../assets/images/logo-mejoravit-home.webp';
import img1 from '../../assets/images/img-info-1.webp';
import img2 from '../../assets/images/img-info-2.webp';

import { BotonNav } from '../utils/BotonNav';

import useAnimationScroll from '../../hooks/UseAnimationScroll';

import { NavLink } from 'react-router-dom';

export const SectionIp1 = () => {
    const objRef = useAnimationScroll('slide-in');

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <img src={logoHome} alt="Logotipo de Mejoravit" className="animacion-up" ref={objRef} />

                <h1 className="bold-text">Crédito Mejoravit 2025</h1>

                <h2 className="light-text">Efectivo inmediato para renovar tu hogar</h2>
            </header>

            <div className={styles.sectionContenido}>
                <div className={styles.sectionTexto1}>
                    <p className="light-text">
                        El Mejoravit es un crédito dirigido a derechohabientes del Infonavit para remodelar o ampliar tu vivienda. Con el crédito
                        Mejoravit en efectivo puedes obtener hasta <strong>$162,030.00 MXN</strong> (el monto final depende del plazo, tu capacidad de
                        pago y el saldo de tu subcuenta de vivienda).
                    </p>
                </div>

                <div className={styles.sectionTexto2}>
                    <h3 className="bold-text">¿Qué ofrece el Mejoravit?</h3>

                    <p className="light-text">Efectivo inmediato para obras, reparaciones o ampliaciones en tu casa.</p>

                    <ul className="light-text">
                        <li>
                            <strong>Plazos cómodos:</strong> Cubre el pago desde 12 a 48 meses.
                        </li>

                        <li>
                            <strong>Tasa de interés competitiva:</strong> Aproximadamente 11% anual (más baja que muchos préstamos personales
                            similares; confirma la tasa vigente al momento de solicitar).
                        </li>

                        <li>
                            <strong>Descuento vía nómina:</strong> Los pagos se descuentan automáticamente; las aportaciones patronales van directo al
                            abono del crédito, lo que puede reducir el plazo.
                        </li>

                        <li>
                            <strong>Sin penalización por pago anticipado:</strong> Puedes liquidarlo antes sin cargos.
                        </li>

                        <li>
                            <strong>Puedes solicitarlo de nuevo:</strong> Si ya lo pagaste, puedes pedir un nuevo Mejoravit pasado 2 meses desde la
                            liquidación.
                        </li>
                    </ul>
                </div>

                <hr />

                <div className={styles.sectionTexto3}>
                    <h3 className="bold-text">Requisitos principales</h3>

                    <div className={styles.textoImgSection1}>
                        <ul className="light-text">
                            <li>Ser derechohabiente del Infonavit.</li>

                            <li>No tener otro crédito vigente con Infonavit.</li>

                            <li>Tener en tu subcuenta de vivienda un mínimo aproximado de $22,230.00 MXN.</li>

                            <li>No tener más de 65 años al momento de solicitar (revisa condiciones exactas).</li>

                            <li>Tener mínimo 6 meses continuos cotizando en el IMSS/Infonavit con el mismo patrón.</li>

                            <li>Precalificación Mejoravit: contar con al menos 1,080 puntos (consulta tu resultado de precalificación).</li>
                        </ul>

                        <div className={styles.img1}>
                            <img
                                ref={objRef}
                                className="animacion-izq"
                                src={img1}
                                alt="Imagen representativa de productos ingresando a una casa, simbolizando el uso de un Crédito Mejoravit."
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>

                    <h3 className="bold-text">Documentos y requisitos administrativos</h3>

                    <div className={styles.textoImgSection2}>
                        <ul className="light-text">
                            <li>Acta de nacimiento.</li>

                            <li>Al menos dos referencias personales.</li>

                            <li>Identificación oficial vigente con fotografía.</li>

                            <li>Llenar la solicitud de crédito y entregar la documentación que solicite Infonavit.</li>

                            <li>Mantener actualizados datos de contacto y empleo (esto facilita la tramitación y el descuento vía nómina).</li>
                        </ul>

                        <div className={styles.img2}>
                            <img
                                ref={objRef}
                                className="animacion-der"
                                src={img2}
                                alt="Tabla de Checklist, anotando los requisitos necesarios para postular al Crédito Mejoravit"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>

                <hr />

                <div className={styles.sectionTexto4}>
                    <h3 className="bold-text">Cómo tramitar un Crédito Mejoravit en efectivo</h3>

                    <ul className="light-text">
                        <li>Revisa tu precalificación Mejoravit (consulta puntos y monto estimado).</li>

                        <li>Verifica el saldo de tu subcuenta de vivienda para confirmar que cumples el mínimo.</li>

                        <li>Reúne tus documentos: identificación, acta, referencias y comprobantes que te pidan.</li>

                        <li>Llena la solicitud en la plataforma o en la oficina/asesor autorizado.</li>

                        <li>Envía o presenta la documentación y espera la validación.</li>

                        <li>
                            Si todo está correcto, se procederá al desembolso del Mejoravit en efectivo y el pago se descontará vía nómina según lo
                            acordado
                        </li>
                    </ul>
                </div>

                <div className={styles.sectionTexto5}>
                    <p className="light-text">
                        El crédito Mejoravit es una excelente opción para mejorar tu hogar con condiciones accesibles y pagos cómodos. Asegúrate de
                        cumplir los requisitos y presentar la documentación correcta para agilizar el trámite. Consulta siempre la información oficial
                        del Infonavit para detalles actualizados sobre tasas, montos y condiciones. Si tienes alguna duda comunicate con nosotros o
                        visita nuestras{' '}
                        <NavLink to="/faq" title="Ver las preguntas preguntas frecuentes del crédito Mejoravit" data-link="info-faq-link">
                            preguntas frecuentes
                        </NavLink>
                    </p>
                </div>
            </div>

            <BotonNav dataCta="info-btn" />

            <hr />
        </section>
    );
};
