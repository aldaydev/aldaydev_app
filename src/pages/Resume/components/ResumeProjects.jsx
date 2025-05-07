import './resumeProjects.css';

import React from 'react';

import projects from '../../../data/projectsData.js';

import github_icon from '../../../assets/icons/util-icons/github_simpleicon.svg';
import web_icon from '../../../assets/icons/util-icons/web_simpleicon.svg';

function ResumeProjects() {

    const mainProjects = projects.sort((a, b) => b.rate - a.rate).slice(0, 2);

    return (
        <article className="resume__projects">
            <h3 className="resume__articleTitle resume__projectsTitle">PROYECTOS</h3>
            <div className='resume__resumeProjects'>
                <div className='resumeProjects__projects'>
                    {
                        mainProjects && mainProjects.map((project, index) => {
                            return (
                                <div key={index} className='resumeProjects__mainProject'>
                                    <div className='mainProject__imageContainer'>
                                        <img
                                            src={project.img.desktop}
                                            className='mainProject__image'
                                        />

                                        <div className='mainProject__linksContainer'>
                                            {
                                                project.github.map((githubLink, index) => {
                                                    return (

                                                        <a
                                                            key={index}
                                                            href={githubLink.url}
                                                            target='_blank'
                                                            rel="noopener noreferrer"
                                                            className='mainProject__link'
                                                        >
                                                            <img
                                                                src={github_icon}
                                                                className='mainProject__linkIcon'
                                                            />
                                                            <span className='mainProject__linkText'>
                                                                {githubLink.type.toUpperCase()}
                                                            </span>
                                                        </a>

                                                    )
                                                })
                                            }
                                            {
                                                project.deployed &&
                                                <a
                                                    href={project.deployed}
                                                    target='_blank'
                                                    rel="noopener noreferrer"
                                                    className='mainProject__link'
                                                >
                                                    <img
                                                        src={web_icon}
                                                        className='mainProject__linkIcon'
                                                    />
                                                    <span className='mainProject__linkText'>
                                                        DESPLEGADO
                                                    </span>
                                                </a>
                                            }
                                        </div>
                                    </div>
                                    <div className='mainProject__info'>
                                        <div className='mainProject__titles'>
                                            <h4 className='mainProject__title'>{project.name}</h4>
                                            <h5 className='mainProject__date'>{project.date}</h5>
                                        </div>
                                        <p className='mainProject__description'>{project.description}</p>
                                        <div className='mainProject__techContainer'>
                                            <h5 className='mainProject__techTitle'>TECNOLOGÍAS: </h5>
                                            <ul className='mainProject__techList'>
                                                {
                                                    project.technologies.map((tech, index) => (
                                                        <React.Fragment key={index}>
                                                            {index !== 0 && <span>|</span>}
                                                            <li className='mainProject__techItem'>
                                                                {tech.toUpperCase()}
                                                            </li>
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </ul>

                                        </div>

                                        <div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </article>
    )
}

export default ResumeProjects;