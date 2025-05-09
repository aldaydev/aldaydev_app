import './home.css';
import HomeSpotlight from './components/HomeSpotlight';
import HomeHeader from './components/homeHeader';
import AnimatedTitle from '../../components/AnimatedTitle/AnimatedTitle';

// import home_header_bg from '../../assets/images/home_header_bg.jpg';

function Home () {
    return(
        <div className='pageContainer home'>
            <AnimatedTitle
                headingLevel="h2"
                initialText="A"
                finalText="ldayDev"
                id="page__animatedTitle"
            />
            <HomeHeader/>
            {/* <HomeSpotlight/>
            <h1>ESTO ES EL HOME</h1> */}
        </div>
    )
}

export default Home;