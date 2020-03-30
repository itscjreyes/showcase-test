import React from 'react';

import './cards.styles.scss';

function Card({key, title, description, image, content, link}) {
    
    const cardStyle = {
        backgroundImage: 'url(' + image + ')',
    };
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card" key={key}>
            <div className="img-wrapper" style={cardStyle}>
            </div>
            <div className="content-wrapper">
                <div className="title-description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="date-tag">
                    <span className="date">March 30, 2020</span>
                    <span className="tag">{content}</span>
                </div>
            </div>
        </a>
    )
}

export default Card;