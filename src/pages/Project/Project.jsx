import "./project.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import projectsData from "../../data/projectsData";

import GithubButton from "../../components/buttons/GithubButton";
import DeployedButton from "../../components/buttons/DeployedButton";
import VideoButton from "../../components/buttons/VideoButton";
// import web_icon from '../../../assets/icons/util-icons/web_simpleicon.svg';
// import youtube_icon from '../../../assets/icons/util-icons/youtube_simpleicon.svg';

export default function Project() {
    const { project } = useParams();

    const projectData = projectsData.find((item) => item.id === project);
    console.log(projectData);

    return (
        <div className="pageContainer projectPage">
            {projectData && (
                <div className="projectPage__container">
                    <h1 className="projectPage__title">{projectData.name}</h1>

                    <img
                        src={projectData.img.fullScreen}
                        alt={`Captura del proyecto: ${projectData.name}`}
                        className="projectPage__image"
                    />

                    <div className="projectPage__links">
                        {projectData.github &&
                            projectData.github.map((githubData, index) => (
                                <GithubButton
                                    githubData={githubData}
                                    index={index}
                                    className="projectPage__link"
                                />
                            ))}
                        {projectData.deployed && (
                            <DeployedButton
                                deployedData={projectData.deployed}
                            />
                        )}
                        {projectData.video && (
                            <VideoButton videoData={projectData.video} />
                        )}
                    </div>

                    <p className="projectPage__description">
                        {projectData.description}
                    </p>

                    <p className="projectPage__date">
                        Fecha de publicación: {projectData.date}
                    </p>

                    <div className="projectPage__techContainer">
                        <h5 className="projectPage__techTitle">
                            TECNOLOGÍAS:{" "}
                        </h5>
                        <ul className="projectPage__techList">
                            {projectData.technologies.map((tech, index) => (
                                <React.Fragment key={index}>
                                    {index !== 0 && <span>|</span>}
                                    <li className="projectPage__techItem">
                                        {tech.toUpperCase()}
                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>

                    <div className='projectPage__moreProjects'>
                        <Link 
                            to="/proyectos"
                            className='projectPage__moreProjectsLink'
                        >
                            VOLVER A PROYECTOS
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
