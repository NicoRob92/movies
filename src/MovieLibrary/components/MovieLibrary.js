import React, { useState , useEffect} from 'react'
import {useDispatch, useSelector ,connect } from 'react-redux'
import {fetchTopRatedMovies,getMovies} from '../store/actions'
import logo from './logo.svg'
import './MovieLibrary.css'
import MoviesList from './MoviesList'


export default function MovieLibrary() { 
 
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movieLib.movies) 
  const [local, setLocal] = useState([])
  useEffect(() => {
   dispatch(getMovies(200)) 
  },[]) 
   console.log(movies)
  
   return (
    
    <div className="MovieLibrary">
        <header className="ML-header">
          <img src={logo} className="ML-logo" alt="logo" />
          <h1 className="ML-title">Movies</h1>
        </header>
        <div className="ML-intro">
          { movies ? <MoviesList movies={movies}/> : <h1>Without movies</h1>}
        </div>
      </div>
    );
}
