import React from 'react';
import { IndustryFilter } from '../Filters/filter.industry.component';
import { TypeFilter } from '../Filters/filter.type.component';

import './filters-wrapper.styles.scss';

export const FiltersWrapper = ({type, industry, handleTypeChange, handleIndustryChange}) => {
    return (
        <div className="filters">
          <div className="container">
            <TypeFilter
              value={type}
              handleChange={handleTypeChange}
            />
            <IndustryFilter
              value={industry}
              handleChange={handleIndustryChange}
            />
          </div>
        </div>
    )
}