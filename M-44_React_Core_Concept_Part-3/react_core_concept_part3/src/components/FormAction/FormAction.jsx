import React from "react";

const FormAction = () => {
  const handleFromAction = (formData) => {
    console.log(formData.get('name'));
    console.log(formData.get('email'));
  };

  return (
    <div>
      <form action={handleFromAction}>
        <input type="text" placeholder="Your Name" name="name" />
        <br />
        <input type="email" placeholder="Your Email" name="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
