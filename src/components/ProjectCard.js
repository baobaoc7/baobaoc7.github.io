import React from 'react'
import { Box } from '@mui/material'
import "./ProjectCard.css"

export const ProjectCard = ({ name, imageUrl, description }) => {
    return (
        <>
            <Box className="card-box">
                <h2>{name}</h2>
                <div>
                    <img src={imageUrl} alt={name} className="image" />
                    <p>{description}</p>
                </div>
            </Box>
        </>
    )
}
