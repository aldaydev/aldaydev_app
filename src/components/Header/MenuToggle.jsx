import { forwardRef } from 'react';
import './menuToggle.css';

const MenuToggle = forwardRef(({ isOpen, setIsOpen, ...props }, ref) => {

    // const [isOpen, setIsOpen] = useState(false);

    const toggleClass = isOpen ? "menuToggle__container--open" : "menuToggle__container--close";

    return (
        <div
            className={`menuToggle__container ${toggleClass}`}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {  // Detecta Enter o Espacio
                    setIsOpen(!isOpen);
                }
            }}
            ref={ref}
            aria-label={isOpen ? "Cerrar menú desplegable" : "Abrir menú desplegable"}
            {...props}
        >
            <div className="menuToggle__bar menuToggle__bar--1"></div>
            <div className="menuToggle__bar menuToggle__bar--2"></div>
            <div className="menuToggle__bar menuToggle__bar--3"></div>

            <div className="menuToggle__bar--copy menuToggle__bar--1copy"></div>
            <div className="menuToggle__bar--copy menuToggle__bar--3copy"></div>
        </div>
    );
});

export default MenuToggle;