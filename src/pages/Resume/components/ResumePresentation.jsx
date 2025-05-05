import rafa_alday_foto from '../../../assets/images/foto_rafa_alday.jpg'
import envelope_icon from '../../../assets/icons/util-icons/envelope_simpleicon.svg';
import location_icon from '../../../assets/icons/util-icons/location_simpleicon.svg';
import linkedin_icon from '../../../assets/icons/util-icons/linkedin_simpleicon.svg';
import github_icon from '../../../assets/icons/util-icons/github_simpleicon.svg';

function ResumePresentation() {

    const basicInfo = [
        {
            text: "Rafaldayparejo@gmail.com",
            url: "mailto: rafaldayparejo@gmail.com",
            icon: envelope_icon
        },
        {
            text: "Moratalaz, Madrid",
            url: "https://maps.app.goo.gl/LWBDsg5nZv7Sa3Yt8",
            icon: location_icon
        },
        {
            text: "LinkedIn",
            url: "https://linkedin/in/rafaelalday",
            icon: linkedin_icon
        },
        {
            text: "GitHub",
            url: "https://github.com/aldaydev",
            icon: github_icon
        },
    ]

    return (
        <article className="resume__presentation">
            <figure className="resume__photoContainer">
                <img
                    src={rafa_alday_foto}
                    className='resume__photo'
                />
            </figure>
            <div className='resume__personalInfo'>
                <h2 className='personalInfo__name'>RAFAEL ALDAY</h2>
                <h3 className='personalInfo__position'>DESARROLLADOR WEB FULL STACK</h3>
                <ul className='personalInfo__linkList'>
                    {
                        basicInfo && basicInfo.map((field) => {
                            return (
                                <li className='personalInfo__linkItem'>
                                    <a href={field.url} className='personalInfo__link'>
                                        <img src={field.icon} />
                                        <span>{field.text}</span>
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