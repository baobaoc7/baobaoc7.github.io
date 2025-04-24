import * as React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';

export const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className='header'>
            <Link to="/">
                <h2>Bao Chang</h2>
            </Link>
            <ul className={click ? "nav-menu active" :  "nav-menu"}>
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
            <div className='menu-icon' onClick={ handleClick }>
                {click ? (
                    <IoCloseOutline size={30} style={{ color: "white" }} />
                ) : (
                    <IoMenu size={30} style={{ color: "white" }} />
                )}
            </div>

        </div>
    );
}
