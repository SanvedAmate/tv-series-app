/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Header.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchResults from './SearchResults';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Make an API request to TVMaze search endpoint
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
      setSearchResults(response.data);
      console.log('Search results:', response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      // Handle errors or show a message to the user
    }
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">My TV-SHOWS</Link>
        </div>
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search shows..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
         
         />
          <button type="submit">Search</button>
        </form>
      </nav>

      {searchResults.length > 0 && <SearchResults results={searchResults} />}
    </header>
  );
};

export default Header;
