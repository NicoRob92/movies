import React, { useState , useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getMovies,sort,loadMovies} from '../store/actions'
import logo from './logo.svg'
import './MovieLibrary.css'
import MoviesList from './MoviesList'


export default function MovieLibrary() { 
 
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movieLib.movies) 
  const [moviesOnScreen,setMoviesOnScreen] = useState()
  const [pag,setPag] = useState(60)
  let fMovie;
  useEffect(() => {
   dispatch(getMovies(pag))    
   getMoreMovies()
  },[]);
   
 

 const getMoreMovies=()=>{    
  const moviesOnScreen = document.getElementById('prueba') 
  setMoviesOnScreen(document.getElementById('prueba'))
  // console.log(Object.values(moviesOnScreen))
 fMovie=  moviesOnScreen.lastElementChild  
   console.log('Observer',fMovie)       
   const observer = new IntersectionObserver((entry,observer)=>{  
       if(entry[entry.length-1].isIntersecting){      
         setPag(pag=> pag+20)   
         dispatch(getMovies(pag))
         observer.disconnect()      
        }    
   },{
     rootMargin:'0px 0px 0px 0px',
     threshold:1.0
   })
   
   if(fMovie){
     observer.observe(fMovie)
   }
 } 
  
 
 useEffect(()=>{   
       getMoreMovies()
  },[movies])
    
    

  function handleSelect(value){
    dispatch(sort(value))    
  }



  return (
    
    <div className="MovieLibrary">
        <header className="ML-header">
          <img src={logo} className="ML-logo" alt="logo" />
          <h1 className="ML-title"> Powtoon Movies</h1>  
          <select onChange={(e)=>handleSelect(e.target.value)}>
          <option>Name</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>        
          </select>       
          <select onChange={(e)=>handleSelect(e.target.value)}>
          <option >Rating</option>
          <option value="high">High Popularity</option>
          <option value="low">Low Popularity</option>
          </select>       
        </header>
        <div className="ML-intro" >
          { movies ? <MoviesList movies={movies}/> : <h1>Without movies</h1>}
        </div>
      </div>
    );
}
//   export default function MovieLibrary() { 
 
//   const dispatch = useDispatch()
//   const movies = useSelector(state => state.movieLib.display)  
//   const [load, setLoad] = useState(60) 
//   useEffect(() => {
//    dispatch(getMovies(load)) 
//   },[]) 
  
//   let lastMovie;
//   useEffect(() => {
//     dispatch(loadMovies(load))
//     if(lastMovie){
//       observer.unobserve(lastMovie)
//     }
//   },[load])
 
  
//    const observer = new IntersectionObserver((entry,observer)=>{
//      console.log(entry)
//       entry.forEach(e=> {
//         if(e.isIntersecting){
//           setLoad(load+20)          
//         }
//       })
//   },{
//       rootMargin:'0px 0px 0px 0px',
//     threshold:1.0
//   })

//   const moviesOnScreen = document.querySelectorAll('.cards')
//   lastMovie = moviesOnScreen[moviesOnScreen.length -1]
//   console.log(lastMovie) 
   
//     if(lastMovie){
//       observer.observe(lastMovie)    
//     }
 

  



//   return (
    
//     <div className="MovieLibrary">
//         <header className="ML-header">
//           <img src={logo} className="ML-logo" alt="logo" />
//           <h1 className="ML-title">Movies</h1> 
//           <select onChange={(e)=>handleSelect(e.target.value)}>
//           <option value="A-Z">A-Z</option>       
//           <option value="Z-A">Z-A</option>
//           <option value="Rating">Rating</option>  
//           </select>      
//         </header>
//         <div className="ML-intro">
//           { movies ? <MoviesList movies={movies}/> : <h1>Without movies</h1>}
//         </div>
//       </div>
//     );
// }