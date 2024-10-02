import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    data:"test",
}



export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        chekUser(state){
            if(state.login == false){
                state.login = true
            }else{
                state.login = false
            }
        //    state.login++
        }

    }
})

export const {chekUser} = authSlice.actions;

export default authSlice.reducer