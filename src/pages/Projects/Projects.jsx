import './projects.css';

import AnimatedTitle from '../../components/AnimatedTitle/AnimatedTitle';

import { useEffect, useState } from 'react';
import ProjectFilters from './components/ProjectFilters.jsx';
import projectsData from "../../data/projectsData.js";

import ProyectList from './components/ProjectList.jsx';
import ProjectSorter from './components/ProjectSorter.jsx';


function Projects () {

    const initialProjectList = projectsData.sort((a, b) => b.rate - a.rate);

    const [selectedSorter, setSelectedSorter] = useState({
        sortBy: "rate",
        order: "desc"
    });
    const [selectedLangFilters, setSelectedLangFilters] = useState("");
    const [selectedTechFilters, setSelectedTechFilters] = useState([]);
    const [selectedOtherFilters, setSelectedOtherFilters] = useState([]);

    const [filteredProjectList, setFilteredProjectList] = useState(initialProjectList);

    useEffect(()=>{
        console.log('selectedTechFilters', selectedTechFilters);
    }, [selectedTechFilters]);

    useEffect(()=>{
        console.log('Other filters', selectedOtherFilters);
    }, [selectedOtherFilters]);

    useEffect(()=>{
        console.log('Selected Sorter', selectedSorter);
    }, [selectedSorter]);

    useEffect(()=>{
        console.log('Listado de proyectos', filteredProjectList);
    }, [filteredProjectList]);

    useEffect(()=>{
        console.log('Filtro de lenguaje', selectedLangFilters);
    }, [selectedLangFilters]);

    // useEffect(()=>{
    //     orderProjectList();
    // }, []);

    const orderProjects = (arr) => {

        let newArray = [...arr];

        if(selectedSorter.sortBy === 'rate'){
            if(selectedSorter.order === 'asc'){
                newArray.sort((a, b) => {
                    return a.rate - b.rate;
                });
            }else if(selectedSorter.order === 'desc'){
                newArray.sort((a, b) => {
                    return b.rate - a.rate;
                });
            }
        }else if(selectedSorter.sortBy === 'date'){
            if(selectedSorter.order === 'asc'){
                newArray.sort((a, b) => {
                    return new Date(a.date) - new Date(b.date);
                });
            }else if(selectedSorter.order === 'desc'){
                newArray.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });
            }
        }

        return newArray;

    }

    useEffect(() => {
        const changeOrder = orderProjects(filteredProjectList);
        setFilteredProjectList(changeOrder);
    }, [selectedSorter])

    useEffect(() => {

        let arrayToFilter = initialProjectList;

        if(selectedOtherFilters.length > 0 || selectedTechFilters.length > 0 || selectedLangFilters !== ""){
            const filteredProjects = arrayToFilter.filter((project) => {
                if(selectedOtherFilters.length > 0 && selectedTechFilters.length === 0){
                    return selectedOtherFilters.every(filtro => project[filtro]);
                }
                if(selectedTechFilters.length > 0 && selectedOtherFilters.length === 0){
                    return selectedTechFilters.every(filtro => project.technologies.includes(filtro));
                }

                if(selectedTechFilters.length > 0 && selectedOtherFilters.length > 0){
                    return selectedTechFilters.every(filtro => project.technologies.includes(filtro)) && selectedOtherFilters.every(filtro => project[filtro]);
                }
                return arrayToFilter;
            });

            let finalFilteredArr;

            if(selectedLangFilters !== ""){
                console.log('Filtra por lenguaje')
                finalFilteredArr = filteredProjects.filter(project => project.language === selectedLangFilters)
            }else{
                console.log('No filtra por lenguaje')
                finalFilteredArr = filteredProjects;
            }

            const mantainOrder = orderProjects(finalFilteredArr);
            setFilteredProjectList(mantainOrder);
            // setFilteredProjectList(filteredProjects);
        }else{
            const mantainOrder = orderProjects(arrayToFilter);
            setFilteredProjectList(mantainOrder);
        }

    }, [selectedTechFilters, selectedOtherFilters, selectedLangFilters])

    return(
        <div className='pageContainer projects'>
                <AnimatedTitle 
                    headingLevel = "h1"
                    initialText="P"
                    finalText="royectos"
                    id="page__animatedTitle"
                    fontSize="3rem"
                    braceSize="3.4rem"
                    color="var(--color-white)"
                />
            <section>
            <h2 className='page__subtitle projects__subtitle'>Busca filtrando por tecnologías </h2>
            </section>
            <ProjectFilters 
                selectedLangFilters = {selectedLangFilters}
                setSelectedLangFilters = {setSelectedLangFilters}
                setSelectedTechFilters={setSelectedTechFilters} 
                selectedTechFilters={selectedTechFilters}
                setSelectedOtherFilters={setSelectedOtherFilters}
                selectedOtherFilters={selectedOtherFilters}
            />
            <ProjectSorter selectedSorter={selectedSorter} setSelectedSorter={setSelectedSorter}/>
            <ProyectList filteredProjectList={filteredProjectList}/>
            {
                filteredProjectList.length === 0 && 
                <div className='projects__noProjectsContainer'>
                    <span className='projects__noProyects'>Aún no hay proyectos que combinen esas tecnologías</span>
                </div>
            }
                    
        </div>
    )
}

export default Projects;