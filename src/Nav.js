import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';

const navStyle = {
    color: 'white'
}

const pStyle = {
    fontSize: 10,
    margin: 0
}

function Nav() {
  return (
    <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark default-color">
        <div className='nav-links'>
            <Link style={navStyle} to='/'>
                <FaHome /> <p style={pStyle}>Home</p>
            </Link>
            <Link style={navStyle} to='/example'>
                <FaGraduationCap /> <p style={pStyle}>Experience</p>
            </Link>
            <Link style={navStyle} to='/activities'>
                <FaCalendar /> <p style={pStyle}>Activities</p>
            </Link>
            <Link style={navStyle} to='/about'>
                <FaUser /> <p style={pStyle}>Consultations</p>
            </Link>
            
            

        </div>
    </nav>
  );
}

export default Nav;
