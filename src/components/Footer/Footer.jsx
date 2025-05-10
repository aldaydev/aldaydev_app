import './footer.css';

import alday_photo from '../../assets/images/foto_rafa_alday.jpg';

import github_icon from '../../assets/icons/util-icons/github_simpleicon.svg';
import linkedin_icon from '../../assets/icons/util-icons/linkedin_simpleicon.svg';
import youtube_icon from '../../assets/icons/util-icons/youtube_simpleicon.svg';
import envelope_icon from '../../assets/icons/util-icons/envelope_simpleicon.svg';

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

                <section >
                    <ul>
                        <h4>PÁGINAS</h4>
                        <li>
                            Inicio
                        </li>
                        <li>
                            Proyectos
                        </li>
                        <li>
                            Vídeos
                        </li>
                        <li>
                            Currículum
                        </li>
                        <li>
                            Sobre mí
                        </li>
                    </ul>
                </section>
            </div>
            
        </footer>
    )
}

export default Footer;