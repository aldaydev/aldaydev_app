import "./header.css";
import useAnimation from "../../hooks/useAnimation";
import useWindowSize from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";

function Header() {

    const { width, height } = useWindowSize();
    const isMobile = width <= 900; // Definimos un tamaño de pantalla para considerar móvil

    // {animatedText, startAnimation, stopAnimation}
    const animateLogo = useAnimation("{A}", "ldayDev");

    return (
        <header className="App__header">
            <div className="header__Container">
                {isMobile ?
                    <span className="header__logo">
                        {"{"}A{"}"}
                    </span>
                    :
                    <span 
                    id="header__logo"
                    onMouseOver={animateLogo.startAnimation} 
                    onMouseLeave={animateLogo.stopAnimation}
                    >
                        {animateLogo.animatedText}
                    </span>    
                }
                <div className="header__links">
                    <Link to="/about" className="header__link">About</Link>
                    <Link to="/projects" className="header__link">Projects</Link>
                    <Link to="/cv" className="header__link">CV</Link>
                </div>
            </div>

        </header>
    );
}

export default Header;