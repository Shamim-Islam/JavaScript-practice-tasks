import React from "react";
import { AssetContext } from "./FamilyTree";
import Friend from "./Friend";

const Cousin = ({ name }) => {
  return (
    <div>
      <h3>{name}</h3>
      {/* <P>{asset}</P> */}
      {
        name === 'Mishu' && <Friend></Friend>


      }
    </div>
  );
};

export default Cousin;
