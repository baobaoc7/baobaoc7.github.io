import React from 'react'
import { NavBar } from '../components/NavBar'
import { ProjectCard } from '../components/ProjectCard'
import "./Projects.css"
import SonarCardImg from "../assets/SonarCardImg.png"
import MomentumCardImg from "../assets/MomentumCardImg.png"
import PantryPalImg from "../assets/PantryPalImg.png"


const Projects = () => {
    return (
        <>
            <NavBar/>
            <hr/>
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
                />
                <ProjectCard
                    name="Pantry Pal"
                    imageUrl={PantryPalImg}
                    description="Meal suggestions tailored to meet your needs"
                />
            </div>
        </>
    )
}

export default Projects