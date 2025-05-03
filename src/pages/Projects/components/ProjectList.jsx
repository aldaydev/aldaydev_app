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
                        <a href="#" key={index} className="projectList__project">
                            <div className="project__bg"/>
                            <figure className="project__imageContainer">
                                <img 
                                    src={!resizeImages ? project.img.desktop : project.img.mobile}
                                    className="project__image"
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