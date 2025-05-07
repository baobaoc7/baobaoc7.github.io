import React from 'react'
import "./ProjectCard.css"
import { Link } from 'react-router-dom';

export const ProjectCard = ({ name, imageUrl, description, pageLink, ...props }) => {
    return (

        <div className="card-overlay-container" {...props}>
            <Link to={pageLink}>
                <img src={imageUrl} alt="..." className="card-overlay-image" />
                <div className="card-overlay-text-right">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                </div>
            </Link>
        </div>



    )
}
