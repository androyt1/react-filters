import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

const notify = () => toast('Item already in cart, quantity incremented',{
    duration: 4000,
    position: 'top-center',
  
    // Styling
    style: {},
    className: 'py-1',
  
    // Custom Icon
    icon: '👏',
  
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });


const initialState = {
  cart:[],
  open:false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {     
    const item=state.cart.filter(item=>item.id===action.payload.id)
    if(item.length < 1){        
         state.cart.push(action.payload)      
    }else{         
        state.cart.map(itemInCart => itemInCart.id === action.payload.id ? 
            {
                ...itemInCart,
                quantity:itemInCart.quantity++ 
            }
             :
             itemInCart) 
        notify()   
    }
    }, 
    removeFromCart:(state,action)=>{
     //check if the item is in cart, if it iss filter it off    
     state.cart=state.cart.filter(item=>item.id !== action.payload.id)      
    }, 
    incrementQuantity:(state, action)=>{     
        state.cart.map(item=>item.id===action.payload.id ? {...item,quantity:item.quantity++} : item)
    },
    decrementQuantity:(state, action)=>{     
        state.cart.map(item=>item.id===action.payload.id ? {...item,quantity:item.quantity--} : item)
    },
    openCart:(state)=>{
        state.open=true          
    },
    closeCart:(state)=>{ 
        state.open=false
    }
  },
})

// Action creators are generated for each case reducer function
export const {addCart,removeFromCart,incrementQuantity,decrementQuantity,openCart,closeCart} = cartSlice.actions

export default cartSlice.reducer