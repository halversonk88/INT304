import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/employee.css';

function EmployeeList(props) {

    return(
       <div className="employee-list">
            <h1>Employee List</h1>
            <ul>
                {props.employees.map((employee) => (
                    <li key={employee.name}>
                    {/* Create a link to the employee detail page */}
                    <Link to={`/employees/${encodeURIComponent(employee.name)}`}>
                        {employee.name}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;
