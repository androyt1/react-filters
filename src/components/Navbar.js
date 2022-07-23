import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-[55px] bg-[#000080] flex justify-between items-center px-3 text-white'>
        <h4 className='text-xl font-semibold'>Androy Store</h4>
        <ul>
            <li className='inline-block  ml-4 text-xs cursor-pointer font-semibold'>Home</li>
            <li className='inline-block  ml-4 text-xs cursor-pointer font-semibold'>Shop</li>
        </ul>
    </nav>
  )
}

export default Navbar