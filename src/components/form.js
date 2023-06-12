import React from "react";
import uniqid from "uniqid";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.heading = this.props.heading;
  }
  render() {
    return (
      <>
        <div className="heading-content" key={this.props.heading.key}>
          <div className="name">
            {this.props.heading.firstName} {this.props.heading.lastName}
          </div>
          <div className="contact-information">
            <div className="email">{this.props.heading.email}</div>
            <div className="phone-number">{this.props.heading.phoneNumber}</div>
          </div>
        </div>
        {this.props.educationArray.map((education) => {
          return (
            <div className="school" key={education.key}>
              <div className="schoolName">{education.schoolName}</div>
              <div className="titleOfStudy">{education.titleOfStudy}</div>
              <div className="dateSchool">{education.date}</div>
            </div>
          );
        })}
        {this.props.experienceArray.map((experience) => {
          return (
            <div className="job" key={experience.key}>
              <div className="companyName">{experience.companyName}</div>
              <div className="positionTitle">{experience.positionTitle}</div>
              <div className="dates">{experience.dates}</div>
              <div className="task">{experience.task}</div>
            </div>
          );
        })}
      </>
    );
  }
}
