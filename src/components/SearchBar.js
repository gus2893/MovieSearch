import React from 'react';
import {Header, Container, Button, Icon, Input} from 'semantic-ui-react';

class SearchBar extends React.Component{
    state = {
        term :'',
};
    
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term,1);
    }
    render(){
        return (
            <div>
                <Container textAlign='center'> <label><Header as='h2'>Movie Search</Header></label>
                </Container>
                <div className="ui segment">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <Input
                                action={{color: 'teal', content : 'Search'}}
                                icon='search'
                                iconPosition='left' 
                                type="text" 
                                placeholder='Movie Name'
                                value={this.state.term} 
                                onChange={(e) => this.setState({term: e.target.value})}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default SearchBar;

