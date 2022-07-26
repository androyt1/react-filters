import React from 'react'
import {AiOutlineClose,AiFillMinusCircle,AiFillDelete} from 'react-icons/ai'
import {useSelector,useDispatch} from 'react-redux'
import { closeCart,removeFromCart,incrementQuantity,decrementQuantity} from '../redux/cartSlice'
import {BsFillPlusCircleFill} from 'react-icons/bs'

const CartModal = () => {
    const dispatch=useDispatch()
    const open=useSelector(state=>state.cart.open) 
    const cart=useSelector(state=>state.cart.cart)

    const addition=(acc,currentValue)=>{
        return acc + currentValue.quantity * currentValue.price 
    }
    const total=cart.reduce(addition,0)

  return (
    <div className={`w-full h-[100vh] flex justify-center items-start fixed top-0 left-0 z-50 bg-[#000080cb] ${open ? 'block z-50':'hidden'}`}>
        <AiOutlineClose className='text-white  text-3xl absolute right-0 md:right-[100px] top-[30px] cursor-pointer' onClick={()=>dispatch(closeCart())}/>
        <div className='w-[90%] md:w-[75%] h-[80vh] bg-white mt-20 overflow-y-auto'>
            <div className='w-full flex justify-center items-center border-b-2 border-slate-600'>
                <h3 className='text-3xl py-1'>Cart Items <span className='text-xl font-thin font-serif'>$ {total.toFixed(2)}</span></h3>
            </div>
            <div className='w-full p-3 h-full'>
                {cart.length < 1 && <h4 className='text-md text-center'>Sorry Cart is Empty</h4>}
                {cart.length > 0 && cart.map(item=>(
                <div key={item.id} className='grid grid-cols-6 gap-y-3'>
                   <div className='flex justify-start items-center col-span-1'> <img src={item.image} className='h-[55px]' alt="" /></div>
                   <div className='flex justify-center items-center  col-span-1'> <span className='text-xs font-semibold'><AiFillDelete className='text-2xl cursor-pointer' onClick={()=>dispatch(removeFromCart(item))}/></span></div>
                   <div className='flex justify-center items-center col-span-2 '><span className='text-xs font-thin'>${item.price}  | {item.price * item.quantity}</span></div>

                   <div className='flex justify-evenly items-center col-span-2'>
                    <button className='text-xs font-semibold border-2 border-slate-300 py-1 px-2 cursor-pointer rounded-full' onClick={()=>{dispatch(incrementQuantity(item))}}><BsFillPlusCircleFill className='text-xl' /></button>
                    <div className='text-xs font-semibold border-0 border-slate-200 py-1 px-2'>{item.quantity}</div>
                    <button className='text-xs font-semibold border-2 border-slate-300 py-1 px-2 cursor-pointer rounded-full' onClick={()=>{
                        item.quantity > 1 ?  dispatch(decrementQuantity(item)):dispatch(removeFromCart(item))
                        }}><AiFillMinusCircle className='text-xl' /></button>
                   </div>
                </div> 
                ))}
            </div> 
        </div>
    </div>
  )
}

export default CartModal