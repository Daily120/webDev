import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots' //destructuring, because export was not default

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => { //when you make your own method in react. it should look like this
        this.setState({ //you always update state using setState function. Not directly! 
            searchField: event.target.value
        });
    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={ this.onSearchChange }/>
                <CardList robots={ filteredRobots } />
            </div>
        )
    }
}

export default App;