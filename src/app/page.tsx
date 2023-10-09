import React from 'react'
import Navbar from '@/components/Navbar'
import Calendar from '@/components/Calendar'
import Logs from '@/components/Logs'
import { NewLog } from '@/components/NewLog'

const page = () => {
  return (
    <div className='p-5 space-y-10'>
      <Navbar/>
      <NewLog/>
      <Calendar/>
      <Logs/>
    </div>
  )
}

export default page