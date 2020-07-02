import React from 'react';
import './App.css';
import AndreaVlad from './assets/Andrea.png';
import Janet from './assets/Janet.png';
import Nihad from './assets/Nihad.png';
import Viktor from './assets/Viktor.png';
import Danish from './assets/Danish.png';

function About() {
  return (
    <div>
      <h1>
          ABOUT US
      </h1>
      <div>
      <img className='teamImgs' src={AndreaVlad} alt="Andrea Vlad" />
      <p>Andrea Vlad - Lead software designer</p>
      </div>
      <div>
      <img className='teamImgs' src={Janet} alt="Janet Yeh" />
      <p>Janet Yeh - Best desginer in team</p>
      </div>
      <div>
      <img className='teamImgs' src={Nihad} alt="Nihad" />
      <p>Nihad - CEO</p>
      </div>
      <div>
      <img className='teamImgs' src={Viktor} alt="Andrea Vlad" />
      <p>Viktor - a guy that makes website</p>
      </div>
      <div>
      <img className='teamImgs' src={Danish} alt="Danish" />
      <p style={{paddingBottom: 50}}>Danish - Lead AI engineer</p>
      </div>
    </div>
  );
}

export default About;
