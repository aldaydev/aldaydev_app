import "./header.css";
import useHoverAnimation from "../../hooks/useHoverAnimation.jsx";

import { Link } from "react-router-dom";
import about_icon from "../../assets/icons/about_icon.svg";
import HeaderLogo from "./HeaderLogo.jsx";
import MenuToggle from "./MenuToggle.jsx";
import useWindowSize from "../../hooks/useWindowSize.jsx";

function Header() {

    const { width } = useWindowSize();
    const isCollapsed = width < 1024; // Definimos un tamaño de pantalla para considerar móvil

    // {animatedText, startAnimation, stopAnimation}
    const animateAbout = useHoverAnimation("", "About");

    return (
        <header className="App__header">
            <div className="header__Container">
                <HeaderLogo isCollapsed={isCollapsed} />
                <div className="header__navbar">
                    <div className="header__links">
                        <Link to="/projects" className="header__link">PROYECTOS</Link>
                        <Link to="/cv" className="header__link">CURRÍCULUM</Link>
                        
                    </div>
                    {isCollapsed && <MenuToggle/>}
                    
                </div>
                
                
            </div>

        </header>
    );
}

export default Header;