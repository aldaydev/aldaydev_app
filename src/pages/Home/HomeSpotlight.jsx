import './homeSpotlight.css';

import foto_alday from '../../assets/images/foto_rafa_alday.jpg';
import down_icon from '../../assets/icons/util-icons/down_icon.svg';

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

                <div className='spotlight__imageContainer'>
                    <img 
                        src={foto_alday} 
                        className='spotlight__image' 
                        loading="lazy"
                        width={260}
                        height={260}
                    />
                </div>

                <div className='spotlight__goDownContainer'>
                    <img 
                        src={down_icon} className='spotlight__goDownIcon'
                    />
                </div>

            </section>
        </header>
    )
}

export default HomeSpotlight;