import React, {useState} from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

function App() {

  // initialize variable state, start with blank array
  const [employees, setEmployees] = useState(() => {
    const storedData = localStorage.getItem('employees');
    return storedData ? JSON.parse(storedData) : [];
  });

  // maintain an array of current employees
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);  
    //setEmployees will override existing state. use ...employees to maintain the array, plus the variable employee
  };

  // save the employee array to local storage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <div className="App">
      <EmployeeForm onAddEmployee={addEmployee} /> 
      <br />
      <button onClick={saveData}>Save Data</button>
       <br />
      <h2>Current Employees</h2>
        {employees.map((emp,index)=>
          <p key={index}>
              <b>Name: </b> {emp.name}, 
              <b>Email: </b> {emp.email},
              <b>Title: </b> {emp.title}, 
              <b>Department: </b> {emp.department}
          </p>
            )}
       
    </div>
  );
}

export default App;