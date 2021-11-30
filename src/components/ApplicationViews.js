import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalCard } from "./animal/AnimalCard";
import { LocationCard } from "./location/LocationCard";
import { CustomerCard } from "./customer/CustomerCard";
import { EmployeeCard } from "./employee/EmployeeCard";

export const ApplicationViews = () => (
  <Routes>
    {/* Render the location list when http://localhost:3000/ */}
    <Route exact path="/" element={<Home/>} />

    {/* Render the animal list when http://localhost:3000/animals */}
    <Route path="/animals" element={<AnimalCard />} />

    {/* Render the location list when http://localhost:3000/locations */}
    <Route path="/locations" element={<LocationCard />} />

    {/* Render the customer list when http://localhost:3000/customers */}
    <Route path="/customers" element={<CustomerCard />} />

    {/* Render the employee list when http://localhost:3000/employees */}
    <Route path="/employees" element={<EmployeeCard />} />
  </Routes>
);
