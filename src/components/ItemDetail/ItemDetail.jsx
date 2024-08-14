import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ItemDetail(props) {
    const [count, setCount] = useState(0)
    
    const valorSemDesconto = (parseInt(props.price) * 130) / 100

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
                    <p className='ItemDetailInfosInstallment'>ou em até 20x de R${(valorSemDesconto/20).toString().replace('.',',')}</p>
                </div>
                <ItemCount count={count} setCount={setCount} stock={props.stock} />
                <NavLink to='/cart' className="ItemDetailBuy">COMPRAR</NavLink>
            </div>            
        </div>
    )
}