import { Link } from "react-router-dom";
import "./headerLogo.css";

function HeaderLogo( {isCollapsed}) {

    const headerLogoClass = {
        link: !isCollapsed ? "headerLogo__link" : "headerLogo__link headerLogo__link--collapsed",
        braceLeft: !isCollapsed ? "headerLogo__braceLeft" : "headerLogo__braceLeft headerLogo__braceLeft--collapsed",
        braceRight: !isCollapsed ? "headerLogo__braceRight" : "headerLogo__braceRight headerLogo__braceRight--collapsed"
    }

    return (
        <Link to="/" className={headerLogoClass.link}>
            <span className={headerLogoClass.braceLeft}>{"{"}</span>
            <span className="headerLogo__textContainer">
                <span className="headerLogo__initialText">A</span>
                {!isCollapsed && <span className="headerLogo__finalText">ldayDev</span>}
            </span>
            <span className={headerLogoClass.braceRight}>{"}"}</span>
        </Link>
    )
}

export default HeaderLogo;