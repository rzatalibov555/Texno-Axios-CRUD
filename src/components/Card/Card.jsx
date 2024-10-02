
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, sendData } from "../../store/card/cardReducer"; 
import { chekUser } from "../../store/auth/authReducer";
import './Card.css'


const Card = () => {

    const {numOfItems, text} = useSelector((state) => state.card)
    const {login} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    console.log(login)

   

    const handllePlus = () => {
        dispatch(increment())
    }

    // const handlleMinus = () => {
    //     dispatch(decrement())
    // }

    const incrementByAmount_data = () => {
        dispatch(sendData({
            name:"test",
            password: "123"
        }))
    }

    const checking = () => {
        dispatch(chekUser())
    }
    
    return(
        <div className="main">
            <h2>Number of Items in Card: {numOfItems}</h2>
            <h2>TExt: {text.name} {text.password}</h2> 
            <h2>Auth: {login? "Active" : "Deactive"}</h2> 
            
            <button onClick={handllePlus}>Plus</button>
            <button onClick={() => dispatch(decrement())}>Minus</button>
            <button onClick={incrementByAmount_data}>+5</button>
            <button onClick={checking}>Login</button>
        </div>
    )


}

export default Card;

















// REACT REDUX ====================================================

// import './Card.css'

// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'




// const Card = () => {


//     const {numOfItems,text} = useSelector((state)=> state)
//     const dispatch = useDispatch();


//     const handleAdd = () =>{
//         dispatch({type:"ADD_ITEM"})
//     }

//     const handleMinus = () => {
//         dispatch({type:"REMOVE_ITEM"})
//     }

//     const handleAddFive = () => {
//         dispatch({type: "ADD_FIVE", payload: {username:"Rza",password:"123"}})
//     }   

//     return(
//         <div>
//             <p>State: {numOfItems}</p>
//             <p>State: {text.username}</p>
//             <p>State: {text.password}</p>
//             <button onClick={handleAdd}>Plus</button>
//             <button onClick={handleMinus}>Minus</button>
//             <button onClick={handleAddFive}>+5</button>
//         </div>
//     )
// }

// export default Card