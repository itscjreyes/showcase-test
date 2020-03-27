import React from 'react';
import './filters.styles.scss';

export const IndustryFilter = ({industry, handleChange}) => (
    <div className="fiter-select">
        <label htmlFor="industry-filter">Industry</label>
        <select value={industry} onChange={handleChange} name="industry-filter">
            <option value="">All</option>
            <option value="Destinations">Destinations</option>
            <option value="Attractions & Museums">Attractions & Museums</option>
        </select>
    </div>
)