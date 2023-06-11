import React from "react";
import Heading from "./components/heading";
import Education from "./components/education";
import Experience from "./components/experience";
import "./styles/index.css";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form className="App">
        <h1>CV Application</h1>
        <Heading />
        <Education />
        <Experience />
      </form>
    );
  }
}

export default App;
