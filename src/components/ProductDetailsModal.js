import React from 'react'
import {IoIosCloseCircle} from 'react-icons/io'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Toaster } from 'react-hot-toast';
import { addCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux/es/exports';


const ProductDetailsModal = ({close,open,product}) => {

  const dispatch=useDispatch()
  // product.quantity=1

  return (
    <div className={`w-full h-[100vh] flex justify-center items-center bg-[#000080cb] fixed top-0 left-0 ${open ? 'block z-50':'hidden'}`}>
        <div className='w-[90%] md:w-[80%] bg-white h-[80vh] md:h-[90vh] px-3 flex flex-col justify-center items-center mt-6 overflow-y-auto'>
            <div className='w-full flex justify-center items-center  relative py-2 mt-10 md:mt-8'>
                <h4 className='text-xl md:text-3xl font-semibold uppercase'>Product's Details</h4>
                <IoIosCloseCircle className=' text-3xl md:text-4xl text-[#000080] absolute right-0 cursor-pointer' onClick={close}/>
            </div>
           <div className='w-full h-full grid grid-cols-1 md:grid-cols-3'>
            <div className='md:col-span-2 flex justify-center items-center '>
            <div className='w-full overflow-auto flex justify-center items-center'>
            <LazyLoadImage effect='blur' src={product.image} alt="" className='h-[50vh] md:h-[75vh] object-cover' />
            </div>
            </div>
            <div className='md:col-span-1 md:shadow-md shadow-slate-900 flex justify-start flex-col items-start px-3'>
                <span className='text-xl md:text-2xl font-semibold mt-5 mb-2'>{product.title}</span>
                <span className='text-md font-semibold  mb-2'>Category: {product.category}</span>
                <span className='text-md font-semibold  mb-2'>Price: ${product.price}</span>
                <span className='text-md font-semibold  mb-2'>Rate: {product.rating && product.rating.rate}</span>
                <span className='text-md font-semibold  mb-2'>Count: {product.rating && product.rating.count}</span>
                <span className='block text-xl mb-2'>Description </span>
                <span className='text-xs pb-2'>{product.description}</span>
                <div className='w-full pt-3 pb-5 '><button className='bg-[#000080] text-slate-50 text-xs py-2 px-6 md:px-10' onClick={()=>{dispatch(addCart(product))}}>Add to Cart</button></div>
                    < Toaster/>
            </div>           
           </div>
        </div>
    </div>  
  )
}

export default ProductDetailsModal