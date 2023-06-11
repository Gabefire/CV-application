import React from "react";
import Heading from "./components/heading";
import Education from "./components/education";
import Experience from "./components/experience";
import Form from "./components/form";
import "./styles/index.css";
import uniqid from "uniqid";

class App extends React.Component {
  constructor() {
    super();
    this.boundedAddEducation = this.addEducation.bind(this);
    this.boundedAddExperience = this.addExperience.bind(this);
    this.boundedSubmitForm = this.submitForm.bind(this);
    this.state = {
      displayForm: false,
      education: {
        schoolName: "",
        titleOfStudy: "",
        date: "",
        key: "",
      },

      educationArray: [
        {
          schoolName: "",
          titleOfStudy: "",
          date: "",
          key: uniqid(),
        },
      ],

      experience: {
        companyName: "",
        positionTitle: "",
        dates: "",
        task: "",
        key: uniqid(),
      },

      experienceArray: [
        {
          companyName: "",
          positionTitle: "",
          dates: "",
          task: "",
          key: uniqid(),
        },
      ],

      heading: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
    };
  }

  addEducation(e) {
    e.preventDefault();
    const educationSection = document.querySelectorAll(".education");
    educationSection.forEach((section) => {
      const schoolName = section.childNodes[0].childNodes[1].value;
      const titleOfStudy = section.childNodes[1].childNodes[1].value;
      const date = section.childNodes[2].childNodes[1].value;
      const key = section.key;
      this.setState({
        education: {
          schoolName: schoolName,
          titleOfStudy: titleOfStudy,
          date: date,
          key: key,
        },
      });
      this.setState({
        educationArray: [...this.state.educationArray, this.state.education],
      });
    });
    this.setState({
      education: {
        schoolName: "",
        titleOfStudy: "",
        date: "",
        key: uniqid(),
      },
      educationArray: [...this.state.educationArray, this.state.education],
    });
  }

  addExperience(e) {
    e.preventDefault();
    const experienceSection = document.querySelectorAll(".experience");
    experienceSection.forEach((section) => {
      const companyName = section.childNodes[0].childNodes[1].value;
      const positionTitle = section.childNodes[1].childNodes[1].value;
      const dates = section.childNodes[2].childNodes[1].value;
      const task = section.childNodes[3].childNodes[1].value;
      const key = section.key;
      this.setState({
        experience: {
          companyName: companyName,
          positionTitle: positionTitle,
          dates: dates,
          task: task,
          key: key,
        },
      });
      this.setState({
        experienceArray: [...this.state.experienceArray, this.state.experience],
      });
    });
    this.setState({
      experience: {
        companyName: "",
        positionTitle: "",
        task: "",
        dates: "",
        key: uniqid(),
      },
      experienceArray: [...this.state.experienceArray, this.state.experience],
    });
  }

  submitForm(e) {
    e.preventDefault();
    const headingSection = document.querySelector(".heading");
    const firstName = headingSection.childNodes[0].childNodes[1].value;
    const lastName = headingSection.childNodes[1].childNodes[1].value;
    const email = headingSection.childNodes[2].childNodes[1].value;
    const phoneNumber = headingSection.childNodes[3].childNodes[1].value;
    this.setState({
      heading: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
      },
    });
    const form = document.querySelector("form");
    form.style.display = "none";
  }

  render() {
    return (
      <div className="App">
        <form>
          <h1>CV Application</h1>
          <Heading />
          <section className="education-container">
            <Education educationArray={this.state.educationArray} />
            <button
              className="add-education-btn"
              onClick={this.boundedAddEducation}
            >
              Add Education
            </button>
          </section>
          <section className="experience-container">
            <Experience experienceArray={this.state.experienceArray} />
            <button
              className="add-experience-btn"
              onClick={this.boundedAddExperience}
            >
              Add Experience
            </button>
          </section>
          <button className="submit-form-btn" onClick={this.boundedSubmitForm}>
            Submit Form
          </button>
        </form>
        <div className="content">
          <Form
            heading={this.state.heading}
            educationArray={this.state.education}
            experienceArray={this.state.experienceArray}
          />
        </div>
      </div>
    );
  }
}

export default App;
