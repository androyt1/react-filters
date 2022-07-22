import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
const App = () => {
  return (
    <div className='max-w-[1300px] mx-auto'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App