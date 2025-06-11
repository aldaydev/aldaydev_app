import './resumeTechnologies.css';

import {
    backTechData, 
    languagesData, 
    frontTechData, 
    dbTechData, 
    testingTechData, 
    docTechData, 
    managementTechData,
    otherTechData
} from '../../../data/technologiesData.js';

function ResumeTechnologies () {

    const devTechs = backTechData.filter(devTech => devTech.type === "develop");
    // const dbTechs = backTechData.filter(dbTech => dbTech.type === "databases");
    // const managementTechs = backTechData.filter(manTech => manTech.type === "management");
    // const otherTechs = backTechData.filter(otherTech => otherTech.type === "other");

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
                    <h4 className="techStickers__title">LENGUAJES</h4>
                    <div className="techStickers__stickers">
                        {
                            languagesData && languagesData.map((devTech, index) => {
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
                    <h4 className="techStickers__title">FRONTEND</h4>
                    <div className="techStickers__stickers">
                        {
                            frontTechData && frontTechData.map((devTech, index) => {
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
                    <h4 className="techStickers__title">BACKEND</h4>
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
                    <h4 className="techStickers__title">TESTING</h4>
                    <div className="techStickers__stickers">
                        {
                            testingTechData && testingTechData.map((devTech, index) => {
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
                    <h4 className="techStickers__title">DOCUMENTACIÓN</h4>
                    <div className="techStickers__stickers">
                        {
                            docTechData && docTechData.map((devTech, index) => {
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
                            dbTechData && dbTechData.map((dbTech, index) => {
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
                            managementTechData && managementTechData.map((manTech, index) => {
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
                            otherTechData && otherTechData.map((otherTech, index) => {
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