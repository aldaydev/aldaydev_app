//CSS imports
import './App.css';

//React imports
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Component imports
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';

function App() {

  return (
    <Router>
      <Header/>
      <main className='App__main'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/proyectos" element={<Projects/>} />
          <Route path="/videos" element={<h1>Videos</h1>} />
          <Route path="/curriculum" element={<h1>Curriculum</h1>} />
          <Route path="/sobre-mi" element={<h1>Sobre mí</h1>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
