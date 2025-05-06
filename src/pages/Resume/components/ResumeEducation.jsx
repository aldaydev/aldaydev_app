import './resumeEducation.css';


function ResumeEducation () {
    return(
        <article className="resume__education">
            <h3 className="resume__articleTitle resume__educationTitle">FORMACIÓN</h3>
            <div className="resume__educationLabel">
                <h4>Desarrollo de Aplicaciones Web</h4>
                <h5>2024 - 2025</h5>
                <h5>Centro de Formación Digital San Blas</h5>
                <p>Certificado Profesional Oficial en "Desarrollo de Aplicaciones con tecnologías Web", especializado en MERN + MySQL</p>
                <p>+160 horas de prácticas en centro de trabajo</p>
            </div>
            <div className="resume__educationLabel">
                <h4>Curso de JavaScript</h4>
                <h5>2024</h5>
                <h5>Udemy</h5>
            </div>
            <div className="resume__educationLabel">
                <h4>Master en CSS3 Avanzado</h4>
                <h5>2024</h5>
                <h5>Udemy</h5>
            </div>
            <div className="resume__educationLabel">
                <h4>Técnico Superior de Sonido para Auiovisuales</h4>
                <h5>2008 - 2010</h5>
                <h5>Universidad Francisco de Vitoria</h5>
            </div>
        </article>
    )
}

export default ResumeEducation;