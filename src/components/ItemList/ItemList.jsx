import Item from '../Item/Item'
import './ItemList.css'

import { useState } from 'react'

export default function ItemList() {

    const [data, setData] = useState([])
    
    const itensGet = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                [
                    { id: 1, title: 'Produto 1', description: 'Descrição 1', price: '20.20', pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
                    { id: 2, title: 'Produto 2', description: 'Descrição 2', price: '20.20', pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
                    { id: 3, title: 'Produto 3', description: 'Descrição 3', price: '20.20', pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
                    { id: 4, title: 'Produto 4', description: 'Descrição 4', price: '20.20', pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
                    { id: 5, title: 'Produto 5', description: 'Descrição 5', price: '20.20', pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' }
                ]
            )
        }, 2000)
    })

    itensGet.then( array => {
        const itensComp = array.map(item => {
            return(
                <Item 
                    key={item.id}
                    {...item}
                />
            )
        })
        setData(itensComp) 
    })


    return(
        <div className='ItemList'>
            {data}
        </div>
    )
}