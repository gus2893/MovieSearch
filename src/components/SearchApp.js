import React from 'react';
import moviedb from '../api/moviedb';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import PageNavigation from './PageNavigation';
import { Container } from 'semantic-ui-react';

class SearchApp extends React.Component {
    state = {
        movies : [], 
        moviesExtra:[],
        currentPage: null,
        currentTerm: '',
        totalPages: null
    };

    onSearchSubmit = async (term,page) => {
        this.setState({currentPage: page});
        this.setState({currentTerm: term});
        const response = await moviedb.get('/search/movie',{
            params:{ 
                query: term,
                api_key: '2f855221f859b25056ade2602bbac482',
                page: page
            }
        });
        console.log(response);
        this.setState({totalPages: response.data.total_pages});
        this.setState({movies: response.data.results });
    }

    onPageChange = (page) =>{
        this.onSearchSubmit(this.state.currentTerm,page);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                    <MovieList movies={this.state.movies} currentPage= {this.state.currentPage} />
                <Container textAlign='center'>
                    <PageNavigation 
                        changePage={this.onPageChange} 
                        totalPages={this.state.totalPages}  
                        currentPage={this.state.currentPage}/>
                </Container>
            </div>
        );
    }
}
export default SearchApp;