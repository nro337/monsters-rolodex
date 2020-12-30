import React from 'react';

import './search-box.styles.css';

//Functional components are used to render HTML (get props, return HTML)
//They do NOT have access to lifecycle methods or internal state
export const SearchBox = ({ placeholder, handleChange }) => (
    <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
);