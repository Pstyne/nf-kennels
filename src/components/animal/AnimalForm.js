import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../location/LocationProvider";
import { AnimalContext } from "../animal/AnimalProvider";
import { CustomerContext } from "../customer/CustomerProvider";
import "./Animal.css";
import { useNavigate, useParams } from 'react-router-dom';
import { SpeciesContext } from "../species/SpeciesProvider";

export const AnimalForm = () => {
  const { getAnimalById, addAnimal, updateAnimal } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);
  const { species, getSpecies } = useContext(SpeciesContext);
  const { animalId } = useParams();

  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

  Define the intial state of the form inputs with useState()
  */

  const [animal, setAnimal] = useState({
    name: "",
    locationId: 0,
    customerId: 0,
    speciesId: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */
  useEffect(() => {
    getCustomers().then(getLocations).then(getSpecies).then(() => {
      if (animalId) {
        getAnimalById(animalId).then(animal => {
          setAnimal(animal);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newAnimal = { ...animal };
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newAnimal[event.target.id] = parseInt(event.target.value) ? parseInt(event.target.value) : event.target.value;
    // update state
    setAnimal(newAnimal);
  }

  const handleClickSaveAnimal = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const locationId = parseInt(animal.locationId);
    const customerId = parseInt(animal.customerId);
    const speciesId = parseInt(animal.speciesId);

    if (locationId === 0 || customerId === 0 || speciesId === 0) {
      if (!locationId) window.alert("Please select a location");
      if (!customerId) window.alert("Please select a customer");
      if (!speciesId) window.alert("Please select a species");
    } else {

      // Disable the save button while saving
      setIsLoading(true);

      //invoke addAnimal passing animal as an argument.
      //once complete, change the url and display the animal list
      if (animalId) {
        updateAnimal(animal).then(() => navigate(`/animals/detail/${animal.id}`));
      } else {
        addAnimal(animal)
        .then(() => navigate("/animals"));
      }
    }
  }

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal name:</label>
          <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name}/>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="speciesId">Species: </label>
          <select value={animal.speciesId} onChange={handleControlledInputChange} name="speciesId" id="speciesId" className="form-control" >
            <option value="0">Select a species</option>
            {species.map(c => (
              <option key={c.id} value={c.id}>
                {String.fromCodePoint(c.icon)} {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select value={animal.locationId} onChange={handleControlledInputChange} name="locationId" id="locationId" className="form-control" >
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Customer: </label>
          <select value={animal.customerId} onChange={handleControlledInputChange} name="customer" id="customerId" className="form-control" >
            <option value="0">Select a customer</option>
            {customers.map(c => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary"
        disabled={isLoading}
        onClick={handleClickSaveAnimal}>
        Save Animal
      </button>
    </form>
  );
}
