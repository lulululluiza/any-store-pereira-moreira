import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'

export default function ItemListContainer() {

    const [count, setCount] = useState(0)
    const stock = 10
    const inicial = 5

    return (
        <div>
            <p>ItemListContainer goes here! Available Soon!</p>
            <ItemCount count={count} setCount={setCount} stock={stock} inicial={inicial} />
        </div>
    )
}