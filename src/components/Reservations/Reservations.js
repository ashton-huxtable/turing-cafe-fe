import React from 'react';
import ResCard from '../ResCard/ResCard';

import './Reservations.css'

const Reservations = ({reservations}) => {
    
    const allReservations = reservations.map(reservation => {
       return (
           <ResCard 
               name={reservation.name}
               date={reservation.date}
               time={reservation.time}
               number={reservation.number}
               id={reservation.id}
               key={reservation.id}
           />
           ) 
    })
    
    return (
        <section className='all-reservations'>
            {allReservations}
        </section>
        
    )
}

export default Reservations;