import React from 'react';

import './ResCard.css';

const ResCard = ({name, date, time, number, id}) => {
    return(
        <article className='res-card'>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {number}</p>
            <button>Cancel</button>
        </article>
    )
}

export default ResCard;