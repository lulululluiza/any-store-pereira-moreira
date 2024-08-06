import './ItemDetailContainer.css'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

import { useState } from 'react'

export default function ItemDetailContainer() {
    
    const [data, getData] = useState([])

    const itemGet = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                [
                    { id: 1, title: 'Produto 1', description: 'Descrição 1', price: '20.20', pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' }
                ]
            )
        }, 2000)
    })

    itemGet.then(array => {
        const itemDetail = array.map(item => {
            return (
                <ItemDetail 
                    key={item.id}
                    {...item}
                />
            )
        })

        getData(itemDetail)
    })

    return(
        <div className='ItemDetailContainer'>
            {data}
        </div>
    )
}