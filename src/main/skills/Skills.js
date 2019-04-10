import React, { Component } from 'react';

import './skills.css'

class Skills extends Component {
    constructor(props) {
        super(props)
            this.items = [
                { name: "HTML5", level: 8},
                { name: "CSS3", level: 5},
                { name: "JavaScript", level: 10},
                { name: "ReactJS", level: 8 },
                { name: "AngularJS", level: 8 },
                ]
        }
    render () {
        return (
            <div className='main'>
                <div className='block'>
                    <p className='section-name'>
                        SKILLS
                    </p>
                    <ul className='col-50'>
                        {this.items.map(({ name, level }) => (
                            <li key={name}>
                                <label>
                                    {name}
                                </label>
                                <span className="circle-wrapper">{Array.from({ length: 10 }).map((item, index) => (
                                    <div className={`circle${level > index ? ' done' : ''}`}></div>
                                ))}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Skills;