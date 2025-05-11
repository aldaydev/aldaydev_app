import { Link } from "react-router-dom";
import "./headerLogo.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function HeaderLogo( {isCollapsed}) {

    const headerLogoClass = {
        link: !isCollapsed ? "headerLogo__link" : "headerLogo__link headerLogo__link--collapsed",
        braceLeft: !isCollapsed ? "headerLogo__braceLeft" : "headerLogo__braceLeft headerLogo__braceLeft--collapsed",
        braceRight: !isCollapsed ? "headerLogo__braceRight" : "headerLogo__braceRight headerLogo__braceRight--collapsed"
    }

    const finalTextRef = useRef(null);
    const [finalWidth, setFinalWidth] = useState(0);

    const handleMouseEnter = () =>{
        const width = finalTextRef.current.scrollWidth;
        setFinalWidth(width);
    }

    return (
        <Link 
            to="/" className={headerLogoClass.link} 
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => setFinalWidth(0)}
            aria-label="Ir al inicio"
        >
            <span className={headerLogoClass.braceLeft}>{"{"}</span>
            <span className="headerLogo__textContainer">
                <span className="headerLogo__initialText">A</span>
                {!isCollapsed && 
                    <span
                        ref={finalTextRef}
                        className="headerLogo__finalText"
                        style={{width: `${finalWidth}px`}}
                    >
                        ldayDev
                    </span>
                }
            </span>
            <span className={headerLogoClass.braceRight}>{"}"}</span>
        </Link>
    )
}

export default HeaderLogo;