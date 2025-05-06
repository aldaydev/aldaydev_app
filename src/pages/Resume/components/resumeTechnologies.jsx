import './resumeTechnologies.css';

import techData from '../../../data/technologiesData.js';

function ResumeTechnologies () {

    const devTechs = techData.filter(devTech => devTech.type === "develop");

    return(
        <article className="resume__technologies">
            <h3 className="resume__articleTitle resume__techTitle">TECNOLOGÍAS</h3>
            <div className="resume__techStickers">
                <div className="techStickers__develop">
                    <h4 className="techStickers__title">DESARROLLO WEB</h4>
                    <div className="techStickers__container">
                        {
                            devTechs && devTechs.map((devTech, index) => {
                                return (
                                    <div key={index} className='techStickers__sticker'>
                                        <img 
                                            src={devTech.icon}
                                            className='techStickers__stickerIcon'
                                        />
                                        <span className='techStickers__stickerTitle'>
                                            {devTech.name.toUpperCase()}
                                        </span>
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