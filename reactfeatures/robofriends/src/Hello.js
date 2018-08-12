import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        //if you have more than one element to render. they should have the same parent element.
        return (
            <div id="parent" className='f1 tc'>
                <h1>Hello React!</h1>
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello; // We always should export class in order to other files can use it.