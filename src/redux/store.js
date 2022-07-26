import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/cartSlice'
import ProductReducer from '../redux/productSlice'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    products:ProductReducer
  },
})  