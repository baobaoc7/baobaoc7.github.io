import React from 'react'
import { useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { ProjectCard } from '../components/ProjectCard'
import "./Projects.css"
import SonarCardImg from "../assets/SonarCardImg.png"
import MomentumCardImg from "../assets/MomentumCardImg.png"
import PantryPalImg from "../assets/PantryPalImg.png"
import BjjCardImg from "../assets/BjjCardImg.png"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
    useEffect(() => {
        AOS.init({
          duration: 800, // animation duration
          easing: 'ease-in-out', // how smooth
          once: true, // only animate once
        });
      }, []);
    return (
        <>
            <NavBar />
            <hr />
            <h1>UI/UX Projects</h1>
            <div className="project-cards-container">
                <ProjectCard
                    name="Sonar Mental Health | Onboarding"
                    imageUrl={SonarCardImg}
                    description="Redesigning Sonar’s onboarding process to improve user retention"
                    pageLink="/projects/sonar-onboarding"
                />
                <ProjectCard
                    name="Momentum | UCI Designation 2025"
                    imageUrl={MomentumCardImg}
                    description="Productivity in motion - stay on track together by competing"
                    pageLink="/projects/momentum"
                />
                <ProjectCard
                    name="Pantry Pal"
                    imageUrl={PantryPalImg}
                    description="Meal suggestions tailored to meet your needs"
                    pageLink="/"
                />
            </div>
            <h1>Programming Projects</h1>
            <div className="project-cards-container">
                <ProjectCard
                    name="BJJ RollTrack"
                    imageUrl={BjjCardImg}
                    description="Digitalize gym management for improved performance"
                    pageLink="/"
                    data-aos="fade-up" 
                />
            </div>
        </>
    )
}

export default Projects