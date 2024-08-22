import ItemList from '../../components/ItemList/ItemList'
import './ItemListContainer.css'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ItemListContainer() {

    const {categoryId} = useParams()
    const [products, setProducts] = useState([]) 
    const [allProducts, setAllProducts] = useState([]) 

    const productsGet = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                [
                    { id: 1, title: 'Produto 1', description: 'Descrição 1', price: '20.20', categoryId: 1, stock: 2, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
                    { id: 2, title: 'Produto 2', description: 'Descrição 2', price: '19.99', categoryId: 2, stock: 3, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
                    { id: 3, title: 'Produto 3', description: 'Descrição 3', price: '35.00', categoryId: 3, stock: 4, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
                    { id: 4, title: 'Produto 4', description: 'Descrição 4', price: '101.99', categoryId: 4, stock: 5, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' },
                    { id: 5, title: 'Produto 5', description: 'Descrição 5', price: '89.99', categoryId: 5, stock: 6, pictureUrl: 'https://freemockupzone.com/wp-content/uploads/2022/06/Free-Packaging-Product-Box-Mockup.jpg' }
                ]
            )
        }, 1000)
    })

    function categoryFilter(categoryId) {
        // mesma coisa que o return abaixo
        // return data.filter((item) => {
        //     if(item.categoryId == categoryId) {
        //         return item
        //     }
        // })

        return allProducts.filter(item => item.categoryId === Number.parseInt(categoryId))
    }

    useEffect(() => {

        if(categoryId && allProducts.length) {
            const filtrado = categoryFilter(categoryId)
            setProducts(filtrado)
        }
            
    }, [categoryId, allProducts])

    useEffect(() => {

        productsGet
            .then((response) => {
                setAllProducts(response)
                setProducts(response)
            })           
    }, [])    

    return (
        <div className='ItemListContainer'>
            <ItemList products={products}/>
        </div>
    )
}