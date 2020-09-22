import React from 'react';
import { SideNav } from '../sideNav/SideNav';
import './portfolio.css';

export const Portfolio = ({ handleSectionClick }) =>{
    return (
        <div className = "portfolio-container">
            <div className = "sidenav-container">
                <SideNav 
                    handleSectionClick = {handleSectionClick}/>
            </div>
            <div className = "main-section-container">
                <h1> Main Section</h1>
            </div>

        </div>
    )
}
