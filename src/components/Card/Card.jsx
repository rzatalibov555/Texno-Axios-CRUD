import './Card.css'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'




const Card = () => {


    const {numOfItems,text} = useSelector((state)=> state)
    const dispatch = useDispatch();


    const handleAdd = () =>{
        dispatch({type:"ADD_ITEM"})
    }

    const handleMinus = () => {
        dispatch({type:"REMOVE_ITEM"})
    }

    const handleAddFive = () => {
        dispatch({type: "ADD_FIVE", payload: {username:"Rza",password:"123"}})
    }   

    return(
        <div>
            <p>State: {numOfItems}</p>
            <p>State: {text.username}</p>
            <p>State: {text.password}</p>
            <button onClick={handleAdd}>Plus</button>
            <button onClick={handleMinus}>Minus</button>
            <button onClick={handleAddFive}>+5</button>
        </div>
    )
}

export default Card