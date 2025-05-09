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
                                onMouseEnter={()=>setCurrentColor(filter.brandColor)}
                                onMouseLeave={()=>setCurrentColor("white")}
                            >
                                <img
                                    src={filter.icon}
                                    className='homeFigure__techIcon'
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

        </header>
    )
}

export default HomeHeader;