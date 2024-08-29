import './CartCheckout.css'
import { useCart } from '../../context/CartProvider'
import db from '../../service/firebase'
import { collection, addDoc } from 'firebase/firestore'

export default function CartCheckout() {
  const { cart, totalCart, order, createOrder } = useCart()

  function addOrder() {
    createOrder()

    const ordersCollection = collection(db, "orders")

    addDoc(ordersCollection, order).then(() => {
      alert('vai lá ver se funfou')
    })

  }

  return (
    <div className='CartCheckout'>
      <h1>Resumo da compra</h1>
      <div className="CartCheckoutSeparator"></div>
      <div className='CartCheckoutValues'>
        <p><strong>Produto:</strong> R$ { totalCart(cart).toFixed(2) }</p>
        <p><strong>Frete:</strong> R$ 50</p>
      </div>
      <div className="CartCheckoutSeparator"></div>
      <p className="CartCheckoutTotal">
        Total: R$ 
          <span> { (totalCart(cart) + 50).toFixed(2) }</span>
      </p>
      <button type='button' className="CartCheckoutFinish" onClick={ addOrder }>Finalizar Pedido</button>      
    </div>
  )
}