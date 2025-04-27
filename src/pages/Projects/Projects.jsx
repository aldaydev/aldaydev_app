import AnimatedTitle from '../../components/AnimatedTitle/AnimatedTitle';
import './projects.css';

import technologiesData from '../../data/technologiesData.js';
import { useState, useEffect } from 'react';

function Projects () {

    const [techFilterList, setTechFilterList] = useState([]);

    useEffect(()=>{
        const techFilterItems = technologiesData.filter((techItem)=>{
            return techItem.isFilter === true;
        })
        setTechFilterList(techFilterItems);
    },[])


    return(
        <>
            <section className='projects'>
                <header className='projects__header'>
                    <AnimatedTitle 
                        headingLevel = "h1"
                        initialText="P"
                        finalText="royectos"
                        id="page__animatedTitle"
                        fontSize="3rem"
                        braceSize="3.4rem"
                        color="var(--color-white)"
                    />
                </header>

                <section>
                    {techFilterList && techFilterList.map( (techFilterItem) => {
                        console.log(techFilterItem.icon)
                        return (
                            <label>
                                <input type='checkbox'/>
                                {/* <img src={`../..${techFilterItem.icon}`}/> */}
                                <img src={techFilterItem.icon} style={{height: "40px", filter: techFilterItem.textColor === 'black' ? "invert(0)" : "invert(1)"}}/>
                                <span style={{fontSize: "1.7rem"}}>{techFilterItem.name}</span>
                            </label>
                        )
                    })}
                </section>
                
            </section>
        </>
        
    )
}

export default Projects;