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

                <figure className='homeHeader__img'>
                    <HomeIllustration currentColor={currentColor} />
                </figure>

                <div className='homeHeader__currentTechContainer'>
                    <h4 
                        className='homeHeader__currentTechName'
                        style={{
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
                aria-label='Bajar para ir al la sección de últimos proyectos'
            >
                <img
                    src={down_icon} className='homeHeader__goDownIcon'
                    loading="lazy"
                    width={50}
                    height={50}
                />
            </a>

        </header>
    )
}

export default HomeHeader;