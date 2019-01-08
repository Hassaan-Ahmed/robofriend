import React,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorHandling from '../components/ErrorBoundry';
class App extends Component {
    constructor(){
        super();
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
    onSearchChange = (event) =>{
            this.setState({searchField: event.target.value});
    };
  render() {
      const {robots,searchField} = this.state;
        const filteredResult = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ?
            <h1 className='tc'>Loading</h1>
        :
            (<div className="tc">
                    <h1 className="f1">RoboFriend</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorHandling>
                            <CardList robots={filteredResult}/>
                        </ErrorHandling>
                    </Scroll>
                </div>);
        }
  
}
export default App;