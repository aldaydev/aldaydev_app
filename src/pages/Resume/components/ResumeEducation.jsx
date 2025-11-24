import './resumeEduExp.css';

// import certificado_javascript from '../../../assets/documents/certificado-javascript-rafa-alday.pdf';
// import certificado_css from '../../../assets/documents/certificado-css-rafa-alday.pdf';

import { useScrollReveal } from '../../../hooks/useScrollReveal';


function ResumeEducation () {

    useScrollReveal();

    return(
        <article className="resume__education scrollReveal">
            <h3 id='education' className="resume__articleTitle resume__educationTitle">FORMACIÓN</h3>
            <div className="resume__educationLabel">
                <div className='educationLabel__decorationContainer'>
                    <span className='educationLabel__decorationFigure'></span>
                </div>

                <div className='educationLabel__content'>
                    <div className='educationLabel__titles'>
                        <h4 className='educationLabel__title'>DESARROLLO DE APLICACIONES WEB</h4>
                        <h4 className='educationLabel__date'>2024 - 2025</h4>
                    </div>

                    <h5 className='educationLabel__center'>Centro de Formación Digital San Blas</h5>
                    <div className='educationLabel__information'>
                        <div className='educationLabel__descriptionContainer'>
                            <p className='educationLabel__description'>Certificado Profesional Oficial en "Desarrollo de Aplicaciones con tecnologías Web". Realización de multiples proyectos en grupo utilizando la metodología SCRUM, trabajando por sprints y usando Jira como gestión de tareas</p>
                            <p className='educationLabel__description'>+160 horas de prácticas en centro de trabajo</p>
                        </div>

                        <a
                            href='mailto:rafaldayparejo@gmail.com'
                            target='_blank'
                            rel="noopener noreferrer"
                            className='educationLabel__seeCertficate'
                            aria-label='Solicitar el certificado de Desarrollo de Aplicaciones Web'
                        >
                            SOLICITAR CERTIFICADO
                        </a>
                    </div>

                </div>

            </div>


            <div className="resume__educationLabel">
                <div className='educationLabel__decorationContainer'>
                    <span className='educationLabel__decorationFigure'></span>
                </div>

                <div className='educationLabel__preContent'>
                    <div className='educationLabel__content educationLabel__content--simple'>
                        <div className='educationLabel__titles'>
                            <h4 className='educationLabel__title'>AUTODIDACTA: HTML, CSS, JavaScript</h4>
                            <h4 className='educationLabel__date'>2023 - 2024</h4>
                        </div>

                        <h5 className='educationLabel__center'>Cursos de YouTube, Udemy y proyectos.</h5>

                    </div>
                </div>

            </div>

            <div className="resume__educationLabel">
                <div className='educationLabel__decorationContainer'>
                    <span className='educationLabel__decorationFigure'></span>
                </div>

                <div className='educationLabel__preContent'>
                    <div className='educationLabel__content educationLabel__content--simple'>
                        <div className='educationLabel__titles'>
                            <h4 className='educationLabel__title'>TÉCNICO SUPERIOR DE SONIDO</h4>
                            <h4 className='educationLabel__date'>2008 - 2010</h4>
                        </div>

                        <h5 className='educationLabel__center'>Universidad Franciso de Vitoria</h5>

                    </div>
                    <a
                        href='mailto:rafaldayparejo@gmail.com'
                        target='_blank'
                        rel="noopener noreferrer"
                        className='educationLabel__seeCertficate educationLabel__seeCertficate--only'
                        aria-label='Solicitar el certificado de Técnico Superior de Sonido'
                    >
                        SOLICITAR CERTIFICADO
                    </a>
                </div>


            </div>
        </article>
    )
}

export default ResumeEducation;
