import React from 'react'
import { useCart } from '../context/CartContext'
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react'
import '../css/products.css'

function CartSidebar() {
    const { 
        cartItems, 
        isCartOpen, 
        closeCart, 
        updateQuantity, 
        removeFromCart, 
        getTotalPrice, 
        getTotalItems 
    } = useCart()

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId)
        } else {
            updateQuantity(productId, newQuantity)
        }
    }

    return (
        <>
            {/* Overlay */}
            <div 
                className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
                onClick={closeCart}
            />
            
            {/* Sidebar */}
            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                {/* Header */}
                <div className="cart-header">
                    <h3>Shopping Bag ({getTotalItems()})</h3>
                    <button className="cart-close" onClick={closeCart}>
                        <X size={24} />
                    </button>
                </div>
                
                {/* Content */}
                <div className="cart-content">
                    {cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <ShoppingBag size={60} />
                            <h4>Your bag is empty</h4>
                            <p>Add some products to get started</p>
                        </div>
                    ) : (
                        <div className="cart-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="cart-item-image"
                                    />
                                    <div className="cart-item-details">
                                        <div className="cart-item-name">{item.name}</div>
                                        <div className="cart-item-price">₹{item.price}/kg</div>
                                        <div className="quantity-controls">
                                            <button 
                                                className="quantity-btn"
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="quantity-display">{item.quantity}</span>
                                            <button 
                                                className="quantity-btn"
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            >
                                                <Plus size={14} />
                                            </button>
                                            <button 
                                                className="quantity-btn"
                                                onClick={() => removeFromCart(item.id)}
                                                style={{ marginLeft: 'auto', color: '#ef4444' }}
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total</span>
                            <span>₹{getTotalPrice().toFixed(2)}</span>
                        </div>
                        <button className="cart-checkout">
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default CartSidebar
