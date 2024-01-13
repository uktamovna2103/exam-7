import React from 'react'
import chek from '../assets/images/chek.svg'

export default function Chek() {
  return (
    <div className=' flex container mx-auto'>
      <div className=' w-60'>
        <h1 className=' text-slate-500 font-semibold text-3xl'>Чек</h1>
      </div>
      <div className=' flex gap-3'>
        <img className=' w-[300px]' src={chek}/>
        <img className=' w-[300px]' src={chek}/>
        <img className=' w-[300px]' src={chek}/>
      </div>
    </div>
  )
}
