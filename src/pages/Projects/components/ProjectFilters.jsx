import './projectFilters.css';

import { useState } from "react";
import { techFilterIcons, otherFilterIcons } from "../../../data/filterIcons.js";

function ProjectFilters({ setSelectedTechs, selectedTechs, setTestingAndVanilla }) {


    const [isChecked, setIsChecked] = useState({
        vanilla: false,
        testing: false
    });

    const handleOtherFilters = (id) => {
        setIsChecked(prev => {
            // Si ya estaba seleccionado, desmarcar todos
            if (prev[id]) {
                return {
                    vanilla: false,
                    testing: false
                };
            } else {
                // Seleccionar este y desmarcar el otro
                return {
                    vanilla: id === 'vanilla',
                    testing: id === 'testing'
                };
            }
        });
    };

    const handleTestingAndVanilla = (e) => {
        if(!e.target.checked){
            setTestingAndVanilla(null);
        }else{
            setTestingAndVanilla(e.target.value);
        }
    }

    return (
        <section className='projectFilters'>
            <label className='techFilters'>
                {techFilterIcons && techFilterIcons.map((techFilterItem, index) => {

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
                onChange={(e) => handleTestingAndVanilla(e)}
                className='otherFilters'
            >
                {otherFilterIcons && otherFilterIcons.map((otherFilterIcon, index) => {
                    return (
                        <label key={index} className='otherFilters__otherFilter'>
                            <input
                                type="checkbox"
                                name='vanillaOrTesting'
                                value={otherFilterIcon.id}
                                className='otherFilter__radio'
                                checked={isChecked[otherFilterIcon.id]}
                                onChange={() => handleOtherFilters(otherFilterIcon.id)}
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

export default ProjectFilters;