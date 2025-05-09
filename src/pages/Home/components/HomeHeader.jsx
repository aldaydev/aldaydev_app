import './homeHeader.css';

import { techFilters } from '../../../data/techFilters';
import HomeIllustration from './homeIllustration';
import down_icon from '../../../assets/icons/util-icons/down_icon.svg';
import { useEffect, useRef, useState } from 'react';
import AnimatedTitle from '../../../components/AnimatedTitle/AnimatedTitle';

function HomeHeader() {

    const techFilterList = techFilters;

    const intervalRef = useRef(null);
    const currentNumberRef = useRef(0);

    const [currentColor, setCurrentColor] = useState("white");

    const [currentFocusedIcon, setCurrentFocusedIcon] = useState(techFilterList[0].id);

    const [elementFocused, setElementFocused] = useState(false);


    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            const nextIndex = currentNumberRef.current;
            setCurrentFocusedIcon(techFilterList[nextIndex].id);
            setCurrentColor(techFilterList[nextIndex].brandColor);
    
            if (nextIndex >= techFilterList.length - 1) {
                currentNumberRef.current = 0;
            } else {
                currentNumberRef.current++;
            }
        }, 2000);
    };
    
    const stopInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };
    
    useEffect(() => {
        
        startInterval();

        
        return () => stopInterval();
    }, []);
    
    const handleMouseEnter = (item) => {
        setCurrentColor(item.brandColor);
        setElementFocused(true);
        setCurrentFocusedIcon(item.id);
        stopInterval(); // Detiene el intervalo al hacer hover
    };

    const handleMouseLeave = () => {
        setElementFocused(false);
        startInterval();
    };

    return (
        <header className='homeHeader'>

            <AnimatedTitle
                headingLevel="h2"
                initialText="A"
                finalText="ldayDev"
                id="page__animatedTitle"
            />

            <h1 className='homeHeader__title'>
                <span className='homeHeader__titleName'>RAFAEL ALDAY</span>
                <span className='homeHeader__titleSeparator'> ● </span>
                <span className='homeHeader__titleRole'>DESAROLLADOR WEB</span>
            </h1>

            <div className='homeHeader__homeFigure'>
                {
                    techFilters && techFilters.map((filter, index) => {
                        return (
                            <div
                                key={index}
                                className={`homeFigure__techItem homeFigure__techItem--${filter.id}`}
                            >
                                <img
                                    src={filter.icon}
                                    className={`homeFigure__techIcon ${currentFocusedIcon === filter.id && !elementFocused ? "homeFigure__techIcon--focused" : ""}`}
                                    onMouseEnter={() => handleMouseEnter(filter)}
                                    onMouseLeave={() => handleMouseLeave()}
                                />
                            </div>
                        )
                    })
                }
                {/* <img
                    src={dev_illustration}
                    className='homeHeader__img'
                /> */}
                <figure className='homeHeader__img'>
                    <HomeIllustration currentColor={currentColor} />
                </figure>

                <div className='homeHeader__currentTechContainer'>
                    <h4 
                        className='homeHeader__currentTechName'
                        style={{
                            // borderColor: currentFocusedIcon !== "express" ? currentColor : "white",
                            color: currentFocusedIcon !== "express" ? currentColor : "white"
                        }}
                    >
                        {currentFocusedIcon.toUpperCase()}
                    </h4>
                </div>
                

            </div>

            

            <a 
                className='homeHeader__goDownContainer'
                href='#projects'
            >
                <img
                    src={down_icon} className='homeHeader__goDownIcon'
                    loading="lazy"
                    width={50}
                    height={50}
                />
            </a>

            {/* <h4 className='homeHeader__description'>Te doy la bienvenida a mi portfolio.</h4> */}

            {/* <ul className='homeHeader__abilities'>

                <li className='homeHeader__ability'>
                    <b>Maquetación web</b> <p>HTML y CSS. Diseño web "responisve" atendiendo al "pixel perfect".</p>
                </li>
                <li className='homeHeader__ability'> 
                    <b>Front-end</b> <p>JavaScript. Gestión de estados, contextos y consumo de APIs con React.</p>
                </li>
                <li className='homeHeader__ability'>
                    <b>Back-end</b> <p>Diseño de API Rests utilizando Node y Express.</p>
                </li>
                <li className='homeHeader__ability'>
                    <b>Bases de datos</b> <p>"no-relacionales" (MongoDB) y relacionales (MySQL).</p>
                </li>
            </ul> */}


        </header>
    )
}

export default HomeHeader;