import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.items.push(action.payload);
        },
        removeFromCart:(state,action)=>{
            state.items=state.items.filter(item=>item.id!==action.payload);
        },
        emptyCart:(state)=>{
           state.items=[];
           
        }
    }
})
export default cartSlice.reducer;
export const {addToCart,removeFromCart,emptyCart}=cartSlice.actions;