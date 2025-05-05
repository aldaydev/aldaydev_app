import './resume.css';

import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";

function Resume() {

    const resumeSections = [
        "Presentación",
        "Tecnologías",
        "Formación",
        "Experiencia"
    ]


    return (
        <div className='pageContainer resume'>
            <header className="resume__resumeHeader">
                <AnimatedTitle
                    headingLevel="h1"
                    initialText="C"
                    finalText="urrículum"
                    id="page__animatedTitle"
                    fontSize="3rem"
                    braceSize="3.4rem"
                    color="var(--color-white)"
                />
                <nav className="resumeHeader__navbar">
                    
                    <ul className="resumeHeader__navbarList">
                        
                        {
                            resumeSections && resumeSections.map(resumeSection => {
                                return (
                                    <li className="resumeHeader__navbarItem">
                                        <span className='resumeHeader__bg'/>
                                        <a
                                            href="#"
                                            className="resumeHeader__navbarLink"
                                        >
                                            {resumeSection}
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </nav>
            </header>


        </div>
    )
}
export default Resume;