import React from "react";
import "./App.css";

import {Link} from 'react-router-dom';

function Example() {
  return (
    <div className="bg-white d-flex align-items-center">
      <div className="welcome">
        <h1>Welcome</h1>
        <p className="lead">Let's find you the best study fields for you.</p>
        
        
        <Link to='/form'>
        <button className="mbtn">LET'S GET STARTED</button>
            </Link>
        
      </div>
    </div>
  );
}

export default Example;
