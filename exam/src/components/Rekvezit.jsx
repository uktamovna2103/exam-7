import React from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { useGlobalContext } from "../Context";
 
export function Rekvezit() {
  const { countries } = useCountries();

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
  
  const [bankAccounts, setBankAccounts] = useState(['', '']);

  const handleChange = (index, value) => {
    const updatedAccounts = [...bankAccounts];
    updatedAccounts[index] = value;
    setBankAccounts(updatedAccounts);
  };

  const addInput = () => {
    if(bankAccounts.length<3){
      setBankAccounts([...bankAccounts, '']);
    }

  };

  const removeInput = (index) => {
    if (bankAccounts.length > 2) {
      const updatedAccounts = [...bankAccounts];
      updatedAccounts.splice(index, 1);
      setBankAccounts(updatedAccounts);
    }
  };
  const addInput2 = () => {
    if(bankAccounts.length<2){
      setBankAccounts([...bankAccounts, '']);
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Bank Account Numbers:', bankAccounts);
  };
  const {theme}=useGlobalContext()



  const {
        davlat,
        setDavlat,
        name,
        setName,
        emailIndex,
        setEmailIndex,
        handleSubmit2,
        bank,
        setBank,
        addLocalStorage,
        checks,
        handlesubmit3
          

}=useGlobalContext()
 const handlesubmit2 = (e) => {
    e.preventDefault();
    
  };
  const handleChange2 = (index, value) => {
    const updatedAccounts = [...bankAccounts];
    updatedAccounts[index] = value;
    setBankAccounts(updatedAccounts);
  };
const removeInput2 = (index) => {
    if (bankAccounts.length > 1) {
      const updatedAccounts = [...bankAccounts];
      updatedAccounts.splice(index, 1);
      setBankAccounts(updatedAccounts);
    }
  };
 
  return (
    <div className=' flex mt-8'>
      <div className=' w-60'>
        <h1 className={` font-semibold text-3xl ${theme==='dark'? 'text-white':'text-slate-500'}`}>Реквизиты</h1>
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
                    <input type="text"
                     placeholder='Введите название'
                      value={name}
                           onChange={(e) => setName(e.target.value)}
                      className={`mt-4 px-5 w-64 py-4 rounded-2xl ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`} />
          </div>
         </div>
         <div>
                    <h1 className='text-zinc-500 font-semibold mt-8'>Юридический адрес</h1>
                    <input type="text"
                     placeholder='Город, район, улица, дом'
                     value={davlat}
                           onChange={(e) => setDavlat(e.target.value)}
                      className={`mt-4 px-5 w-[670px] py-4 rounded-2xl ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`} />
          </div> 
          <div className=" flex gap-8">
              <div className="w-72">
       <Select
        className={`border rounded-2xl pb-9 pt-4 mt-8 ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`}
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
                    <input type="text"
                     placeholder='Введите название' 
                      value={emailIndex}
                               onChange={(e) => setEmailIndex(e.target.value)}
                     className={`mt-8 px-5 w-80 py-4 rounded-2xl ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}`} />
                 </div>
          </div>   
           <div>
                    <h1 className='text-zinc-500 mt-8 mb-8 font-semibold'>Банковский счет</h1>
                       <form onSubmit={handleSubmit2} className='w-[655px]'>
        {bankAccounts.map((account, index) => (
          <div key={index} className='relative'>
            <input
              type="text"
              className={`border w-[650px] rounded-2xl px-4 py-4 ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'} focus:outline-none placeholder:font-normal placeholder:text-xl placeholder:text-gray-400`}
              placeholder='Введите банковский счет'
              value={account}
              onChange={(e) => handleChange2(index, e.target.value)}
            />
            {index >= 1 && (
              <button
                type="button"
                className={`absolute top-1/2 right-4 transform -translate-y-1/2 border px-3 py-1 ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}  rounded-2xl text-blue-500 font-semibold text-xl hover:border-blue-600`}
                onClick={() => removeInput2(index)}
              >
                <h1 className=" text-red-500">x</h1>
              </button>
              
            )}
             <input type="text" className={`border hover:border-blue-600 focus:outline-none w-full rounded-t-2xl  rounded-b-2xl px-4 py-4  placeholder:font-semibold placeholder:text-xl placeholder:text-gray-400 ${theme==='dark' ? 'bg-gray-700':'bg-slate-100'}`}
                        placeholder='Название банка и филиал'
                                value={bank}
                                onChange={(e) => setBank(e.target.value)}
                        />
          </div>
        ))}
        <button
          type="button"
          className={`mt-8 w-[650px] px-4 py-4 ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'}  rounded-2xl text-gray-400 font-semibold text-xl hover:border-blue-600 border`}
          onClick={addInput2}
        >
          + Добавить еще один банковский счет
        </button>
        <button type="submit" className={`border w-[650px] px-3 py-4 ${theme==='dark'? 'bg-zinc-700':'bg-gray-100'} mt-4  rounded-2xl text-blue-500 font-semibold text-xl hover:border-blue-600`}>
          Отправить
        </button>
      </form>
                  
          </div>
                 
        </div>
       
      </div>
   
   
  );
}

