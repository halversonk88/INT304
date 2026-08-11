import React, {useState} from 'react';
import '../CSS/EmployeeForm.css';

function EmployeeForm(props) {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [title,setTitle] = useState('');
    const [department,setDept] = useState('');
    
    const handleSubmit = (e) => {
        // prevent page from refreshing
        e.preventDefault();

        //log curret state to console
        console.log('Form Submitted. Current data state:', {name, email, title, department});

        //pass data back to parent
        props.onAddEmployee({name, email, title, department});

        //reset state
        setName ('');
        setEmail ('');
        setTitle ('');
        setDept ('');
    }

    return (
        <form onSubmit={handleSubmit} className="employee-form">
            <h2>Employee Form</h2>

            <div>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div> 

            <div>
                <label>Title: </label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>   

            <div>
                <label>Department: </label>
                <input
                    type="text"
                    name="department"
                    value={department}
                    onChange={(e) => setDept(e.target.value)}
                />
            </div>

            <button type="submit">Add Employee</button>
        </form>
    )
}

export default EmployeeForm;