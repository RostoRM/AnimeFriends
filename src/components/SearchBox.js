import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pv2 ph4 mb4
        ba bw2 br-pill b--lightest-blue bg-lightest-blue bg-animate hover-bg-light-blue grow'
        type='search'
        placeholder='Search Avatars'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
