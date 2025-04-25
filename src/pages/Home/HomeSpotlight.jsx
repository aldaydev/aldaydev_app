import './homeSpotlight.css';

import foto_alday from '../../assets/images/foto_rafa_alday.jpg';

import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";

function HomeSpotlight () {

    return(
        <header className="home__spotlight">
            <section className="spotlight__section">
                <AnimatedTitle 
                    headingLevel = "h2"
                    initialText="A"
                    finalText="ldayDev"
                    fontSize="3rem"
                    braceSize="3.4rem"
                    color="var(--color-white)"
                />
                <h1 className='spotlight__title'>
                    RAFA ALDAY
                    <span> ● </span>
                    WEB DEVELOPER
                </h1>
                <article className='spotlight__descriptionContainer'>
                    <div className='spotlight__imageContainer'>
                        <img src={foto_alday} className='spotlight__image'/>
                    </div>
                    <p className='spotlight__description'>Te doy la bienvenida a mi portfolio como desarrollador web. Aquí podrás saber un poco más acerca de mí, así como ver mis proyectos desplegados y vídeos presentándolos.</p>
                </article>
            </section>
        </header>
    )
}

export default HomeSpotlight;