import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-[55px] bg-slate-200 flex justify-between items-center px-3'>
        <h4 className='text-xl font-semibold'>Brand</h4>
        <ul>
            <li className='inline-block  ml-4 text-xs cursor-pointer font-semibold'>Home</li>
            <li className='inline-block  ml-4 text-xs cursor-pointer font-semibold'>Shop</li>
        </ul>
    </nav>
  )
}

export default Navbar