import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Kennel.css";

export const Kennel = () => (
  <Routes>
    <Route path="/*"
      element={<Auth />}
    />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

const Auth = () => {
  if (localStorage.getItem("kennel_customer")) {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
}