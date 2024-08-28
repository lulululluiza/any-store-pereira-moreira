import './Cart.css'

import { useCart } from '../../context/CartProvider'
import CartItem from '../../components/CartItem/CartItem'
import CartCheckout from '../../components/CartCheckout/CartCheckout'
import CartOrderDetails from '../../components/CartOrderDetails/CartOrderDetails'

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

    function CartNotEmpty() {
      return (
        <div className='Cart'>          
          <div className='CartItemDetails'>
            <div>
              <CartOrderDetails />
            </div>
            <div>
              { itensInCart }
            </div>
          </div>
          <div className='CartCheckoutComponent'>
            <CartCheckout />
          </div>
        </div>        
      )
    }

    function CartEmpty() {
      console.log()
      return (
        <div className='CartEmpty'>
          <h1 className='CartEmptyTitle'>Seu carrinho está vazio :(</h1>
          <img className='CartEmptyImg' src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="Carrinho vazio" />
          <p className='CartEmptyText'>Navegue entre as categorias e selecione itens para adicionar ao carrinho!</p>
        </div>
      )
    }
  
  return (
    <div>
      { cart.length ? <CartNotEmpty /> : <CartEmpty /> } 
    </div> 
  )
}