import React, { useRef } from 'react'
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/MovieList/MovieList'
import TitleCard from './components/TitleCard/TitleCard'
import Futter from './components/Futter/Futter'


const App = () => {
  const movieRef = useRef(null);
  return (
    <div>
      <Navbar  movieRef={movieRef}/>
      <MovieList />
      <TitleCard ref={movieRef}/>
      <Futter />
    </div>
  )
}

export default App
