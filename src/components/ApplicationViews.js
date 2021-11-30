import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalCard } from "./animal/AnimalCard";

export const ApplicationViews = () => (
  <Routes>
    {/* Render the location list when http://localhost:3000/ */}
    <Route exact path="/" element={<Home/>} />

    {/* Render the animal list when http://localhost:3000/animals */}
    <Route path="/animals" element={<AnimalCard />} />
  </Routes>
);
