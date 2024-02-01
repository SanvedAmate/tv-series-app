/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  return (
    <div className="show-list-container">
      <div className="shows-container">
        {results.map((result) => (
          <Link key={result.show.id} to={`/showdetails/${result.show.id}`} className="show-link">
            <div className="single-show">
              <img src={result.show.image?.medium} alt={result.show.name} />
              <div className="show-info">
                <h2>{result.show.name}</h2>
                <span>{result.show.premiered}</span>
                <span className="vote-average">{result.show.rating?.average}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
