import React from 'react';
import {Grid, Image, Segment, Header, Icon, Popup } from 'semantic-ui-react';

 const MovieDetails = ({movieDetails}) =>{
   const imgSrc = (movieDetails.poster_path === null) ? 'https://via.placeholder.com/185x278.jpg?text=No%20Cover%20Available' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+ movieDetails.poster_path;
   const relDate = (movieDetails.release_date === null) ? 'No release date Available' : movieDetails.release_date.substring(0, 4);
   const voters = movieDetails.vote_count + " users rated this movie for an average score of " + movieDetails.vote_average;

   console.log(movieDetails);
   return (
      <Segment>
         <Grid>
            <Grid.Column width={4}>
               <Image src={imgSrc}/>
            </Grid.Column>
            <Grid.Column width={10}>
               <Header as='h1'>{movieDetails.title}</Header>
               <Header as='h5'>{relDate}</Header>
               <div>{movieDetails.overview}</div>
            </Grid.Column>
            <Grid.Column width={2}>
               <Popup 
                  trigger={<div>{movieDetails.vote_average}/10<Icon color='yellow' name='star' /></div>} 
                  content={voters}
                  position='top middle'
               />
            </Grid.Column>
         </Grid>
      </Segment>
    );
 }
 export default MovieDetails;