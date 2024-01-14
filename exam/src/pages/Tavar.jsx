import React from 'react'
import Darkmode from '../components/Darkmode'
import { useState } from 'react'

export default function Tavar() {
  const [darkMode, setDarkMode] =useState(true)
  return (
    <div>
      <div className={`h-full w-full mx-auto py-2 
                    ${darkMode ? "dark" : "light"}`}
    ></div>
      <Darkmode
      darkMode={darkMode} 
      toggleDarkMode={toggleDarkMode} 
/>
     
      
    </div>
  )
}
