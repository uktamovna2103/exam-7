import React from 'react'
import { Link} from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import setting from '../assets/images/setting.svg'
import user from '../assets/images/user.svg'
import { useGlobalContext } from '../Context'






export default function Navbar() {
  const {ToggleTheme,theme}=useGlobalContext()
  return (
     <div className=' relative'>
         <div className={`w-80  fixed ${theme==='dark'?'bg-zinc-700':'bg-slate-50'}`}>
            
              <div className={`w-96 p-8 gap-12 flex ${theme==='dark'? 'text-zinc-600':'text-white'}`}>
                <img src={logo} />
                <button className={`border p-3 rounded-xl ${theme==='dark'?'bg-zinc-100':'bg-blue-500'}`} onClick={ToggleTheme}>{theme === 'light' ? 'Dark mode' : 'Light mode'}</button>
              </div>
              <div>
                
              </div>
              <div>
                <img src={setting} />
              </div>
            <div>
                 <ul className={`border-zinc-700 text-left ${theme==='dark'? 'text-white':'text-zinc-600'}`}>
                <Link to={"/"}><li className=' font-medium py-4 px-12 hover:text-blue-400 hover:bg-blue-100 '>Профиль</li></Link>
                <Link to={"/company"}><li className='  font-medium  py-4 px-12 hover:text-blue-400 hover:bg-blue-100  '>Компания</li></Link>
                <Link to={"/magazin"}><li className='  font-medium  py-4 px-12 hover:text-blue-400 hover:bg-blue-100  '>Магазины</li></Link>
                <Link to={"/kassa"}><li className=' font-medium  py-4 px-12 hover:text-blue-400 hover:bg-blue-100  '>Кассы</li></Link>
                <Link to={"/cheks"}><li className='  font-medium py-4 px-12 hover:text-blue-400 hover:bg-blue-100  '>Чеки</li></Link>
                <Link to={"/oplata"}><li className='font-medium  py-4 px-12 hover:text-blue-400 hover:bg-blue-100  '>Валюты и оплата</li></Link>
                <Link to={"/tavar"}><li className='font-medium py-4 px-12 hover:text-blue-400 hover:bg-blue-100 '>Товары</li></Link>
                
              </ul>
            </div>
             <div className='p-12 mt-28'>
                <img src={user} />
              </div>
         </div>
       </div>
           
         
         
        
  )
}
