import {useEffect,useState,useCallback} from 'react'
import {getCategories} from '../util/api'
import { getProducts } from '../redux/productSlice'
import ProductDetailsModal from '../components/ProductDetailsModal'
import CartModal from '../components/CartModal'
import  { Toaster } from 'react-hot-toast';
import {BsCartPlusFill} from 'react-icons/bs'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { addCart } from '../redux/cartSlice';
import { useDispatch,useSelector } from 'react-redux/es/exports';

  
    
const Home = () => {
 
    const dispatch=useDispatch()
    let products=useSelector(state=>state.products.products)
    const[results,setResults]=useState([])
    
   useEffect(()=>{
        setResults(products)
   },[products])

    const[open,close]=useState(false)
   
  
    
    const[categories,setCategories]=useState([])
    const[search,setSearch]=useState('')
    const[oneProduct,setOneProduct]=useState({})
  
    

    const closeModal=()=>{
        close(false)
    } 

    const openDetailsModal=(item)=>{
        close(true)
        setOneProduct(item)
    }

  

    useEffect(()=>{
        dispatch(getProducts())      
    },[dispatch])
 
    useEffect(()=>{
        getCategories()
        .then(json=>{
            setCategories(json) 
        })
    },[])
      

    const handleFilter=useCallback(()=>{           
       let stuff= products.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()))
        setResults(stuff)     
    },[products,search])
 
    const loadProductByCategory=(category)=>{        
       let items=products.filter(product=>product.category===category)
        //filter products by category
        setResults(items)
    }

    const loadProductByPrice=(x,y)=>{
        let items= products.filter(product=>product.price >=x && product.price <=y)
        setResults(items)
    } 
    
    const loadAllProducts=()=>{
      setResults(products)
    }

    useEffect(()=>{
        handleFilter() 
    },[search, handleFilter]) 
  

   

  return (
    <div className='w-full min-h-[calc(100vh-55px)] bg-[#000080] relative'> 
        <ProductDetailsModal close={closeModal} open={open} product={oneProduct}  />
        <CartModal/>
        <div className='w-full  whitespace-nowrap py-1 overflow-x-scroll md:overflow-hidden  md:flex md:justify-center md:items-center'>  
        <button className='py-1 px-6 md:px-10 text-xs font-semibold   bg-[#000080] text-white border-[1px] border-white mx-3 md:mx-6'  onClick={loadAllProducts}>All</button>
                
            { 
                categories && categories.map((category,index)=>(
                <button className='py-1 px-6 md:px-10 text-xs font-semibold   bg-[#000080] text-white border-[1px] border-white mx-3 md:mx-6' key={index} onClick={()=>{loadProductByCategory(category)}}>{category}</button>
                ))
            }
        </div>
        <div className='w-full flex justify-center items-center pt-4 px-3'>
            <input type="search" name="search" value={search} placeholder='Search Products' className='w-full md:w-[70%] py-1 px-1 focus:outline-blue-300' onChange={(e)=>setSearch(e.target.value)} />
        </div>

        <div className='w-full  my-3 whitespace-nowrap overflow-x-auto py-1 md:overflow-hidden  md:flex md:justify-center md:items-center'>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10 text-white' onClick={()=>loadProductByPrice(0,50)}>0-50</button>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10 text-white' onClick={()=>loadProductByPrice(51,100)}>51-100</button>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10 text-white' onClick={()=>loadProductByPrice(101,150)}>101-150</button>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10 text-white' onClick={()=>loadProductByPrice(151,200)}>151-200</button>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10 text-white' onClick={()=>loadProductByPrice(201,250)}>201-250</button>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10 text-white' onClick={()=>loadProductByPrice(251,500)}>251-500</button>
            <button className='py-1 px-4 rounded-md  border-2 border-slate-50 text-xs mx-2 md:mx-6 md:px-10 text-white' onClick={()=>loadProductByPrice(501,1000)}>501-1000</button>
        </div>
            { 
                results.length < 1 && <div className='w-full bg-slate-800 flex justify-center items-center py-3'><span className=' font-semibold text-center text-slate-50'>No Product(s) Found</span></div>
            }
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-3 py-3 gap-x-3 gap-y-8 place-items-center'>
            {
                products && results.map(product=>(
                    // product.quantity=1,
                <div key={product.id} className='w-full shadow-md shadow-slate-900 p-2 bg-white flex flex-col justify-center items-center'>
                    <span className='block font-semibold text-sm text-center'>{product.title.substring(0,14)}...</span>
                    <LazyLoadImage  effect='blur' src={product.image} alt={product.title} className='h-[150px] object-cover cursor-pointer' onClick={()=>openDetailsModal(product)}/>
                   <div className='flex justify-around w-full md:w-[80%] mt-2'>
                   <span className='text-xs font-semibold border-b-[1px] border-[#000080] py-1 px-1 mt-1'>${product.price}</span>
                    <button className='py-1 px-2 border-0 border-slate-400 text-xs font-semibold' onClick={()=>{
                       
                        dispatch(addCart(product))
                    }}><BsCartPlusFill className='text-2xl'/></button>
                    <Toaster />
                   </div>
                </div> 
                )) 
            }
        </div> 

    </div>
  )
}

export default Home