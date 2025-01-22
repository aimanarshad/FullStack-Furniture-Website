/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";

interface PriceFilterProps {
  onFilterChange: (minPrice: number, maxPrice: number) => void;
}

const PriceFilter = ({ onFilterChange }: PriceFilterProps) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleMinPriceChange = (event: any) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMaxPriceChange = (event: any) => {
    setMaxPrice(Number(event.target.value));
  };

  const applyFilter = () => {
    onFilterChange(minPrice, maxPrice);
  };

  return (
    <div className="price-filter p-4 shadow-lg rounded-lg bg-white border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Price Filter</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Min Price:</label>
        <input
          type="number"
          value={minPrice}
          onChange={handleMinPriceChange}
          min={0}
          className="w-full p-2 border rounded-lg text-gray-800"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Max Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          min={0}
          className="w-full p-2 border rounded-lg text-gray-800"
        />
      </div>
      <button
        onClick={applyFilter}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default PriceFilter;
