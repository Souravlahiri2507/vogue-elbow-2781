import { Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
