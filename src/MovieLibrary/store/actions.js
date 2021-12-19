import axios from 'axios'


export function getMovies(number){  
  return(dispatch)=>{
    movies(number).then(response => {
      dispatch({type:'GET_MOVIES', payload:response})})
  } 
}


// ACCION EN DESUSO
// export function loadMovies(pag){
//   return (dispatch)=>{
//     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=54ffed57deb5a7a8688be4de3007e578&page=${pag}`)
//     .then(response => response.json())
//     .then(json => {
//       dispatch({type:'LOAD', payload:json})
//     })
//   }
// }
  

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
    let result = r.map(r => r.data.results).flat()
    // result = result.filter(e => e.backdrop_path !== '')
    return result})
  const finals = await arr 
  return finals
}   

export function sort(payload){
return{
  type:'SORT', payload
}
}