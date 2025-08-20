import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/common/Navbar';
import { Cargando } from './components/utils/Cargando';
import { ScrollToTop } from './hooks/ScrollTop';
import { Footer } from './components/common/Footer';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));

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
                </Routes>
            </Suspense>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
