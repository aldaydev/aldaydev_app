import './resume.css';

import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";
import ResumePresentation from './components/ResumePresentation';
import ResumeTechnologies from './components/resumeTechnologies';
import ResumeEducation from './components/ResumeEducation';
import ResumeProjects from './components/ResumeProjects';
import ResumeExperience from './components/ResumeExperience';

import up_icon from '../../assets/icons/util-icons/down_icon.svg';

import cv from '../../assets/documents/cv-rafa-alday.pdf';
import { useState, useEffect } from 'react';

function Resume() {

    const resumeSections = [
        {
            name: "Tecnologías",
            url: "#technologies"
        },
        {
            name: "Proyectos",
            url: "#projects"
        },
        {
            name: "Formación",
            url: "#education"
        },
        {
            name: "Experiencia",
            url: "#experience"
        }
    ]

    const [showReturnButton, setShowReturnButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setShowReturnButton(true);
            }else{
                setShowReturnButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [window.scroll]);


    return (

        
        <div className='pageContainer resume'>
            <AnimatedTitle
                headingLevel="h1"
                initialText="C"
                finalText="urrículum"
                id="page__animatedTitle"
                fontSize="3rem"
                braceSize="3.4rem"
                color="var(--color-white)"
            />
            <nav 
                className="resumeHeader__navbar"
                aria-label='Navegación interna para la página del currículum'
            >
                <ul className="resumeHeader__navbarList">
                    {
                        resumeSections && resumeSections.map((resumeSection, index) => {
                            return (
                                <li key={index} className="resumeHeader__navbarItem">
                                    <span className='resumeHeader__bg' />
                                    <a
                                        href={resumeSection.url}
                                        className="resumeHeader__navbarLink"
                                        aria-label={`Ir a la sección de ${resumeSection.name} de mi currículum`}
                                    >
                                        {resumeSection.name}
                                    </a>
                                </li>
                            )
                        })
                    }

                </ul>
            </nav>

            <section className='resume__content'>
                <ResumePresentation />
                <ResumeTechnologies />
                <ResumeProjects />
                <ResumeEducation />
                <ResumeExperience />
            </section>

            <section className='resume__download'>
                <a
                    href={cv}
                    target='_blank' rel="noopener noreferrer"
                    className='resume__downloadLink'
                    aria-label='Descargar Currículum Rafael Alday en PDF'
                >
                    VER CURRÍCULUM PDF
                </a>
            </section>

            <button 
                className={showReturnButton ? 'resume_goToTopContainer' : 'resume_goToTopContainer--hidden'}
                tabIndex={showReturnButton ? 0 : -1}
                aria-label='Volver a la parte superior del currículum'
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        left: window.scrollX,
                        behavior: 'smooth'
                    });
                }}
            >
                <img src={up_icon} className='resume_goToTopIcon'/>
            </button>
        </div>
    )
}
export default Resume;