import React,{ Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }
    onSerachChange = (event) =>{     
            this.setState({searchField: event.target.value});
    }
    render() {
        const filteredResult = this.state.robots.filter((robo) => {
            return robo.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">RoboFriend</h1>
                <SearchBox searchChange={this.onSerachChange}/>
                <CardList robots={filteredResult}/>
            </div>
        );
    }
  
}
export default App;