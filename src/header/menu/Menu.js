import React, { Component } from 'react';

import './menu.css'

class Menu extends Component {
    render () {
        return (
            
                <div className='menu'>
                    <ul>
                        <li><a href=''>Contact</a></li>
                        <li><a href=''>Skills</a></li>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Home</a></li>
                    </ul>
                </div>

        );
    }
}

export default Menu;