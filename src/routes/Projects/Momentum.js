import React from 'react'
import "./Momentum.css"
import { NavBar } from '../../components/NavBar'
import momentumbanner from '../../assets/momentumbanner.png'
import momentumsurveyresults from '../../assets/momentumsurveyresults.png'
import momentumhifi from '../../assets/momentumhifi.png'
import momentumlofi from '../../assets/momentumlofi.png'
import prototype from '../../assets/momentumprototypeplaceholder.png'



const Momentum = () => {
    return (
        <div>
            <NavBar />
            <hr />
            <div className='project-body-title'>
                <h1>Momentum | UCI Designation 2025 </h1>
                <img src={momentumbanner} className='one-img' />
            </div>
            <div className='project-body'></div>
            <section>
                <p className='no-margin-p'>Role: UX Researcher, Designer, Artist</p>
                <p className='no-margin-p'>Tools: Figma, FigJam, Canva, Google Forms, Google Sheets, Google Docs, Procreate</p>
                <p className='no-margin-p'>Duration: April 18-20 2025</p>
            </section>
            <section>
                <h2>Problem Statement</h2>
                <p>While 90% of students want to focus, many lack the clarity, structure, and motivation needed to stay on task. Students don’t struggle with completing tasks themselves — they struggle with managing distractions that prevent them from starting or continuing work</p>
            </section>
            <section>
                <h2>Approach</h2>
                <p>Momentum seeks to address this problem by gamifying tasks, allowing students to compete with friends in real-time through a feature called <strong>livesync</strong>, which is a race to see who can complete their work first. Momentum uses AI to learn students’ working habits by observing performance during <strong>livesync</strong> and uses this analysis to generate realistic time estimates for future tasks. After each session, Momentum also provides personalized feedback and tips to help students work better next time.</p>
            </section>
            <section>
                <h2>Research</h2>
                <p>Due to the time constraints of a designathon, my team and I decided to gather research through a survey and then use that to create our user persona.</p>
            </section>
            <section>
                <h2>Survey Results</h2>
                <img src={momentumsurveyresults} className='one-img' />
            </section>
            <section>
                <h2>Persona and User Story</h2>
                <div className="user-story">
                    <p>“As a college student, I want an effective way to motivate myself so that I can consistently complete all my tasks on time and without distractions.”</p>
                </div>
            </section>
            <section>
                <h2>Low Fidelity Mockups</h2>
                <p>To brainstorm key frames and flows within the app, I created lo-fi mockups to explore different layout ideas and interaction flows. This process allowed me to quickly explore different layout ideas, interaction patterns, user journeys, and solidify key frames before moving forward to a more high quality mockup.</p>
                <img src={momentumlofi} className='one-img' />
            </section>
            <section>
                <h2>Assets</h2>
                <p>I sketched and designed key characters and background elements to help define the app’s branding and visual identity.</p>
            </section>
            <section>
                <h2>High Fidelity Mockups</h2>
                <p>After going over the team’s low fidelity mockups, we translated everything into high fidelity mockups. In this stage, we agreed on a color palette, defined font style and sizes, and fully rendered visuals to create a realistic user interface. The prototyping is also more thorough and one continuous flow is created to show the entire process from onboarding to using the app’s core features.</p>
                <div className='flex-row-container' style={{alignItems: 'flex-start'}}>
                    <img src={prototype} className='one-img' style={{width: '20%'}} />
                    <img src={momentumhifi} className='one-img' />
                </div>
            </section>
        </div>
    )
}

export default Momentum