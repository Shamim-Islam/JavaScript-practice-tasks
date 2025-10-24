import React from "react";

const Link = ({link}) => {
  return (
    <li className="lg:mr-10 hover:bg-amber-400 px-4">
      <a href={link.path}>{link.name}</a>
    </li>
  );
};

export default Link;
