import { useState } from 'react';
import './menuToggle.css';

function MenuToggle() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleClass = isOpen ? "menuToggle__container--open" : "menuToggle__container--close";

    return (
        <div className={toggleClass} onClick={() => setIsOpen(!isOpen)}>
            <div className="menuToggle__bar menuToggle__bar--1"></div>
            <div className="menuToggle__bar menuToggle__bar--2"></div>
            <div className="menuToggle__bar menuToggle__bar--3"></div>

            <div className="menuToggle__bar--copy menuToggle__bar--1copy"></div>
            <div className="menuToggle__bar--copy menuToggle__bar--3copy"></div>
        </div>
    );
}

export default MenuToggle;