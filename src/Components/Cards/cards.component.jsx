import React from 'react';

import './cards.styles.scss';

const Card = ({key, title, description, image, industry, link}) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card" key={key}>
        <div className="img-wrapper">
            <img src={image} alt={title}/>
        </div>
        <div className="content-wrapper">
            <span>{industry}</span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </a>
)

export default Card;