import React, { useState , useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getMovies} from '../store/actions'
import logo from './logo.svg'
import './MovieLibrary.css'
import MoviesList from './MoviesList'


export default function MovieLibrary() { 
 
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movieLib.movies) 
  const [display,setDisplay] = useState()
  const [order,setOrder] = useState('')
  const [pag,setPag] = useState(60)
  let fMovie;
  let observer
  
  useEffect(() => {
   dispatch(getMovies(pag))    
   getMoreMovies() 
  },[]);
   
  
 

 const getMoreMovies=()=>{   
  
  const moviesOnScreen = document.getElementById('test') 
  fMovie=  moviesOnScreen.lastElementChild  

  observer = new IntersectionObserver((entry,observer)=>{  
    
     if(entry[entry.length-1].isIntersecting){      
         setPag(pag=> pag+40)   
         dispatch(getMovies(pag))
         observer.disconnect()      
        }    
   },{
     rootMargin:'0px 0px 800px 0px',
     threshold:.5
     })
   
   if(fMovie){
     observer.observe(fMovie)
   }
  
 }    
 useEffect(()=>{   
       getMoreMovies()
       setDisplay(movies)
  },[movies])
   
 useEffect(()=>{  
  if(observer) observer.disconnect() 
  getMoreMovies() 
 },[order])
    
    

  function handleSelect(value){    
    setOrder(oldOrder => oldOrder=value)
    let resetScroll = document.getElementById('test')
    resetScroll.scrollTo(0,0)
  }



  return (
    
    <div className="MovieLibrary">
      <div className="pelispedia">Powtoon <span className="ped">Mov</span>ie<span className="a">s</span></div>
        <header className="ML-header">
          <img src={logo} className="ML-logo" alt="logo" />
          <h1 className="ML-title"> Powtoon Movies</h1>
          <div className="sort">  
          <label>Sort by </label>
          <select onChange={(e)=>handleSelect(e.target.value)}>
          <option value= ''>Name</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>        
          </select>   
           
          <select onChange={(e)=>handleSelect(e.target.value)}>
          <option value = ''>Rating</option>
          <option value="high">High Popularity</option>
          <option value="low">Low Popularity</option>
          </select>       
          </div>
        </header>
        <div className="ML-intro" >
          { movies ? <MoviesList movies={movies} order={order}/> : <div class="pelispedia">Pelis<span class="ped">ped</span>i<span class="a">a</span></div> }
        </div>
      </div>
    );
}
