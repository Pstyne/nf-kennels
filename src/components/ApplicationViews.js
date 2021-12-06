import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
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
import { EmployeeForm } from "./employee/EmployeeForm";
import { LocationForm } from "./location/LocationForm";
import { AnimalDetail } from "./animal/AnimalDetail";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalSearch } from "./animal/AnimalSearch";

export const ApplicationViews = () => {
  return (
  // If using react-router-dom v6 wrap each Route with a Routes component
  // Set the route element to Provider component that wraps List component
  <AnimalProvider>
    <CustomerProvider>
      <EmployeeProvider>
        <LocationProvider>
          <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route path="/" element={<Home/>} />

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals" element={<><AnimalSearch /><AnimalList /></>} />
            <Route path="/animals/detail/:animalId" element={<AnimalDetail />} />
            <Route path="/animals/edit/:animalId" element={<AnimalForm />} />
            <Route path="/animals/create" element={<AnimalForm />} />
            

            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations" element={<LocationList />} />
            <Route path="/locations/detail/:locationId" element={<LocationDetail />} />
            <Route path="/locations/edit/:locationId" element={<LocationForm />} />
            <Route path="/locations/create" element={<LocationForm />} />

            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="/customers" element={<CustomerList />} />

            {/* Render the employee list when http://localhost:3000/employees */}
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/detail/:employeeId" element={<EmployeeDetail />} />
            <Route path="/employees/edit/:employeeId" element={<EmployeeForm />} />
            <Route path="/employees/create" element={<EmployeeForm />} />
            
          </Routes>
        </LocationProvider>
      </EmployeeProvider>
    </CustomerProvider>
  </AnimalProvider>
)};
