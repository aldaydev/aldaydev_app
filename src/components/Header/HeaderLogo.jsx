import { Link } from "react-router-dom";
import "./headerLogo.css";
import useWindowSize from "../../hooks/useWindowSize";

function HeaderLogo() {

    const { width } = useWindowSize();
    const isCollapsed = width < 1024; // Definimos un tamaño de pantalla para considerar móvil

    return (
        <Link to="/" className={isCollapsed && "headerLogo__link"}>
            <span className="headerLogo__braceLeft">{"{"}</span>
            <span className="headerLogo__textContainer">
                <span className="headerLogo__initialText">A</span>
                <span className="headerLogo__finalText">ldayDev</span>
            </span>
            <span className="headerLogo__braceRight">{"}"}</span>
        </Link>
    )
}

export default HeaderLogo;