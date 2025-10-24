import React, { use } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./FamilyTree";

const Aunt = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <Cousin name="Hasan"></Cousin>
        <Cousin name="Niddi"></Cousin>
        <Cousin name="Nehal"></Cousin>
        <button>Add 5000 tk</button>
      </section>
    </div>
  );
};

export default Aunt;
