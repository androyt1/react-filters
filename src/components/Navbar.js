import React from 'react'
import {GiShoppingCart} from 'react-icons/gi'
import { useSelector,useDispatch } from 'react-redux'
import { openCart } from '../redux/cartSlice'

const Navbar = () => { 

  const cart=useSelector(state=>state.cart.cart)  
  const dispatch=useDispatch() 
  
  return (
    <nav className='w-full h-[55px] bg-[#000080] flex justify-between items-center px-3 text-white'>
        <h4 className='text-xl font-semibold'>Androy Store</h4>
        <ul className=''>
            <li className='inline-block  ml-4 text-xs cursor-pointer font-semibold'>Home</li>
            <li className='inline-block  ml-4 text-xs cursor-pointer font-semibold'>Shop</li>
           <li className='inline-block  ml-4 text-xs cursor-pointer font-semibold '>
            <button className='flex bg-green-700 p-1' onClick={()=>dispatch(openCart())}><span className='text-xs'>{cart.length}</span><GiShoppingCart className='text-3xl' />
            </button></li>
        </ul>
    </nav>
  )
}

export default Navbar