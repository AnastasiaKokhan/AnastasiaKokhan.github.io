import React, { Component } from 'react';

import './footer.css'

class Footer extends Component {
    render () {
        return (
            <div className='footer'>
                <p className='foot-text'><b>Mobile: </b> +38093-604-2747</p>
                <p className='foot-text'><b>Email: </b> Kokhan.a25@gmail.com</p>
                <p className='foot-text'><b>Skype: </b> +380936042747</p>
                <img className='foot-img' src='./images/logo.png' alt='footer-logo'/>
            </div>
        );
    }
}

export default Footer;