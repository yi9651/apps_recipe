import React, { useState } from "react";
import { useEffect } from "react";
export default function Procedures({ ingredientList, handleProcedures }) {
  const [procedureText, setProcedureText] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);

  const [procedures, setProcedures] = useState([]);

  const handleAddProcedure = () => {
    if (procedureText.trim() === "") return;

    const newStep = {
      text: procedureText,
      group: selectedGroup,
      ingredients:
        selectedGroup !== null ? ingredientList[selectedGroup] : null,
    };

    setProcedures([...procedures, newStep]);
    setProcedureText("");
    setSelectedGroup(null);
  };

  useEffect(() => {
    handleProcedures(procedures);
  }, [procedures]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-10">
      <h2 className="text-base font-semibold mb-4">Add Procedure Step</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Step Instructions</label>
        <textarea
          value={procedureText}
          onChange={(e) => setProcedureText(e.target.value)}
          rows={3}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. Mix Group 1 with water and stir for 5 minutes"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Link to Ingredient Group (optional)
        </label>
        <select
          value={selectedGroup ?? ""}
          onChange={(e) =>
            setSelectedGroup(
              e.target.value === "" ? null : Number(e.target.value)
            )
          }
          className="block w-full pl-3 pr-10 py-2 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="">None</option>
          {ingredientList.map((group, index) => (
            <option key={index} value={index}>
              Group {index + 1}: {group || "(empty)"}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleAddProcedure}
        className="w-full bg-orange-900 hover:bg-orange-800 text-white font-semibold py-3 rounded-lg text-sm focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-700"
      >
        Add Step
      </button>

      <div className="mt-6">
        <h3 className="test-base font-semibold mb-2">Procedure Steps</h3>
        <ol className="list-decimal pl-6 space-y-2">
          {procedures.map((proc, index) => (
            <li key={index}>
              <span>{proc.text}</span>
              {proc.group !== null && (
                <div className="text-sm text-gray-500">
                  (Linked to Group {proc.group + 1})
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
