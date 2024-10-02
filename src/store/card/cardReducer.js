import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfItems: 0,
    text:{},
}

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        increment(state){
            state.numOfItems++;
        },

        decrement(state){
            if(state.numOfItems > 0){
                state.numOfItems--;
            }  
        },

        sendData(state, action){
            state.text = {
                name: action.payload.name,
                password: action.payload.password
            };
        }
    }
})



export const {increment, decrement, sendData} = cardSlice.actions;

export default cardSlice.reducer
















// REACT REDUX ====================================================


// const initialState = {
//     numOfItems: 0,
//     text:"-",
// }

// export const cardReducer = (state = initialState, action) => {
//     // const {type, payload} = action

//     // eslint-disable-next-line default-case
//     switch (action.type){
//         case "ADD_ITEM":{
//             return{
//                 ...state,
//                 numOfItems: state.numOfItems + 1
//             }
//         }  
//         case "REMOVE_ITEM":{
//             return{
//                 ...state,
//                 numOfItems: state.numOfItems - 1
//             }
//         }
//         case "ADD_FIVE":{
//             return{
//                 ...state,
//                 text: action.payload,
//             }
//         }

//         default:
//             return state
        
//     }
// }