import './headerLinks.css';

import github_icon from '../../assets/icons/social-icons/github_icon.svg';
import linkedin_icon from '../../assets/icons/social-icons/linkedin_icon.svg';
import youtube_icon from '../../assets/icons/social-icons/youtube_icon.svg';
import envelope_icon from '../../assets/icons/social-icons/envelope_icon.svg';

import { NavLink } from "react-router-dom";

function HeaderLinks () {

    return(
        <div className="header__links">
            <div className='headerLinks__pages'>
                <NavLink to="/proyectos" className={ ({isActive}) => isActive ? "headerLinks__pageLink headerLinks__pageLink--active" : "headerLinks__pageLink"}>PROYECTOS</NavLink>
                <NavLink to="/curriculum" className={ ({isActive}) => isActive ? "headerLinks__pageLink headerLinks__pageLink--active" : "headerLinks__pageLink"}>CURRÍCULUM</NavLink>
                <NavLink to="/sobre-mi" className={ ({isActive}) => isActive ? "headerLinks__pageLink headerLinks__pageLink--active" : "headerLinks__pageLink"}>SOBRE MÍ</NavLink>
            </div>
            <div className='headerLinks__social'>
                <a href='https://github.com/aldaydev' target='_blank' className='headerLinks__socialLink'>
                    <img src={github_icon} className='headerLinks__icon'/>
                </a>
                <a href='https://linkedin.com/in/rafaelalday' target='_blank' className='headerLinks__socialLink headerLinks__socialLink--youtube'>
                    <img src={linkedin_icon} className='headerLinks__icon'/>
                </a>
                <a href='https://youtube.com/@aldaydev' target='_blank' className='headerLinks__socialLink'>
                    <img src={youtube_icon} className='headerLinks__icon'/>
                </a>
                
                <a href='mailto:aldaydev@gmail.com' target='_blank' className='headerLinks__socialLink'>
                    <img src={envelope_icon} className='headerLinks__icon'/>
                </a>
                
            </div>
            
        </div>
    );

}

export default HeaderLinks;