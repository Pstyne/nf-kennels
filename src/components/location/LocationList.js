import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./LocationCard";
import "./Location.css";

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext);
  const navigate = useNavigate();
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()

  }, []);


  return (
    <>
      <h2>Locations</h2>
      <button onClick={() => {navigate('/locations/create')}}>
        Add Location
      </button>
      <div className="locations">
        {console.log("LocationList: Render", locations)}
        {
          locations.map(location => {
            return <LocationCard key={location.id} location={location} />
          })
        }
      </div>
    </>
  );
}