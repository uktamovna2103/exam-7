import React from 'react'
import { Link} from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import setting from '../assets/images/setting.svg'
import user from '../assets/images/user.svg'






export default function Navbar() {
  return (
     <div className=' bg-blue-700'>
         <div className=' w-80 bg-slate-50'>
              <div className='w-96 p-8'>
                <img src={logo} />
              </div>
              <div>
                <img src={setting} />
              </div>
            <div>
                 <ul className=' border-zinc-700 text-left'>
                <Link to={"/"}><li className=' text-zinc-600 font-medium py-4 px-12 hover:text-blue-400 hover:bg-blue-100 '>Профиль</li></Link>
                <Link to={"/company"}><li className=' text-zinc-600 font-medium  py-4 px-12 hover:text-blue-400 hover:bg-blue-100  '>Компания</li></Link>
                <Link to={"/magazin"}><li className=' text-zinc-600 font-medium  py-4 px-12 hover:text-blue-400 hover:bg-blue-100  '>Магазины</li></Link>
                <Link to={"/kassa"}><li className=' text-zinc-600 font-medium  py-4 px-12 hover:text-blue-400 hover:bg-blue-100  '>Кассы</li></Link>
                <Link to={"/cheks"}><li className=' text-zinc-600 font-medium py-4 px-12 hover:text-blue-400 hover:bg-blue-100  '>Чеки</li></Link>
                <Link to={"/oplata"}><li className=' text-zinc-600 font-medium  py-4 px-12 hover:text-blue-400 hover:bg-blue-100  '>Валюты и оплата</li></Link>
                <Link to={"/tavar"}><li className=' text-zinc-600  font-medium py-4 px-12 hover:text-blue-400 hover:bg-blue-100 '>Товары</li></Link>
                
              </ul>
            </div>
             <div className='p-12 mt-28'>
                <img src={user} />
              </div>
         </div>
       </div>
           
         
         
        
  )
}
