import React from 'react';
import '../EmployeeForm.css';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            email: '', 
            title: '', 
            department: ''
        };
    } 
    
    handleChange = (event) => {
        // Tracking user inputs
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        // prevent page from refreshing
        event.preventDefault();

        //log curret state to console
        console.log('Form Submitted. Current data state:', this.state);

        //reset state
        this.setState({
            name: '', 
            email: '', 
            title: '', 
            department: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="employee-form">
                <h2>Employee Input</h2>

                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div> 

                <div>
                    <label>Title: </label>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </div>   

                <div>
                    <label>Department: </label>
                    <input
                        type="text"
                        name="department"
                        value={this.state.department}
                        onChange={this.handleChange}
                    />
                </div>

                <button type="submit">Submit Registration Form</button>
            </form>
        )
    }
}

export default EmployeeForm;
