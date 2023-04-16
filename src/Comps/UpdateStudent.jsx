import React, { useContext } from 'react'
import Nav from './Nav';
import { useLocation, useNavigate } from 'react-router-dom'
import ContextData from './ContextAPI';

const UpdateStudent = () => {
    const index = useLocation().state.data;
    console.log(index);

    const dataContext = useContext(ContextData);
    // console.log(dataContext);

    const updateData = {
        Name: dataContext.entries[index].Name,
        Age: dataContext.entries[index].Age,
        Course: dataContext.entries[index].Course,
        Batch: dataContext.entries[index].Batch
    }
    const handleChange = (e) => {
        updateData[e.target.name] = e.target.value;
    }

    const navi = useNavigate();

    const handleSubmit = () => {
        dataContext.entries[index] = updateData;
        // navi('/student');    works eitherway
        navi(-1)
        console.log(dataContext);
    }

    const handleCancel = () => {
        navi(-1)
    }

    return (
        <div>
            <Nav />
            <br />
            <div className="inputs">
                <input type="text" placeholder={dataContext.entries[index].Name} name='Name' onChange={handleChange} />
                <input type="text" placeholder={dataContext.entries[index].Age} name='Age' onChange={handleChange} />
            </div>
            <div className="inputs">
                <input type="text" placeholder={dataContext.entries[index].Course} name='Course' onChange={handleChange} />
                <input type="text" placeholder={dataContext.entries[index].Batch} name='Batch' onChange={handleChange} />
            </div>
            <div className="btnContainer">
                <div className="buttons"> <button onClick={handleCancel}>Cancel</button> </div>
                <div className="buttons"> <button onClick={handleSubmit}>Update</button> </div>
            </div>
        </div>
    )
}

export default UpdateStudent