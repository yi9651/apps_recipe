import "./App.css";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
