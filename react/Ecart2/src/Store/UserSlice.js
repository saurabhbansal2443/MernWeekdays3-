import {createSlice } from "@reduxjs/toolkit";


const  userSlice = createSlice({
    name : "user",
    initialState : {
        user : null , 
    },
    reducers : {
        addUser : (state , action)=>{
            let userData = action.payload ; 
            state.user = userData;
        },
        deleteUser : (state )=>{
            state.user = null ; 
        }

    }
}) 

export const {
    addUser , deleteUser 
} = userSlice.actions ;

export default userSlice.reducer ;