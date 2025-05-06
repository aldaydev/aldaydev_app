import techData from '../../../data/technologiesData.js';

function ResumeTechnologies () {

    const devTechs = techData.filter(devTech => devTech.type === "develop");

    return(
        <article className="resume__technologies">
            <h3>TECNOLOGÍAS</h3>
            <p>
                Todas las tecnologías del siguiente listado las he aplicado en al menos uno de los proyectos en los que he trabajado.
            </p>
            <div className="resume__techStickers">
                <div className="techStickers__develop">
                    <h4>DESARROLLO WEB</h4>
                    <div>
                        {
                            devTechs && devTechs.map((devTech, index) => {
                                return (
                                    <div key={index}>
                                        <img src={devTech.icon}/>
                                        <span>{devTech.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ResumeTechnologies;