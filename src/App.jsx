import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';
import Parallax from './Components/Parallax/Parallax';

function App() {
  return ( 
  <div className = "App" >
    <section>
    <Navbar/>
    <Home/>
    </section>
    <section >
    <Parallax/>
    </section>
    <section >
    <Project/>
    </section>
    <section>
    <Skills/>
    </section>
    </div>
  );
}

export default App;