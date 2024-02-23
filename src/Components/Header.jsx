import React, { useState } from 'react'
import akm from '../assets/akm.png'

import Navlink from './Navlink'
import {MdMenu,MdClose} from 'react-icons/md'

function Header() {

    const [menu,setmenu]=useState(false);
    const togglemenu= ()=>setmenu(!menu)
  return (
    <div>
       <nav className=' fixed z-20 w-full px-1 py-1 backdrop-blur-lg bg-white/30  text-black text-lg md:px-20 border-b-0 border-gray-200 shadow-md font-bold' > 
<div className='flex justify-between m-auto px-5 '>
        {/* logo */}
        <div>
            <p className='  md:flex  cursor-pointer'>
              <img src={akm} alt="akm" width="80"  className=''/></p>
        </div>
        {/* navlinks */}
        <div>
            <Navlink contstyle={"hidden md:flex gap-x-10 pt-3 "} />
        </div>
    {/* nav for Mobile */}
  
    <Navlink contstyle={`${menu?"fixed flex flex-col top-10 mt-5  bg-white  text-black font-extrabold left-0  transition-all duration-300 gap-y-12   shadow-md  w-full   p-12 text-xl ":"fixed flex flex-col top-20  transition-all duration-400 -left-[100%]"}`} togglemenu={togglemenu}/>
   
        {/* mobilenav button */}
        <div className='mt-21'>
            {!menu?(<MdMenu className='p-1 hover:text-orange-700  mt-3  cursor-pointer w-8 h-8 md:hidden ring-1 ring-stone-950 rounded-full '
                     onClick={togglemenu}/>)
:
(<MdClose className='p-1 hover:text-orange-700  mt-3 cursor-pointer w-8 h-8 md:hidden ring-1 ring-stone-950 rounded-full'  onClick={togglemenu} />)}
        </div>
        </div>    
       </nav>
    </div>
  )
}

export default Header
