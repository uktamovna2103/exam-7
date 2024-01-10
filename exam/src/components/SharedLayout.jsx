import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


export default function SharedLayout() {
  return (
    <div className='container mx-auto'>
     <div className=' rounded-3xl flex'>
       <div>
      <Navbar/>
      </div>
      <main>
            <Outlet/>
      </main>
     </div>
       
    </div>
  )
}

