import React from 'react';
import './filters.styles.scss';

export const TypeFilter = ({type, handleChange}) => (
    <div className="fiter-select">
        <label htmlFor="type-filter">Type</label>
        <select value={type} onChange={handleChange} name="type-filter">
            <option value="">All</option>
            <option value="Example">Example</option>
            <option value="Blog">Blog</option>
            <option value="Webinar">Webinar</option>
        </select>
    </div>
)