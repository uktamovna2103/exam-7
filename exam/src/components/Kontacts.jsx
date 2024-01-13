import React from 'react'

export default function Kontacts() {
  return (
    <div className=' container mx-auto ml-3'>
          <div className='flex mt-8 gap-20'>
            <h1 className=' text-slate-500 font-semibold text-3xl'>Контакты</h1>
            <div className='w-full'>
                <div className='flex gap-9 '>
                <div>
                    <h1 className='text-zinc-500 font-semibold'>Телефоны</h1>
                    <input type="text" placeholder='+998 XX XXX XX XX' className='mt-3 px-5 w-80 py-4 rounded-2xl  bg-gray-100' />
                </div>
                <div>
                    
                    <input type="text" placeholder='+998 XX XXX XX XX' className='mt-9 px-5 w-80 py-4 rounded-2xl  bg-gray-100' />
                </div>
                </div>
                <div>
                    
                    <input type="text" placeholder='+998 XX XXX XX XX' className='mt-9 px-5 w-80 py-4 rounded-2xl  bg-gray-100' />
                </div>
                 <div className='flex gap-9 mt-8 '>
                <div>
                    <h1 className='text-zinc-500 font-semibold'>Facebook</h1>
                    <input type="text" placeholder='Название страницы' className='mt-3 px-5 w-80 py-4 rounded-2xl  bg-gray-100' />
                </div>
                <div>
                     <h1 className='text-zinc-500 font-semibold'>Instagram</h1>
                    <input type="text" placeholder='@ Юзернейм' className='mt-3 px-5 w-80 py-4 rounded-2xl  bg-gray-100' />
                </div>
                </div>
                <div className='flex gap-9 mt-8 '>
                <div>
                    <h1 className='text-zinc-500 font-semibold'>Telegram</h1>
                    <input type="text" placeholder='@ Юзернейм' className='mt-3 px-5 w-80 py-4 rounded-2xl  bg-gray-100' />
                </div>
                <div>
                     <h1 className='text-zinc-500 font-semibold'>Сайт</h1>
                    <input type="text" placeholder='Ссылка на сайт' className='mt-3 px-5 w-80 py-4 rounded-2xl  bg-gray-100' />
                </div>
                </div>
                </div>

    </div>
    </div>
  )
}
