import React from "react";
import "../styles/education.css";

export default class Education extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="education">
        <label htmlFor="school-name">
          School Name:
          <input placeholder="Enter School Name" name="school-name"></input>
        </label>
        <label htmlFor="title-of-study">
          Title of Study:
          <input
            placeholder="Enter Title of Study"
            name="title-of-study"
          ></input>
        </label>
        <label htmlFor="date-of-study">
          Date of Study:
          <input
            type="text"
            placeholder="Enter Date of Study"
            name="date-of-study"
          ></input>
        </label>
        <button className="add-education-btn">Add Education</button>
      </div>
    );
  }
}
