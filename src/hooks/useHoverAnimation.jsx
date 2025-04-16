import { useRef, useState } from "react";

const useHoverAnimation = (initialText, finalText) => {

    const [animatedText, setAnimatedText] = useState(initialText);
    const animatingRef = useRef(false);
    const shouldResetRef = useRef(false);
    const intervalRef = useRef(null);

    const startAnimation = () => {
        if (animatingRef.current) return; // No relanzar si ya está animando

        const fullWord = finalText;
        let current = initialText; // Iniciar con la primera letra del texto final;
        let i = 0;

        animatingRef.current = true;
        shouldResetRef.current = false;

        intervalRef.current = setInterval(() => {
            if (i < fullWord.length) {
                current += fullWord[i];
                setAnimatedText(current);
                i++;
            } else {
                clearInterval(intervalRef.current);
                animatingRef.current = false;

                if (shouldResetRef.current) {
                    // Si el mouse ya se había ido, ahora sí hacemos reset
                    setTimeout(() => setAnimatedText(initialText), 700); // Un pequeño delay opcional
                }
            }
        }, 70);
    };
    
        const stopAnimation = () => {
            // En lugar de cortar la animación, marcamos que debe resetear al terminar
            if (animatingRef.current) {
                shouldResetRef.current = true;
            } else {
                // Si no estaba animando, reset inmediato
                setAnimatedText(initialText);
            }
        };


    return {animatedText, startAnimation, stopAnimation};

};

export default useHoverAnimation;