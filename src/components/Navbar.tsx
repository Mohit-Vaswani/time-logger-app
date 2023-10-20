import React from 'react'
import { BiSolidTimer } from "react-icons/bi";
import { ModeToggle } from './ToggleButton';
import { LoginBtn } from './ui/loginbtn';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <h2 className='text-2xl flex items-center gap-2'> <BiSolidTimer /> Time</h2>
      <div className='flex gap-3'>
        <LoginBtn />
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar