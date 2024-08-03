import './Item.css'

export default function Item(props) {
    return (
        <div className='Item'>
            <div>
                <img src={props.pictureUrl} alt="" />
                <h2>{props.title}</h2>
                <p className='ItemDescription'>{props.description}</p>
                <p className='ItemPrice'>R$ {props.price}</p>
                <a href="#">Mais Detalhes</a>
            </div>
        </div>
    )
}