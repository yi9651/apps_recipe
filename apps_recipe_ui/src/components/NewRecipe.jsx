import React from "react";
import Ingredients from "./Ingredients";
import { useState, useEffect } from "react";
import Procedures from "./Procedures";

export default function NewRecipe() {
  const [ingredients, setIngredients] = useState([]);
  const [procedures, setProcedures] = useState([]);
  const updateIngredients = (value) => {
    setIngredients(value);
  };

  const updateProcedures = (value) => {
    setProcedures(value);
  };

  useEffect(() => {
    console.log(ingredients);
    console.log(procedures);
  }, [ingredients, procedures]);
  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <div className="mb-6">
          <label
            htmlFor="recipe_name"
            className="block test-base font-medium text-gray-700 mb-2"
          >
            Recipe's Name
          </label>
          <input
            id="ingredient_group"
            type="text"
            name="recipe_name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <Ingredients handleIngredients={(value) => updateIngredients(value)} />
      <Procedures
        ingredientList={ingredients}
        handleProcedures={(value) => updateProcedures(value)}
      />
      <div className="max-w-2xl mx-auto mb-10">
        <button
          type="submit"
          className="w-full bg-orange-900 hover:bg-orange-800 text-white font-semibold py-3 rounded-lg text-sm focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-700"
        >
          Create Recipe
        </button>
      </div>
    </>
  );
}
