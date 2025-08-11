import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)

    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id)
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            } else {
                return [...prev, { ...product, quantity }]
            }
        })
    }

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId))
    }

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId)
            return
        }
        setCartItems(prev =>
            prev.map(item =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            )
        )
    }

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    const isInCart = (productId) => {
        return cartItems.some(item => item.id === productId)
    }

    const clearCart = () => {
        setCartItems([])
    }

    const openCart = () => setIsCartOpen(true)
    const closeCart = () => setIsCartOpen(false)

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        isInCart,
        clearCart,
        isCartOpen,
        openCart,
        closeCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
