import React from 'react'
import { NavBar } from '../components/NavBar'
import { ProjectCard } from '../components/ProjectCard'


const Projects = () => {
    return (
        <>
            <NavBar></NavBar>
            <h1>Projects</h1>
            <p>Here is a collection of projects that I have worked on so far.</p>
            <div className="project-cards-container">
                <ProjectCard
                    name="Pantry Pal"
                    imageUrl="https://picsum.photos/seed/picsum/200/300"
                    description="Have you ever found yourself staring at your fridge, unsure of what to cook for dinner? A staggering 62% of Americans have reported feeling stressed about meal preparation. They cite lack of time, inspiration, or ingredients as their main challenges. Recognizing this common struggle, my team, Silent Strivers, and I worked together to design an app that addresses and solves this issue. Our goal was to provide users with a convenient tool for brainstorming meal ideas effortlessly."
                />
                <ProjectCard
                    name="Sonar Mental Health - Improved Onboarding"
                    imageUrl="https://picsum.photos/seed/picsum/200/300"
                    description="Have you ever found yourself staring at your fridge, unsure of what to cook for dinner? A staggering 62% of Americans have reported feeling stressed about meal preparation. They cite lack of time, inspiration, or ingredients as their main challenges. Recognizing this common struggle, my team, Silent Strivers, and I worked together to design an app that addresses and solves this issue. Our goal was to provide users with a convenient tool for brainstorming meal ideas effortlessly."
                />
            </div>
        </>
    )
}

export default Projects