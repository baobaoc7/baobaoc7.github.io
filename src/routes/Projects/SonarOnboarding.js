import React from 'react'
import { NavBar } from '../../components/NavBar'
import "./SonarOnboarding.css"
import CompetitiveAnalysis from "../../assets/SonarCompetitiveAnalysis.png"
import person1 from "../../assets/josey-persona.png"
import person2 from "../../assets/nora-persona.png"

const SonarOnboarding = () => {
    return (
        <>
            <NavBar />
            <hr />
            <div className='project-body-title'>
                <h1>Sonar Mental Health | Onboarding </h1>
                <p className='project-title-description'>Redesigning Sonar’s onboarding process to improve user retention.</p>
            </div>
            <div className='project-body'>
                <section>
                    <p className='no-margin-p'>Role: Team Lead</p>
                    <p className='no-margin-p'>Team: Tea-m-Boba</p>
                    <p className='no-margin-p'>Tools: Figma, FigJam, Google Slides, Google Forms, Google Docs, Duration: January - March 2025</p>
                </section>
                <section>
                    <h2>Background and Identifying the Problem</h2>
                    <p>Many young people avoid traditional mental health solutions due to stigma, cost, and fear of discussing personal issues with strangers. To address this gap, Sonar Mental Health offers a scalable, school-based platform that provides 24/7 support through a chatbot companion named Sonny. Sonny is designed specifically for students and engages them in friendly, judgment-free mental health conversations.</p>
                    <p>While teens who try Sonny often find it helpful and comforting, our research uncovered a critical issue: a poor first impression during onboarding can lead users to drop off before experiencing any real benefit. In other words, if Sonny doesn’t feel approachable or relevant within the first few interactions, students are likely to walk away—potentially missing out on much-needed support.</p>
                    <p>Recognizing the high stakes of this first interaction, my team and I focused on redesigning the onboarding experience. Our goal was to make it feel more personal, intuitive, and emotionally supportive.</p>
                </section>
                <section>
                    <h2>Competitive Analysis</h2>
                    <p>My team looked at 5 similar applications and compared their features with each other. I focused on two applications: GoodTherapy and Betterhelp. Each platform had their limitations, whether they were supported by AI or connected users with licensed mental health professionals. Cost, privacy measures, and user reviews also varied depending on the application. We discovered that half of the applications connect users with real, licensed therapists to provide the utmost support. The other half used AI chatbots with some also having limited licensed therapist services. The login methods were similar across all platforms with email and password being required to sign in. Elomia and Wysa also offer the additional flexibility to use their service without an account. Generally, communication with users is personalized, but AI chatbots may be more restricted. Privacy is well-protected across all platforms.</p>
                    <img src={CompetitiveAnalysis} />
                </section>
                <section>
                    <h2>User Stories and Personas</h2>
                    <div className="user-story-container">
                        <div className="user-story">
                            <p>“As a high school student, I want to talk to a trusted person about my feelings so that I can balance managing my emotions, excel in my classes, and engage in extracurricular activities.”</p>
                            <img src={person1} alt="Persona Josey Wilson" />
                        </div>
                        <div className="user-story">
                            <p>“As a person struggling with anxiety, I want to speak to someone who encourages me so that I can be more confident in expressing my feelings and feel less overwhelmed about my future.”</p>
                            <img src={person2} alt="Persona Nora Lee" />
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Sketches</h2>
                    <p>Before creating a hi-fi mockup, I started with quick sketches to explore different layout ideas and interaction flows. This allows me to put my brainstorm ideas, understand the big picture, get feedback from my team, and flesh out my ideas before pursuing a hi-fi prototype. Here, I sketched...</p>
                </section>
                <section>
                    <h2>Prototype #1</h2>
                    <p>Our goal for the initial prototype was to replicate the experience of using the chatbot. Unlike Sonar’s more straightforward interface, we took a different approach to onboarding by designing a texting-style sign-up process. This mirrors how students naturally interact on Sonar’s platform and allows students to know what to expect.</p>
                    <a href='https://www.figma.com/design/AFIle5KulYZv4xKLqcctpT/Sonar-Chat-Onboarding-Concept?node-id=0-1&t=swRb0o7Dw1UAW6rn-1'>
                        <p style={{ textAlign: 'center', color: '#6889FF', textDecoration: 'underline' }}>View full prototype on Figma</p>
                    </a>
                </section>
                <section>
                    <h2>First Round Interviews</h2>
                    <p>We interviewed seven individuals aged 13 to 18 to gather feedback on Sonar’s current and redesigned onboarding processes. I interviewed two people per round of interviews... more</p>
                </section>
            </div>
        </>
    )
}

export default SonarOnboarding