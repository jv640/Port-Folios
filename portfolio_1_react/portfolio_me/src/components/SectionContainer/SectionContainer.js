import React from 'react';
import { about } from '../../constants/About';
import { About } from '../About/About';
import './sectionContainer.css'

export const SectionContainer = (props) => {
    return(
        <div className = "section-container">
            <div className = "section-heading-container">
                <h1 className = "main-heading">About Me</h1>
                <p className = "main-quote">Some Random Quote</p>
            </div>
            <div className = "section-component">
                <About />
            </div>
        </div>
    )
}
