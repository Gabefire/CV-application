import React from "react";
import "../styles/education.css";

export default class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.educationArray.map((education) => {
          return (
            <div className="education" id={education.id}>
              <label htmlFor="school-name" className="school-name-label">
                School Name:
                <input
                  defaultValue={education.schoolName}
                  className="school-name"
                  placeholder="Enter School Name"
                  name="school-name"
                ></input>
              </label>
              <label htmlFor="title-of-study">
                Title of Study:
                <input
                  defaultValue={education.titleOfStudy}
                  className="title-of-study"
                  placeholder="Enter Title of Study"
                  name="title-of-study"
                ></input>
              </label>
              <label htmlFor="date-of-study">
                Date of Study:
                <input
                  defaultValue={education.date}
                  className="date-of-study"
                  type="text"
                  placeholder="Enter Date of Study"
                  name="date-of-study"
                ></input>
              </label>
            </div>
          );
        })}
      </>
    );
  }
}
