import './ItemDetailContainer.css'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {

    const [product, setProduct] = useState([]) 
    const { itemId } = useParams()

    const productsGet = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                [
                    { id: 1, title: 'Produto 1', description: 'Descrição 1', price: '20.20', categoryId: 1, stock: 10, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
                    { id: 2, title: 'Produto 2', description: 'Descrição 2', price: '20.20', categoryId: 2, stock: 10, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
                    { id: 3, title: 'Produto 3', description: 'Descrição 3', price: '20.20', categoryId: 3, stock: 10, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
                    { id: 4, title: 'Produto 4', description: 'Descrição 4', price: '20.20', categoryId: 4, stock: 10, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
                    { id: 5, title: 'Produto 5', description: 'Descrição 5', price: '20.20', categoryId: 5, stock: 10, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' }
                ]
            )
        }, 2000)
    })

    productsGet.then(response => {
        const findItemSelected = response.find(item => item.id == Number.parseInt(itemId))
        const product = 
            <ItemDetail 
                    key={findItemSelected.id}
                    {...findItemSelected}
            />
        setProduct(product)
        console.log(product)
    })
    
    return (
        <div className='ItemDetailContainer'>
            {product}  
        </div>
    )
}