import "./projectList.css";
import useWindowSize from "../../../hooks/useWindowSize";


function ProyectList ({ filteredProjectList }) {

    const { width } = useWindowSize();
    const resizeImages = width <= 1024;

    return (
        <section className="projectList">
            {
                filteredProjectList && filteredProjectList.map((project, index) => {
                    return(
                        <a 
                            href={project.deployed ? project.deployed : project.github[1].url} 
                            target="_blank"
                            key={index} 
                            className="projectList__project"
                            title={`Visitar proyecto ${project.name}`}
                            aria-label={`Visitar proyecto ${project.name}`}
                        >
                            <div className="project__bg"/>
                            <figure className="project__imageContainer">
                                <img 
                                    src={!resizeImages ? project.img.desktop : project.img.mobile}
                                    className={!resizeImages ? "project__image" : "project__image--mobile"}
                                />
                            </figure>
                            
                            <div className="project__data">
                                <h3 className="project__title">{project.name}</h3>
                                <h3 className="project__date">{project.date}</h3>
                            </div>
                            
                        </a>
                        
                    )
                    
                })
            }
        </section>
    )
}

export default ProyectList;