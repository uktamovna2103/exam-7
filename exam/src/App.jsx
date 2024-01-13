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
import Darkmode from './components/Darkmode'

export default function App() {
  return (
      <>
   
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
    <div className="flex justify-center items-center h-screen">
      <Darkmode />
    </div>
   

   </>
  )
}
