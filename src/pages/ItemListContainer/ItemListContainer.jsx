import ItemList from '../../components/ItemList/ItemList'
import './ItemListContainer.css'
import db from '../../service/firebase'

import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ItemListContainer() {

    const {categoryId} = useParams()
    const [products, setProducts] = useState([]) 
    const [allProducts, setAllProducts] = useState([]) 
   
    function categoryFilter(categoryId) {

        return allProducts.filter(item => item.categoryId === categoryId)
    }

    useEffect(() => {

        if(categoryId && allProducts.length) {
            const filtrado = categoryFilter(categoryId)
            setProducts(filtrado)
        }
            
    }, [categoryId, allProducts])

    useEffect(() => {
        const itemsCollection = collection(db, "products");
        getDocs(itemsCollection)
            .then((snapshot) => {
                const arrayProducts = []
                snapshot.docs.forEach((item) => {
                    arrayProducts.push({
                        ...item.data(),
                        id: item.id
                    })
                    setAllProducts(arrayProducts)
                    setProducts(arrayProducts)
                })
            });       
    }, [])    

    return (
        <div className='ItemListContainer'>
            <ItemList products={products}/>
        </div>
    )
}