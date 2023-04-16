import React, { useContext } from 'react'
import Nav from './Nav'
import ContextData from './ContextAPI'
import { useNavigate } from 'react-router-dom';

const NewStudent = () => {
    const data = useContext(ContextData);

    const nav = useNavigate();

    const newStudent = {
        Name: "",
        Age: "",
        Course: "",
        Batch: ""
    }

    const handleChange = (e) => {
        newStudent[e.target.name] = e.target.value;
    }

    const handleSubmit = () => {
        data.entries.push(newStudent);
        nav(-1)
        console.log(data);
    }

    const handleCancel=()=>{
        nav(-1)
    }
    
    return (
        <div className='update'>
            <Nav />
            <br />
            <div className="inputs">
                <input type="text" placeholder='Enter Name' name='Name' onChange={handleChange} />
                <input type="text" placeholder='Enter Age' name='Age' onChange={handleChange} />
            </div>
            <div className="inputs">
                <input type="text" placeholder='Enter Course' name='Course' onChange={handleChange} />
                <input type="text" placeholder='Enter Batch' name='Batch' onChange={handleChange} />
            </div>
            <div className="btnContainer">
            <div className="buttons"> <button onClick={handleCancel}>Cancel</button> </div>
            <div className="buttons"> <button onClick={handleSubmit}>Add New Student</button> </div>
            </div>

        </div>
    )
}

export default NewStudent