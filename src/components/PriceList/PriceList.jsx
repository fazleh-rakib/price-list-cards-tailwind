import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import PriceCart from "../PriceCart/PriceCart";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="mx-12">
      <h2 className="text-6xl bg-purple-600 p-4 text-center text-gray mb-2 rounded-lg">
        this is price
      </h2>
      <div className="grid md:grid-cols-3 gap-3">
        {prices.map((price) => (
          <PriceCart price={price} key={price.id} />
        ))}
      </div>
    </div>
  );
};

export default PriceList;
