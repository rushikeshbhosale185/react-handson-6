import React, { useContext } from 'react'
import Nav from './Nav'
import ContextData from './ContextAPI'
import { Link, useNavigate } from 'react-router-dom'

const Students = () => {
    const dataContext = useContext(ContextData);
    // console.log(dataContext);
    const navi = useNavigate();
    return (
        <>
            <Nav />
            <div className="addStudent">
                <span><h1>Student Details</h1></span>
                <span><button onClick={()=>{navi('/newstudent')}}>Add New Student</button> </span>
            </div>
            <table>
                <thead className='thead'>
                    <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Course</td>
                    <td>Batch</td>
                    <td>Change</td>
                    </tr> 
                </thead>  
            {dataContext.entries.map((item, index) => {
                return (
                    <tbody key={index}>
                <tr>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Course}</td>
                    <td>{item.Batch}</td>
                    <td className='feild'> <Link to={"/updatestudent"} state={{data:index}}>Edit</Link></td>
                </tr> 
                </tbody>
            )
        })}
            </table>
    
        </>
    )
}

export default Students