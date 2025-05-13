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
            setSelectedOtherFilters([]);

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
            setSelectedTechFilters([]);
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
                            htmlFor={techFilter.id}
                            aria-label={`Mostrar proyectos que usan ${techFilter.name}`}
                        >
                            <input
                                type='checkbox'
                                className='techFilter__checkbox'
                                checked={selectedTechFilters.includes(techFilter.id)}
                                onChange={() => handleTechFilters(techFilter)}
                                id={techFilter.id}
                                tabIndex={0}
                    
                            />
                            <span className="techFilter__icon"></span>
                            <img
                                src={techFilter.icon}
                                className='techFilter__image'
                                alt={`Mostrar proyectos que usan ${techFilter.name}`}
                            />
                            <span>
                                {techFilter.name}
                            </span>
                        </label>
                    )
                })}
            </article>
            <article
                className='otherFilters'
            >
                {otherFilters && otherFilters.map((otherFilter, index) => {
                    return (
                        <label 
                            key={index} 
                            className='otherFilters__otherFilter' 
                            htmlFor={otherFilter.id} 
                            title={`Filtrar por ${otherFilter.name}`}
                            aria-label={`Mostrar proyectos que incluyen ${otherFilter.name}`}
                        >
                            <input
                                type="checkbox"
                                id={otherFilter.id}
                                className='otherFilter__checkbox'
                                checked={selectedOtherFilters.includes(otherFilter.id)}
                                onChange={() => handleOtherFilters(otherFilter)}
                                tabIndex={0}
                            />
                            <span className="otherFilter__icon" style={{cursor: "pointer"}}></span>
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