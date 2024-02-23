import React from 'react'
import { NavLink } from 'react-router-dom'


function Navlink({contstyle,togglemenu }) {
  return (
    <>
<nav className={`${contstyle}`}>
<NavLink to={'/'}><div className='flex justify-center items-center hover:bg-gray-200  pl-2  pr-2 rounded-md border-b-2 border-gray-200 md:border-b-0' onClick={togglemenu} >Home</div> </NavLink>
<NavLink to={'/course'}><div className='flex justify-center items-center  hover:bg-gray-200  pl-2  pr-2 rounded-md border-b-2 border-gray-200 md:border-b-0 ' onClick={togglemenu}>Course</div> </NavLink>
<NavLink to={'/contact'}><div className='flex justify-center items-center   hover:bg-gray-200  pl-2  pr-2 rounded-md border-b-2 border-gray-200 md:border-b-0' onClick={togglemenu}>Contact</div> </NavLink>
<NavLink to={'/about'}><div className='flex justify-center items-center   hover:bg-gray-200  pl-2  pr-2 rounded-md border-b-2 border-gray-200 md:border-b-0' onClick={togglemenu}>About Us</div> </NavLink>

</nav> 
    </>
  )
}

export default Navlink
