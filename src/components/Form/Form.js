import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: 0
        }
    }

   

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitForm = (event) => {
        event.preventDefault();
        const newReservation = {
          ...this.state
        }
       {(this.state.name.length && this.state.date.length && this.state.time.length && this.state.number) &&
        this.props.addReservation(newReservation) 
        }
        this.clearInput();
    }

    clearInput = () => {
        this.setState({name: '', date: '', time: '', number: 0})
    }

    render(){
        return(
            <form>
                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                 <input 
                    type='text'
                    placeholder='Date (mm/dd'
                    name='date'
                    value={this.state.date}
                    onChange={this.handleChange}
                />
                 <input 
                    type='text'
                    placeholder='Time'
                    name='time'
                    value={this.state.time}
                    onChange={this.handleChange}
                />
                 <input 
                    type='number'
                    placeholder='Number of guests'
                    name='number'
                    value={this.state.number}
                    onChange={this.handleChange}
                />
                <button onClick={(event) => this.submitForm(event)}>Make Reservation</button>
            </form>
        )
    }
}

export default Form;