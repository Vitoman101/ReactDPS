import React from 'react';
import './App.css';
import AndreaVlad from './assets/Andrea.png';
import Janet from './assets/Janet.png';
import Nihad from './assets/Nihad.png';
import Viktor from './assets/Viktor.png';
import Danish from './assets/Danish.png';

function About() {
  return (
<div className="container welcome">
  <div className="row justify-content-center align-items-center">
  What kind of consulatation would you like to have?
    <div className="col-5 m-2 darkerDiv">
        Option 1
      </div>  
      <div className="col-5 m-2 darkerDiv">
        Option 2
      </div>
      <div className="col-5 m-2 darkerDiv">
        Option 3
      </div> 
      <div className="col-5 m-2 darkerDiv">
       Option 4
      </div>
    </div>
  </div>
  );
}

export default About;
