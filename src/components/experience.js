import React from "react";
import "../styles/experience.css";

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
  }
  addDeleteButton(key) {
    return (
      <button
        className="delete-btn"
        id={`btn-${key}`}
        onClick={this.props.deleteExperience}
      >
        Delete Experience
      </button>
    );
  }

  render() {
    return (
      <>
        {this.props.experienceArray.map((experience, index) => {
          return (
            <div
              className="experience"
              id={experience.key}
              key={experience.key}
            >
              <label htmlFor={`company-name ${index}`}>
                Company Name:
                <input
                  placeholder="Enter Company Name"
                  name="company-name"
                  defaultValue={experience.companyName}
                  id={`company-name ${index}`}
                ></input>
              </label>
              <label htmlFor={`position-title ${index}`}>
                Title:
                <input
                  placeholder="Enter Title"
                  name="position-title"
                  defaultValue={experience.positionTitle}
                  id={`position-title ${index}`}
                ></input>
              </label>
              <label htmlFor={`dates ${index}`}>
                Date Range:
                <input
                  type="text"
                  placeholder="Enter Dates mm/yyyy-mm/yyyy"
                  name="dates"
                  defaultValue={experience.dates}
                  id={`dates ${index}`}
                ></input>
              </label>
              <label htmlFor={`tasks ${index}`}>
                Main Task:
                <input
                  type="text"
                  placeholder="Enter Main Tasks"
                  name="task"
                  defaultValue={experience.task}
                  id={`tasks ${index}`}
                ></input>
              </label>
              {index !== 0 ? this.addDeleteButton(experience.key) : null}
            </div>
          );
        })}
      </>
    );
  }
}
