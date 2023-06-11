import React from "react";
import Heading from "./components/heading";
import Education from "./components/education";
import Experience from "./components/experience";
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

      headingArray: [
        {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        },
      ],
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

    const form = document.querySelector(".App");
  }

  render() {
    return (
      <form className="App">
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
    );
  }
}

export default App;
