import React, {useState} from 'react';
import './CSS/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';

function App() {

  // initialize variable state: load from localstorage if available, blank if not
    const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });


  // maintain an array of current employees
  const addEmployee = (newEmployee) => {
    setEmployees((employees) => [...employees, newEmployee]);
  };

  // save the employee array to local storage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
    // Option 1: Home page shows form and list
        <Route path="/" element={
          <>
            <EmployeeForm onAddEmployee={addEmployee} />
            <EmployeeList employees={employees} />
            <button onClick={saveData}>Save Data</button>
          </>
        } />
    // Option 2: Emp list and employee detail
        <Route path="/employees/:name" element={
          <>
            <EmployeeList employees={employees} />
            <EmployeeDetail employees={employees} />
          </>
        } />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
