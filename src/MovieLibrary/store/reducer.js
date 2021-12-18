import {FETCH_MOVIES} from '../../actionTypes'

const initialState = {
  movies: [],  
 
}

export default function movies(state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case FETCH_MOVIES: return {...state, movies: payload}
    case 'LOAD': console.log(payload.results) 
    return {state, movies: [...state.movies,...payload.results]}
    case "SORT": {      
       
        if(payload === "A-Z") return {state,movies : [...state.movies.sort((a,b)=>{
          if(a.title < b.title ) return -1
          if(a.title > b.title ) return 1;
          return 0
        })]}
        if(payload === "Z-A") return {state,movies : [...state.movies.sort((a,b)=>{
          if(a.title > b.title ) return -1
          if(a.title < b.title ) return 1;
          return 0
        })]}     

        if(payload === "high") return {state,movies : [...state.movies.sort((a,b)=> a.popularity-b.popularity)]}
        if(payload === "low") return {state,movies : [...state.movies.sort((a,b)=> b.popularity-a.popularity)]}
        return state
    }

    default:
      return state
  }
}
