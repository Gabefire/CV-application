import React from "react";
import "../styles/heading.css";

const Heading = ({ heading }) => {
  return (
    <div className="heading" key={heading.key}>
      <label htmlFor="first-name">
        First Name:
        <input
          className="heading-input"
          placeholder="Enter First Name"
          name="first-name"
          id="first-name"
          defaultValue={heading.firstName}
        ></input>
      </label>
      <label htmlFor="last-name">
        Last Name:
        <input
          className="heading-input"
          placeholder="Enter Last Name"
          name="first-name"
          id="last-name"
          defaultValue={heading.lastName}
        ></input>
      </label>
      <label htmlFor="email">
        Email:
        <input
          className="heading-input"
          type="email"
          placeholder="Enter Email"
          name="email"
          id="email"
          defaultValue={heading.email}
        ></input>
      </label>
      <label htmlFor="phone-number">
        Phone Number:
        <input
          className="heading-input"
          placeholder="Enter Phone Number"
          name="phone-number"
          id="phone-number"
          defaultValue={heading.phoneNumber}
        ></input>
      </label>
    </div>
  );
};

export default Heading;
