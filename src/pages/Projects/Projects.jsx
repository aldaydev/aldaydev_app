import AnimatedTitle from '../../components/AnimatedTitle/AnimatedTitle';
import './projects.css';

import { useEffect, useState } from 'react';
import ProjectFilters from './components/ProjectFilters.jsx';
import projectsData from "../../data/projectsData.js";

function Projects () {

    const [selectedTechs, setSelectedTechs] = useState([]);
    const [testingAndVanilla, setTestingAndVanilla] = useState(null);
    const [projectList, setProyectList] = useState(projectsData);

    useEffect(()=>{
        console.log('selectedTechs', selectedTechs);
    }, [selectedTechs]);

    useEffect(()=>{
        console.log('testiongAndVanilla', testingAndVanilla);
        // setPoryectList(projectsData);
    }, [testingAndVanilla]);

    useEffect(()=>{
        console.log('Listado de proyectos', projectList);
    }, [projectList]);

    useEffect(() => {
        if(testingAndVanilla){
            console.log('Hay testing o vanilla');
            const filteredProjects = projectsData.filter((project) => project[testingAndVanilla]);
            setProyectList(filteredProjects);
        }
        console.log('No hay vanilla o testing; listado completo',  projectList)
    }, [selectedTechs, testingAndVanilla])

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
                setTestingAndVanilla={setTestingAndVanilla}
            />
        </div>
    )
}

export default Projects;