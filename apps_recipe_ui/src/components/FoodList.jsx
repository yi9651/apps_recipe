import Food from "./Food";
import apiClient from "../api/apiCilent";
import { useState, useEffect, useMemo } from "react";
import SearchBox from "./SearchBox";
import FilterBox from "./FilterBox";

export default function FoodList() {
  const [allFood, setAllFood] = useState([]);
  const [selectedSearchText, setSelectedSearchText] = useState("");
  const [selectedFilterText, setSelectedFilterText] = useState("Popularity");
  const filterOption = ["Popularity", "Price High to Low", "Price Low to High"];
  const sortedAndFilterFood = useMemo(() => {
    if (!Array.isArray(allFood)) {
      return [];
    }

    let filteredFood = allFood.filter((food) =>
      food.food_name.toLowerCase().includes(selectedSearchText)
    );

    return filteredFood.slice().sort((a, b) => {
      switch (selectedFilterText) {
        case "Popularity":
          return parseInt(b.popularity) - parseInt(a.popularity);
          break;

        case "Price High to Low":
          return parseFloat(b.price) - parseFloat(a.price);
          break;

        case "Price Low to High":
          return parseFloat(a.price) - parseFloat(b.price);
          break;

        default:
          return parseInt(b.popularity) - parseInt(a.popularity);
          break;
      }
    });

    // return filteredFood;
  }, [allFood, selectedSearchText, selectedFilterText]);

  useEffect(() => {
    fetchFood();
  }, []);

  useEffect(() => {
    console.log(allFood);
  }, [allFood]);

  const fetchFood = async () => {
    const response = await apiClient.get("/food");
    setAllFood(response.data);
  };

  function handleSearchFood(selectedSearchValue) {
    setSelectedSearchText(selectedSearchValue);
  }

  function handleFIlterFood(selectedFilterValue) {
    console.log(selectedFilterValue);
    setSelectedFilterText(selectedFilterValue);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <SearchBox
          label="Search"
          placeholder="Search Food..."
          value={selectedSearchText}
          handleSearch={(value) => handleSearchFood(value)}
        />
        <FilterBox
          label="Filter by"
          selectOption={filterOption}
          selectedValue={selectedFilterText}
          handleFilterFood={(value) => handleFIlterFood(value)}
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {sortedAndFilterFood.length > 0 ? (
          sortedAndFilterFood.map((food) => <Food key={food.id} food={food} />)
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <h2 className="text-lg font-semibold">No recipes found</h2>
            <p className="text-sm">
              Try adjusting your search or filter options.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
