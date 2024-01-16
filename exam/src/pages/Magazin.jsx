import React from 'react'
import { useGlobalContext} from '../Context'
import search from '../assets/images/search.svg'
import plus from '../assets/images/plus.svg'
import { useState } from 'react'

export default function Magazin() {
  const {setStore,theme,addPage}=useGlobalContext()
  const id=new Date().getTime().toString().slice(-5,-1)
    const [input,setInput] = useState('');
    const [data,setData] = useState(JSON.parse(localStorage.getItem('data')) || []);
    const filteredResults = data.filter(
      (item) =>
        item.name && item.name.toString().toLowerCase().includes(input.trim().toLowerCase())
    );

const removeItem=(id)=>{
  const newData = data.filter((item) => item.id !== id);
  setData(newData);
  localStorage.setItem('data', JSON.stringify(newData));
}
  return (
    <div className=' container mx-auto h-screen'>
      <dir>
        <h1 className={`font-bold text-3xl mt-12 ${theme==='dark'? 'text-white':'text-black'}`}>Настройки магазинов</h1>
      </dir>
      <hr className=' border-zinc-200 border mt-8' />

   <div className='flex items-center gap-6  mt-9 mb-9 ml-9'>
      <form >
        <img src={search} alt="search" className='absolute ml-4 mt-5' />
        <input className={`px-12 py-4 rounded-2xl  border w-[700px]   focus:outline-none placeholder:font-semibold ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}
        type="text" 
        name='search'
         value={input}
        onChange={(e)=>setStore(e.target.value)}
        placeholder='Название магазина'
        />
      </form>
      <button onClick={addPage} className='flex gap-4 items-center text-white px-4 py-4 rounded-2xl font-semibold bg-blue-500'>
          <img src={plus} />
        Новый магазин
        </button>
      </div>
      <hr className=' border-zinc-200 border' />
      <div className='flex items-center gap-[300px] px-8 py-4 text-zinc-400 font-semibold'>
        <h1>Магазин</h1>
        <h1>Кол-во касс</h1>
        <h1>Действие</h1>
      </div>
      <hr className=' border-zinc-200 border' />  
      

      {filteredResults?.map((item,index)=> (
          <div key={index}
               className={`flex justify-between px-5 items-center w-full mt-10 border-none bg-gray-100 py-4 rounded-s-2xl rounded-e-2xl ${theme==='dark' ? 'bg-gray-700':'bg-slate-50'}`}>
              <h2 className='text-blue-500 font-semibold'>{item.name}</h2>
              <div>

                  <button className='px-2.5 py-2.5 rounded-lg bg-red-500' onClick={() => removeItem(item.id)}>
                      <svg className='' width="16" height="16" viewBox="0 0 16 16" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM11.7812 10.0625C11.9375 10.1875 11.9375 10.4375 11.7812 10.5938L10.5625 11.8125C10.4062 11.9688 10.1562 11.9688 10.0312 11.8125L8 9.75L5.9375 11.8125C5.8125 11.9688 5.5625 11.9688 5.40625 11.8125L4.1875 10.5625C4.03125 10.4375 4.03125 10.1875 4.1875 10.0312L6.25 8L4.1875 5.96875C4.03125 5.84375 4.03125 5.59375 4.1875 5.4375L5.4375 4.21875C5.5625 4.0625 5.8125 4.0625 5.96875 4.21875L8 6.25L10.0312 4.21875C10.1562 4.0625 10.4062 4.0625 10.5625 4.21875L11.7812 5.4375C11.9375 5.59375 11.9375 5.84375 11.7812 5.96875L9.75 8L11.7812 10.0625Z"
                              fill="white"/>
                      </svg>
                  </button>
              </div>


          </div>
      ))}
     
     
          
    </div>
    
    
  )
}
