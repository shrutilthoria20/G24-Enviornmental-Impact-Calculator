"use client";

import { useState,useEffect } from 'react';

const RangeSlider = () => {
  const [value, setValue] = useState(5000); // Initial value

  useEffect(() => {
    // Retrieve selected value from localStorage on component mount
    const storedValue = localStorage.getItem('selectedValue');
    if (storedValue) {
      setValue(parseInt(storedValue, 10));
    }
  }, []);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
    localStorage.setItem('selectedValue', newValue);
  };
  
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex justify-between w-64 text-gray-600">
        <span>5,000</span>
        <input
          type="range"
          min="5000"
          max="30000"
          step="1"
          value={value}
          onChange={handleChange}
          className="slider appearance-none w-64 h-2 bg-gray-300 rounded-full outline-none"
        />
        <span>30,000</span>
      </div>
      <span className="mt-2 text-gray-700">{value} kms</span>
      <style jsx>{`
        /* Custom Styles */
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #4f46e5;
          border-radius: 50%;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #4f46e5;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default RangeSlider;
