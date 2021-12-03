import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { LocationContext } from "./LocationProvider";

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext); 
  const [ location, setLocation ] = useState({});
  const { locationId } = useParams();

  useEffect(() => {
    getLocationById(locationId).then(res => setLocation(res));
  }, []);

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <address className="location__address">{location.address}</address>
      <h4>Employees</h4>
      {
        location.employees?.map((e, ind, arr) => ind === arr.length - 1 ? <span>{e.name}</span> : <span>{e.name}, </span>)
      }
      <h4>Animals</h4>
      {
        location.animals?.map((a, ind, arr) => ind === arr.length - 1 ? <span>{a.name}</span> : <span>{a.name}, </span>)
      }
    </section>
  );
}