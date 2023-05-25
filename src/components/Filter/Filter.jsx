import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Input } from './Filter.styled.js';

const Filter = ({ value, onChange }) => {
    const filterInputId = shortid.generate();
    
    return (
        <label>
            Find contacts by name
            <Input
                type="text"
                value={value}
                name="filter"
                id={filterInputId}
                onChange={onChange}
                required
            />
            </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;