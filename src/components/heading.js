import React from "react";
import "../styles/heading.css";

export default class Heading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="heading">
        <label htmlFor="first-name">
          First Name:
          <input placeholder="Enter First Name" name="first-name"></input>
        </label>
        <label htmlFor="last-name">
          Last Name:
          <input placeholder="Enter Last Name" name="first-name"></input>
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" placeholder="Enter Email" name="email"></input>
        </label>
        <label htmlFor="phone number">
          Phone Number:
          <input placeholder="Enter Phone Number" name="phone number"></input>
        </label>
      </div>
    );
  }
}
