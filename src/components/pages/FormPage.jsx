import { TitleSEO } from '../utils/TitleSEO';

import { SectionFp1 } from '../exports/SectionFp1';
import { Pasos } from '../exports/Pasos';

const FormPage = () => {
    return (
        <main className="fade-in">
            <TitleSEO
                title="Mejoravit | Precalificar"
                description="Precalifica tu Crédito Mejoravit en minutos y obtén hasta $162,000 para mejorar tu vivienda. Trámite rápido y sencillo. ¡Empieza ahora!"
                canonical="https://mejoravit.com.mx/precalificar"
            />

            <SectionFp1 />

            <Pasos />
        </main>
    );
};

export default FormPage;
