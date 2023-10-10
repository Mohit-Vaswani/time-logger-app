import React from 'react'
import {BiSolidTimer} from "react-icons/bi";
import { Button } from './ui/button'
import { ModeToggle } from './ToggleButton';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
        <h2 className='text-2xl flex items-center gap-2'> <BiSolidTimer/> Time</h2>
        <div className='flex gap-3'>
        <Button>Logout</Button>
        <ModeToggle/>
        </div>
    </nav>
  )
}

export default Navbar