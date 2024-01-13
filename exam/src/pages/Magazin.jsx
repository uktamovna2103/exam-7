import React from 'react'
import { useGlobalContext} from '../Context'
import search from '../assets/images/search.svg'
import plus from '../assets/images/plus.svg'

export default function Magazin() {
  const {setStore,addPage}=useGlobalContext()
  return (
    <div className=' container mx-auto'>
      <dir>
        <h1 className=' font-bold text-3xl mt-12'>Настройки магазинов</h1>
      </dir>
      <hr className=' border-zinc-200 border mt-8' />

   <div className='flex items-center gap-6  mt-9 mb-9 ml-9'>
      <form >
        <img src={search} alt="search" className='absolute ml-4 mt-5' />
        <input className='px-12 py-4 rounded-2xl  border w-[700px]  bg-gray-100 focus:outline-none placeholder:font-semibold'
        type="text" 
        name='search'
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
   
     
     
          
    </div>
    
    
  )
}
