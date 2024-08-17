import { useContext, createContext, useState } from 'react'

const CartContext = createContext()

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    function addToCart(item, quantity) {
        const isDuplicatedItem = isInCart(item.id)
        if (!isDuplicatedItem) {
            setCart([ ...cart, [item, quantity] ])
            console.log(cart)
        }
    }

    function removeFromCart(itemId) {

    }

    function clearCart() {
        setCart([])
    }

    function isInCart(id) {
        let isDuplicated = false
        cart.forEach(item => {
            if( item[0].id === id ) {
                isDuplicated = true
            }
        })

        return isDuplicated
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            { children }
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)

    if(!context) {
        throw new Error('Para usar o useCart seu componente precisa estar dentro do CartProvider')
    }

    return context
}