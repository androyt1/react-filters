import React from 'react'
import {IoIosCloseCircle} from 'react-icons/io'

const ProductDetailsModal = ({close,open,product}) => {
  return (
    <div className={`w-full h-[100vh] flex justify-center items-center bg-[#000080cb] fixed top-0 left-0 ${open ? 'block':'hidden'}`}>
        <div className='w-[90%] md:w-[80%] bg-white h-[80vh] md:h-[90vh] px-3 flex flex-col justify-center items-center mt-6 overflow-y-auto'>
            <div className='w-full flex justify-center items-center  relative py-2 mt-10 md:mt-8'>
                <h4 className='text-xl md:text-3xl font-semibold'>Product's Details</h4>
                <IoIosCloseCircle className=' text-3xl text-[#000080] absolute right-0 cursor-pointer' onClick={close}/>
            </div>
           <div className='w-full h-full grid grid-cols-1 md:grid-cols-3'>
            <div className='md:col-span-2 flex justify-center items-center '>
            <div className='w-full overflow-auto flex justify-center items-center'>
            <img src={product.image} alt="" className='h-[50vh] md:h-[75vh] object-cover' />
            </div>
            </div>
            <div className='md:col-span-1 md:shadow-md shadow-slate-900 flex justify-start flex-col items-start px-3'>
                <span className='text-xl md:text-2xl font-semibold mt-5 mb-2'>{product.title}</span>
                <span className='text-md font-semibold  mb-2'>Category: {product.category}</span>
                <span className='text-md font-semibold  mb-2'>Price: ${product.price}</span>
                <span className='text-md font-semibold  mb-2'>Rate: {product.rating && product.rating.rate}</span>
                <span className='text-md font-semibold  mb-2'>Count: {product.rating && product.rating.count}</span>
                <span className='block text-xl mb-2'>Description </span>
                <span className='text-xs pb-4'>{product.description}</span>
            </div>           
           </div>
        </div>
    </div>
  )
}

export default ProductDetailsModal