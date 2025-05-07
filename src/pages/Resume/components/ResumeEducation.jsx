import './resumeEduExp.css';

import certificado_daw from '../../../assets/documents/certificado-daw-rafa-alday.pdf';
import certificado_javascript from '../../../assets/documents/certificado-javascript-rafa-alday.pdf';
import certificado_css from '../../../assets/documents/certificado-css-rafa-alday.pdf';
import certificado_sonido from '../../../assets/documents/certificado-sonido-rafa-alday.pdf';


function ResumeEducation () {
    return(
        <article className="resume__education">
            <h3 className="resume__articleTitle resume__educationTitle">FORMACIÓN</h3>
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
                            <p className='educationLabel__description'>Certificado Profesional Oficial en "Desarrollo de Aplicaciones con tecnologías Web", especializado en MERN + MySQL. Realización de multiples proyectos en grupo utilizando la metodología SCRUM, trabajando por sprints y usando Jira como gestión de tareas</p>
                            <p className='educationLabel__description'>+160 horas de prácticas en centro de trabajo</p>
                        </div>
                        
                        <a 
                            href={certificado_daw}
                            target='_blank'
                            rel="noopener noreferrer"
                            className='educationLabel__seeCertficate'
                        >
                            VER CERTIFICADO
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
                            <h4 className='educationLabel__title'>CURSO DE JAVASCRIPT</h4>
                            <h4 className='educationLabel__date'>2024</h4>
                        </div>
                        
                        <h5 className='educationLabel__center'>Udemy</h5>
                        
                    </div>
                    <a 
                        href={certificado_javascript}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='educationLabel__seeCertficate educationLabel__seeCertficate--only'
                    >
                        VER CERTIFICADO
                    </a>
                </div>
                
                
            </div>

            <div className="resume__educationLabel">
                <div className='educationLabel__decorationContainer'>
                    <span className='educationLabel__decorationFigure'></span>
                </div>
                
                <div className='educationLabel__preContent'>
                    <div className='educationLabel__content educationLabel__content--simple'>
                        <div className='educationLabel__titles'>
                            <h4 className='educationLabel__title'>MASTER EN CSS3 AVANZADO</h4>
                            <h4 className='educationLabel__date'>2024</h4>
                        </div>
                        
                        <h5 className='educationLabel__center'>Udemy</h5>
                        
                    </div>
                    <a 
                        href={certificado_css}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='educationLabel__seeCertficate educationLabel__seeCertficate--only'
                    >
                        VER CERTIFICADO
                    </a>

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
                        href={certificado_sonido}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='educationLabel__seeCertficate educationLabel__seeCertficate--only'
                    >
                        VER CERTIFICADO
                    </a>
                </div>
                
                
            </div>

        </article>
    )
}

export default ResumeEducation;