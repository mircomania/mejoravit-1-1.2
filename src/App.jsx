import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/common/Navbar';
import { Cargando } from './components/utils/Cargando';
import { ScrollToTop } from './hooks/ScrollTop';
import { Footer } from './components/common/Footer';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));
const FormPage = lazy(() => import('./components/pages/FormPage'));
const InfoPage = lazy(() => import('./components/pages/InfoPage'));
const FaqPage = lazy(() => import('./components/pages/FaqPage'));
const PoliticasPage = lazy(() => import('./components/pages/PoliticasPage'));
const ErrorPage = lazy(() => import('./components/pages/ErrorPage'));

function App() {
    return (
        <BrowserRouter basename="/mejoravit-1-1.2/">
            <ScrollToTop />

            <Navbar />

            <Suspense
                fallback={
                    <main className="cargando">
                        <Cargando />
                    </main>
                }
            >
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/precalificar" element={<FormPage />}></Route>
                    <Route path="/informacion-credito" element={<InfoPage />}></Route>
                    <Route path="/faq" element={<FaqPage />}></Route>
                    <Route path="/politica-privacidad" element={<PoliticasPage />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </Suspense>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
