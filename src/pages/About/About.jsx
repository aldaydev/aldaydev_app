import './about.css';

import AnimatedTitle from '../../components/AnimatedTitle/AnimatedTitle';
import AboutHeader from './components/AboutHeader';



function About () {
    
    return (
        <div className='pageContainer about'>
            <AnimatedTitle 
                headingLevel = "h1"
                initialText="S"
                finalText="obre mí"
                id="page__animatedTitle"
                fontSize="3rem"
                braceSize="3.4rem"
                color="var(--color-white)"
            />

            <AboutHeader/>
            

        </div>
    )
}

export default About;