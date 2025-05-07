import { useEffect } from "react";

export function useScrollReveal(
    selector = ".scrollReveal",
    invisbleClass = "scrollReveal",
    visibleClass = "scrollVisible"
) {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove(invisbleClass);
                        entry.target.classList.add(visibleClass);
                    }
                });
            },
            {
                threshold: 0.1, // Puedes ajustar la visibilidad requerida
            }
        );

        elements.forEach((el) => observer.observe(el));

        // Limpieza
        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [selector, visibleClass, invisbleClass]);
}
