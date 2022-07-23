import {useEffect,useState,useCallback} from 'react'
import { getProducts,getCategories} from '../util/api'

const Home = () => {

    const[products,setProducts]=useState([])
    const[results,setResults]=useState([])
    const[categories,setCategories]=useState([])
    const[search,setSearch]=useState('')

    useEffect(()=>{
        getProducts()
        .then(json=>{
            setProducts(json)
            setResults(json)
        })
    },[])
 
    useEffect(()=>{
        getCategories()
        .then(json=>{
            setCategories(json)
        })
    },[])

    const handleFilter=useCallback(()=>{           
       let stuff= results.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()))
       setProducts(stuff)     
    },[results,search])

    const loadProductByCategory=(category)=>{       
        let stuff=results.filter(product=>product.category===category)
        setProducts(stuff)
    }

    const loadProductByPrice=(x,y)=>{
        let stuff=results.filter(product=>product.price >=x && product.price <=y)
        setProducts(stuff)
    } 
    
    const loadAllProducts=()=>{
        setProducts(results)
    }

    useEffect(()=>{
        handleFilter() 
    },[search, handleFilter])
   

  return (
    <div className='w-full min-h-[calc(100vh-55px)] bg-slate-300'> 
        
        <div className='w-full  whitespace-nowrap py-1 overflow-x-scroll md:overflow-hidden  md:flex md:justify-center md:items-center'>  
        <button className='py-1 px-6 md:px-10 text-xs font-semibold   bg-slate-200 mx-3 md:mx-6'  onClick={loadAllProducts}>All</button>
                
            { 
                categories && categories.map((category,index)=>(
                <button className='py-1 px-6 md:px-10 text-xs font-semibold   bg-slate-200 mx-3 md:mx-6' key={index} onClick={()=>loadProductByCategory(category)}>{category}</button>
                ))
            }
        </div>
        <div className='w-full flex justify-center items-center pt-4 px-3'>
            <input type="search" name="search" value={search} placeholder='Search Products' className='w-full md:w-[70%] py-1 px-1 focus:outline-blue-300' onChange={(e)=>setSearch(e.target.value)} />
        </div>

        <div className='w-full  my-3 whitespace-nowrap overflow-x-auto py-1 md:overflow-hidden  md:flex md:justify-center md:items-center'>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10' onClick={()=>loadProductByPrice(0,50)}>0-50</button>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10' onClick={()=>loadProductByPrice(51,100)}>51-100</button>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10' onClick={()=>loadProductByPrice(101,150)}>101-150</button>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10' onClick={()=>loadProductByPrice(151,200)}>151-200</button>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10' onClick={()=>loadProductByPrice(201,250)}>201-250</button>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10' onClick={()=>loadProductByPrice(251,500)}>251-500</button>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10' onClick={()=>loadProductByPrice(501,1000)}>501-1000</button>
        </div>
            {
                products.length < 1 && <div className='w-full bg-slate-800 flex justify-center items-center py-3'><span className=' font-semibold text-center text-slate-50'>No Product(s) Found</span></div>
            }
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-3 py-3 gap-x-3 gap-y-8 place-items-center'>
            {
                products && products.map(product=>(
                <div key={product.id} className='w-full shadow-md shadow-slate-900 p-2 bg-white flex flex-col justify-center items-center'>
                    <span className='block font-semibold text-md'>{product.title.substring(0,20)}</span>
                    <img src={product.image} alt={product.title} className='h-[150px] object-cover' />
                    <span className='text-xs font-semibold border-2 border-slate-300 py-1 px-1 mt-1'>${product.price}</span>
                </div>
                ))
            }
        </div>

    </div>
  )
}

export default Home