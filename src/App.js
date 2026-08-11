import React, {useState} from 'react';
import './CSS/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {

  // initialize variable state, start with blank array
  const [employees, setEmployees] = useState([]);

  // maintain an array of current employees
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // save the employee array to local storage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <EmployeeForm onAddEmployee={addEmployee} />
            <EmployeeList employees={employees} />
            <button onClick={saveData}>Save Data</button>
          </>
        } />
        <Route path="/employees/:id" element={<EmployeeDetail employees={employees} />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;