//CSS imports
import './App.css';

//React imports
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Component imports
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <Router>
      <Header/>
      <main className='App__main'>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/proyectos" element={<h1>About</h1>} />
          <Route path="/curriculum" element={<h1>Projects</h1>} />
          <Route path="/sobre-mi" element={<h1>Projects</h1>} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
