import React, { useState } from 'react';
import './TitleCard.css';
import { movieData } from '../../assets/Fliter';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import { FaSearch } from 'react-icons/fa';

const TitleCard = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Make sure every movie has category array
  const movies = movieData.map(movie => ({
    ...movie,
    category: movie.category || ['Unknown'],
  }));

  // Get all unique categories
  const categories = [
    'All',
    ...new Set(movies.flatMap(movie => movie.category)),
  ];

  // Filter by selected category
  const filteredByCategory =
    selectedCategory === 'All'
      ? movies
      : movies.filter(movie =>
          movie.category.includes(selectedCategory)
        );

  // Filter by search input
  const finalMovies = filteredByCategory.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="title-card">
      <div className="title">
        <h2>Movie Recommendations</h2>
      </div>

      <div className="title-cata">
        {/* CATEGORY FILTER COMPONENT */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* SEARCH */}
        <div className="search">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>

      {/* MOVIE CARDS */}
      <div className="card-img">
        {finalMovies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <p className="movie-title">{movie.title}</p>
            <span className="movie-info">
              {movie.year} ‧ {movie.category.join(' / ')} ‧ {movie.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
