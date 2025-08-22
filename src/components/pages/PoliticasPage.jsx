import { TitleSEO } from '../utils/TitleSEO';

import { SectionPp1 } from '../exports/SectionPp1';
import { Pasos } from '../exports/Pasos';

const PoliticasPage = () => {
    return (
        <main className="fade-in">
            <TitleSEO
                title="Mejoravit | Política de Privacidad"
                description="Conoce cómo protegemos y utilizamos tu información personal en nuestra plataforma de Crédito Mejoravit."
                canonical="https://mejoravit.com.mx/politica-privacidad"
            />

            <SectionPp1 />

            <Pasos />
        </main>
    );
};

export default PoliticasPage;
