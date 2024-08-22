import './CartCheckout.css'
import { useCart } from '../../context/CartProvider'

export default function CartCheckout(props) {
  const { cart, totalCart } = useCart()

  return (
    <div className='CartCheckout'>
      <h1>Resumo da compra</h1>
      <div className="CartCheckoutSeparator"></div>
      <p>
        Total: R$ 
          <span> { totalCart(cart) }</span>
      </p>
    </div>
  )
}