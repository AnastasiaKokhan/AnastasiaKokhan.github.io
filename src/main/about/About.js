import React, { Component } from 'react';

import './about.css'

class About extends Component {
    render () {
        return (
            <div className='about' id='about'>
                
                <div className='block'>
                    <p className='section-name'>
                        ABOUT
                    </p>
                    <div className='col-40-right'>
                        <h2 className='about-headline'>Goals</h2>
                        <p className='about-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed eros at urna interdum maximus. Aenean sit amet tempus nibh, id placerat leo. Suspendisse in urna vel mi semper tempor vel vitae odio. Phasellus consequat erat lobortis metus pulvinar, eu pretium orci blandit. Sed nec turpis ipsum. Quisque tempus mi vitae ligula consectetur hendrerit ut a leo. Quisque euismod a ligula ac molestie. Maecenas eget ipsum justo. Maecenas eget porta ipsum, in placerat nisl.
                        </p>
                    </div>
                    <div className='col-15'>
                        <img className='about-img' src='./images/about.png' alt='about-img'/>
                    </div>
                    <div className='col-40'>
                        <h2 className='about-headline'>Dreams</h2>
                        <p className='about-text-right'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed eros at urna interdum maximus. Aenean sit amet tempus nibh, id placerat leo. Suspendisse in urna vel mi semper tempor vel vitae odio. Phasellus consequat erat lobortis metus pulvinar, eu pretium orci blandit. Sed nec turpis ipsum. Quisque tempus mi vitae ligula consectetur hendrerit ut a leo. Quisque euismod a ligula ac molestie. Maecenas eget ipsum justo. Maecenas eget porta ipsum, in placerat nisl.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;