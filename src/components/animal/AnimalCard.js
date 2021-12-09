import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Animal.css";


export const AnimalCard = ({ animal }) => {
  
  const isGoldMember = customer => {
    return customer?.goldMembership;
  }

  const [goldMember, setGoldMember] = useState('');

  useEffect(() => {
    
    // if (isGoldMember(animal.customer)) {
    //   setGoldMember('goldmember');
    // } else {
    //   setGoldMember('');
    // }

    //* Will affect the animal card classes
    isGoldMember(animal.customer) ? 
      setGoldMember('goldmember') : setGoldMember(''); 
  }, []);

  return (
  <section className={`animal ${goldMember}`}>
    <h3 className="animal__name">
      <Link to={`/animals/detail/${animal.id}`}>
        {animal.name}
      </Link>
    </h3>
    <div className="animal__breed">{String.fromCodePoint(animal.species.icon)}</div>
  </section>
  );
}