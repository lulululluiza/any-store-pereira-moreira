import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

import { useState } from 'react'

export default function ItemListContainer() {

    const [count, setCount] = useState(0)
    const stock = 10
    const inicial = 5

    return (
        <div className='ItemListContainer'>
            <ItemList />
            <ItemCount count={count} setCount={setCount} stock={stock} inicial={inicial} />
        </div>
    )
}