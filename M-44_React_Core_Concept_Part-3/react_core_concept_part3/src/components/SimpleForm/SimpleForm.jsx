import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`name value is: ${e.target.name.value}, email is: ${e.target.email.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" name="name" />
        <br />
        <input type="email" placeholder="Your Email" name="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
