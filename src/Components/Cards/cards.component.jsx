import React from 'react';

import './cards.styles.scss';

function Card({key, title, description, image, industry, link}) {
    
    const cardStyle = {
        backgroundImage: 'url(' + image + ')',
    };
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card" key={key}>
            <div className="img-wrapper" style={cardStyle}>
            </div>
            <div className="content-wrapper">
                <span>{industry}</span>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </a>
    )
}

export default Card;