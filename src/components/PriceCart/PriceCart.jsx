import React from "react";
import Features from "../Features/Features";

const PriceCart = ({ price }) => {
  return (
    <div className="bg-indigo-200 rounded-lg p-4 mt-2">
      <h2 className="text-center">
        <span className="text-5xl font-bold text-purple-700">
          {price.price}
        </span>
        <span className="text-3xl text-orange-400 font-bold"> /mon</span>
      </h2>
      <h1 className="text-2xl font-bold text-center my-6"> {price.name}</h1>
      <p>Features :</p>
      {price.features.map((feature, idx) => (
        <Features feature={feature} key={idx} />
      ))}
       <button className="bg-green-500 py-2 rounded w-full">Buy Now</button>
    </div>
  );
};

export default PriceCart;
