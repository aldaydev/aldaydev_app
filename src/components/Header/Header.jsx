import "./header.css";
import useHoverAnimation from "../../hooks/useHoverAnimation.jsx";

import { Link } from "react-router-dom";
import about_icon from "../../assets/icons/about_icon.svg";
import HeaderLogo from "./HeaderLogo.jsx";

function Header() {

    // {animatedText, startAnimation, stopAnimation}
    const animateAbout = useHoverAnimation("", "About");

    return (
        <header className="App__header">
            <div className="header__Container">
                <HeaderLogo />
                <div className="header__links">
                    <Link 
                        to="/about" 
                        className="header__link"
                        onMouseEnter={animateAbout.startAnimation} 
                        onMouseLeave={animateAbout.stopAnimation}
                    >
                        <span className="header__logoBraceLeft">{"{"}</span>
                        <img src={about_icon} alt="About" className="header__aboutIcon" />
                        {animateAbout.animatedText}
                        <span className="header__logoBraceRight">{"}"}</span>
                    </Link>
                    <Link to="/projects" className="header__link">Projects</Link>
                    <Link to="/cv" className="header__link">CV</Link>
                </div>
            </div>

        </header>
    );
}

export default Header;