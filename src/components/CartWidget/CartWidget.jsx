import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

export default function CartWidget(props) {
    return (
        <div>
            <a href="#" className="Cart">
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#b197fc"}}/>
                <span id="CartNumber">{props.value ? props.value : 0}</span>
            </a>
        </div>
    )
}