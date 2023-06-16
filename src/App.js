import React, { useState } from "react";
import Heading from "./components/heading";
import Education from "./components/education";
import Experience from "./components/experience";
import Form from "./components/form";
import "./styles/index.css";
import uniqid from "uniqid";

const App = () => {
  const [content, setContent] = useState(false);
  const [form, setForm] = useState(true);
  const [educationArray, setEducationArray] = useState([
    {
      schoolName: "School of Technology",
      titleOfStudy: "Bachelors of Engineering",
      date: "2013",
      key: uniqid(),
    },
  ]);
  const [experienceArray, setExperienceArray] = useState([
    {
      companyName: "Mortgage Company",
      positionTitle: "Loan Coordinator",
      dates: "2019-present",
      task: "Provide excellent customer service and solve problems",
      key: uniqid(),
    },
  ]);
  const [heading, setHeading] = useState({
    firstName: "Gabriel",
    lastName: "Underwood",
    email: "fake-email@gmail.com",
    phoneNumber: "323-878-4538",
    key: uniqid(),
  });

  const switchViews = () => {
    setContent(true);
    setForm(false);
  };

  const showContent = () => {
    return (
      <Form
        heading={heading}
        educationArray={educationArray}
        experienceArray={experienceArray}
        switchView={switchViews}
      />
    );
  };

  const addEducation = (e) => {
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

    setEducationArray(educationArray);
  };

  const deleteEducation = (e) => {
    e.preventDefault();
    let targetKey = e.target.id;
    targetKey = targetKey.split("-")[1];
    const index = educationArray.findIndex((education) => {
      if (education.key === targetKey) {
        return true;
      }
      return false;
    });
    setEducationArray(educationArray.filter((_, i) => i !== index));
  };

  const addExperience = (e) => {
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

    setEducationArray(experienceArray);
  };

  const deleteExperience = (e) => {
    e.preventDefault();
    let targetKey = e.target.id;
    targetKey = targetKey.split("-")[1];
    const index = experienceArray.findIndex((experience) => {
      if (experience.key === targetKey) {
        return true;
      }
      return false;
    });

    setExperienceArray(experienceArray.filter((_, i) => i !== index));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const headingSection = document.querySelector(".heading");
    const firstName = headingSection.childNodes[0].childNodes[1].value;
    const lastName = headingSection.childNodes[1].childNodes[1].value;
    const email = headingSection.childNodes[2].childNodes[1].value;
    const phoneNumber = headingSection.childNodes[3].childNodes[1].value;

    setHeading({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
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

    setExperienceArray(experienceArray);

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

    setEducationArray(educationArray);

    setForm(false);

    setContent(true);
  };

  const showForm = () => {
    return (
      <form key={uniqid()}>
        <h2 className="input-title">Heading:</h2>
        <Heading heading={heading} />
        <h2 className="input-title">Education:</h2>
        <section className="education-container">
          <Education
            educationArray={educationArray}
            deleteEducation={deleteEducation}
          />
          <button className="add-btn form-btn" onClick={addEducation}>
            Add Education
          </button>
        </section>
        <h2 className="input-title">Experience:</h2>
        <section className="experience-container">
          <Experience
            experienceArray={experienceArray}
            deleteExperience={deleteExperience}
          />
          <button className="add-btn form-btn" onClick={addExperience}>
            Add Experience
          </button>
        </section>
        <button className="submit-btn form-btn" onClick={submitForm}>
          Submit Form
        </button>
      </form>
    );
  };

  return (
    <div className="App">
      <h1 className="title">CV Application</h1>
      {form ? showForm() : null}
      {content ? showContent() : null}
    </div>
  );
};

export default App;
