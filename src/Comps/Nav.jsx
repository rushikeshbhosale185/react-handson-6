import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
      <NavLink to={'/'}>HOME</NavLink> 
      <NavLink to={'/students'}>STUDENTS DATABASE</NavLink> 
      <NavLink to={'/contact'}>CONTACT US</NavLink> 
    </div>
  )
}

export default Nav