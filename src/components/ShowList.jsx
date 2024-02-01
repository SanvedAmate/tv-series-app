/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './ShowList.css';
import Pagination from '../Pages/Pagination.jsx';
import SearchResults from '../Pages/SearchResults.jsx';

const ShowList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [shows, setShows] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
    if (searchTerm) {
      fetchSearchResults();
    } else {
      fetchShows();
    }
    // eslint-disable-next-line
  }, [selectedGenres, page, searchTerm]);

  const fetchShows = async () => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/shows?page=${page}&with_genres=${selectedGenres.join(',')}`
    );
    setShows(data);
    setNumOfPages(Math.ceil(data.length / 6)); // Assuming 6 shows per page
  };

  const fetchSearchResults = async () => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]);
    }
  };

  const handleShowClick = (showId) => {
    navigate(`/showdetails/${showId}`);
  };

  return (
    <div>
      <div className="genres">
        {/* Display selected genres */}
        {selectedGenres.map((genre) => (
          <span key={genre} className="selectedGenre">
            {genre}
          </span>
        ))}
      </div>

      {/* Display SearchResults if there are results */}
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <SearchResults results={searchResults} onShowClick={handleShowClick} />
        </div>
      )}

      {/* Display shows if no search results or search is cleared */}
      {shows.length > 0 && (
        <div className="trending">
          {shows.map((show) => (
            <div key={show.id} className="single-show" onClick={() => handleShowClick(show.id)}>
              <img src={show.image?.medium} alt={show.name} />
              <div className="show-info">
                <h2>{show.name}</h2>
                <span>{show.premiered}</span>
                <span className="vote-average">{show.rating?.average}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {numOfPages > 1 && (
        <Pagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default ShowList;
