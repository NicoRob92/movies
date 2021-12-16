import {FETCH_MOVIES} from '../../actionTypes'
import topRatedMovies from '../mocks/topTatedMovies'
import axios from 'axios'
export function fetchTopRatedMovies() {
  return function (dispatch) {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=54ffed57deb5a7a8688be4de3007e578')
    .then(response => response.json())
    .then(json =>{
        dispatch({type:FETCH_MOVIES, payload:json.results})       
    })
    
}
}


export function getMovies(number){
  
  return(dispatch)=>{
    movies(number).then(response => {
      dispatch({type:FETCH_MOVIES, payload:response})   })

  } 

}


const movies = async (num) =>{
  
  const n = num/20;
  let total = []
  for(let i=1; i<=n;i++){
    if(i<2){
      let movies = axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=54ffed57deb5a7a8688be4de3007e578')
      total = [...total,movies]
    }
    else{
      let movies =  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=54ffed57deb5a7a8688be4de3007e578&page=${i}`)
      total = [...total,movies]
    }
  }  
  let arr = Promise.all(total)  
  .then((r)=> {
    r.flat()       
    let resultado = r.map(r => r.data.results).flat()
    console.log(resultado)
    return resultado})
  const finals = await arr 
  return finals
 
}   

