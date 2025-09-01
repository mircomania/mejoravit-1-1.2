import { useEffect, useMemo } from 'react';

/**
 * Hook para manejar animaciones con múltiples o un único elemento.
 *
 * @param {string} className - Clase que se añade al ser visible.
 * @param {object} options - Opciones para IntersectionObserver.
 * @returns {(el: HTMLElement | null) => void} - Callback ref.
 */
const useAnimationScroll = (className, options = { threshold: 0.5 }) => {
    // Creamos el observer una sola vez
    const observer = useMemo(
        () =>
            new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(className);
                        observer.unobserve(entry.target);
                    }
                });
            }, options),
        [className, options]
    );

    useEffect(() => {
        return () => {
            observer.disconnect();
        };
    }, [observer]);

    const setRefs = (el) => {
        if (el) observer.observe(el);
    };

    return setRefs;
};

export default useAnimationScroll;
