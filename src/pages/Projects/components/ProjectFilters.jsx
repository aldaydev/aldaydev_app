import './projectFilters.css';

import { techFilters, otherFilters } from "../../../data/techFilters.js";

function ProjectFilters({ setSelectedTechFilters, selectedTechFilters, setSelectedOtherFilters, selectedOtherFilters }) {

    const handleTechFilters = (techFilter) => {

        if(techFilter.id === "vanilla"){
            setSelectedTechFilters(prev => {
                if (prev.includes("vanilla")) {
                    // Si ya está, vaciamos
                    return [];
                } else {
                    // Si no está, lo añadimos
                    return ["vanilla"];
                }
            });

        }else{
            setSelectedTechFilters(prev => {
                if (prev.includes(techFilter.id)) {
                    // Si ya está, lo quitamos
                    return prev.filter(id => id !== techFilter.id);
                } else {
                    // Si no está, lo añadimos
                    const excludeVanilla = prev.filter(id => id !== "vanilla");
                    return [...excludeVanilla, techFilter.id];
                }
            });
        }
        
        
    }

    const handleOtherFilters = (otherFilter) => {

        if(selectedTechFilters[0] === "vanilla"){
            setSelectedTechFilters({});
        }
        setSelectedOtherFilters( prev => {
            
            if (prev.includes(otherFilter.id)){
                // Si ya está, lo quitamos
                return prev.filter(id => id !== otherFilter.id);
            } else {
                return [...prev, otherFilter.id]
            }
        })
    };

    return (
        <section className='projectFilters'>
            <article className='techFilters'>
                {techFilters && techFilters.map((techFilter, index) => {

                    return (
                        <label
                            key={index}
                            className='techFilters__techFilter'
                            title={techFilter.name}
                        >
                            <input
                                type='checkbox'
                                className='techFilter__checkbox'
                                checked={selectedTechFilters.includes(techFilter.id)}
                                onChange={() => handleTechFilters(techFilter)}
                            />
                            <img
                                src={techFilter.icon}
                                className='techFilter__image'
                            />
                            <span>
                                {techFilter.name}
                            </span>
                        </label>
                    )
                })}
            </article>
            <article
                // htmlFor='vanillaOrTesting'
                // onChange={(e) => handleTestingAndVanilla(e)}
                className='otherFilters'
            >
                {otherFilters && otherFilters.map((otherFilter, index) => {
                    return (
                        <label key={index} className='otherFilters__otherFilter'>
                            <input
                                type="checkbox"
                                name='vanillaOrTesting'
                                value={otherFilter.id}
                                className='otherFilter__checkbox'
                                checked={selectedOtherFilters.includes(otherFilter.id)}
                                onChange={() => handleOtherFilters(otherFilter)}
                            />
                            <img
                                src={otherFilter.icon}
                                className='otherFilter__image'
                            />
                            <span>{otherFilter.name}</span>
                        </label>
                    )
                })}
            </article>
        </section>
    )
}

export default ProjectFilters;