import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { LocationContext } from "./LocationProvider";

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext); 
  const [ location, setLocation ] = useState({});
  const { locationId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getLocationById(locationId).then(res => setLocation(res));
  }, []);

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <address className="location__address">{location.address}</address>
      <h4>Employees</h4>
      {
        location.employees?.map((e, ind, arr) => ind === arr.length - 1 ? <span key={e.id}>{e.name}</span> : <span key={e.id}>{e.name}, </span>)
      }
      <h4>Animals</h4>
      {
        location.animals?.map((a, ind, arr) => ind === arr.length - 1 ? <span key={a.id}>{a.name}</span> : <span key={a.id}>{a.name}, </span>)
      }
      <button onClick={() => navigate(`/locations/edit/${locationId}`)} >Edit</button>
    </section>
  );
}