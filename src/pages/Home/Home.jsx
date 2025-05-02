import './home.css';
import HomeSpotlight from './components/HomeSpotlight';

// import home_header_bg from '../../assets/images/home_header_bg.jpg';

function Home () {
    return(
        <div className='pageContainer home'>
            <HomeSpotlight/>
            <h1>ESTO ES EL HOME</h1>
        </div>
    )
}

export default Home;