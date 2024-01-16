import React from 'react'
import chek from '../assets/images/chek.svg'
import { useGlobalContext } from '../Context'

export default function Chek() {
  const {theme}=useGlobalContext()
  return (
    <div className=' flex container mx-auto'>
      <div className=' w-60'>
        <h1 className={` font-semibold text-3xl ${theme==='dark'? 'text-white':'text-slate-500'}`}>Чек</h1>
      </div>
      <div className=' flex gap-3'>
        <img className=' w-[300px]' src={chek}/>
        <img className=' w-[300px]' src={chek}/>
        <img className=' w-[300px]' src={chek}/>
      </div>
    </div>
  )
}
