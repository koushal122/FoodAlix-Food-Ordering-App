import { createSlice } from "@reduxjs/toolkit";
//this is one slice
const CartSlice=createSlice({
    //this is name of slice
    name: 'cart',
    //this is the initial value to the items present in slice
    initialState:{
        items:[],
    },
    //reducer is the functions which is connected with action such as addItem, removeItem etc...
    reducers:{
        //here addItem is a action which is called and this function will execute
        addItem:(state,action)=>{
           state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
           state.items.pop();
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }
})
export const {addItem,removeItem,clearCart} =CartSlice.actions;
export default CartSlice.reducer