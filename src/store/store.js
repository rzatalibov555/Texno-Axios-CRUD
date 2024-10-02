
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card/cardReducer";
import authReducer from "./auth/authReducer";
const store = configureStore({
    reducer: {
        card: cardReducer,
        auth: authReducer,
    }
})


export default store;













// REACT REDUX ====================================================


// import {createStore} from "redux"

// import { cardReducer } from "./card/cardReducer"

// const store = createStore(cardReducer)

// export default store