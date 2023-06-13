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
    this.boundedSwitchViews = this.switchViews.bind(this);
    this.boundedAddEducation = this.addEducation.bind(this);
    this.boundedDeleteEducation = this.deleteEducation.bind(this);
    this.boundedAddExperience = this.addExperience.bind(this);
    this.boundedDeleteExperience = this.deleteExperience.bind(this);
    this.boundedSubmitForm = this.submitForm.bind(this);
    this.state = {
      showContent: false,
      displayForm: true,
      education: {
        schoolName: null,
        titleOfStudy: null,
        date: null,
        key: null,
      },

      educationArray: [
        {
          schoolName: "School of Technology",
          titleOfStudy: "Bachelors of Engineering",
          date: "2013",
          key: uniqid(),
        },
      ],

      experience: {
        companyName: null,
        positionTitle: null,
        dates: null,
        task: null,
        key: uniqid(),
      },

      experienceArray: [
        {
          companyName: "Mortgage Company",
          positionTitle: "Loan Coordinator",
          dates: "2019-present",
          task: "Provide excellent customer service and solve problems",
          key: uniqid(),
        },
      ],

      heading: {
        firstName: "Gabriel",
        lastName: "Underwood",
        email: "fake-email@gmail.com",
        phoneNumber: "323-878-4538",
        key: uniqid(),
      },
    };
  }

  switchViews() {
    this.setState({
      showContent: !this.state.showContent,
      displayForm: !this.state.displayForm,
    });
  }

  showContent() {
    return (
      <Form
        heading={this.state.heading}
        educationArray={this.state.educationArray}
        experienceArray={this.state.experienceArray}
        switchView={this.boundedSwitchViews}
      />
    );
  }

  showForm() {
    return (
      <form key={uniqid()}>
        <h2 className="input-title">Heading:</h2>
        <Heading heading={this.state.heading} />
        <h2 className="input-title">Education:</h2>
        <section className="education-container">
          <Education
            educationArray={this.state.educationArray}
            deleteEducation={this.boundedDeleteEducation}
          />
          <button
            className="add-btn form-btn"
            onClick={this.boundedAddEducation}
          >
            Add Education
          </button>
        </section>
        <h2 className="input-title">Experience:</h2>
        <section className="experience-container">
          <Experience
            experienceArray={this.state.experienceArray}
            deleteExperience={this.boundedDeleteExperience}
          />
          <button
            className="add-btn form-btn"
            onClick={this.boundedAddExperience}
          >
            Add Experience
          </button>
        </section>
        <button
          className="submit-btn form-btn"
          onClick={this.boundedSubmitForm}
        >
          Submit Form
        </button>
      </form>
    );
  }

  addEducation(e) {
    e.preventDefault();
    const educationSection = document.querySelectorAll(".education");
    const educationArray = [];
    educationSection.forEach((section) => {
      const schoolName = section.childNodes[0].childNodes[1].value;
      const titleOfStudy = section.childNodes[1].childNodes[1].value;
      const date = section.childNodes[2].childNodes[1].value;
      const key = section.id;
      const educationObject = {
        schoolName: schoolName,
        titleOfStudy: titleOfStudy,
        date: date,
        key: key,
      };
      educationArray.push(educationObject);
    });
    const educationObject = {
      schoolName: "",
      titleOfStudy: "",
      date: "",
      key: uniqid(),
    };

    educationArray.push(educationObject);

    this.setState({
      educationArray: educationArray,
    });
    console.log(this.state.educationArray);
  }

  addExperience(e) {
    e.preventDefault();
    const experienceSection = document.querySelectorAll(".experience");
    const experienceArray = [];
    experienceSection.forEach((section) => {
      const companyName = section.childNodes[0].childNodes[1].value;
      const positionTitle = section.childNodes[1].childNodes[1].value;
      const dates = section.childNodes[2].childNodes[1].value;
      const task = section.childNodes[3].childNodes[1].value;
      const key = section.id;
      const experienceObject = {
        companyName: companyName,
        positionTitle: positionTitle,
        dates: dates,
        task: task,
        key: key,
      };
      experienceArray.push(experienceObject);
    });

    const experienceObject = {
      companyName: "",
      positionTitle: "",
      task: "",
      dates: "",
      key: uniqid(),
    };

    experienceArray.push(experienceObject);

    this.setState({
      experienceArray: experienceArray,
    });
  }

  deleteEducation(e) {
    e.preventDefault();
    let targetKey = e.target.id;
    targetKey = targetKey.split("-")[1];
    const index = this.state.educationArray.findIndex((education) => {
      if (education.key === targetKey) {
        return true;
      }
      return false;
    });
    this.setState({
      educationArray: this.state.educationArray.filter((_, i) => i !== index),
    });
  }

  deleteExperience(e) {
    e.preventDefault();
    let targetKey = e.target.id;
    targetKey = targetKey.split("-")[1];
    const index = this.state.experienceArray.findIndex((experience) => {
      if (experience.key === targetKey) {
        return true;
      }
      return false;
    });
    this.setState({
      experienceArray: this.state.experienceArray.filter((_, i) => i !== index),
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

    const experienceSection = document.querySelectorAll(".experience");
    const experienceArray = [];
    experienceSection.forEach((section) => {
      const companyName = section.childNodes[0].childNodes[1].value;
      const positionTitle = section.childNodes[1].childNodes[1].value;
      const dates = section.childNodes[2].childNodes[1].value;
      const task = section.childNodes[3].childNodes[1].value;
      const key = section.id;
      const experienceObject = {
        companyName: companyName,
        positionTitle: positionTitle,
        dates: dates,
        task: task,
        key: key,
      };
      experienceArray.push(experienceObject);
    });
    this.setState({
      experienceArray: experienceArray,
    });

    const educationSection = document.querySelectorAll(".education");
    const educationArray = [];
    educationSection.forEach((section) => {
      const schoolName = section.childNodes[0].childNodes[1].value;
      const titleOfStudy = section.childNodes[1].childNodes[1].value;
      const date = section.childNodes[2].childNodes[1].value;
      const key = section.id;
      const educationObject = {
        schoolName: schoolName,
        titleOfStudy: titleOfStudy,
        date: date,
        key: key,
      };
      educationArray.push(educationObject);
    });
    this.setState({
      educationArray: educationArray,
    });
    this.setState({
      displayForm: false,
      showContent: true,
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">CV Application</h1>
        {this.state.displayForm ? this.showForm() : null}
        {this.state.showContent ? this.showContent() : null}
      </div>
    );
  }
}

export default App;
