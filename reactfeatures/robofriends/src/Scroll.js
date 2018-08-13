import React from 'react';

//props.children whatever is inside of <Scroll></Scroll> tag (App.js)
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', 'border-top': '5px solid black', height: '630px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;