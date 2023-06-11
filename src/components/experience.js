import React from "react";
import "../styles/experience.css";

export default class Experience extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="experience">
        <label htmlFor="company-name">
          Company Name:
          <input placeholder="Enter Company Name" name="company-name"></input>
        </label>
        <label htmlFor="position-title">
          Title:
          <input placeholder="Enter Title" name="position-title"></input>
        </label>
        <label htmlFor="tasks">
          Main Tasks:
          <input
            type="text"
            placeholder="Enter Main Tasks"
            name="tasks"
          ></input>
        </label>
        <label htmlFor="dates">
          Main Date Range:
          <input
            type="text"
            placeholder="Enter Dates mm/yyyy-mm/yyyy"
            name="dates"
          ></input>
        </label>
        <button className="add-experience-btn">Add Experience</button>
      </div>
    );
  }
}
