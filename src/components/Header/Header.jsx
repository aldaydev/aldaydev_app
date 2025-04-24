import "./header.css";

import HeaderLogo from "./HeaderLogo.jsx";
import MenuToggle from "./MenuToggle.jsx";
import useWindowSize from "../../hooks/useWindowSize.jsx";
import HeaderLinks from "./HeaderLinks.jsx";
import { useEffect, useRef, useState } from "react";

function Header() {

    const { width } = useWindowSize();
    const isCollapsed = width <= 1024; // Definimos un tamaño de pantalla para considerar móvil
    const [ isOpen, setIsOpen ] = useState(false);
    const navbarRef = useRef(null);
    const toggleRef = useRef(null);


    useEffect(()=>{
        function handleClickOutside(event) {
            if (
                navbarRef.current && !navbarRef.current.contains(event.target) &&
                toggleRef.current && !toggleRef.current.contains(event.target))  {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(()=>{
        setIsOpen(false)
    },[width])


    return (
        <header className="App__header">

            <div className="header__Container">

                <HeaderLogo isCollapsed={isCollapsed} />

                {isCollapsed && 
                <MenuToggle 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    ref={toggleRef}
                    tabIndex={isCollapsed ? 0 : -1}
                    aria-expanded={isOpen}
                />
                }

                <nav 
                    ref={navbarRef} 
                    className={`header__navbar ${(isCollapsed && isOpen) ? "header__navbar--open" : "header__navbar--close"}`}
                    aria-hidden={!isOpen}
                >

                    <HeaderLinks isOpen={isOpen} setIsOpen={setIsOpen} isCollapsed={isCollapsed}/>

                </nav>
            </div>
        </header>
    );
}

export default Header;