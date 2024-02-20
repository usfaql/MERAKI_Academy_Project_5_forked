import { createSlice } from "@reduxjs/toolkit";
export const authSlice=createSlice({
    name:"auth",
    initialState:{
     token: localStorage.getItem("token")||null,
    userId:localStorage.getItem("userId")||null,
    isLoggedIn: localStorage.getItem("token") ? true:false,
    role:null,
    activePrivate:localStorage.getItem("activePrivate")||null
    },
    
    reducers:{
        setLogin:(state,action)=>{
            state.token=action.payload.token;
            state.isLoggedIn=true;
            state.role=action.payload.role;
            localStorage.setItem("token",action.payload)
        },
        setUserId:(state,action)=>{
            state.userId=action.payload;
            localStorage.setItem("userId",action.payload)
        },
        setActivePrivate:(state,action)=>{
            state.activePrivate=action.payload
            localStorage.setItem("activePrivate",action.payload)
        },
        setLogout:(state)=>{
            state.token=null;
            state.userId=null;
            state.isLoggedIn=false;
            localStorage.clear()
        }
    }
})
export const {
    setLogin,
    setUserId,
    setActivePrivate,
    setLogout,
}=authSlice.actions;
export default authSlice.reducer