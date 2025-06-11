import './project.css';
import { useParams } from "react-router-dom";
import projectsData from "../../data/projectsData";
import useWindowSize from "../../hooks/useWindowSize";

import github_icon from '../../assets/icons/util-icons/github_simpleicon.svg';
import GithubButton from '../../components/buttons/GithubButton';
// import web_icon from '../../../assets/icons/util-icons/web_simpleicon.svg';
// import youtube_icon from '../../../assets/icons/util-icons/youtube_simpleicon.svg';

export default function Project() {

    const {project} = useParams();
    const { width } = useWindowSize();
    const reducedView = width <= 1024;

    const projectData = projectsData.find((item) => item.id === project)
    console.log(projectData);

    return (
        <div className='pageContainer project'>
            {
                projectData && 
                    <>
                        <header className="project__header">
                            <div className='projectHeader__imageContainer'>
                                <img 
                                    src={projectData.img.fullScreen}
                                    alt={`Captura del proyecto: ${projectData.name}`}
                                    className="projectHeader__image"
                                />
                            </div>

                            <div>
                                {
                                    projectData.github && projectData.github.map((githubData, index) => (
                                        <GithubButton githubData={githubData} index={index}/>
                                    ))
                                }
                            </div>
                            
                        </header>
                        
                    </>
                
            }
            
        </div>
    );
}
