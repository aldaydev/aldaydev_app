import './footer.css';

import alday_photo from '../../assets/images/foto_rafa_alday.jpg';

import github_icon from '../../assets/icons/util-icons/github_simpleicon.svg';
import linkedin_icon from '../../assets/icons/util-icons/linkedin_simpleicon.svg';
import youtube_icon from '../../assets/icons/util-icons/youtube_simpleicon.svg';
import envelope_icon from '../../assets/icons/util-icons/envelope_simpleicon.svg';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <footer className="App__footer">
            <div className="footer__container">
                <section className='footer__footerInfo'>
                    <figure className='footerInfo__imageContainer'>
                        <img 
                            src={alday_photo}
                            className='footerInfo__image'
                        />
                    </figure>
                    <article className='footerInfo__infoContainer'>
                        <h5 className='footerInfo__name'>Rafael Alday</h5>
                        <h5 className='footerInfo__role'>Desarrollador web</h5>
                        <h5 className='footerInfo__role'>Madrid, España</h5>
                    </article>
                    <h4 className='footerInfo__infoRights'>Todos los derechos reservados &copy; 2025</h4>
                </section>

                <section className='footer__footerLinks'>
                    <h3 className='footerLinks__brand'>{"{ AldayDev }"}</h3>
                    <ul className='footerLinks__linkList' >
                        <li className='footerLinks__linkItem'>
                            <a 
                                className='footerLinks__link'
                                tabIndex={0}
                            >
                                <img 
                                    src={github_icon}
                                    className='footerLinks__linkIcon'
                                />
                            </a>
                        </li>
                        <li className='footerLinks__linkItem'>
                            <a 
                                className='footerLinks__link'
                                tabIndex={0}
                            >
                                <img 
                                    src={linkedin_icon}
                                    className='footerLinks__linkIcon'
                                />
                            </a>
                        </li>
                        <li className='footerLinks__linkItem'>
                            <a 
                                className='footerLinks__link'
                                tabIndex={0}
                            >
                                <img 
                                    src={youtube_icon}
                                    className='footerLinks__linkIcon'
                                />
                            </a>
                        </li>
                        <li className='footerLinks__linkItem'>
                            <a 
                                className='footerLinks__link'
                                tabIndex={0}
                            >
                                <img 
                                    src={envelope_icon}
                                    className='footerLinks__linkIcon'
                                />
                            </a>
                        </li>

                    </ul>
                </section>

                <section className='footer__footerPages'>
                    <h4 className='footerPages__title'>PÁGINAS</h4>
                    <ul className='footerPages__list'>
                        
                        <li className='footerPages__item'>
                            <Link to='/'>
                                Inicio
                            </Link>
                        </li>
                        <li className='footerPages__item'>
                            <Link to='/proyectos'>
                                Proyectos
                            </Link>
                        </li>
                        <li className='footerPages__item'>
                            <Link to='/videos'>
                                Vídeos
                            </Link>
                        </li>
                        <li className='footerPages__item'>
                            <Link to='/curriculum'>
                                Currículum
                            </Link>
                        </li>
                        <li className='footerPages__item'>
                            <Link to='/sobre-mi'>
                                Sobre mí
                            </Link>
                        </li>
                    </ul>
                </section>
                <h4 
                className='footerInfo__infoRights footerInfo__infoRights--show'>
                    Todos los derechos reservados &copy; 2025
                </h4>
            </div>
            
        </footer>
    )
}

export default Footer;