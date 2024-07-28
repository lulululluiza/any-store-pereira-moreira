import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget() {
    return (
        <a href="#" className="NavCarrinho">
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#B197FC",}}/>
        </a>
    )
}