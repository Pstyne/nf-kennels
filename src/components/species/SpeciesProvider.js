import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const SpeciesContext = createContext();

// This component establishes what data can be used.
export const SpeciesProvider = (props) => {
  const [species, setSpecies] = useState([]);

  const getSpecies = () => {
    return fetch("http://localhost:8088/species")
    .then(res => res.json())
    .then(setSpecies);
  }

  /*
      You return a context provider which has the
      `species` state, `getSpecies` function,
      and the `addSpecies` function as keys. This
      allows any child elements to access them.
  */
  return (
    <SpeciesContext.Provider value={{
      species, getSpecies
    }}>
      {props.children}
    </SpeciesContext.Provider>
  );
}
