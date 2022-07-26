import React,{useState} from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
const App = () => {

  const[cart,setCart]=useState(0)

  const addToCart=()=>{
    setCart(prev=>prev + 1)
  }

  return (
    <div className='max-w-[1300px] mx-auto'>
      <Navbar cart={cart} />
      <Home addToCart={addToCart} />
      <Footer/>
    </div>
  )
}

export default App