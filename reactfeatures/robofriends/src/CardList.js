import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardsArray = robots.map((user) =>{
        return <Card key={user.id} id={user.id} name={user.name} email= {user.email}/> //when adding elements through a loop, it needs to have a key prop in order to be recognisible by react
    })

    return (
        <div>
            {cardsArray}
        </div>
    )
}

export default CardList;