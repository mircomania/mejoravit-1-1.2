import { SectionLp1 } from '../exports/SectionLp1';
import { Pasos } from '../exports/Pasos';
import { SectionLp2 } from '../exports/SectionLp2';

const LandingPage = () => {
    return (
        <main className="fade-in">
            <SectionLp1 />

            <Pasos />

            <SectionLp2 />
        </main>
    );
};

export default LandingPage;
