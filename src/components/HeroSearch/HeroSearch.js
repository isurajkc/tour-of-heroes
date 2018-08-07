import React from 'react';
import PropTypes from 'prop-types';
import './HeroSearch.css';

const HeroSearch = ({ onSearch, value }) => {
  return (
    <input
      type="search"
      value={value}
      placeholder="Search for superhero"
      className="search-input"
      onChange={e => onSearch(e)}
    />
  );
};

HeroSearch.propTypes = {
  onSearch: PropTypes.func,
  value: PropTypes.string,
};

export default HeroSearch;
