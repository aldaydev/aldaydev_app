import { useState, useRef } from "react";
import "./header.css";
import useAnimation from "../../hooks/useAnimation";

function Header() {

    // {animatedText, startAnimation, stopAnimation}
    const animateLogo = useAnimation("{A}", "ldayDev");

    // const [logoText, setLogoText] = useState("{A}");
    // const animatingRef = useRef(false);
    // const shouldResetRef = useRef(false);
    // const intervalRef = useRef(null);

    // const startLogoAnimation = () => {
    //     if (animatingRef.current) return; // No relanzar si ya está animando

    //     const fullWord = "ldayDev";
    //     let current = "A";
    //     let i = 0;

    //     animatingRef.current = true;
    //     shouldResetRef.current = false;

    //     intervalRef.current = setInterval(() => {
    //         if (i < fullWord.length) {
    //             current += fullWord[i];
    //             setLogoText(`{${current}}`);
    //             i++;
    //         } else {
    //             clearInterval(intervalRef.current);
    //             animatingRef.current = false;

    //             if (shouldResetRef.current) {
    //                 // Si el mouse ya se había ido, ahora sí hacemos reset
    //                 setTimeout(() => setLogoText("{A}"), 700); // Un pequeño delay opcional
    //             }
    //         }
    //     }, 70);
    // };

    // const stopLogoAnimation = () => {
    //     // En lugar de cortar la animación, marcamos que debe resetear al terminar
    //     if (animatingRef.current) {
    //         shouldResetRef.current = true;
    //     } else {
    //         // Si no estaba animando, reset inmediato
    //         setLogoText("{A}");
    //     }
    // };

    return (
        <header className="App__header">
            <div className="header__Container">
                    <span 
                    id="header__logo"
                    onMouseOver={animateLogo.startAnimation} 
                    onMouseLeave={animateLogo.stopAnimation}
                    >
                        {animateLogo.animatedText}
                    </span>
            </div>
        </header>
    );
}

export default Header;