import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartProvider'

export default function ItemDetail(props) {
    const [count, setCount] = useState(0)
    const { addToCart } = useCart()

    const valorSemDesconto = (parseInt(props.price) * 130) / 100

    function add(quantity) {
        if(quantity > 0)
            addToCart(props, quantity)
    }

    return (
        <div className='ItemDetail'>
            <img src={props.pictureUrl} alt={`Imagem do produto ${props.title}`} />
            <div>
                <div className='ItemDetailInfos'>
                    <h2>{props.title}</h2>
                    <p>Vendido e entregue por Any Store</p>
                    <p className='ItemDetailInfosPrice'>De R$ {valorSemDesconto} por 
                        <br/>
                        <span className='ItemDetailInfosPriceNew'>R$ {props.price.replace('.',',')}</span>
                        <span className='ItemDetailInfosPriceDiscount'>30% OFF!</span>
                    </p>
                    <p className='ItemDetailInfosInstallment'>ou em até 20x de R${(valorSemDesconto/20).toFixed(2).toString().replace('.',',')}</p>
                    <p>Estoque: {props.stock}</p>
                </div>
                <ItemCount count={count} setCount={setCount} stock={props.stock} onAdd={ add } />
                <div className="ItemDetailBuy">
                    <NavLink to='/cart'>COMPRAR</NavLink>
                </div>
            </div>            
        </div>
    )
}