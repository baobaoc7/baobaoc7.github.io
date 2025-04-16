import React from 'react';
import { NavBar } from '../components/NavBar';
import Avatar from '@mui/material/Avatar';
import fruits from "../assets/fruits.webp"

const AboutMe = () => {
  return (
    <div>
      <NavBar />
      <div id='aboutmedescription'>
        <div><Avatar alt="Picture of Bao" src={fruits}/></div>
        <div>
          <span style={{ fontSize: '16px' }}>Hi! My name is</span>
          <h1 style={{ display: 'inline', margin: 0 }}> Bao Chang,</h1>
          <p>a UX/UI designer, front-end developer, and artist! I'm an undergraduate student at the University of California, Irvine.
            I am currently working toward my bachelor’s degree in Informatics with a specialization in Human Computer Interaction. </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe