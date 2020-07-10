import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Example from "./Example";
import Activities from "./Activities";
import Sport from "./Sport";
import Empty from "./Profile";
import Form from "./Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import { FaGraduationCap } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/example" component={Example} />
          <Route path="/activities" component={Activities} />
          <Route path="/sport" component={Sport} />
          <Route path="/empty" component={Empty} />
          <Route path="/form" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <div className="darkerDiv">
      <h3 className="darkTxt">Expenice the daily life of what you interest</h3>
      <FaGraduationCap size={90}></FaGraduationCap>
      <button className="darkbtn">Book a consulatation</button>
    </div>

    <div className="lightDiv">
      <h3 className="darkTxt">Expenice the daily life of your future self</h3>
      <button className="darkbtn">Experience now</button>
    </div>
  </div>

  
  
);

export default App;
