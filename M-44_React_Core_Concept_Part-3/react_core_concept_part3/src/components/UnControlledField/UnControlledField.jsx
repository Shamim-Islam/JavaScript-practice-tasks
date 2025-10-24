import React, { useRef } from "react";

const UnControlledField = () => {

  const emailRef = useRef("");
  const passwordRef = useRef('')

  const handleSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password, )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" placeholder="Your Email" />
        <br />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlledField;
