import React, { useState, useRef } from 'react';
import './MovieList.css';
import { movie_data } from '../../assets/movie';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const MovieList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRefs = useRef([]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const index = (prev + 1) % movie_data.length;
      thumbnailRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      return index;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const index = (prev - 1 + movie_data.length) % movie_data.length;
      thumbnailRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      return index;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    thumbnailRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <div className="slider">
      {/* Main Slides */}
      {movie_data.map((movie, index) => (
        <div
          className={`list ${index === currentIndex ? 'active' : ''}`}
          key={movie.id}
        >
          <div className="item">
            <img src={movie.image} alt={movie.name} />
            <div className="content">
              <h2>{movie.name}</h2>
              <p className="cate">{movie.category}</p>
              <p className="desc">{movie.desc}</p>
              <button>Watch Now</button>
            </div>
          </div>
        </div>
      ))}

      {/* Vertical Thumbnails */}
      <div className="thumbnails">
        {movie_data.map((movie, index) => (
          <div
            key={`thumb-${movie.id}`}
            className={`thumbnail ${
              index === currentIndex ? 'active-thumb' : ''
            }`}
            ref={(el) => (thumbnailRefs.current[index] = el)}
            onClick={() => goToSlide(index)}
          >
            <img src={movie.image} alt={movie.name} />
          </div>
        ))}
      </div>

      {/* Next / Prev Buttons */}
      <div className="slider-buttons">
        <button className="prev" onClick={prevSlide}>
          <FaChevronLeft size={24} color="#fff" />
        </button>
        <button className="next" onClick={nextSlide}>
          <FaChevronRight size={24} color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
