import AnimatedTitle from '../../components/AnimatedTitle/AnimatedTitle';
import './projects.css';

// import projects_bg from '../../../assets/images/projects_bg';

function Projects () {
    return(
        <>
            <section className='projects'>
                <header className='projects__header'>
                    <AnimatedTitle 
                        headingLevel = "h1"
                        initialText="P"
                        finalText="rojects"
                        id="page__animatedTitle"
                        fontSize="3rem"
                        braceSize="3.4rem"
                        color="var(--color-white)"
                    />
                </header>
                
            </section>
        </>
        
    )
}

export default Projects;