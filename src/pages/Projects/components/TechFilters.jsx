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

    const [isChecked, setIsChecked] = useState({
        vanilla: false,
        testing: false
    });

    // const handleRatio = (e) => {
    //     console.log(e.target.value);
    //     console.log(isChecked[e.target.value])
    //     setIsChecked(isChecked[e.target.value] ? true : false)
    // }

    useEffect(() => {
        console.log(isChecked);
    }, [isChecked])

    return (
        <section className='projectFilters'>
        <label className='techFilters'>
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
        </label>
            <label 
                htmlFor='vanillaOrTesting' 
                onChange={(e) => setTestingAndVanilla(e.target.value)}
                className='otherFilters'
            >
                {otherFilterIcons && otherFilterIcons.map((otherFilterIcon, index)=>{
                    return (
                        <label key={index} className='otherFilters__otherFilter'>
                            <input 
                                type="radio"
                                name='vanillaOrTesting'
                                value={otherFilterIcon.id}
                                className='otherFilter__radio'
                                checked={isChecked[otherFilterIcon.id]}
                                onChange={()=> setIsChecked((prev) => {
                                    if(prev[otherFilterIcon.id]){
                                        return {...prev, [otherFilterIcon.id]: false}
                                    }else{
                                        return {...prev, [otherFilterIcon.id]: true}
                                    }
                                })}
                            />
                            <img 
                                src={otherFilterIcon.icon}
                                className='otherFilter__image'
                            />
                            <span>{otherFilterIcon.name}</span>
                        </label>
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
        </section>
    )
}

export default TechFilters;