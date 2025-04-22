import { forwardRef } from 'react';
import './menuToggle.css';

const MenuToggle = forwardRef( ({isOpen, setIsOpen}, ref) => {

    // const [isOpen, setIsOpen] = useState(false);

    const toggleClass = isOpen ? "menuToggle__container--open" : "menuToggle__container--close";

    return (
        <div className={toggleClass} onClick={() => setIsOpen(!isOpen)} ref={ref}>
            <div className="menuToggle__bar menuToggle__bar--1"></div>
            <div className="menuToggle__bar menuToggle__bar--2"></div>
            <div className="menuToggle__bar menuToggle__bar--3"></div>

            <div className="menuToggle__bar--copy menuToggle__bar--1copy"></div>
            <div className="menuToggle__bar--copy menuToggle__bar--3copy"></div>
        </div>
    );
});

export default MenuToggle;