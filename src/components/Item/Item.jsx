import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Item(props) {
    
    const [count, setCount] = useState(0)

    return (
        <div className='Item'>
            <div>
                <img src={props.pictureUrl} alt="" />
                <h2>{props.title}</h2>
                <p className='ItemDescription'>{props.description}</p>
                <p className='ItemPrice'>R$ {props.price}</p>       
                <Link to={`/item/${props.id}`}>Mais Detalhes</Link>   
            </div>            
            <ItemCount count={count} setCount={setCount} stock={props.stock} />
        </div>
    )
}