import AnimatedTitle from '../../components/AnimatedTitle/AnimatedTitle';
import './projects.css';

import TechFilters from './components/ProjectFilters.jsx';
import { useEffect, useState } from 'react';
import ProjectFilters from './components/ProjectFilters.jsx';

function Projects () {

    const [selectedTechs, setSelectedTechs] = useState([]);
    const [testingAndVanilla, setTestingAndVanilla] = useState(null);

    useEffect(()=>{
        console.log(selectedTechs);
    }, [selectedTechs])

    useEffect(()=>{
        console.log(testingAndVanilla);
    }, [testingAndVanilla])

    return(
        <div className='pageContainer projects'>
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
            <ProjectFilters 
                setSelectedTechs={setSelectedTechs} 
                selectedTechs={selectedTechs}
                testingAndVanilla={testingAndVanilla}
                setTestingAndVanilla={setTestingAndVanilla}
            />
        </div>
    )
}

export default Projects;