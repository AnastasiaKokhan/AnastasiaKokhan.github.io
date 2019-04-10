import React, { Component } from 'react';

import './contact.css'

class Contact extends Component {
    render () {
        return (
            <div className='main'>
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
                        <form>
                            <input className='in-name' type='text' name='Name' placeholder='Name'></input><br />
                            <input className='in-email' type='email' name='Email' placeholder='Email'></input><br />
                            <textarea className='in-text' placeholder='Send a mesage'></textarea><br />
                            <input className='in-button' type='button' value='SEND'></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;