import React from 'react'
import {BiSolidTimer} from "react-icons/bi";
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
        <h2 className='text-2xl flex items-center gap-2'> <BiSolidTimer/> Time</h2>
        <Button>Logout</Button>
    </nav>
  )
}

export default Navbar