import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact, { saveContact } from "./components/Contact.jsx";
import Register, { saveUser } from "./components/Register.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";
import Recipe from "./components/Recipe.jsx";
import NewRecipe from "./components/NewRecipe.jsx";
import Ingredients from "./components/Ingredients.jsx";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} action={saveContact} />
      <Route path="/about" element={<About />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/new_recipe" element={<NewRecipe />} />
      <Route path="ingredients" element={<Ingredients />} />
    </Route>
    <Route path="/register" element={<Register />} action={saveUser} />
    <Route path="/login" element={<Login />} />
  </>
);

const appRouter = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable
      pauseOnHover
      theme={localStorage.getItem("theme") === "dark" ? "dark" : "light"}
      transition={Bounce}
    />
  </StrictMode>
);
