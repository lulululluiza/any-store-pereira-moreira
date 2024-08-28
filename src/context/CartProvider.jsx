import { useContext, createContext, useState } from 'react'

const CartContext = createContext()

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])
    const [order, setOrder] = useState([])

    function addToCart(item, quantity) {
        const isDuplicatedItem = isInCart(item.id)
        if (!isDuplicatedItem) {
            setCart([ ...cart, [item, quantity] ])
        }
    }

    function removeFromCart(itemId) {
        setCart(cart.filter((item => item[0].id !== itemId)))
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

    function totalItemCart(item) {
        let totalItem = item[0].price * item[1]

        return totalItem.toFixed(2)
    }

    function totalCart() {
        let TotalCart = 0
        
        cart.forEach(item => {
            TotalCart += item[0].price * item[1]
        })
        return Number.parseInt(TotalCart.toFixed(2))
    }

    function updateCart(itemId, quantity) {
        let updatedCart = []

        if(quantity === 0) {
            removeFromCart(itemId)
        } else {
            updatedCart = cart.map(item => {
                if(item[0].id === itemId) {
                    item[1] = quantity
                }
                return item
                })
            setCart(updatedCart)
        }        
    }

    function createOrder() {
        alert('Pedido criado! Data estimada de entrega: ~999999999 dias! ')
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCart, totalItemCart, totalCart, createOrder, clearCart, order, createOrder }}>
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