import React from 'react';

import './search-box.styles.css';





// FUNCTIONAL COMPONENTS DONT HAVE ACCESS TO STATE CAUSE THEY DONT HAVE ACCESS TO CONSTRUCTOR WHICH IS A CLASS METHOD AND THIS IS A FUCTION METHOD, NOR THEY HAVE ACCESS TO LIFE CYCLE MEHTODS.
// IF YOU DONT NEED ACCESS TO STATE OR CONSTRUCTOR JUST USE FUNCTIONAL COMPONENTS

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    onChange={handleChange}
    placeholder={placeholder}
    type="search"
  />
)

























