import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import FoodList from "./FoodList";

export default function Home() {
  return (
    <>
      <div className="m-auto p-5">
        <FoodList />
      </div>
    </>
  );
}
