import React, { Component } from 'react';

import './footer.css'

class Footer extends Component {
    render () {
        return (
            <div className='footer'>
                <p className='foo-text'><b>Mobile: </b> +38093-604-2747</p>
                <p className='foo-text'><b>Email: </b> Kokhan.a25@gmail.com</p>
                <p className='foo-text'><b>Skype: </b> +380936042747</p>
            </div>
        );
    }
}

export default Footer;