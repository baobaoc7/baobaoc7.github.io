import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import AboutMe from './routes/AboutMe';
import Projects from './routes/Projects';
import Resume from './routes/Resume';
import SonarOnboarding from './routes/Projects/SonarOnboarding';
import Momentum from './routes/Projects/Momentum';
import PantryPal from './routes/Projects/PantryPal';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/projects/sonar-onboarding" element={<SonarOnboarding/>}/>
        <Route path="/projects/momentum" element={<Momentum/>}/>
        <Route path="/projects/pantrypal" element={<PantryPal/>}/>
      </Routes>
    </>
  );
}

export default App;
