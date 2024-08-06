import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

export default function CartWidget() {
    return (
        <div>
            <a href="#" className="Cart">
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#b197fc"}}/>
                <span id="CartNumber">4</span>
            </a>
        </div>
    )
}