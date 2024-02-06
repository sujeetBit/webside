import { useState } from 'react';
import {AiOutlineMenu, AiOutlineHome, AiOutlineRedEnvelope, AiOutlineProject, AiOutlineFileWord} from 'react-icons/ai'

const Nav = () => {
 const [nav, setNav] = useState(false);
 const Nav =()=>{
    setNav(!nav);
    console.log('Testing');
 };

  return (
    <div><span className=' text-gray-500 w-10'>
        <AiOutlineMenu onClick={Nav} className=' absolute top-4 right-4 z-[99] md:hidden'/>
        </span>
        {
            nav ?(
            <div className='fixed w-full h-screen bg-slate-100 flex flex-col justify-center items-start z-20'>
                <a onClick={Nav} href='#Home' className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                <AiOutlineHome size={20}/>
                <span className='pl-6'>Home</span>
                </a>
                <a onClick={Nav} href='#work' className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                <AiOutlineFileWord size={20}/>
                <span className='pl-6'>Work</span>
                </a>
                <a onClick={Nav} href='#project' className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                <AiOutlineProject size={20}/>
                <span className='pl-6'>Project</span>
                </a>
                <a onClick={Nav} href='contact' className='w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                <AiOutlineRedEnvelope size={20}/>
                <span className='pl-6'>Contact</span>
                </a>
            </div>
            ):(
                ''
            )}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a to='Home' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in  duration-200'>
                        <AiOutlineHome size={20}/>
                    </a>
                    <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in  duration-200'>
                        <AiOutlineFileWord size={20}/>
                    </a>
                    <a href='#project' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in  duration-200'>
                        <AiOutlineProject size={20}/>
                    </a>
                    <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in  duration-200'>
                        <AiOutlineRedEnvelope size={20}/>
                    </a>
                </div>
            </div>
    </div>
  );
};

export default Nav