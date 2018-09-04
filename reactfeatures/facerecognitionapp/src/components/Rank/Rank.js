import React from 'react';

const Rank = ({ userName, entries }) => {
    return (
        <div>
            <div className='white f3'>
                {`${userName}, your current rank is ${entries}`}
            </div>
            <div className='white f1'>
                {'#5'}
            </div>
        </div>
    )
}

export default Rank;