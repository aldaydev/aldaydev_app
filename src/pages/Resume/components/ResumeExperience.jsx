import './resumeExperience.css';

function ResumeExperience () {
    return (
        <article className="resume__experience">
            <h3 className="resume__articleTitle resume__experienceTitle">EXPERIENCIA</h3>
            <div className="resume__educationLabel">
                <div className='educationLabel__decorationContainer'>
                    <span className='educationLabel__decorationFigure'></span>
                </div>

                <div className='educationLabel__content'>
                    <div className='educationLabel__titles'>
                        <h4 className='educationLabel__title'>DESARROLLOADOR WEB</h4>
                        <h4 className='educationLabel__date'>MAR - ABRIL 2025</h4>
                    </div>

                    <h5 className='educationLabel__center'>Pipote S.L</h5>
                    <div className='educationLabel__information'>
                        <div className='educationLabel__descriptionContainer'>
                            <p className='educationLabel__description'>Contrato en prácticas. Desarrollo y maquetación de componentes personalizados y reutilizables con HTML, CSS y JavaScript para páginas web utilizando Wordpress y Divi como constructor de temas.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="resume__educationLabel">
                <div className='educationLabel__decorationContainer'>
                    <span className='educationLabel__decorationFigure'></span>
                </div>

                <div className='educationLabel__content'>
                    <div className='educationLabel__titles'>
                        <h4 className='educationLabel__title'>TÉCNICO AUDIOVISUAL</h4>
                        <h4 className='educationLabel__date'>ABR 2011 - SEPT 2024</h4>
                    </div>

                    <h5 className='educationLabel__center'>Varias empresas</h5>
                    <div className='educationLabel__information'>
                        <div className='educationLabel__descriptionContainer'>
                            <p className='educationLabel__description'>Durante más de 12 años he trabajado como técnico audiovisual dando servicio a grandes clientes como <b>Telefónica</b>, el <b>Museo Nacional del Prado</b> o <b>Presidencia del Gobierno</b>, entre otros muchos.</p>
                            <p className='educationLabel__description'>
                            He realizado labores que van desde la edición de imágenes y vídeo profesional con herramientas de Adobe, la operación de equipos de A/V en instalaciones complejas o el soporte a usuarios VIP.</p>
                        </div>
                    </div>

                </div>

            </div>
        </article>
    )
}

export default ResumeExperience;