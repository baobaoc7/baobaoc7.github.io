import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavBar } from '../../components/NavBar'
import "./SonarOnboarding.css"
import CompetitiveAnalysis from "../../assets/SonarCompetitiveAnalysis.png"
import person1 from "../../assets/josey-persona.png"
import person2 from "../../assets/nora-persona.png"
import prototype1f1 from "../../assets/Prototype1-1.png"
import prototype1f2 from "../../assets/Prototype1-2.png"
import prototype1f3 from "../../assets/Prototype1-3.png"
import prototype2f1 from "../../assets/prototype2f1.png"
import prototype2f2 from "../../assets/prototype2f2.png"
import prototype2f3 from "../../assets/prototype2f3.png"
import prototype2f4 from "../../assets/prototype2f4.png"
import prototype2f5 from "../../assets/prototype2f5.png"
import prototype3f1 from "../../assets/prototype3f1.png"
import prototype3f2 from "../../assets/prototype3f2.png"
import prototype3f3 from "../../assets/prototype3f3.png"
import prototype3f4 from "../../assets/prototype3f4.png"
import prototype3f5 from "../../assets/prototype3f5.png"
import interview1 from "../../assets/sonarinterviewsr1.png"
import interview2 from "../../assets/sonarinterviewsr2.png"
import { ContactFooter } from '../../components/ContactFooter';

