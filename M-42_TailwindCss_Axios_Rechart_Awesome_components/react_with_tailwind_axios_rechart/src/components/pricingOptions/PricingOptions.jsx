import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <div>
      <h3 className="text-5xl">Get our Membership</h3>
      <div className="grid md:grid-cols-3 gap-3">
        {pricingData.map((pricing) => (
          <PricingCard pricing={pricing} key={pricing.id}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
