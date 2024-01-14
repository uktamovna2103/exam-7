import React from 'react'
import logo from '../assets/images/logo.svg'
import { useState } from 'react'

export default function Darkmode() {
  const [darkMode, setDarkMode] =useState(true)
  function toggleDarkMode(props) {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
  return (
   <nav className="grid grid-cols-2 w-full place-content-between items-center">
            <h4>Resume</h4>
            <img onClick={props.toggleDarkMode} 
                 className="self-left justify-self-end" 
                 src={logo} />
                 src={props.darkMode ? "./assets/toggle-icon-dark.svg" :  "./assets/toggle-icon-dark.svg"}
        </nav>
  )
}
