import './headerLinks.css';

import github_icon from '../../assets/icons/social-icons/github_icon.svg';
import linkedin_icon from '../../assets/icons/social-icons/linkedin_icon.svg';
import youtube_icon from '../../assets/icons/social-icons/youtube_icon.svg';
import envelope_icon from '../../assets/icons/social-icons/envelope_icon.svg';

import { Link } from "react-router-dom";

function HeaderLinks () {

    return(
        <div className="header__links">
            <div className='headerLinks__pages'>
                <Link to="/projects" className="headerLinks__pageLink">PROYECTOS</Link>
                <Link to="/cv" className="headerLinks__pageLink">CURRÍCULUM</Link>
                <Link to="/cv" className="headerLinks__pageLink">SOBRE MÍ</Link>
            </div>
            <div className='headerLinks__social'>
                <a href='https://github.com/aldaydev' target='_blank' className='headerLinks__socialLink'>
                    <img src={github_icon}/>
                </a>
                <a href='https://linkedin.com/in/rafaelalday' target='_blank' className='headerLinks__socialLink headerLinks__socialLink--youtube'>
                    <img src={linkedin_icon}/>
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