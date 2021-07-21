const getAllReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
        .then(response => response.json())
}

const addNewReservation = ({name, date, time, number}) => {
    return fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        body: JSON.stringify({
            'name': name,
            'date': date,
            'time': time,
            'number': number
        }),
        headers:{
             'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
}


export { getAllReservations, addNewReservation }