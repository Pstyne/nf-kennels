import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const AnimalContext = createContext();

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
  const [animals, setAnimals] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const [filterSpecies, setFilterSpecies] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const getAnimals = () => {
    return fetch(`http://localhost:8088/animals?_expand=location&_expand=customer&_expand=species&isActive=${isActive}`)
    .then(res => res.json())
    .then(setAnimals);
  }

  const addAnimal = animalObj => {
    return fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(animalObj)
    })
    .then(res => res.json());
  }

  const getAnimalById = id => {
    return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer&_expand=species`)
    .then(res => res.json());
  }

  const releaseAnimal = id => {
    return fetch(`http://localhost:8088/animals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({isActive: !isActive})
    }).then(getAnimals);
  }

  const updateAnimal = animal => {
    return fetch(`http://localhost:8088/animals/${animal.id}`, {
      method: "PUT",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
    }).then(getAnimals);
  }

  /*
      You return a context provider which has the
      `animals` state, `getAnimals` function,
      and the `addAnimal` function as keys. This
      allows any child elements to access them.
  */
  return (
    <AnimalContext.Provider value={{
      animals, getAnimals, addAnimal, getAnimalById,
      releaseAnimal, updateAnimal, searchTerms, setSearchTerms,
      filterSpecies , setFilterSpecies,
      isActive, setIsActive
    }}>
      {props.children}
    </AnimalContext.Provider>
  );
}
