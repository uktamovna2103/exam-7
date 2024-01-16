import React from 'react'
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import SharedLayout from './components/SharedLayout'
import Home from './pages/Home'
import Company from './pages/Company'
import Magazin from './pages/Magazin'
import Kassa from './pages/Kassa'
import Cheks from './pages/Cheks'
import Oplata from './pages/Oplata'
import Tavar from './pages/Tavar'
import Error from './pages/Error'
import Magazine from './pages/magazine'
import { useGlobalContext } from './Context'
import { useEffect } from 'react'

export default function App() {
  const { user,list,theme } = useGlobalContext();
  useEffect(()=>{
  localStorage.setItem('users', JSON.stringify(user))
  localStorage.setItem('lists', JSON.stringify(list))

},[user,list])
  return (
      <>
   <div className={`${theme==="light" ? "bg-white" : "bg-zinc-800"}`}>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/magazin' element={<Magazin/>}/>
      <Route path='/kassa' element={<Kassa/>}/>
      <Route path='/cheks' element={<Cheks/>}/>
      <Route path='/oplata' element={<Oplata/>}/>
      <Route path='/tavar' element={<Tavar/>}/>
      <Route path='/magazine' element={<Magazine/>}/>
      <Route path='*' element={<Error/>}/>
      
      </Route>
    </Routes>
   
   </div>

   </>
  )
}
