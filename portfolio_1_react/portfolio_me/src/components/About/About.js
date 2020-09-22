import React from 'react'
import './about.css'
import {about} from './../../constants/About';
export const About = (props) => {
    return(
        <div className = "about-container">
            <h3> main thing here</h3>
            {about.bio}
        </div>

    )
};
