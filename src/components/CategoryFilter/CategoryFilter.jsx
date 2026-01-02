import React from 'react';
import './CategoryFilter.css'

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
 const categories = [
  'All',
  'Action',
  'Thriller',
  'Sport',
  'Drama',
  'Heist',
  'Crime',
  'Gangster'
];
  return (
    <div className='category-filter'>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={selectedCategory === cat ? 'active' : ''}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
