import './techFilters.css';

import { useEffect, useState } from "react";
import technologiesData from "../../../data/technologiesData.js";

function TechFilters ( {setSelectedTechs, selectedTechs} ) {

    const [techFilterList, setTechFilterList] = useState([]);

    useEffect(()=>{
        const techFilterItems = technologiesData.filter((techItem)=>{
            return techItem.isFilter === true;
        })
        setTechFilterList(techFilterItems);
    },[])

    return (
        <section className='techFilters'>
            {techFilterList && techFilterList.map( (techFilterItem, index) => {
                
                return (
                    <label 
                        key={index} 
                        className='techFilters__techFilter'
                        style={{backgroundColor: techFilterItem.bgColor}}
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
                            style={{height: "25px", filter: techFilterItem.textColor === 'black' ? "invert(0)" : "invert(1)"}}
                        />
                        <span style={{fontSize: "1.3rem", color: techFilterItem.textColor}} className='techFilter__text'>
                            {techFilterItem.name}
                        </span>
                    </label>
                )
            })}
        </section>
    )
}

export default TechFilters;