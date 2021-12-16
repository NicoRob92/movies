import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TMDBImage from './TMDBImage'
import MovieListItem from './movieListItem'
import './MoviesList.css'

export default function MoviesList({movies}) {


    return (
      <div className="movies-list">
        <div className="items">
          <div>
            <span>Sort by:</span>
            
          </div>
          {
            movies.map(movie =>
              <MovieListItem key={movie.id} movie={movie.title}/>
            )
          }
        </div>
       
      </div>
    )
  }


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



