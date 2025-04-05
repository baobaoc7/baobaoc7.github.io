import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import AboutMe from './routes/AboutMe';
import Projects from './routes/Projects';
import Resume from './routes/Resume';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </>
  );
}

export default App;
