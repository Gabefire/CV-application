import React from "react";
import "../styles/form.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.heading = this.props.heading;
  }
  render() {
    return (
      <>
        <div className="content">
          <div className="heading-content" key={this.props.heading.key}>
            <h1 className="name">
              {this.props.heading.firstName} {this.props.heading.lastName}
            </h1>
            <div className="contact-information">
              <div className="email">{this.props.heading.email}</div>
              <div className="phone-number">
                {this.props.heading.phoneNumber}
              </div>
            </div>
          </div>
          <h3 className="education-title">Education:</h3>
          {this.props.educationArray.map((education) => {
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
          {this.props.experienceArray.map((experience) => {
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
          <button className="form-btn edit-btn" onClick={this.props.switchView}>
            Edit
          </button>
          <button className="form-btn print-btn">Print</button>
        </div>
      </>
    );
  }
}
