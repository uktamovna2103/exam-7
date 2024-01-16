import React, { useState } from 'react'
import { useGlobalContext } from '../Context'

export default function Kontacts() {
 
    const {
        phoneNumbers,
        handlesubmit ,
        addInput,
        theme,
        handleChange,
        removeInput,
        telegramUsername,
        setTelegramUsername,
        InstagramUsername,
        setInstagramUsername,
        facebookUsername,
        setFacebookUsername,
        siteLink,
        setSiteLink,
}=useGlobalContext()



    
    
  return (
    <div className=' container mx-auto ml-3'>
          <div className='flex mt-8 gap-20'>
            <h1 className={` font-semibold text-3xl ${theme==='dark'? 'text-white':'text-slate-500'}`}>Контакты</h1>
            <div className='w-full'>
                <div className='flex gap-9 '>
                <div>
                    <h1 className='text-zinc-500 font-semibold'>Телефоны</h1>
                     <form action="" className='w-180' onSubmit={handlesubmit}>
                <div className='flex gap-8'>
                {phoneNumbers.map((phoneNumber, index) => (
          <div key={index} className='relative'>
            <input
              type="text"
              className={`border w-[320px] px-4 py-4 focus:outline-none rounded-s-2xl rounded-e-2xl placeholder:font-semibold text-xl hover:border-blue-600  ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}
              placeholder={`+998 (--) --- -- -- `}
              value={phoneNumber}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            {index === 1 && (
              <button
                type="button"
                className='absolute top-2 right-2 px-4 py-4 '
                onClick={() => removeInput(index)}
              >
                <img src={deleteIcon} alt="delete" />
              </button>
            )}
          </div>
        ))}
                </div>
                    <button  onClick={addInput} className={`border w-[320px] px-3 py-4  mt-4 rounded-s-2xl rounded-e-2xl text-blue-500 font-semibold text-xl hover:border-blue-600 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}>
                        + Добавить телефон
                   </button>
                </form>
                     
                </div>
                
                </div>
                
                 <div className='flex gap-9 mt-8 '>
                <div>
                    <h1 className='text-zinc-500 font-semibold'>Facebook</h1>
                    <input type="text"
                     placeholder='Название страницы'
                        value={facebookUsername}
                               onChange={(e) => setFacebookUsername(e.target.value)}
                      className={`mt-3 px-5 w-80 py-4 rounded-2xl  ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}  />
                </div>
                <div>
                     <h1 className='text-zinc-500 font-semibold'>Instagram</h1>
                    <input type="text"
                     placeholder='@ Юзернейм'
                       value={InstagramUsername}
                               onChange={(e) => setInstagramUsername(e.target.value)}
                      className={`mt-3 px-5 w-80 py-4 rounded-2xl  ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}  />
                </div>
                </div>
                <div className='flex gap-9 mt-8 '>
                <div>
                    <h1 className='text-zinc-500 font-semibold'>Telegram</h1>
                    <input type="text"
                     placeholder='@ Юзернейм'
                     value={telegramUsername}
                           onChange={(e) => setTelegramUsername(e.target.value)}
                      className={`mt-3 px-5 w-80 py-4 rounded-2xl  ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}  />
                </div>
                <div>
                     <h1 className='text-zinc-500 font-semibold'>Сайт</h1>
                    <input type="text" 
                    placeholder='Ссылка на сайт'
                    value={siteLink}
                               onChange={(e) => setSiteLink(e.target.value)}
                     className={`mt-3 px-5 w-80 py-4 rounded-2xl  ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`} />
                </div>
                </div>
                </div>

    </div>
    </div>
  )
}
