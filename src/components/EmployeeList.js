import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/employee.css';

function EmployeeList(props) {

    return(
       <div className="main-container">
            <div className='employee-list'>
            <h2>Employee List</h2>
            <ul>
                {props.employees.map((employee) => (
                    <li key={employee.name}>
                    <Link to={`/employees/${encodeURIComponent(employee.name)}`}>
                        {employee.name}
                    </Link>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default EmployeeList;