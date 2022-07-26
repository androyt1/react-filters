import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import  {toast} from 'react-hot-toast';


export const getProducts=createAsyncThunk('products/get',async()=>{
    const response=await axios.get('https://fakestoreapi.com/products')
    return response.data
})


const ProductSlice=createSlice({
    name:'products',
    initialState:{ 
        products:[],
        loading:false,
        error:null        
   
    },
    extraReducers:{        
        [getProducts.pending]:(state)=>{
            state.loading=true
        },
        [getProducts.fulfilled]:(state,action)=>{          
              let items=action.payload.map(product=>{
                    product.quantity=1
                    return product
              })             
            state.products=items
            state.loading=false
        },
        [getProducts.rejected]:(state,action)=>{
            state.error=action.error
            state.loading=false
            toast.error('Error getting users')
        },        
    }
})

// export const{filterAction}=ProductSlice.actions
export default ProductSlice.reducer