import "./CartItem.css";
import ItemCount from "../ItemCount/ItemCount";

//receives an array with 2 arrays: [0] = is the product's object and [1] is the quantity in number
/*
 { id: 1, title: 'Produto 1', description: 'Descrição 1', price: '20.20', categoryId: 1, stock: 2, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' }
*/
export default function CartItem(props) {
  return (
    <div class="CartItem">
      <div class="CartItemProduct">
        <img class="CartItemProductImg" src={props[0].pictureUrl}></img>
        <div class="CartItemProductInfos">
          <h1>{props[0].title}</h1>
          <div class="CartItemProductActions">
            <button>Excluir</button>
          </div>
        </div>
        <ItemCount />
        <p>R$ valor totalll</p>
      </div>
    </div>
  );
}
