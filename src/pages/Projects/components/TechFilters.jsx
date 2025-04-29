import './techFilters.css';

import { useEffect, useState } from "react";
import technologiesData from "../../../data/technologiesData.js";
import techFilterIcons from "../../../data/techFilterIcons.js";

function TechFilters ( {setSelectedTechs, selectedTechs} ) {

    // const [techFilterList, setTechFilterList] = useState([]);

    // useEffect(()=>{
    //     const techFilterItems = technologiesData.filter((techItem)=>{
    //         return techItem.isFilter === true;
    //     })
    //     setTechFilterList(techFilterItems);
    // },[])

    return (
        <section className='techFilters'>
            {techFilterIcons && techFilterIcons.map( (techFilterItem, index) => {
                
                return (
                    <label 
                        key={index} 
                        className='techFilters__techFilter'
                        title={techFilterItem.name}
                    >
                        <input 
                            type='checkbox' 
                            className='techFilter__checkbox'
                            checked={selectedTechs.includes(techFilterItem.id)}
                            onChange={() => {
                                setSelectedTechs(prev => {
                                    if (prev.includes(techFilterItem.id)) {
                                        // Si ya está, lo quitamos
                                        return prev.filter(id => id !== techFilterItem.id);
                                    } else {
                                        // Si no está, lo añadimos
                                        return [...prev, techFilterItem.id];
                                    }
                                });
                            }}
                        />
                        <img 
                            src={techFilterItem.icon}
                            className='techFilter__image'
                            // style={{height: "25px", filter: techFilterItem.textColor === 'black' ? "invert(0)" : "invert(1)"}}
                        />
                        <span>
                            {techFilterItem.name}
                        </span>
                    </label>
                )
            })}
        </section>
    )
}

export default TechFilters;