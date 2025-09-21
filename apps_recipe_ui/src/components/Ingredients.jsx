import React, { useEffect, useState } from "react";

export default function Ingredients({ handleIngredients }) {
  const [groupCount, setGroupCount] = useState(0);
  const [ingredientGroups, setIngredientGroups] = useState([]);

  useEffect(() => {
    handleIngredients(ingredientGroups);
  }, [ingredientGroups]);
  const handleGroupCountChange = (event) => {
    const count = Number(event.target.value);
    setGroupCount(count);

    const newGroups = [...ingredientGroups];
    if (count > newGroups.length) {
      for (let i = newGroups.length; i < count; i++) {
        newGroups.push("");
      }
    } else {
      newGroups.length = count;
    }

    setIngredientGroups(newGroups);
  };

  const handleGroupInputChange = (index, value) => {
    const updatedGroups = [...ingredientGroups];
    updatedGroups[index] = value;
    setIngredientGroups(updatedGroups);
  };

  useEffect(() => {
    handleIngredients(ingredientGroups);
  }, [ingredientGroups]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="mb-6">
        <label
          htmlFor="ingredient_group"
          className="block test-base font-medium text-gray-700 mb-2"
        >
          Number of Ingredient Groups
        </label>
        <input
          id="ingredient_group"
          type="number"
          min="0"
          value={groupCount}
          onChange={handleGroupCountChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-4">
        {ingredientGroups.map((groupValue, index) => (
          <div key={index}>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Group {index + 1}'s Ingredients
            </label>
            <input
              type="text"
              value={groupValue}
              placeholder="e.g. Flour, Sugar, Eggs"
              onChange={(e) => handleGroupInputChange(index, e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="test-base font-semibold text-gray-900 mb-3">
          Ingredients Summary
        </h4>
        <ul className="list-disc list-inside space-y-1">
          {ingredientGroups.map((groupValue, index) => (
            <li key={index}>
              <span className="font-medium">Group {index + 1}:</span>{" "}
              {groupValue ? (
                groupValue
              ) : (
                <em className="text-gray-500">(empty)</em>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
