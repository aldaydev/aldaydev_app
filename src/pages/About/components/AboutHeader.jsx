import './aboutHeader.css';

import foto_alday_about from '../../../assets/images/foto_rafa_alday_about.png';

function AboutHeader() {
    return (
        <header className='about__header'>
            <div className='about__headerBg'></div>
            <figure className='about__imageContainer'>
                <div className='about__imageBg'></div>
                <img
                    src={foto_alday_about}
                    className='about__image'
                />
            </figure>

            <section className='about__headerInfo'>
                <h2 className='about__headerTitle'>Me llamo Rafa Alday</h2>
                <h3 className='about__headerDescription'>
                    En esta página vas a poder saber más acerca de mí, conocer mi historia, trayectoria y motivaciones. Te invito a seguir leyendo para conocerme un poco mejor.
                </h3>
            </section>
        </header>
    )
}

export default AboutHeader;