import { useContext, useEffect } from "react";
import { SpeciesContext } from "../species/SpeciesProvider";
import { AnimalContext } from "./AnimalProvider";

export const AnimalFilter = () => {

  const { species, getSpecies } = useContext(SpeciesContext);
  const { setFilterSpecies } = useContext(AnimalContext);

  useEffect(() => {
    getSpecies();
  }, [])
  

  return (
    <fieldset>
      <div className="form-group">
        <label htmlFor="speciesId">Filter Animals by Species</label>
        <select onChange={(e) => setFilterSpecies(parseInt(e.target.value))} name="speciesId" id="speciesId" className="form-control" >
          <option value="0">Select a species</option>
          {species.map(c => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
    </fieldset>
  );
}
