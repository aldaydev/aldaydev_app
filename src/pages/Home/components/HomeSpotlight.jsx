import './homeSpotlight.css';

import foto_alday from '../../../assets/images/foto_rafa_alday.jpg';
import down_icon from '../../../assets/icons/util-icons/down_icon.svg';

import AnimatedTitle from "../../../components/AnimatedTitle/AnimatedTitle";

function HomeSpotlight () {

    return(
        <header className="home__spotlight">
            <AnimatedTitle 
                headingLevel = "h2"
                initialText="A"
                finalText="ldayDev"
                id="spot__animatedTitle"
            />
            <section className="spotlight__section">

                <h1 className='spotlight__title' height={38.39}>
                    <span className='spotlight__titleName'>RAFA ALDAY</span>
                    <span className='spotlight__titleSeparator'> ● </span>
                    <span className='spotlight__titleDescription'>WEB DEVELOPER</span>
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
                        loading="lazy"
                        width={50}
                        height={50}
                    />
                </div>

            </section>
        </header>
    )
}

export default HomeSpotlight;