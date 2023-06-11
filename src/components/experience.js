import React from "react";
import "../styles/experience.css";

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.experienceArray.map((experience) => {
          return (
            <div className="experience" key={experience.key}>
              <label htmlFor="company-name">
                Company Name:
                <input
                  placeholder="Enter Company Name"
                  name="company-name"
                  defaultValue={experience.companyName}
                ></input>
              </label>
              <label htmlFor="position-title">
                Title:
                <input
                  placeholder="Enter Title"
                  name="position-title"
                  defaultValue={experience.positionTitle}
                ></input>
              </label>
              <label htmlFor="dates">
                Date Range:
                <input
                  type="text"
                  placeholder="Enter Dates mm/yyyy-mm/yyyy"
                  name="dates"
                  defaultValue={experience.dates}
                ></input>
              </label>
              <label htmlFor="tasks">
                Main Task:
                <input
                  type="text"
                  placeholder="Enter Main Tasks"
                  name="task"
                  defaultValue={experience.task}
                ></input>
              </label>
            </div>
          );
        })}
      </>
    );
  }
}
