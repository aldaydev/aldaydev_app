import "./header.css";

import HeaderLogo from "./HeaderLogo.jsx";
import MenuToggle from "./MenuToggle.jsx";
import useWindowSize from "../../hooks/useWindowSize.jsx";
import HeaderLinks from "./HeaderLinks.jsx";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function Header() {

    const { width } = useWindowSize();
    const isCollapsed = width <= 1024;
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
    const toggleRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (isCollapsed && isOpen) {
            setIsOpen(false);
            document.activeElement.blur();
            document.body.focus();
        }
    }, [location.pathname])

    //If click
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                isOpen && navbarRef.current && !navbarRef.current.contains(event.target) &&
                toggleRef.current && !toggleRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    //Each time width changes we close navbar if open
    useEffect(() => {
        isOpen && setIsOpen(false)
    }, [width]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const navbar = document.querySelector(".App__header");

            setIsOpen(false);

            if (scrollTop > 0) {
                navbar.classList.add("App__header--scroll");
            } else if(scrollTop === 0) {
                navbar.classList.remove("App__header--scroll");
            }

        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [window.scrollY]);

    useEffect(() => {
        const navbar = document.querySelector(".App__header");
    
        if (isOpen) {
            navbar.classList.add("App__header--scroll");
        } else if (window.scrollY === 0) {
            navbar.classList.remove("App__header--scroll");
        }
    }, [isOpen]);

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
                    aria-hidden={isCollapsed && !isOpen}
                >

                    <HeaderLinks isOpen={isOpen} setIsOpen={setIsOpen} isCollapsed={isCollapsed} />

                </nav>
            </div>
        </header>
    );
}

export default Header;