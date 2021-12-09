import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimalContext } from "./AnimalProvider";
import { AnimalCard } from "./AnimalCard";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms, filterSpecies, isActive, setIsActive } = useContext(AnimalContext);
  const [ filteredAnimals, setFiltered ] = useState([]);

  const navigate = useNavigate();

  // useEffect - reach out to the world for something
  //* Control for unfiltered list of animals or simply all of the animals
  useEffect(() => {
    getAnimals();
  }, [isActive]);

  /** 
  **  This useEffect will utilize the animal search features using keywords
  **  and return a list of animals by the name typed into search bar
  */
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals]);

  /**
   ** This useEffect will utitlize the filter component
   ** Whichever species the user chooses will render
   ** any animal of that type into the list 
   */

  useEffect(() => {
    if (filterSpecies !== 0) {
      const animalSet = animals.filter(animal => animal.speciesId === filterSpecies);
      setFiltered(animalSet);
    } else {
      setFiltered(animals);
    }
  }, [filterSpecies, animals]);


  return (
    <>
      <h2>Animals</h2>
      <button onClick={() => {navigate('/animals/create')}}>
        Make Reservation
      </button>
       
      <button onClick={() => setIsActive(!isActive)}>
        View {
          isActive ? 'Archived' : 'Active'
        } Animals
      </button> 
        
      <div className="animals">
        {
          filteredAnimals.map(animal => {

            return <AnimalCard 
                      key={animal.id}
                      animal={animal} />
          })
        }
      </div>
    </>
  );
}
