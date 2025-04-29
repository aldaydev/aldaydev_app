import './techFilters.css';

import { useEffect, useState } from "react";
import technologiesData from "../../../data/technologiesData.js";
import {techFilterIcons, otherFilterIcons} from "../../../data/filterIcons.js";

function TechFilters ( {setSelectedTechs, selectedTechs, testingAndVanilla, setTestingAndVanilla} ) {

    // const [techFilterList, setTechFilterList] = useState([]);

    // useEffect(()=>{
    //     const techFilterItems = technologiesData.filter((techItem)=>{
    //         return techItem.isFilter === true;
    //     })
    //     setTechFilterList(techFilterItems);
    // },[])

    return (
        <>
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
            <label htmlFor='vanillaOrTesting' onChange={(e) => setTestingAndVanilla(e.target.value)}>
                {otherFilterIcons && otherFilterIcons.map((otherFilterIcon)=>{
                    return (
                        <div>
                            <input type="radio" name='vanillaOrTesting' value={otherFilterIcon.id}/>
                        <img src={otherFilterIcon.icon}/>
                </div>
                    )
                })}
                {/* <div>
                    <input type="radio" name='vanillaOrTesting' value='vanilla'/>
                    <img src=''/>
                </div>
                <div>
                    <input type="radio" name='vanillaOrTesting' value='testing'/>
                </div> */}
            </label>
        <section>

        </section>
        </>
    )
}

export default TechFilters;