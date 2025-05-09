import './home.css';
import HomeHeader from './components/HomeHeader.jsx';
import HomeProjects from './components/HomeProjects.jsx';

// import home_header_bg from '../../assets/images/home_header_bg.jpg';

function Home () {
    return(
        <div className='pageContainer home'>
            <HomeHeader/>
            <HomeProjects/>
        </div>
    )
}

export default Home;