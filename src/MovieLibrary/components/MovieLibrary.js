import React, { useState , useEffect} from 'react'
import {useDispatch, useSelector ,connect } from 'react-redux'
import {fetchTopRatedMovies,getMovies} from '../store/actions'
import logo from './logo.svg'
import './MovieLibrary.css'
import MoviesList from './MoviesList'


export default function MovieLibrary() { 
 
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movieLib.movies)  
  const [load, setLoad] = useState(60) 
  useEffect(() => {
   dispatch(getMovies(load)) 
  },[]) 
  
  let lastMovie;
  useEffect(() => {
    dispatch(getMovies(load))
    if(lastMovie){
      observer.unobserve(lastMovie)
    }
  },[load])
 
  
   const observer = new IntersectionObserver((entry,observer)=>{
     console.log(entry)
      entry.forEach(e=> {
        if(e.isIntersecting){
          setLoad(load+20)          
        }
      })
  },{
      rootMargin:'0px 0px 0px 0px',
    threshold:1.0
  })

  const moviesOnScreen = document.querySelectorAll('.card')
  lastMovie = moviesOnScreen[moviesOnScreen.length -1]
  console.log(lastMovie) 
   
    if(lastMovie){
      observer.observe(lastMovie)    
    }
 

  



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
