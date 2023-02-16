import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  );
};

export default Router;
