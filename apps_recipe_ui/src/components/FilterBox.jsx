import React from "react";

export default function FilterBox({
  label,
  selectOption,
  selectedValue,
  handleFilterFood,
}) {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor="food-filter"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
      </label>
      <select
        id="food-filter"
        className="block w-full pl-3 pr-10 py-2 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        onChange={(event) => handleFilterFood(event.target.value)}
        defaultValue=""
      >
        {selectOption.length > 0 ? (
          selectOption.map((filterOption) => (
            <option key={filterOption} value={filterOption}>
              {filterOption}
            </option>
          ))
        ) : (
          <option disabled>No options available</option>
        )}
      </select>
    </div>
  );
}
