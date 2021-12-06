import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext);
  const [ employee, setEmployee ] = useState({});
  const { employeeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", employeeId);
    getEmployeeById(employeeId).then(res => setEmployee(res));
  }, []);

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">Location: {employee.location?.name}</div>
      <button onClick={() => {navigate(`/employees/edit/${employeeId}`)}} >Edit</button>
    </section>
  );
}