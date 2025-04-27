import React from 'react'
import { Box } from '@mui/material'
import "./ProjectCard.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const ProjectCard = ({ name, imageUrl, description }) => {
    return (

        <div className="card-overlay-container">
            <img src={imageUrl} alt="..." className="card-overlay-image" />
            <div className="card-overlay-text-right">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    {description}
                </p>
                <button className='case-study-button'><p className="button-text">View Case Study</p></button>
            </div>
        </div>



    )
}
