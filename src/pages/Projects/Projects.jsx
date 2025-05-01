import AnimatedTitle from '../../components/AnimatedTitle/AnimatedTitle';
import './projects.css';

import { useEffect, useState } from 'react';
import ProjectFilters from './components/ProjectFilters.jsx';
import projectsData from "../../data/projectsData.js";

import ProyectList from './components/projectList.jsx';

function Projects () {

    const [selectedTechFilters, setSelectedTechFilters] = useState([]);
    const [selectedOtherFilters, setSelectedOtherFilters] = useState([]);
    const [filteredProjectList, setFilteredProjectList] = useState(projectsData);

    useEffect(()=>{
        console.log('selectedTechFilters', selectedTechFilters);
    }, [selectedTechFilters]);

    useEffect(()=>{
        console.log('testiongAndVanilla', selectedOtherFilters);
    }, [selectedOtherFilters]);

    useEffect(()=>{
        console.log('Listado de proyectos', filteredProjectList);
    }, [filteredProjectList]);

    useEffect(() => {

        if(filteredProjectList !== projectsData){
            console.log('El listado de proyectos es distinto');
            setFilteredProjectList(projectsData);
        }

        if(selectedOtherFilters.length > 0 || selectedTechFilters.length > 0){
            const filteredProjects = projectsData.filter((project) => {
                if(selectedOtherFilters.length > 0){
                    return selectedOtherFilters.every(filtro => project[filtro]);
                }
                if(selectedTechFilters.length > 0){
                    return selectedTechFilters.every(filtro => project.technologies.includes(filtro));
                }
            });

            setFilteredProjectList(filteredProjects);
        }

    }, [selectedTechFilters, selectedOtherFilters])

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
                setSelectedTechFilters={setSelectedTechFilters} 
                selectedTechFilters={selectedTechFilters}
                setSelectedOtherFilters={setSelectedOtherFilters}
                selectedOtherFilters={selectedOtherFilters}
            />
            <ProyectList filteredProjectList={filteredProjectList}/>
        </div>
    )
}

export default Projects;