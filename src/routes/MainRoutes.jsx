import React from "react";
import Home from "../pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import LogIn from "../components/regist/LogIn/LogIn";
import SignUp from "../components/regist/SignUp/SignUp";
import Questions from "../pages/Questions/Questions";

const MainRoutes = () => {
  const PUBLIC = [
    { path: "/", element: <Home />, key: 1 },
    { path: "/log_in", element: <LogIn />, key: 2 },
    { path: "/sign_up", element: <SignUp />, key: 3 },
    { path: "/questions", element: <Questions />, key: 4 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
