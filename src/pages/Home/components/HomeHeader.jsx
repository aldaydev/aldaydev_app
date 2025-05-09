import './homeHeader.css';

import dev_illustration from '../../../assets/images/dev-illustration.svg';

import { techFilters } from '../../../data/techFilters';
import HomeIllustration from './homeIllustration';
import { useState } from 'react';

function HomeHeader() {

    const [currentColor, setCurrentColor] = useState("white");

    return (
        <header className='homeHeader'>

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
                                    className='homeFigure__techIcon'
                                    onMouseEnter={()=>setCurrentColor(filter.brandColor)}
                                    onMouseLeave={()=>setCurrentColor("white")}
                                />
                                {/* <span className='homeFigure__techName'>
                                    {filter.name}
                                </span> */}
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
                
            </div>
            
            <h1 className='homeHeader__title'>
                <span className='homeHeader__titleName'>RAFA ALDAY</span>
                <span className='homeHeader__titleSeparator'> ● </span>
                <span className='homeHeader__titleRole'>DESAROLLADOR WEB</span>
            </h1>
                    
            <h4 className='homeHeader__description'>Te doy la bienvenida a mi portfolio.</h4>
            
            <ul className='homeHeader__abilities'>

                <h4 className='homeHeader__abilitiesDescription'>Aquí te mostraré mis habilidades en desarrollo web: </h4>

                <li className='homeHeader__ability'>
                    Maquetación web: HTML y CSS. Diseño web "responisve" atendiendo al "pixel perfect".
                </li>
                <li className='homeHeader__ability'> 
                    Front-end: JavaScript. Lógica de interfaces, gestión de estados, contextos y consumo de APIs utilizando React.
                </li>
                <li className='homeHeader__ability'>
                    Back-end: Diseño de API Rests desde cero utilizando Node, Express y multitud de dependencias de dicho entorno.
                </li>
                <li className='homeHeader__ability'>
                    Bases de datos: Tanto "no-relacionales" (MongoDB) como relacionales (MySQL), aplicadas en proyectos desplegados.
                </li>
            </ul>
            

        </header>
    )
}

export default HomeHeader;