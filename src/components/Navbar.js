import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-[55px] bg-slate-200 flex justify-between items-center px-3'>
        <h4 className='text-xl font-semibold'>Brand</h4>
        <ul>
            <li className='inline-block text-sm ml-4'>Home</li>
            <li className='inline-block text-sm ml-4'>Shop</li>
        </ul>
    </nav>
  )
}

export default Navbar