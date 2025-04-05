import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "./NavBar.css"


export const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='nav-menu'>
            <div className="pages">
                <Link to="/">
                    <Button
                        id="menu-button"
                    // onClick={handleClick}
                    >
                        About Me
                    </Button>
                </Link>
                <Link to="/projects">
                    <Button
                        id="menu-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Projects
                    </Button>
                </Link>
                <Link to="/resume">
                    <Button
                        id="menu-button"
                    // onClick={handleClick}
                    >
                        Resume
                    </Button>
                </Link>
            </div>
            <div className='menu-collapse'>
                <MenuIcon></MenuIcon>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>UI/UX</MenuItem>
                <MenuItem onClick={handleClose}>Programming</MenuItem>
            </Menu>
        </div>
    );
}
