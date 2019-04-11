import React, { Component } from 'react';

import './contact.css'

class Contact extends Component {

    constructor(props) {
        super(props);
            this.state = {
                name: '',
                email: '',
                message: ''
            };
            this.handleNameChange = this.handleNameChange.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handleMassegeChange = this.handleMassegeChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleSubmit(event) {
        event.preventDefault();
        console.log('Name value is:', this.state.name);
        console.log("Email value is:", this.state.email);
        console.log('Massege value is:', this.state.massege);
      }

      handleNameChange(event) {
        console.log('name was changed', event.target.value);
        this.setState({name: event.target.value});
      }

      handleEmailChange(event) {
        console.log('email was changed', event.target.value);
        this.setState({email: event.target.value});
      }

      handleMassegeChange(event) {
        console.log('massege was changed', event.target.value);
        this.setState({massege: event.target.value});
      }

    render () {
        return (
            <div className='contact' id='contact'>
                <div className='block'>
                    <p className='section-name'>
                        CONTACT
                    </p>
                    <div className='col-40'>
                        <p className='contact-headline'>Phone number:</p>
                        <p className='contact-text'>+38093-604-2747</p>
                        <p className='contact-headline'>Email:</p>
                        <p className='contact-text'>Kokhan.a25@gmail.com</p>
                        <p className='contact-headline'>Skype:</p>
                        <p className='contact-text'>+380936042747</p>
                    </div>
                    <div className='col-60'>
                        <form onSubmit={this.handleSubmit}>
                            <input className='in-name' type='text' name='Name' placeholder='Name' value={this.state.name} onChange={this.handleNameChange}></input><br />
                            <input className='in-email' type='email' name='Email' placeholder='Email' value={this.state.email} onChange={this.handleEmailChange}></input><br />
                            <textarea className='in-text' placeholder='Send a message' value={this.state.massege} onChange={this.handleMassegeChange}></textarea><br />
                            <button className='in-button' >SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;