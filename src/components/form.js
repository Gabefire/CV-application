import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.heading = this.props.heading;
  }

  test() {
    console.log(this.props.experienceArray);
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
        <div className="education-content" key={2}>
          {this.props.educationArray.map((education) => {
            return (
              <div className="school" id={education.key} key={education.key}>
                <div className="schoolName">{education.schoolName}</div>
                <div className="titleOfStudy">{education.titleOfStudy}</div>
                <div className="dateSchool">{education.date}</div>
              </div>
            );
          })}
        </div>
        <div className="experience-content" key={3}>
          {this.props.experienceArray.map((experience) => {
            return (
              <div className="job" id={experience.key} key={experience.key}>
                <div className="companyName">{experience.companyName}</div>
                <div className="positionTitle">{experience.positionTitle}</div>
                <div className="dates">{experience.dates}</div>
                <div className="task">{experience.task}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