const SonarOnboarding = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false, 
        });
    }, []);
    return (
        <>
            <NavBar />
            <div className='project-body-title'>
                <h1>Sonar Mental Health | Onboarding </h1>
                <p className='project-title-description'>Redesigning Sonar’s onboarding process to improve user retention.</p>
            </div>
            <div className='project-body'>
                <section>
                    <p className='no-margin-p'>Role: Team Lead</p>
                    <p className='no-margin-p'>Team: Tea-m-Boba</p>
                    <p className='no-margin-p'>Tools: Figma, FigJam, Google Slides, Google Forms, Google Docs</p>
                    <p className='no-margin-p'>Duration: January - March 2025</p>
                </section>
                <section>
                    <h2>Background and Identifying the Problem</h2>
                    <p>Many young people avoid traditional mental health solutions due to stigma, cost, and fear of discussing personal issues with strangers. To address this gap, Sonar Mental Health offers a scalable, school-based platform that provides 24/7 support through a chatbot companion named Sonny. Sonny is designed specifically for students and engages them in friendly, judgment-free mental health conversations.</p>
                    <p>While teens who try Sonny often find it helpful and comforting, our research uncovered a critical issue: a poor first impression during onboarding can lead users to drop off before receiving any help. In other words, if Sonny doesn’t feel approachable or relevant within the first few interactions, students are likely to walk away—potentially missing out on much-needed support.</p>
                </section>
                <section>
                    <h2>Our Approach</h2>
                    <p>We understand how important a first impression is. That's why my team and I focused on redesigning the onboarding experience. Our goal was to make it feel more personal, intuitive, and emotionally supportive. We held biweekly meetings with the Sonar UX team to present and receive feedback throughout each stage of our research and design process.</p>
                </section>
                <section>
                    <h2>Competitive Analysis</h2>
                    <p>After identifying our problem, it was time to start the UX process. My team and I looked at 5 similar applications and compared their features with each other. I focused on two applications: GoodTherapy and Betterhelp. Each platform had their limitations, whether they were supported by AI or connected users with licensed mental health professionals. Cost, privacy measures, and user reviews also varied depending on the application. We discovered that half of the applications connect users with real, licensed therapists to provide the utmost support. The other half used AI chatbots with some also having limited licensed therapist services. This calls for a need for a hybrid platform that combines both AI and real-human support which is where Sonar excells.</p>
                    <img src={CompetitiveAnalysis} alt="Competitive Analysis" data-aos="fade-up" />
                </section>
                <section data-aos="fade-up">
                    <h2>User Stories and Personas</h2>
                    <div className="flex-row-container">
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
                <section data-aos="fade-up">
                    <h2>Sketches</h2>
                    <p>Before creating a hi-fi mockup, I started with quick sketches to explore different layout ideas and interaction flows. This allows me to brainstorm ideas, piece together necessary details, get feedback from my team, and flesh out my ideas before pursuing a hi-fi prototype. Sketches will be uploaded soon.</p>
                </section>
                <section data-aos="fade-up">
                    <h2>Prototype #1</h2>
                    <p>Our goal for the initial prototype was to replicate the experience of using the chatbot. Unlike Sonar’s more straightforward interface, we took a different approach to onboarding by designing a texting-style sign-up process. This mirrors how students naturally interact on Sonar’s platform and allows students to know what to expect.</p>
                    <a href='https://www.figma.com/design/AFIle5KulYZv4xKLqcctpT/Sonar-Chat-Onboarding-Concept?node-id=0-1&t=swRb0o7Dw1UAW6rn-1'>
                    </a>
                    <div className="flex-row-container">
                        <img src={prototype1f1} alt="Prototype #1 Welcome Page" style={{width: '20%'}}/>
                        <img src={prototype1f2} alt="Prototype #1 Conversation" style={{width: '20%'}}/>
                        <img src={prototype1f3} alt="Prototype #1 Conversation" style={{width: '20%'}}/>
                    </div>
                </section>
                <section data-aos="fade-up">
                    <h2>First Round Interviews</h2>
                    <p>We interviewed seven individuals aged 13 to 18 to gather feedback on Sonar’s current and our redesigned onboarding processes. I personally interviewed two people per interview iteration. Before the interviews, my team and I developed an interview protocol to guide the research and align on key objectives:</p>
                    <ul className='show-dot-ul'>
                        <li>Identify pain points and areas to improve within the current onboarding process</li>
                        <li>Identify where users may lose interest in engaging with the app, and how to improve retention rates</li>
                        <li>Find opportunities to improve user engagement, satisfaction, and trust in the initial phase of interaction during the onboarding process</li>
                        <li>Have we achieved our goal of improving the onboarding experience?</li>
                    </ul>
                    <p>The interview itself is broken into three parts. First, I presented to my interviewees two versions of the onboarding process: my team’s mockup and Sonar’s original process. I had the interviewees try to navigate each prototype without directions so that I can look out for any confusion, pauses, frustrations, or any other reactions. After interacting with both prototypes, I asked a series of open-ended questions about their experiences. Lastly, I asked the interviewees to reflect on the strengths and weaknesses of each prototype and select the one they preferred.</p>
                    <p>Once the entire team has conducted their interviews, we came together to synthesize all of the feedback in an 
                        <a href="https://www.figma.com/board/VWexegwmbAU61oARhDfcIm/172-Interview-Takeaways?node-id=0-1&t=nvYnQUvSm9MQGrf3-1" className='a-project-links'> affinity diagram</a>. Overall, most participants preferred Sonar’s onboarding for straightforwardness despite liking a chat styled process. Based on this, we made the decision to follow Sonar’s style and focus on identifying opportunities for improvement.</p>
                    <img src={interview1} alt='Interview Affinity Diagram 1' style={{width: '60%'}}/>
                </section>
                <section data-aos="fade-up">
                    <h2>Prototype #2</h2>
                    <p>In our second prototype, we switched to a similar design as Sonar’s onboarding flow and focused on improving existing elements of Sonar’s design and introducing features such as:</p>
                    <ul className='show-dot-ul'>
                        <li>Addressing user data privacy concerns</li>
                        <li>Allowing users to personalize Sonny by changing the name and avatar</li>
                        <li>Make it clear that students are interacting with a real person and not an AI bot</li>
                        <li>Modify the questions and answer choices to be more straightforward and inclusive</li>
                        <li>Add more diverse input methods such as sliders, date scroll, dropdown menus, etc</li>
                    </ul>
                    <div className="flex-row-container">
                        <img src={prototype2f1} alt="Prototype #2 Meet Sonny" style={{width: '17%'}}/>
                        <img src={prototype2f2} alt="Prototype #2 Data Privacy" style={{width: '17%'}}/>
                        <img src={prototype2f3} alt="Prototype #2 Rate Mental Wellbeing" style={{width: '17%'}}/>
                        <img src={prototype2f4} alt="Prototype #2 Choose User Profile" style={{width: '17%'}}/>
                        <img src={prototype2f5} alt="Prototype #2 Upload Picture for Companion" style={{width: '17%'}}/>
                    </div>
                </section>
                <section data-aos="fade-up">
                    <h2>Second Round Interviews</h2>
                    <p>The second round interview follows the same structure as the first. Interviewees are given a refresher of Sonar’s onboarding process followed by a walkthrough of our prototype #2. Next is the user experience phase and lastly, the strengths and weaknesses of each prototype. </p>
                    <p>Compared to our first prototype, interviewees consistently noted that Prototype #2 felt more polished, intuitive, and engaging. This time, 100% of participants preferred our redesign over Sonar’s original onboarding. Participants appreciated the clarity with data privacy and Sonar’s purpose which helped them grasp the app’s value. The personalization feature was also very well received. Despite the positive response, interviewees pointed out opportunities to refine the experience further such as adjusting font size and spacing to improve readability, shortening the onboarding process, and making minor visual tweaks, such as color changes.</p>
                    <img src={interview2} alt='Interview Affinity Diagram 2'style={{width: '60%'}}/>
                </section>
                <section data-aos="fade-up">
                    <h2>Final Prototype</h2>
                    <p>With all of our research and feedback in mind, we created a final prototype that addresses the frustrations and areas of improvement we found. We tweaked our final prototype by increasing and bolding the font size, improving the Sonny personalization flow, and shortening the onboarding process by omitting some of the Sonny introduction screens.</p>
                    <div className="flex-row-container">
                        <img src={prototype3f5} alt="Prototype #3 Welcome to Sonar" style={{width: '17%'}}/>
                        <img src={prototype3f1} alt="Prototype #3 Meet Sonny" style={{width: '17%'}}/>
                        <img src={prototype3f2} alt="Prototype #3 Data Privacy" style={{width: '17%'}}/>
                        <img src={prototype3f3} alt="Prototype #3 Upcoming Events" style={{width: '17%'}}/>
                        <img src={prototype3f4} alt="Prototype #3 Personalize Sonny" style={{width: '17%'}}/>
                    </div>
                </section>
                <section data-aos="fade-up">
                    <h2>Reflection</h2>
                    <p>Throughout this project, my team and I encountered several challenges that affected our user research and design.</p>
                    <p>The prototype was tested on a small sample size, which may not fully capture Sonar’s diverse user base. While we conducted a few interviews from external sources, time constraints, and legal procedures necessary to interview local high school students in Irvine prevented us from gathering as many outside interviewees as we’d hoped. Additionally, the interviews occurred virtually on Zoom, which limited my ability to observe non-verbal cues and assess how interviewees interacted with the prototypes.</p>
                    <p>If I were to continue this project into the future, I would expand user testing to a larger and more diverse group of people, like local schools and university outreach programs. I would also like to reach out to people who specifically have struggled with their mental health to get specific insights on their experience with the Sonar app. I’m also interested in exploring additional features beyond just the ability to chat with a person, such as a mood tracker, mental health resources, and minigames.</p>
                </section>
            </div>
            <ContactFooter></ContactFooter>
        </>
    )
}

export default SonarOnboarding