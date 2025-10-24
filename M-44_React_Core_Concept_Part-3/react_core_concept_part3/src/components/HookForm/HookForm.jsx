import React from "react";
import useInputField from "../Hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitttttttttttttttttt", name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={name}
          type="text"
          onChange={nameOnChange}
          placeholder="name"
        />
        <br />
        <input
          type="email"
          placeholder="email"
          defaultValue={email}
          onChange={emailOnChange}
        />
        <br />
        <input
          type="password"
          defaultValue={password}
          name="password"
          placeholder="password"
          onChange={passwordOnChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
