import React from "react";
import "../styles/education.css";

const Education = ({ deleteEducation, educationArray }) => {
  console.log(educationArray);

  const addDeleteButton = (key) => {
    return (
      <button
        className="delete-btn form-btn"
        id={`btn-${key}`}
        onClick={deleteEducation}
      >
        Delete Education
      </button>
    );
  };

  return (
    <>
      {educationArray.map((education, index) => {
        return (
          <div className="education" id={education.key} key={education.key}>
            <label htmlFor={`school ${index}`} className="school-name-label">
              School Name:
              <input
                id={`school ${index}`}
                defaultValue={education.schoolName}
                className="school-name-input"
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
            {index !== 0 ? addDeleteButton(education.key) : null}
          </div>
        );
      })}
    </>
  );
};

export default Education;
