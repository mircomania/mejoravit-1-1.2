import { TitleSEO } from '../utils/TitleSEO';

import { SectionLp1 } from '../exports/SectionLp1';
import { Pasos } from '../exports/Pasos';
import { SectionLp2 } from '../exports/SectionLp2';

const LandingPage = () => {
    return (
        <main className="fade-in">
            <TitleSEO
                title="Mejoravit | Precalifica Ahora"
                description="En Mejoravit solicita tu Crédito Mejoravit y recibe hasta $162,000 en efectivo, Rápido, fácil y con cobertura a nivel nacional. ¡Solicítalo hoy!"
                canonical="https://mejoravit.com.mx/"
            />

            <SectionLp1 />

            <Pasos />

            <SectionLp2 />
        </main>
    );
};

export default LandingPage;
