import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AnimalContext } from "./AnimalProvider";

export const AnimalDetail = () => {
  const { getAnimalById, releaseAnimal, isActive } = useContext(AnimalContext);
  const [ animal, setAnimal ] = useState({});
  const { animalId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAnimalById(animalId).then(res => setAnimal(res));
  }, []);

  const handleRelease = () => {
    releaseAnimal(animal.id)
    .then(navigate('/animals'));
  }

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__species">{String.fromCodePoint(animal.species?.icon || '')}</div>
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button onClick={handleRelease}>{isActive ? 'Release' : 'Welcome'} Animal</button>
      <button onClick={() => navigate(`/animals/edit/${animal.id}`)} >Edit</button>
    </section>
  );
}