import Form from '../Form/Form';
import { addNewReservation, getAllReservations } from '../../apiCalls';
import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    getAllReservations()
      .then(data => {
        this.setState({reservations: data})
      })
      .catch(error => {
        this.setState({error: 'Something went wrong, please try again'})
      })
  }

  addReservation = (newReservation) => {
    addNewReservation(newReservation)
      .then(data => {
        this.setState({reservations: [...this.state.reservations, newReservation]})

      })
      .catch(error => this.setState({error: 'Data could not be posted'}))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
    
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          {(!this.state.reservations.length && this.state.error.length) &&
            <h2 className='error'>{this.state.error}</h2>
          }
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
