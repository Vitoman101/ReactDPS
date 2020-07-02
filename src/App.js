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

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

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
    <h3>Welcome to your exploration</h3>
    <div className="darkerDiv">
      <h3 className="darkTxt">Expenice the daily life of what you interest</h3>
      <FaGraduationCap size={90}></FaGraduationCap>
      <button className="darkbtn">LET'S GET STARTED</button>
    </div>

    <h2>Activites for your expenice</h2>
    <Slider {...settings} className='slajder'>
      <div className="container">
        <div className="item">
          <FaGraduationCap />
        </div>
        <div className="item">
          <p>Some dummy text</p>
        </div>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  </div>

  
  
);

export default App;
