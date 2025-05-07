import './resume.css';

import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";
import ResumePresentation from './components/ResumePresentation';
import ResumeTechnologies from './components/resumeTechnologies';
import ResumeEducation from './components/ResumeEducation';
import ResumeProjects from './components/ResumeProjects';
import ResumeExperience from './components/ResumeExperience';

import cv from '../../assets/documents/cv-rafa-alday.pdf';

function Resume() {

    const resumeSections = [
        "Presentación",
        "Tecnologías",
        "Formación",
        "Experiencia"
    ]


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
                <nav className="resumeHeader__navbar">
                    
                    <ul className="resumeHeader__navbarList">
                        
                        {
                            resumeSections && resumeSections.map((resumeSection, index) => {
                                return (
                                    <li key={index} className="resumeHeader__navbarItem">
                                        <span className='resumeHeader__bg'/>
                                        <a
                                            href="#"
                                            className="resumeHeader__navbarLink"
                                        >
                                            {resumeSection}
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </nav>

            <section className='resume__content'>
                <ResumePresentation/>
                <ResumeTechnologies/>
                <ResumeProjects/>
                <ResumeEducation/>
                <ResumeExperience/>
            </section>

            <section className='resume__download'>
                <a 
                    href={cv}
                    target='_blank' rel="noopener noreferrer"
                    className='resume__downloadLink'
                >
                    DESCARGAR CURRÍCULUM
                </a>
            </section>
        </div>
    )
}
export default Resume;