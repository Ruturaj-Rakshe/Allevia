import React from "react";

const PricingCard = ({ plan, price, features }) => {
  return (
    <div className="bg-n-13 text-gray-800 p-6 rounded-lg shadow-lg mt-8 transition-transform transform hover:scale-105 hover:shadow-xl hover:opacity-90">
      <h3 className="text-xl font-bold mb-4 text-n-1">{plan}</h3>
      <p className="text-3xl font-semibold mb-4 text-n-1">{price}</p>
      <ul className="mb-6 text-n-11">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700">
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
