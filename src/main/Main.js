import React, { Component } from 'react';
import About from './about/About';
import Skills from './skills/Skills';
import Contact from './contact/Contact';

class Main extends Component {
    render () {
        return (
            <div className='main'>
                <About />
                <hr />
                <Skills />
                <hr />
                <Contact />
            </div>
        );
    }
}

export default Main;