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
    { value: '', label: 'All Types'},
    { value: 'Example', label: 'Example'},
    { value: 'Blog', label: 'Blog'},
    { value: 'Webinar', label: 'Webinar'}
]

export const TypeFilter = ({type, handleChange}) => (
    <div className="filter-select type">
        <Select 
            value={type} 
            options={options} 
            onChange={handleChange}
            isSearchable={false}
            styles={customStyles}
            placeholder={'Type'}
        />
    </div>
)