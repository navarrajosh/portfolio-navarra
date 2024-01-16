import './App.css';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Project from './Components/Project/Project';
import Parallax from './Components/Parallax/Parallax';

function App() {
  return ( 
  <div className = "App" >
    <section>
    <Home/>
    </section>
    <section >
    <Parallax type="projects"/>
    </section>
    <Project/>
    <section >
    <Parallax type="skills"/>
    </section>
    <section>
    <Skills/>
    </section>
    </div>
  );
}

export default App;