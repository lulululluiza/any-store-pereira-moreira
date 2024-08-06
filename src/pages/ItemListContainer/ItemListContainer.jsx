import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'
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