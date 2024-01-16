import React, { useState } from 'react'
import left from '../assets/images/left.svg'
import { useGlobalContext } from '../Context'
import Kontacts from '../components/Kontacts';
import Chek from '../components/Chek';
import Kassi from '../components/Kassi';
import { Rekvezit } from '../components/Rekvezit';
import { Link } from 'react-router-dom';


export default function Magazine() {
    const {addPage2,theme}=useGlobalContext()
    const [enabled2,setEnabled2] = useState(false);
    const[enabled,setEnabled]=useState(false);
    const[enabled3,setEnabled3]=useState(false);
    const[enabled4,setEnabled4]=useState(false);
    const[enabled5,setEnabled5]=useState(false);
    const[enabled6,setEnabled6]=useState(false);
    const[enabled7,setEnabled7]=useState(false);




    const {
        color2,
        toggleColor1,
        toggleColor2,
        phoneNumbers,
        handlesubmit ,
        addInput,
        handleChange,
        removeInput,
        handlesubmit2,
        removeInput2 ,
        addInput2,
        handleChange2,
        bankAccounts,
        setStore,
        store,
        handleSave,
        kvadrat, 
        setKvadrat,
        davlat,
        setDavlat,
        telegramUsername,
        setTelegramUsername,
        InstagramUsername,
        setInstagramUsername,
        facebookUsername,
        setFacebookUsername,
        siteLink,
        setSiteLink,
        name,
        setName,
        emailIndex,
        setEmailIndex,
        bank,
        setBank,
        addLocalStorage,
        checks,
        handlesubmit3
          

}=useGlobalContext()
    

  return (
    <div className='container mx-auto ml-8'>
        <div className='flex  gap-64 mt-11 mb-8'>
            <div className='flex items-center gap-4  '>
                
            <Link to={'/magazin'}>
              <button onClick={addPage2} className='px-3.5 py-2.5 bg-slate-100 border-none rounded-full'>
            <img  src={left} />
             </button>
            </Link>
            
            
            <h1 className={`font-semibold text-4xl ${theme==='dark'? 'text-white':' text-zinc-900'}`}><span className='text-gray-200 '>Магазин</span> Store Riviera</h1>
            </div>
            <div className='flex gap-4'>
            <button className={`px-6 py-4 text-zinc-500 font-medium bg-gray-100 rounded-2xl ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}>Сбросить</button>
            <button disabled={!checks} onClick={addLocalStorage} className='px-5 py-4 text-white  rounded-2xl bg-blue-500'>Сохранить</button>
            </div>

        </div>
        <hr/>
        <div>
        <div className='flex mt-8 gap-20'>
            <h1 className={` text-slate-500 font-semibold text-3xl  ${theme==='dark'? 'text-white':'text-slate-500'}`}>Основные</h1>
            <div className='w-full'>
                <form action="" onSubmit={handlesubmit3}>
                <div className='flex gap-9 '>
                <div>
                    <h1 className='text-zinc-500 font-semibold'>Наименование</h1>
                    <input type="text"
                     placeholder='Наименование' 
                      value={store}
                      onChange={(e)=>{setStore(e.target.value)}}
                     className={`mt-3 px-5 w-80 py-4 rounded-2xl  bg-gray-100 ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}/>
                </div>
                <div>
                    <h1 className='text-zinc-500 font-semibold'>Квадратура</h1>
                    <input type="text"
                     placeholder='Квадратура'
                     value={kvadrat}
                     onChange={(e) => setKvadrat(e.target.value)}
                    className={`mt-3 px-5 w-80 py-4 rounded-2xl  bg-gray-100 ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}  />
                </div>
                </div>
               </form>

            <div className=' mt-8'>
            <h1 className=' font-semibold text-lg text-zinc-500'>Режим работы</h1>
            <div>
                <div className={`flex mt-4 w-[680px]  py-4 px-1 rounded-2xl  ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}>
                    <h1 className=' ml-3 mt-1 text-zinc-500 text-base font-medium'>Понедельник</h1>
                    <hr className=' rotate-90  border-gray-300 w-16 mt-4' />
                    <div className=' flex gap-8'>
                    <h1 className=' text-gray-400 text-base mt-1'>Открытие: 8:00</h1>
                    <h1 className=' text-gray-400 text-base mt-1'>Закрытие: 20:00</h1>
                    </div>
                    <div className=' ml-24'>


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
                 <div className={`flex mt-4 w-[680px]  py-4 px-1 rounded-2xl  ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}>
                    <h1 className=' ml-3 mt-1 px-5 text-zinc-500 text-base font-medium'>Вторник</h1>
                    <hr className=' rotate-90  border-gray-300 w-16 mt-4' />
                    <div className=' flex gap-8'>
                    <h1 className=' text-gray-400 text-base mt-1'>Открытие: 8:00</h1>
                    <h1 className=' text-gray-400 text-base mt-1'>Закрытие: 20:00</h1>
                    </div>
                    <div className=' ml-24'>


                         <label className=" relative">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled2}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled2(!enabled2);
                        }}
                        className="w-[70px] h-9 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-blue-500"
                    ></div>
                    
                  </label>
                    </div>
                 
                </div>
                <div className={`flex mt-4 w-[680px]  py-4 px-1 rounded-2xl  ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}>
                    <h1 className=' ml-3 mt-1 px-7 text-zinc-500 text-base font-medium'>Среда</h1>
                    <hr className=' rotate-90  border-gray-300 w-16 mt-4' />
                    <div className=' flex gap-8'>
                    <h1 className=' text-gray-400 text-base mt-1'>Открытие: 8:00</h1>
                    <h1 className=' text-gray-400 text-base mt-1'>Закрытие: 20:00</h1>
                    </div>
                    <div className=' ml-24'>


                         <label class=" relative">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled3}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled3(!enabled3);
                        }}
                        className="w-[70px] h-9 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-blue-500"
                    ></div>
                    
                  </label>
                    </div>
                 
                </div>
                <div className={`flex mt-4 w-[680px]  py-4 px-1 rounded-2xl  ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}>
                    <h1 className=' mt-1 px-7 text-zinc-500 text-base font-medium'>Четверг</h1>
                    <hr className=' rotate-90  border-gray-300 w-16 mt-4' />
                    <div className=' flex gap-8'>
                    <h1 className=' text-gray-400 text-base mt-1'>Открытие: 8:00</h1>
                    <h1 className=' text-gray-400 text-base mt-1'>Закрытие: 20:00</h1>
                    </div>
                    <div className=' ml-24'>


                         <label class=" relative">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled4}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled4(!enabled4);
                        }}
                        className="w-[70px] h-9 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-blue-500"
                    ></div>
                    
                  </label>
                    </div>
                 
                </div>
                <div className={`flex mt-4 w-[680px]  py-4 px-1 rounded-2xl  ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}>
                    <h1 className='mt-1 px-7 text-zinc-500 text-base font-medium'>Пятница</h1>
                    <hr className=' rotate-90  border-gray-300 w-16 mt-4' />
                    <div className=' flex gap-8'>
                    <h1 className=' text-gray-400 text-base mt-1'>Открытие: 8:00</h1>
                    <h1 className=' text-gray-400 text-base mt-1'>Закрытие: 20:00</h1>
                    </div>
                    <div className=' ml-24'>


                         <label class=" relative">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled5}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled5(!enabled5);
                        }}
                        className="w-[70px] h-9 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-blue-500"
                    ></div>
                    
                  </label>
                    </div>
                 
                </div>
                <div className={`flex mt-4 w-[680px]  py-4 px-1 rounded-2xl  ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}>
                    <h1 className=' px-7 mt-1 text-zinc-500 text-base font-medium'>Суббота</h1>
                    <hr className=' rotate-90  border-gray-300 w-16 mt-4' />
                    <div className=' flex gap-8'>
                    <h1 className=' text-gray-400 text-base mt-1'>Открытие: 8:00</h1>
                    <h1 className=' text-gray-400 text-base mt-1'>Закрытие: 20:00</h1>
                    </div>
                    <div className=' ml-24'>


                         <label class=" relative">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled6}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled6(!enabled6);
                        }}
                        className="w-[70px] h-9 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-blue-500"
                    ></div>
                    
                  </label>
                    </div>
                 
                </div>
                <div className={`flex mt-4 w-[680px]  py-4 px-1 rounded-2xl  ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}>
                    <h1 className=' mt-1 px-2 ml-2 text-zinc-500 text-base font-medium'>воскресенье</h1>
                    <hr className=' rotate-90  border-gray-300 w-16 mt-4' />
                    <div className=' flex gap-8'>
                    <h1 className=' text-gray-400 text-base mt-1'>Открытие: 8:00</h1>
                    <h1 className=' text-gray-400 text-base mt-1'>Закрытие: 20:00</h1>
                    </div>
                    <div className=' ml-24'>


                         <label class=" relative">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled7}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled7(!enabled7);
                        }}
                        className="w-[70px] h-9 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-blue-500"
                    ></div>
                    
                  </label>
                    </div>
                 
                </div>
            </div>
        </div>
            </div>
        </div>
        <hr className=' mt-8 mb-8' />
        <Kassi/>
        <hr className=' mt-8 mb-8' />
        <Chek/>
        <hr className=' mt-8 mb-8' />
        <Kontacts/>
        <hr className=' mt-8 mb-8' />
        <Rekvezit/>
       
        </div>
    </div>
  )
}
