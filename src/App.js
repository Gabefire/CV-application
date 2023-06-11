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
    this.state = {
      education: {
        schoolName: "",
        titleOfStudy: "",
        date: "",
        id: "",
      },
      educationArray: [
        {
          schoolName: "",
          titleOfStudy: "",
          date: "",
          id: uniqid(),
        },
      ],
    };
  }

  addEducation(e) {
    e.preventDefault();
    const educationSection = document.querySelectorAll(".education");
    console.log(educationSection);
    educationSection.forEach((section) => {
      const schoolName = section.childNodes[0].childNodes[1].value;
      const titleOfStudy = section.childNodes[1].childNodes[1].value;
      const date = section.childNodes[2].childNodes[1].value;
      const id = section.id;
      this.setState({
        education: {
          schoolName: schoolName,
          titleOfStudy: titleOfStudy,
          date: date,
          id: id,
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
        id: uniqid(),
      },
      educationArray: [...this.state.educationArray, this.state.education],
    });
  }

  render() {
    return (
      <form className="App">
        <h1>CV Application</h1>
        <Heading />
        <section className="education-container">
          <Education educationArray={this.state.educationArray} />
          <button className="add-education-btn" onClick={this.addEducation}>
            Add Education
          </button>
        </section>
        <Experience />
        <button className="submit-form-btn">Submit Form</button>
      </form>
    );
  }
}

export default App;
