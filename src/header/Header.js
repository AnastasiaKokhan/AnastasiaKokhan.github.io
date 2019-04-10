import React, { Component } from 'react';
import Menu from './menu/Menu'

import './header.css';

class Header extends Component {
    render () {
        return (
            
            <div className='header' id='home'>
                <div className='row'>
                    <img className='head-img' src='./images/logo1.png'/>
                    <Menu />
                    <div className='block_name_job'>
                        <p className='name'>Anastasiia Kokhan</p>
                        <p className='job'>Front-end Developer</p>
                    </div>
                </div>
            </div>
      
        );
    }
}




export default Header;