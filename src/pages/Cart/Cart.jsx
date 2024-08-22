import './Cart.css'

import { useCart } from '../../context/CartProvider'
import CartItem from '../../components/CartItem/CartItem'
import CartCheckout from '../../components/CartCheckout/CartCheckout'

export default function Cart() {

  const { cart } = useCart()

  const itensInCart = cart.map(item => {
      return (
          <CartItem 
              key={item[0].id}
              {...item}
          />
      )
    })
  
  return (
    <div className='Cart'>
      <div className='CartItemComponent'>
        { itensInCart }
      </div>
      <div className='CartCheckoutComponent'>
        <CartCheckout />
      </div>
    </div>
  )
}