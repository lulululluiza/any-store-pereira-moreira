import './Item.css'
import { Link } from 'react-router-dom'

export default function Item(props) {
    return (
        <div className='Item'>
            <div>
                <img src={props.pictureUrl} alt="" />
                <h2>{props.title}</h2>
                <p className='ItemDescription'>{props.description}</p>
                <p className='ItemPrice'>R$ {props.price}</p>
                <p className='ItemStock'>Estoque: {props.stock}</p>  
                <div className='ItemDetails'>       
                    <Link to={`/item/${props.id}`}>Mais Detalhes</Link> 
                </div>
            </div>            
        </div>
    )
}