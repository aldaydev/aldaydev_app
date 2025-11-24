import './homeProjects.css';

import React from 'react';
import { Link } from 'react-router-dom';

import projects from '../../../data/projectsData.js';

import github_icon from '../../../assets/icons/util-icons/github_simpleicon.svg';
import web_icon from '../../../assets/icons/util-icons/web_simpleicon.svg';
import youtube_icon from '../../../assets/icons/util-icons/youtube_simpleicon.svg';

function HomeProjects () {

    const mainProjects = projects.sort((a, b) => b.rate - a.rate).slice(0, 2);

    return(
        <article className="home__projects">
            <h3 id='projects' className="home__articleTitle home__projectsTitle">PROYECTOS DESTACADOS</h3>
            <div className='home__homeProjects'>
                <div className='homeProjects__projects'>
                    {
                        mainProjects && mainProjects.map((project, index) => {
                            return (
                                <div key={index} className='homeProjects__mainProject'>
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
                                                        aria-label={`Ir a repositorio del
                                                            ${githubLink.type} de ${project.name}`}
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
                                                    aria-label={`Ir al proyecto ${project.name} desplegado`}
                                                >
                                                    <img
                                                        src={web_icon}
                                                        className='mainProject__linkIcon'
                                                        alt={`Imagen de ${project.name}`}
                                                    />
                                                    <span className='mainProject__linkText'>
                                                        DESPLEGADO
                                                    </span>
                                                </a>
                                            }
                                            {
                                                project.video &&
                                                <a
                                                    href={project.video}
                                                    target='_blank'
                                                    rel="noopener noreferrer"
                                                    className='mainProject__link mainProject__link--youtube'
                                                    aria-label={`Ir al video presentación de ${project.name}`}
                                                    tabIndex={0}
                                                >
                                                    <img
                                                        src={youtube_icon}
                                                        className='mainProject__linkIcon'
                                                        alt={`Imagen de ${project.name}`}
                                                    />
                                                    <span className='mainProject__linkText'>
                                                        VIDEO
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
            <div className='home__moreProjects'>
                    <Link
                        to="/proyectos"
                        className='moreProjects__link'
                    >
                        VER TODOS LOS PROYECTOS
                    </Link>
            </div>
        </article>
    )
}

export default HomeProjects;
