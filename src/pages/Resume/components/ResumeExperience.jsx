import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './resumeEduExp.css';

function ResumeExperience () {

    useScrollReveal();

    return (
        <article className="resume__experience scrollReveal">
            <h3 id='experience' className="resume__articleTitle resume__experienceTitle">EXPERIENCIA</h3>

            <div className="resume__experienceLabel">
                <div className='experienceLabel__decorationContainer'>
                    <span className='experienceLabel__decorationFigure'></span>
                </div>

                <div className='experienceLabel__content'>
                    <div className='experienceLabel__titles'>
                        <h4 className='experienceLabel__title'>DESARROLLADOR FRONTEND</h4>
                        <h4 className='experienceLabel__date'>SEPT - ACTUALIDAD</h4>
                    </div>

                    <h5 className='experienceLabel__center'>Universal UX</h5>
                    <div className='experienceLabel__information'>
                        <div className='experienceLabel__descriptionContainer'>
                            <p className='experienceLabel__description'>Encargado del desarrollo, maquetación, Testing, documentación y publicación de componentes Angular personalizables y reutilizables.
                            </p>
                            <p>Diseño, desarrollo de componentes, layouts, documentaciones y playgrounds en <a href="https://universalux.dev" target='__blank' rel='noreferrer noopener' style={{textDecoration: 'underline'}}>universalux.dev</a></p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="resume__experienceLabel">
                <div className='experienceLabel__decorationContainer'>
                    <span className='experienceLabel__decorationFigure'></span>
                </div>

                <div className='experienceLabel__content'>
                    <div className='experienceLabel__titles'>
                        <h4 className='experienceLabel__title'>DESARROLLADOR FRONTEND</h4>
                        <h4 className='experienceLabel__date'>SEPT - ACTUALIDAD</h4>
                    </div>

                    <h5 className='experienceLabel__center'>Inspiranza</h5>
                    <div className='experienceLabel__information'>
                        <div className='experienceLabel__descriptionContainer'>
                            <p className='experienceLabel__description'>Colaboro con la asociación "Inspiranza" como desarrollador. Me encargo de maquetar componentes y layouts para “Zenenti”, una aplicación móvil en desarrollo que utiliza React Native. Trabajo en equipo utilizando Git, resolviendo Issues y generando Pull Requests.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="resume__experienceLabel">
                <div className='experienceLabel__decorationContainer'>
                    <span className='experienceLabel__decorationFigure'></span>
                </div>

                <div className='experienceLabel__content'>
                    <div className='experienceLabel__titles'>
                        <h4 className='experienceLabel__title'>DESARROLLOADOR WEB</h4>
                        <h4 className='experienceLabel__date'>MAR - ABRIL 2025</h4>
                    </div>

                    <h5 className='experienceLabel__center'>Pipote S.L</h5>
                    <div className='experienceLabel__information'>
                        <div className='experienceLabel__descriptionContainer'>
                            <p className='experienceLabel__description'>Contrato en prácticas. Desarrollo y maquetación de componentes personalizados y reutilizables con HTML, CSS y JavaScript para páginas web utilizando Wordpress y Divi como constructor de temas.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="resume__experienceLabel">
                <div className='experienceLabel__decorationContainer'>
                    <span className='experienceLabel__decorationFigure'></span>
                </div>

                <div className='experienceLabel__content'>
                    <div className='experienceLabel__titles'>
                        <h4 className='experienceLabel__title'>TÉCNICO AUDIOVISUAL</h4>
                        <h4 className='experienceLabel__date'>ABR 2011 - SEPT 2024</h4>
                    </div>

                    <h5 className='experienceLabel__center'>Varias empresas</h5>
                    <div className='experienceLabel__information'>
                        <div className='experienceLabel__descriptionContainer'>
                            <p className='experienceLabel__description'>Durante más de 12 años he trabajado como técnico audiovisual dando servicio a grandes clientes como <b>Telefónica</b>, el <b>Museo Nacional del Prado</b> o <b>Presidencia del Gobierno</b>, entre otros muchos.</p>
                            <p className='experienceLabel__description'>
                            He realizado labores que van desde la edición de imágenes y vídeo profesional con herramientas de Adobe, la operación de equipos de A/V en instalaciones complejas o el soporte a usuarios VIP.</p>
                            <p className='experienceLabel__description'>
                            Puedes ver mi currículum audiovisual
                                <a
                                    href='https://cvaudiovisual.alday.dev'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    aria-label='Visitar web del currículum audiovisual de Rafael Alday'
                                >AQUÍ
                                </a>
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </article>
    )
}

export default ResumeExperience;
