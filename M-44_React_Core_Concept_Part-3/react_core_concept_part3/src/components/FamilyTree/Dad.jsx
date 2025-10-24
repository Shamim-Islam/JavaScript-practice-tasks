import React from "react";
import Brothers from "./Brothers";
import Sisters from "./Sisters";
import MySelft from "./MySelft";

const Dad = () => {
  return (
    <div>
      <h3>Dad</h3>
      <section className="flex">
        <MySelft></MySelft>
        <Brothers></Brothers>
        <Sisters></Sisters>
      </section>
    </div>
  );
};

export default Dad;
