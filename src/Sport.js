import React from "react";
import "./App.css";

function Sport() {
  return (
    <div className="parent">
      <div>
        <h2>Welcome to sport page</h2>
      </div>
      <div className='darkerDiv'>
        <h3 className='darkTxt'>
          Chess championship
        </h3>
        <hr />
        <p className='darkTxtSmall'>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word.
        </p>
      <button className="darkbtn">I want to compete!</button>
      </div>
      
    </div>
  );
}

export default Sport;
