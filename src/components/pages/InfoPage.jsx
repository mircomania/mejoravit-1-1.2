import { TitleSEO } from '../utils/TitleSEO';

import { SectionIp1 } from '../exports/SectionIp1';
import { Pasos } from '../exports/Pasos';

const InfoPage = () => {
    return (
        <main className="fade-in">
            <TitleSEO
                title="Mejoravit | Información del Crédito"
                description="Conoce cómo funciona el Crédito Mejoravit: requisitos, montos, beneficios y pasos para solicitarlo. Toda la información clara y sencilla."
                canonical="https://mejoravit.com.mx/informacion-credito"
            />

            <SectionIp1 />

            <Pasos />
        </main>
    );
};

export default InfoPage;
