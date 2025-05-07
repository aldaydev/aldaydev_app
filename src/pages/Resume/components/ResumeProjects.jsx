import './resumeProjects.css';

import projects from '../../../data/projectsData.js';

import github_icon from '../../../assets/icons/util-icons/github_simpleicon.svg';
import web_icon from '../../../assets/icons/util-icons/web_simpleicon.svg';

function ResumeProjects() {

    const mainProjects = projects.sort((a, b) => b.rate - a.rate).slice(0, 2);

    return (
        <article className="resume__projects">
            <h3 className="resume__articleTitle resume__projectsTitle">PROYECTOS DESTACADOS</h3>
            <div className='resume__resumeProjects'>
                {
                    mainProjects && mainProjects.map((project, index) => {
                        return (
                            <div key={index}>
                                <figure>
                                    <img src={project.img.desktop} />
                                </figure>
                                <div>
                                    <h4>{project.name}</h4>
                                    <h5>{project.date}</h5>
                                    <p>{project.description}</p>
                                    <div>
                                        <h5>Tecnologías: </h5>
                                        <p>
                                            {
                                                project.technologies.map((tech, index) => {
                                                    return (
                                                        <span key={index}>{tech.toUpperCase()}</span>
                                                    )
                                                })
                                            }
                                        </p>
                                        
                                    </div>
                                    <div>
                                        {
                                            project.github.map((githubLink, index) => {
                                                return (
                                                    <div key={index}>
                                                        <a href={githubLink.url}>
                                                            <img src={github_icon} />
                                                            <span>{githubLink.type.toUpperCase()}</span>
                                                        </a>

                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            project.deployed &&
                                            <a href={project.deployed}>
                                                <img src={web_icon} />
                                                <span>DESPLEGADO</span>
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </article>
    )
}

export default ResumeProjects;