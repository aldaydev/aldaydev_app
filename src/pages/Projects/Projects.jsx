import AnimatedTitle from '../../components/AnimatedTitle/AnimatedTitle';
import './projects.css';

import TechFilters from './components/TechFilters.jsx';
import { useEffect, useState } from 'react';

function Projects () {

    const [selectedTechs, setSelectedTechs] = useState([]);

    useEffect(()=>{
        console.log(selectedTechs);
    }, [selectedTechs])

    return(
        <div className='projects'>
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
            <h3>En esta sección podrás encontrar mis proyectos. Puedes filtrarlos eligiendo una o varias tecnologías y te aparecerán lo que las utilizan. </h3>
            </section>
            <TechFilters setSelectedTechs={setSelectedTechs} selectedTechs={selectedTechs}/>
        </div>
    )
}

export default Projects;