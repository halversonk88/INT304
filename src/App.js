import React, {useState, useEffect} from 'react';
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
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  return (
    <BrowserRouter>
    <div className="app-container">
      <header className="app-header">
        <h1>Employee Managment Portal</h1>
      </header>
      <main className='app-main'>
      <Routes>
    {/* Option 1: Home page shows form and list */}
        <Route path="/" element={
          <div className='main-layout'>
            <EmployeeForm onAddEmployee={addEmployee} />
            <div className='list-section'>
             <EmployeeList employees={employees} />
            </div>
          </div>
        } />
    {/* Option 2: Emp list and employee detail */}
        <Route path="/employees/:name" element={
          <div className='main-layout'>
            <EmployeeDetail employees={employees} />
            <EmployeeList employees={employees} />
          </div>
        } />
      </Routes>
      </main>
    </div>
  </BrowserRouter>
  );
}

export default App;