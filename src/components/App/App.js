import Form from '../Form/Form';
import { getAllReservations } from '../../apiCalls';
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


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
