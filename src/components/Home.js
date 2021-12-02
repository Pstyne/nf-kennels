import React, { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { CustomerContext } from "./customer/CustomerProvider";
import { PropsAndState } from './PropsAndState';


export const Home = () => {
  let customerName = '';
  const { customers, getCustomers } = useContext(CustomerContext);
  const currentCustomerId = localStorage.getItem("kennel_customer");

  useEffect(() => {
    getCustomers();
  }, []);

  if (customers.length) customerName = customers.find(c => c.id === parseInt(currentCustomerId)).name;

  return (
  <>
    <h2>NewForce Kennels</h2>
    <small>Loving care when you're not there.</small>
    <address>
      <div>Visit Us at the NewForce North Location</div>
      <div>500 Puppy Way</div>
    </address>
    <PropsAndState yourName={customerName} />
  </>
)}
