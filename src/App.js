import React,{ Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
        // console.log('check');
    }
    onSerachChange = (event) =>{     
            this.setState({searchField: event.target.value});
    }
  render() {
        const filteredResult = this.state.robots.filter((robo) => {
            return robo.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className='tc'>Loading</h1>
        }
        else{        
            return(
                <div className="tc">
                    <h1 className="f1">RoboFriend</h1>
                    <SearchBox searchChange={this.onSerachChange}/>
                    <Scroll>
                        <CardList robots={filteredResult}/>
                    </Scroll>
                </div>
            );
        }
    }
  
}
export default App;