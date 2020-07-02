import React from "react";
import "./Activities.css";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import Reading from './assets/reading.jpg';
import Archic from './assets/archic.jpg';
import Art from './assets/art.jpg';
import Math from './assets/math.jpg';
import Nature from './assets/nature.jpg';
import Running from './assets/running.jpg';
import Travel from './assets/travel.jpg';

function Activities() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    }

  return (
    <div className="parent">
      <h1>Activities</h1>
      
      <div>
        <Slider {...settings}>
          <div>
            <Link to='/sport'>
              <img className='sliderImg' src={Reading} alt="Sport" />
            </Link>
            <span>Reading</span>
          </div>
          <div>
          <Link to='/sport'>
              <img className='sliderImg' src={Travel} alt="travel" />
            </Link>
            <span>Travel</span>
          </div>
          <div>
          <Link to='/sport'>
              <img className='sliderImg' src={Running} alt="Running" />
            </Link>
            <span>Running</span>
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
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
<br />
      <h2>Things to do in town</h2>
      
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
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
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Activities;
