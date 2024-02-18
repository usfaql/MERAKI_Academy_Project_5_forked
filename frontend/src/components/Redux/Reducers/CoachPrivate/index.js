import { createSlice } from "@reduxjs/toolkit";
export const coachPrivateSlice=createSlice({
    name:"coachPrivate",
    initialState:{
        users:[],
    },
    
    reducers:{
        setUsers:(state,action)=>{
            state.users=action.payload
        }
       
}})
export const {
   setUsers
}=coachPrivateSlice.actions;
export default coachPrivateSlice.reducer