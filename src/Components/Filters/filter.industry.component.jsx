import React from 'react';
import Select from 'react-select';
import './filters.styles.scss';

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected || state.isFocused ? '#10b5f5' : '#77848A',
        background: state.isSelected || state.isFocused ? '#E7F8FE' : 'transparent',
        padding: '15px'
    })
}

const options = [
    { value: '', label: 'All Industries'},
    { value: 'Destinations', label: 'Destinations'},
    { value: 'Attractions & Museums', label: 'Attractions & Museums'},
]

export const IndustryFilter = ({industry, handleChange}) => (
    <div className="filter-select industry">
        <Select 
            value={industry} 
            options={options} 
            onChange={handleChange}
            isSearchable={false}
            styles={customStyles}
            placeholder={'Industry'}
        />
    </div>
)