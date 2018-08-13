import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import './App.css';
//import { robots } from './robots' //destructuring, because export was not default

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() { //lifecycle method.
        fetch('https://jsonplaceholder.typicode.com/users') //downloading a file
        .then((responce) => responce.json())//converting to json
        .then(jsonFile => this.setState({ robots: jsonFile }));
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
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={ this.onSearchChange }/>
                <CardList robots={ filteredRobots } />
            </div>
        )
    }
}

export default App;