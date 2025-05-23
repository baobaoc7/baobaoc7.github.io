import React from 'react';
import { NavBar } from '../components/NavBar';
import "./AboutMe.css"
import { ReactComponent as Profile } from '../assets/me.svg';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import artprocess from "../assets/artprocess.png"
import artwork from "../assets/artwork.png"
import { ContactFooter } from '../components/ContactFooter';

const AboutMe = () => {
  return (
    <div>
      <NavBar />
      <div className='main-body' style={{ marginBottom: 0 }}>
        <div className='aboutmedescription'>
          <Profile className="profile-svg" style={{ width: "250px", height: "auto" }} />
          <div className='aboutmedescriptionintro'>
            <span style={{ fontSize: '40px' }}>Hi! My name is</span>
            <h1 style={{ display: 'inline', margin: 0, fontSize: '60px' }}> Bao Chang,</h1>
            <p className='aboutme-p'>a UX/UI designer, front-end developer, and artist!</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '17%' }}>
          {/* <Arrow className="arrow-svg" style={{ width: '150px', height: 'auto' }} /> */}
        </div>
        <div className='aboutmedescriptiontextcontainer'>
          <div className='aboutmedescriptiontext'>
            <h2>Currently</h2>
            <p className='p-text'>I am in my last year at the University of California, Irvine. I’m pursuing my bachelor’s degree in Informatics with a specialization in Human Computer Interaction. During my time here, I’ve learned many new skills whether it is in design or development. I’ve used tools such as Figma, VSCode, Javascript, React, and so much more in my projects!</p>
            <h2>My UI/UX design journey</h2>
            <p className='p-text'>started with my passion for art and technology. I knew I wanted to be in the tech industry, but I also wanted to stay connected to my artistic side. Discovering UI/UX design means that I can build intuitive, user-friendly experiences while still staying in touch with my passions.</p>
            <h2>As a designer</h2>
            <p className='p-text'>my goal is to integrate all of my skills to create user-centered designs with the best experiences for as many people as possible. Check out my projects to see how I bring user-centered design to life!</p>
            <h2>Outside of tech</h2>
            <p className='p-text'>I also love badminton, video games, and digital art! Some of my favorite pieces of media are Ace Attorney, The House in Fata Morgana, and AOT :) And fun fact, I’ve had a TikTok art account with about 50k followers since 2020!</p>
            <p className='p-text'>Here's a snippet of one of my recent works! Inspired by jellyfishes :D</p>
            <img src={artprocess} className="desktop-only" style={{ width: '100%' }} />
            <img src={artwork} className="mobile-only" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
      <ContactFooter></ContactFooter>
    </div>
  );
};

export default AboutMe