import "./CartItem.css";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { useCart } from '../../context/CartProvider'

//receives an array with 2 arrays: [0] = is the product's object and [1] is the quantity in number
/*
 { id: 1, title: 'Produto 1', description: 'Descrição 1', price: '20.20', categoryId: 1, stock: 2, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' }
*/

export default function CartItem(props) {

  const { totalItemCart, removeFromCart, updateCart } = useCart()
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(props[1])        
  
  }, [])

  function update() {
    updateCart(props[0].id, count)
  }

  return (
    <div className="CartItemProduct">
      <img className="CartItemProductImg" src={props[0].pictureUrl}></img>
      <div className="CartItemProductInfos">
        <h1>{props[0].title}</h1>
        <button type='button' className="CartItemProductActions" onClick={ () => removeFromCart(props[0].id) }>Excluir</button>
      </div>
      <ItemCount count={count} setCount={setCount} stock={props[0].stock} onAdd={ update }/>
      <p>R$ <span>{ totalItemCart(props) }</span></p>
    </div>
  );
}
