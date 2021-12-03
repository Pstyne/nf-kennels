import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AnimalContext } from "./AnimalProvider";

export const AnimalDetail = () => {
  const { getAnimalById } = useContext(AnimalContext);
  const [ animal, setAnimal ] = useState({});
  const { animalId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", animalId);
    getAnimalById(animalId).then(res => setAnimal(res));
  }, []);

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
    </section>
  );
}