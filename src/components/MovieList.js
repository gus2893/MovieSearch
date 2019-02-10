import React from 'react';
import MovieDetails from './MovieDetails';

const MovieList = ({movies}) =>{
    return movies.map((movie) =>{
        return <div key={movie.id}><MovieDetails movieDetails ={movie}/></div>;
     });
}

export default MovieList;