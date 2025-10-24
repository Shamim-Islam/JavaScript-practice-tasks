import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const Grandpa = () => {
  return (
    <div>
      <h2>Grandpa</h2>
      <section className="flex">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunt>></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;
