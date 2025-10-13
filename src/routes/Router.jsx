import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPage/LoginPage";
import Register from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/HomePage";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default Router;