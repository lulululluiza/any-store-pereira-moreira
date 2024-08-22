import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './CartWidget.css'
import { useCart } from '../../context/CartProvider'
import { Link } from 'react-router-dom'

export default function CartWidget(props) {
    
    const { cart } = useCart()
    
    return (
        <div className="CartWidget">
            <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#b197fc"}}/>
                <span id="CartNumber">{cart.length}</span>
            </Link>
        </div>
    )
}