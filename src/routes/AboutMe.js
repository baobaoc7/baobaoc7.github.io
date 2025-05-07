import React from 'react';
import { NavBar } from '../components/NavBar';
import "./AboutMe.css"
import { ReactComponent as Profile } from '../assets/me.svg';

const AboutMe = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <div className='aboutmedescription'>
        <Profile className="profile-svg" style={{ width: "250px", height: "auto" }} />
        <div className='aboutmedescriptiontext'>
          <span style={{ fontSize: '20px' }}>Hi! My name is</span>
          <h1 style={{ display: 'inline', margin: 0 }}> Bao Chang,</h1>
          <p className='aboutme-p'>a UX/UI designer, front-end developer, and artist!</p>
          <p className='aboutme-p'>
            I am currently pursuing my bachelor’s degree in Informatics with a specialization in Human Computer Interaction at the University of California, Irvine.
          </p>
          <p className='aboutme-p'>
            I love learning. I’m always taking steps to improve my understanding in user experience, design, and front-end development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe