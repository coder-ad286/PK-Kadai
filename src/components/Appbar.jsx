import React from 'react'
//ASSETS
import MainLogo from './../assets/images/main.png'
import { IoMdHome } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Appbar = () => {
    const navigate = useNavigate()
    return (
        <nav className='flex justify-between items-center rounded-xl bg-[#432F4A] p-2'>
            <div className=' flex text-white items-center'>
                <div className=' mx-1'>
                    <img src={MainLogo} alt="பல்லுயிர் களம்" className='w-12 md:w-6' />
                </div>
                <div className=' mx-1'>
                    <h2 className='font-bold'>பல்லுயிர்களம்</h2>
                </div>
            </div>
            <div className='px-2'>
                <button onClick={()=>navigate('/')}>
                    <IoMdHome size={25} color='white' />
                </button>
            </div>
        </nav>
    )
}

export default Appbar