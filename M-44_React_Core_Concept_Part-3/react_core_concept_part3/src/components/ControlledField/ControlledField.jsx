import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, password: ${password}`);
    if (password.length < 6) {
      setError("Password must be 6 characters or longer.");
    } else {
      setError("");
    }
  };

  const handlenNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password must be 6 characters or longer.");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type Your Name"
          name="name"
          defaultValue={name}
          onChange={handlenNameChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleEmailChange}
          defaultValue={email}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          defaultValue={password}
          onChange={handlePasswordOnChange}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
