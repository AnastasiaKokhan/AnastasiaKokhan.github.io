import React, { Component } from 'react';

import './menu.css'

class Menu extends Component {
    render () {
        return (
            
                <div className='menu'>
                    <ul>
                        <li><a href='#contact'>Contact</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#home'>Home</a></li>
                    </ul>
                </div>

        );
    }
}

export default Menu;