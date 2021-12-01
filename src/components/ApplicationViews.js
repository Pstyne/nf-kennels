import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { LocationList } from "./location/LocationList";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalForm } from "./animal/AnimalForm";

export const ApplicationViews = () => (
  // If using react-router-dom v6 wrap each Route with a Routes component
  // Set the route element to Provider component that wraps List component
  <AnimalProvider>
    <CustomerProvider>
      <EmployeeProvider>
        <LocationProvider>
          <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/" element={<Home/>} />

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals" element={<AnimalList />} />
            <Route path="/animals/create" element={<AnimalForm />} />

            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations" element={<LocationList />} />

            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="/customers" element={<CustomerList />} />

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route path="/employees" element={<EmployeeList />} />
          </Routes>
        </LocationProvider>
      </EmployeeProvider>
    </CustomerProvider>
  </AnimalProvider>
);
