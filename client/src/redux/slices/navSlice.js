import { createSlice } from "@reduxjs/toolkit";

const Navslice=createSlice({
    name:'nav',
    initialState:{
        toggleNav:false
    },
    reducers:{
        toggle:(state)=>{
            state.toggleNav=!state.toggleNav
        }
    }
})
export const {toggle}=Navslice.actions
export default Navslice.reducer