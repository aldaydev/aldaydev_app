import { Link } from "react-router-dom";
import "./headerLogo.css";
import useWindowSize from "../../hooks/useWindowSize";

function HeaderLogo() {

    const { width } = useWindowSize();
    const isCollapsed = width < 1024; // Definimos un tamaño de pantalla para considerar móvil

    return (
        <Link to="/" className="headerLogo__link">
            <span className={!isCollapsed ? "headerLogo__braceLeft" : "headerLogo__braceLeft headerLogo__braceLeft--collapsed"}>{"{"}</span>
            <span className="headerLogo__textContainer">
                <span className="headerLogo__initialText">A</span>
                {!isCollapsed && <span className="headerLogo__finalText">ldayDev</span>}
            </span>
            <span className={!isCollapsed ? "headerLogo__braceRight" : "headerLogo__braceRight headerLogo__braceRight--collapsed"}>{"}"}</span>
        </Link>
    )
}

export default HeaderLogo;