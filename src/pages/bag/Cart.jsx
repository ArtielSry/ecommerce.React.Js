
import './cart.css'
import { createContext, useState } from 'react'

/* 1 contexto */
export const CartContext = createContext()

/* 2 provider */
export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        
        const productInCart = cart.findIndex(item => item.id === product.id)

        if(productInCart >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCart].quantity += 1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    /*elimina los productos del carro */
    const clearCart = () => {
        setCart([])
    }

return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart
    }}>


        
    {children}
    </CartContext.Provider>
)
}
