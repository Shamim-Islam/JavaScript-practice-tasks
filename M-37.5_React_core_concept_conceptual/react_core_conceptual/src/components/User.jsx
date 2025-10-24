import React from "react";

const User = ({ user }) => {
  console.log(user);
  return (
    <div className="border-2 rounded-lg p-2">
      <img src={user.photo} alt="" />
      <h2>{user.name}</h2>
    </div>
  );
};

export default User;
