import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingCard = ({ pricing }) => {
  const { name, price, features } = pricing;
  return (
    <div className="border bg-gray-700 rounded-2xl p-4 shadow-md">
      {/* card header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h3 className="text-3xl">{price}</h3>
      </div>
      {/* card body */}
      <div className="bg-gray-400 p-4 rounded-2xl mt-10">
        {features.map((feature, index) => (
          <p key={index} className="flex gap-3 mt-4 text-black">
            <CircleCheckBig /> {feature}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
