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
    <div className="main-container">
      <div className="employee-detail">
      <h2>Employee Detail</h2>
      <table className="detail-table">
        <tbody>
          <tr>
            <td className="detail-label"><label>Name:</label></td>
            <td className="detail-value">{decodedName}</td>
          </tr>
          <tr>
            <td className="detail-label"><label>Email:</label></td>
            <td className="detail-value">{email}</td>
          </tr>
          <tr>
            <td className="detail-label"><label>Title:</label></td>
            <td className="detail-value">{title}</td>
          </tr>
          <tr>
            <td className="detail-label"><label>Department:</label></td>
            <td className="detail-value">{department}</td>
          </tr>
        </tbody>
      </table>
      <Link to={`/`}><button type="button">Return to Form</button></Link>
    </div>
    </div>
  );
}

export default EmployeeDetail;