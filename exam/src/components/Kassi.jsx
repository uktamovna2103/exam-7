import React, { useState } from 'react'

import { useGlobalContext } from '../Context'

export default function Kassi() {
    const[enabled,setEnabled]=useState(false);

    const {theme}=useGlobalContext()
 return (
    <div className=' flex container mx-auto'>
      <div className=' w-64'>
        <h1 className={` font-semibold text-3xl ${theme==='dark'? 'text-white':'text-slate-500'}`}>Кассы</h1>
      </div>
      <div className=''>
       <hr />
       <div className={`flex gap-96 py-5 px-3  ${theme==='dark'? 'text-white':'text-black'}`}>
        <h1>Касса</h1>
        <h2>Статус</h2>
       </div>
       <hr />
        <div className={` flex mt-4 w-[600px]   py-4 px-1 rounded-2xl ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}>
                    <h1 className=' ml-3 mt-1 text-zinc-500 text-base font-medium'>Cashbox Riviera</h1>
                   
                   
                    <div className=' ml-96'>


                         <label className=" relative">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-[70px] h-9 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-blue-500"
                    ></div>
                    
                  </label>
                    </div>
                 
        </div>
        <hr className=' mt-5' />
      </div>
    </div>
 )
}
