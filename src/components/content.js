import React from "react";
import "../styles/form.css";

const Content = ({ heading, educationArray, experienceArray, switchView }) => {
  return (
    <>
      <div className="content">
        <div className="heading-content" key={heading.key}>
          <h1 className="name">
            {this.props.heading.firstName} {heading.lastName}
          </h1>
          <div className="contact-information">
            <div className="email">{heading.email}</div>
            <div className="phone-number">{heading.phoneNumber}</div>
          </div>
        </div>
        <h3 className="education-title">Education:</h3>
        {educationArray.map((education) => {
          return (
            <div className="school" key={education.key}>
              <div className="date-school">{education.date}</div>
              <div className="school-name">
                {education.titleOfStudy}, {education.schoolName}
              </div>
              <div className="title-of-study"></div>
            </div>
          );
        })}
        <h3 className="experience-title">Experience:</h3>
        {experienceArray.map((experience) => {
          return (
            <div className="job" key={experience.key}>
              <div className="position-title">{experience.positionTitle}</div>
              <div className="job-content">
                <div className="dates">{experience.dates}</div>
                <div className="company-name">{experience.companyName}</div>
              </div>
              <div className="task">- {experience.task}</div>
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <button className="form-btn edit-btn" onClick={switchView}>
          Edit
        </button>
        <button className="form-btn print-btn" onClick={window.print}>
          Print
        </button>
      </div>
    </>
  );
};

export default Content;
