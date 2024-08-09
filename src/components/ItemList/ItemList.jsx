import Item from '../Item/Item'
import './ItemList.css'

export default function ItemList(props) {
    return (
        <div className='ItemList'>            
            {props.products.map(item => {
                return(
                    <Item 
                        key={item.id}
                        {...item}
                    />
                )
            })}
        </div>
    )
}