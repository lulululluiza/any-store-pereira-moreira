import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export default function CartWidget() {
    return (
        <div>
            <a href="" className="NavCart">
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#b197fc"}}/>
                <span id="CartNumber">4</span>
            </a>
        </div>
    )
}