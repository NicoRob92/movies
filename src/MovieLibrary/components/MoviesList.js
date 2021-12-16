import React from 'react'
import styled from 'styled-components'
import TMDBImage from './TMDBImage'
import MovieListItem from './movieListItem'
import './MoviesList.css'

export default function MoviesList({movies}) {


    return (
      <Container>
          <div>
            <span>Sort by:</span>
            
          </div>
        <Movies>
          {
            movies.map(movie =>
              <MovieListItem key={movie.id} movie={movie}/>
            )
          }
        </Movies>
       
      </Container>
    )
  }


  const Container = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  width: 100%;
  
  `;

const Movies = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-items:center;
width: 100%;
`;





const ExpandedMovieItem = ({movie: {title, original_title, poster_path, overview, vote_average, vote_count}}) => (
  <div className="expanded-movie-item">
    <TMDBImage src={poster_path} className="poster" />
    <div className="description">
      <h2>{title}({original_title})</h2>
      <div><h4>Rank(votes count)</h4>: <span>{vote_average}({vote_count})</span></div>
      <span>{overview}</span>
    </div>
  </div>
)



