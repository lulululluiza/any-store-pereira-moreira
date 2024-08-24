import './ItemDetailContainer.css'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import db from '../../service/firebase'

export default function ItemDetailContainer() {

    const [product, setProduct] = useState([]) 
    const { itemId } = useParams()

    const prodRef = doc(db, "products", itemId);

    getDoc(prodRef).then((snapshot) => {
        if(snapshot.exists()) {
            const product = 
                <ItemDetail 
                        {
                            ...snapshot.data()
                        }
                        key={snapshot.id}
                />
            setProduct(product)
        }
    });

    return (
        <div className='ItemDetailContainer'>
            {product}  
        </div>
    )
}