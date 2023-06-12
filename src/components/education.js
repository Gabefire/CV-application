import React from "react";
import "../styles/education.css";

export default class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.educationArray.map((education, index) => {
          return (
            <div className="education" id={education.key} key={education.key}>
              <label htmlFor={`school ${index}`} className="school-name-label">
                School Name:
                <input
                  id={`school ${index}`}
                  defaultValue={education.schoolName}
                  className="school-name"
                  placeholder="Enter School Name"
                  name="school-name"
                ></input>
              </label>
              <label htmlFor={`title-of-study ${index}`}>
                Title of Study:
                <input
                  id={`title-of-study ${index}`}
                  defaultValue={education.titleOfStudy}
                  className="title-of-study"
                  placeholder="Enter Title of Study"
                  name="title-of-study"
                ></input>
              </label>
              <label htmlFor={`date-of-study ${index}`}>
                Date of Study:
                <input
                  id={`date-of-study ${index}`}
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
