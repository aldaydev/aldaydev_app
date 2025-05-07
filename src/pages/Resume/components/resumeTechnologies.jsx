import './resumeTechnologies.css';

import techData from '../../../data/technologiesData.js';

function ResumeTechnologies () {

    const devTechs = techData.filter(devTech => devTech.type === "develop");
    const dbTechs = techData.filter(dbTech => dbTech.type === "databases");
    const managementTechs = techData.filter(manTech => manTech.type === "management");
    const otherTechs = techData.filter(otherTech => otherTech.type === "other");

    return(
        <article className="resume__technologies">
            <h3 
                className="resume__articleTitle resume__techTitle"
                id='technologies'
            >
                TECNOLOGÍAS
            </h3>
            <div className="resume__techStickers">
                <div className="techStickers__container">
                    <h4 className="techStickers__title">DESARROLLO WEB</h4>
                    <div className="techStickers__stickers">
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

                <div className="techStickers__container">
                    <h4 className="techStickers__title">BASES DE DATOS</h4>
                    <div className="techStickers__stickers">
                        {
                            dbTechs && dbTechs.map((dbTech, index) => {
                                return (
                                    <div key={index} className='techStickers__sticker'>
                                        <img 
                                            src={dbTech.icon}
                                            className='techStickers__stickerIcon'
                                        />
                                        <span className='techStickers__stickerTitle'>
                                            {dbTech.name.toUpperCase()}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="techStickers__container">
                    <h4 className="techStickers__title">HERRAMIENTAS DE GESTIÓN</h4>
                    <div className="techStickers__stickers">
                        {
                            managementTechs && managementTechs.map((manTech, index) => {
                                return (
                                    <div key={index} className='techStickers__sticker'>
                                        <img 
                                            src={manTech.icon}
                                            className='techStickers__stickerIcon'
                                        />
                                        <span className='techStickers__stickerTitle'>
                                            {manTech.name.toUpperCase()}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="techStickers__container">
                    <h4 className="techStickers__title">OTRAS HERRAMIENTAS</h4>
                    <div className="techStickers__stickers">
                        {
                            otherTechs && otherTechs.map((otherTech, index) => {
                                return (
                                    <div key={index} className='techStickers__sticker'>
                                        <img 
                                            src={otherTech.icon}
                                            className='techStickers__stickerIcon'
                                        />
                                        <span className='techStickers__stickerTitle'>
                                            {otherTech.name.toUpperCase()}
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