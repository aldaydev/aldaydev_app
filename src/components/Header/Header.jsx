import "./header.css";

import HeaderLogo from "./HeaderLogo.jsx";
import MenuToggle from "./MenuToggle.jsx";
import useWindowSize from "../../hooks/useWindowSize.jsx";
import HeaderLinks from "./HeaderLinks.jsx";

function Header() {

    const { width } = useWindowSize();
    const isCollapsed = width < 1024; // Definimos un tamaño de pantalla para considerar móvil


    return (
        <header className="App__header">
            <div className="header__Container">
                <HeaderLogo isCollapsed={isCollapsed} />
                <div className="header__navbar">
                    <HeaderLinks/>
                </div>
                {isCollapsed && <MenuToggle/>}
                
                
            </div>

        </header>
    );
}

export default Header;