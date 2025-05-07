//CSS imports
import './App.css';

//React imports
import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";

//Component imports
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Videos from './pages/Videos/Videos.jsx';
import { useEffect } from 'react';
import Resume from './pages/Resume/Resume.jsx';

function App() {

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <>
      <Header/>
      <main className='App__main'>
        <div className='globalBg'></div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/proyectos" element={<Projects/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/curriculum" element={<Resume/>} />
          <Route path="/sobre-mi" element={<h1>Sobre mí</h1>} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
