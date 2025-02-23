import React from 'react'
import logo from '../../assets/logo.svg'

function Navbar() {
  return (
    <div className='w-full bg-[#05668D] h-[56px] flex items-center justify-between px-4'>

      <div className='flex items-center gap-1'>
        <img className='w-7' src={logo} alt="" />
        <span className='text-xl text-white font-medium'>ThingsBeat</span>
      </div>

      <div className='flex justify-center items-center gap-10'>
        <h1 className='text-base text-white font-normal'>About</h1>
        <h1 className='text-base text-white font-normal'>Docs</h1>
        <h1 className='text-base text-white font-normal'>Login</h1>
        <h1 className='cursor-pointer text-base  font-normal border border-white rounded px-4 py-1 text-white bg-[#05668d]  hover:bg-[#427AA1]'>SignUp</h1>
      </div>


    

    </div>
  )
}

export default Navbar