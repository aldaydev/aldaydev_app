import './resumePresentation.css';

import rafa_alday_foto from '../../../assets/images/foto_rafa_alday.webp'
import envelope_icon from '../../../assets/icons/util-icons/envelope_simpleicon.svg';
import location_icon from '../../../assets/icons/util-icons/location_simpleicon.svg';
import linkedin_icon from '../../../assets/icons/util-icons/linkedin_simpleicon.svg';
import github_icon from '../../../assets/icons/util-icons/github_simpleicon.svg';

function ResumePresentation() {

    const basicInfo = [
        {
            text: "Rafaldayparejo@gmail.com",
            url: "mailto:rafaldayparejo@gmail.com",
            aria: "Enviar un correo a Rafael",
            icon: envelope_icon
        },
        {
            text: "Moratalaz, Madrid",
            url: "https://maps.app.goo.gl/LWBDsg5nZv7Sa3Yt8",
            aria: "Abrir ubicación: Moratalaz, Madrid",
            icon: location_icon
        },
        {
            text: "linkedin/in/rafaelalday",
            url: "https://linkedin.com/in/rafaelalday",
            aria: "Perfil de LinkedIn de Rafael",
            icon: linkedin_icon,
        },
        {
            text: "github.com/aldaydev",
            url: "https://github.com/aldaydev",
            aria: "Perfil de GitHub de Rafael",
            icon: github_icon
        },
    ]

    return (
        <article className="resume__presentation">
            <figure className="resume__photoContainer">
                <img
                    src={rafa_alday_foto}
                    className='resume__photo'
                    alt='Foto de Rafa Alday'
                />
            </figure>
            
            <hgroup className='personalInfo__titles'>
                <h2 className='personalInfo__name'>RAFAEL ALDAY</h2>
                <h3 className='personalInfo__role'>DESARROLLADOR WEB FULL STACK</h3>
            </hgroup>

            <p className='personalInfo_description'>Tras más de 12 años trabajando como Técnico Audiovisual para importantes clientes como Telefónica o Presidencia del Gobierno, me he renovado como Desarrollador Web para aportar a este sector el compromiso y buen hacer que siempre me han caracterizado.</p>

            <div className='personalInfo__personalLinks'>
                <ul className='personalLinks__linkList'>
                    {
                        basicInfo && basicInfo.map((item, index) => {
                            return (
                                <li key={index} className='personalLinks__linkItem'>
                                    <a 
                                        href={item.url}
                                        target='_blank'
                                        rel='noreferrer noopener'
                                        className='personalLinks__link'
                                        aria-label={item.aria}
                                    >
                                        <img src={item.icon} className='personalLinks__linkIcon'/>
                                        <span className='personalLinks__linkText'>{item.text}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </article>
    )
}

export default ResumePresentation;