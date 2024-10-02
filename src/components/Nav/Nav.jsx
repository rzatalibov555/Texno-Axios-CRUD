import './Nav.css'
import { useSelector } from 'react-redux'


const Nav = () => {

    const {numOfItems} = useSelector((state) => state.card)
    const {data, login} = useSelector((state) => state.auth)
    

    return(
        <div className="nav">{numOfItems} {data} {login ? "Active" : "Deactive"}</div>
    )

}

export default Nav;