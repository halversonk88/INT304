import React from "react";
import { Link, useParams } from "react-router-dom";
import '../CSS/employee.css';

function EmployeeDetail(props) {
// grab the name from the URL
  const { name } = useParams();
  const decodedName = decodeURIComponent (name || "");
  
  // find that employee by name
  const employee = props.employees.find((emp) => emp.name.toLowerCase() === decodedName.toLowerCase());
  const { email, title, department } = employee || {}; // Provide fallback object if employee is undefined

  if(!employee) {
    return (
      <div className="employeed-detail">
        <p>Employee "{decodedName}" not found.</p>
      </div>
    );
  }
  // render an HTML with that employees information
  return (
    <div className="employee-detail">
      <table>
        <tbody>
          <tr>
            <td><label>Name: </label></td>
            <td>{name}</td>
          </tr>
          <tr>
            <td><label>Email: </label></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><label>Title: </label></td>
            <td>{title}</td>
          </tr>
          <tr>
            <td><label>Department: </label></td>
            <td>{department}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <Link to={`/`}><button type="button">Return to Form</button></Link>
    </div>
  );
}

export default EmployeeDetail;
