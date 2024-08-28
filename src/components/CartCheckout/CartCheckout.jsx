import './CartCheckout.css'
import { useCart } from '../../context/CartProvider'

export default function CartCheckout() {
  const { cart, totalCart, createOrder, order } = useCart()

  return (
    <div className='CartCheckout'>
      <h1>Resumo da compra</h1>
      <div className="CartCheckoutSeparator"></div>
      <div className='CartCheckoutValues'>
        <p><strong>Produto:</strong> R$ { totalCart(cart) }</p>
        <p><strong>Frete:</strong> R$ 50</p>
      </div>
      <div className="CartCheckoutSeparator"></div>
      <p className="CartCheckoutTotal">
        Total: R$ 
          <span> { (totalCart(cart) + 50).toFixed(2) }</span>
      </p>
      <button type='button' className="CartCheckoutFinish" onClick={ createOrder }>Finalizar Pedido</button>      
    </div>
  )
}