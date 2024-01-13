import React from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";
 
export function Rekvezit() {
  const { countries } = useCountries();
 
  return (
    <div className=' flex mt-8'>
      <div className=' w-60'>
        <h1 className=' text-slate-500 font-semibold text-3xl'>Реквизиты</h1>
       </div>
        <div>
         <div className=" flex gap-10">
              <div>
             <h1 className=" text-base font-semibold text-gray-500">Магазин имеет уникальные реквизиты</h1>
           <label for="Toggle4" className="inline-flex items-center p-1 cursor-pointer mt-4 bg-gray-100 rounded-2xl w-[375px] text-gray-800">
	      <input id="Toggle4" type="checkbox" className="hidden peer" />
	     <span className="px-20 text-gray-500 py-3 bg-white peer-checked:bg-gray-100 rounded-2xl">Да</span>
	        <span className="px-20 py-3 text-gray-500 bg-gray-100 peer-checked:bg-white rounded-2xl">Нет</span>
           </label>
        </div>
          <div>
                    <h1 className='text-zinc-500 font-semibold'>Юридическое название компании</h1>
                    <input type="text" placeholder='Введите название' className='mt-4 px-5 w-64 py-4 rounded-2xl  bg-gray-100' />
          </div>
         </div>
         <div>
                    <h1 className='text-zinc-500 font-semibold mt-8'>Юридический адрес</h1>
                    <input type="text" placeholder='Город, район, улица, дом' className='mt-4 px-5 w-[670px] py-4 rounded-2xl  bg-gray-100' />
          </div> 
          <div className=" flex gap-8">
              <div className="w-72">
       <Select
        className=" border rounded-2xl  bg-gray-100 pb-9 pt-4 mt-8 "
        placeholder="Select Country"
        selected={(element) =>
        element &&
        React.cloneElement(element, {
            disabled: true,
            className:
              "flex items-center  px-5 gap-2 pointer-events-none",
          })
        }
      >
        {countries.map(({ name, flags }) => (
          <Option key={name} value={name} className="flex items-center gap-2">
            <img
              src={flags.svg}
              alt={name}
              className=" h-5 w-5 rounded-full object-cover"
            />
            {name}
          </Option>
        ))}
      </Select>
              </div>
                <div>
                    <input type="text" placeholder='Введите название' className='mt-8 px-5 w-80 py-4 rounded-2xl  bg-gray-100' />
                 </div>
          </div>   
           <div>
                    <h1 className='text-zinc-500 mt-8 font-semibold'>Банковский счет</h1>
                    <div className=" rounded-2xl bg-gray-100 w-[680px] py-2 mt-4 pl-1">
                        <input type="text" placeholder='Введите банковский счет' className=' px-5 w-[670px] py-2 bg-gray-100' />
                        <input type="text" placeholder='Название банка и филиал' className=' border-t-2 px-5 w-[670px] py-2  bg-gray-100' />
                    </div>
                    <button className=' px-5 w-[680px] py-4 bg-gray-100 rounded-2xl text-gray-500 text-base font-semibold mt-8'>+ Добавить еще один банковский счет</button>
          </div>
                 
        </div>
       
      </div>
   
   
  );
}

