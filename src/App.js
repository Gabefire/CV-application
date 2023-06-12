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
    this.boundedAddExperience = this.addExperience.bind(this);
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
          schoolName: "Missouri Technology of Science and Technology",
          titleOfStudy: "B.A. Engineering",
          date: "2019",
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
          companyName: "Veterans United Home Loans",
          positionTitle: "Loan Coordinator",
          dates: "2019-present",
          task: "Provide excellent customer service and solve problems",
          key: uniqid(),
        },
      ],

      heading: {
        firstName: "Gabriel",
        lastName: "Underwood",
        email: "gabe1996@gmail.com",
        phoneNumber: "573-854-3238",
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
      <div className="content">
        <Form
          heading={this.state.heading}
          educationArray={this.state.educationArray}
          experienceArray={this.state.experienceArray}
        />
        <div className="button-container">
          <button className="edit-btn" onClick={this.boundedSwitchViews}>
            Edit
          </button>
          <button className="print-btn">Print</button>
        </div>
      </div>
    );
  }

  showForm() {
    return (
      <form className="form">
        <h1>CV Application</h1>
        <Heading heading={this.state.heading} />
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
        education: {
          schoolName: schoolName,
          titleOfStudy: titleOfStudy,
          date: date,
          key: key,
        },
      };
      educationArray.push(educationObject);
    });
    this.setState({
      educationArray: educationArray,
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
    const experienceArray = [];
    experienceSection.forEach((section) => {
      const companyName = section.childNodes[0].childNodes[1].value;
      const positionTitle = section.childNodes[1].childNodes[1].value;
      const dates = section.childNodes[2].childNodes[1].value;
      const task = section.childNodes[3].childNodes[1].value;
      const experienceObject = {
        experience: {
          companyName: companyName,
          positionTitle: positionTitle,
          dates: dates,
          task: task,
          key: uniqid(),
        },
      };
      experienceArray.push(experienceObject);
    });
    this.setState({
      experienceArray: experienceArray,
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

    const experienceSection = document.querySelectorAll(".experience");
    const experienceArray = [];
    experienceSection.forEach((section) => {
      const companyName = section.childNodes[0].childNodes[1].value;
      const positionTitle = section.childNodes[1].childNodes[1].value;
      const dates = section.childNodes[2].childNodes[1].value;
      const task = section.childNodes[3].childNodes[1].value;
      const key = section.id;
      const experienceObject = {
        experience: {
          companyName: companyName,
          positionTitle: positionTitle,
          dates: dates,
          task: task,
          key: key,
        },
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
        education: {
          schoolName: schoolName,
          titleOfStudy: titleOfStudy,
          date: date,
          key: key,
        },
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
        {this.state.displayForm ? this.showForm() : null}
        {this.state.showContent ? this.showContent() : null}
      </div>
    );
  }
}

export default App;
