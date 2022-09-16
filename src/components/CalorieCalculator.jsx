import React from "react";
import boyImage from "../assets/boy.gif";
import girlImage from "../assets/girl.gif";

function CalorieCalculator() {
  return (
    <div>
      <h1>Question from 1 to 5</h1>
      <h3>What is your gender?</h3>
      <ul>
        <li>
          <h3>Male</h3>
          <input type="hidden" id="male-group" />
          <img src={boyImage} alt="Male" />
          <label forFor="gender"> Male</label>
          <input type="checkbox" id="male" name="male" value="Male"></input>
        </li>
        <li>
          <h3>Female</h3>
          <input type="hidden" id="male-group" />
          <img src={girlImage} alt="Female" />
          <label forFor="gender">Female</label>
          <input
            type="checkbox"
            id="female"
            name="female"
            value="Female"
          ></input>
        </li>
      </ul>
      <div className="age">
        <label>Age</label>
        <input type="text" name="age" placeholder="Enter your age..." id="age" value="" />
      </div>
      <div>
      <label>Your weght</label>
        <input type="text" name="weight" placeholder="Enter your weight..." id="weight" value="" />
      </div>
    </div>
  );
}

export default CalorieCalculator;
