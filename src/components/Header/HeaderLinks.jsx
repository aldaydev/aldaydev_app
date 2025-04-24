import './headerLinks.css';

import github_icon from '../../assets/icons/social-icons/github_icon.svg';
import linkedin_icon from '../../assets/icons/social-icons/linkedin_icon.svg';
import youtube_icon from '../../assets/icons/social-icons/youtube_icon.svg';
import envelope_icon from '../../assets/icons/social-icons/envelope_icon.svg';

import { NavLink } from "react-router-dom";

function HeaderLinks () {

    return(
        <section className="header__links">
            <ul className='headerLinks__pages'>
                <li className='headerLinks__pageItem'> 
                    <NavLink to="/proyectos" className={ ({isActive}) => isActive ? "headerLinks__pageLink headerLinks__pageLink--active" : "headerLinks__pageLink"}>PROYECTOS</NavLink>
                </li>
                <li className='headerLinks__pageItem'>
                    <NavLink to="/curriculum" className={ ({isActive}) => isActive ? "headerLinks__pageLink headerLinks__pageLink--active" : "headerLinks__pageLink"}>CURRÍCULUM</NavLink>
                </li>
                <li className='headerLinks__pageItem'>
                    <NavLink to="/sobre-mi" className={ ({isActive}) => isActive ? "headerLinks__pageLink headerLinks__pageLink--active" : "headerLinks__pageLink"}>SOBRE MÍ</NavLink>
                </li>
                
            </ul>
            <ul className='headerLinks__social'>
                <li className='headerLinks__socialItem'>
                    <a href='https://github.com/aldaydev' target='_blank' rel="noopener noreferrer" aria-label="Visitar GitHub" title="Visitar GitHub" className='headerLinks__socialLink'>
                        <img src={github_icon} className='headerLinks__icon' alt="Icono de Github"/>
                    </a>
                </li>
                
                <li className='headerLinks__socialItem'>
                    <a href='https://linkedin.com/in/rafaelalday' target='_blank' rel="noopener noreferrer" aria-label="Visitar LinkedIn" title="Visitar LinkedIn" className='headerLinks__socialLink headerLinks__socialLink--youtube'>
                        <img src={linkedin_icon} className='headerLinks__icon' alt="Icono de LinkedIn"/>
                    </a>
                </li>
                
                <li className='headerLinks__socialItem'>
                    <a href='https://youtube.com/@aldaydev' target='_blank' rel="noopener noreferrer" aria-label="Visitar Youtube" title="Visitar Youtube" className='headerLinks__socialLink'>
                        <img src={youtube_icon} className='headerLinks__icon' alt="Icono de Youtube"/>
                    </a>
                </li>
                
                <li className='headerLinks__socialItem'>
                    <a href='mailto:aldaydev@gmail.com' target='_blank' aria-label="Enviar email" title="Enviar email" className='headerLinks__socialLink'>
                        <img src={envelope_icon} className='headerLinks__icon' alt="Icono de Email"/>
                    </a>
                </li>
            </ul>
            
        </section>
    );

}

export default HeaderLinks;