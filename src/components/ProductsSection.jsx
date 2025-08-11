import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../context/Myprovider'
import { useCart } from '../context/CartContext'
import { ShoppingBag, Eye, Package } from 'lucide-react'
import '../css/products.css'

function ProductCard({ product, onViewDetails }) {
    const { addToCart, isInCart, openCart } = useCart()
    const navigate = useNavigate()

    const handleAddToBag = () => {
        addToCart(product)
    }

    const handleViewBag = () => {
        openCart()
    }

    const handleProductClick = () => {
        navigate(`/product/${product.id}`)
    }

    return (
        <div className="products-section__card" onClick={handleProductClick}>
            <div className="products-section__card-header">
                <div className={`products-section__badge ${!product.inStock ? 'out-of-stock' : ''}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
                {product.discountPercentage && (
                    <div className="products-section__discount">{product.discountPercentage}% OFF</div>
                )}
            </div>
            
            <div className="products-section__card-image">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="products-section__image"
                />
            </div>
            
            <div className="products-section__card-content">
                <h3 className="products-section__card-title">{product.name}</h3>
                <p className="products-section__card-category">{product.category}</p>
                
                <div className="products-section__card-specs">
                    <span className="products-section__spec">{product.packaging}</span>
                    <span className="products-section__spec">{product.weight}</span>
                </div>
                
                <div className="products-section__card-pricing">
                    <span className="products-section__price">₹{product.price}<small>/kg</small></span>
                    {product.originalPrice && (
                        <span className="products-section__original-price">₹{product.originalPrice}</span>
                    )}
                </div>
                
                <div className="products-section__card-actions" onClick={(e) => e.stopPropagation()}>
                    {isInCart(product.id) ? (
                        <button 
                            className="products-section__btn products-section__btn--secondary" 
                            onClick={handleViewBag}
                        >
                            <Eye size={16} />
                            View Bag
                        </button>
                    ) : (
                        <button 
                            className="products-section__btn products-section__btn--primary" 
                            onClick={handleAddToBag}
                            disabled={!product.inStock}
                        >
                            <ShoppingBag size={16} />
                            Add to Bag
                        </button>
                    )}
                    <button 
                        className="products-section__btn products-section__btn--outline"
                        onClick={handleProductClick}
                    >
                        <Package size={16} />
                        Details
                    </button>
                </div>
            </div>
        </div>
    )
}

function ProductsSection({ showAll = false, filteredProducts = null, hideHeader = false }) {
    const { products } = useContext(MyContext)
    
    const displayProducts = filteredProducts || (showAll ? products : products.slice(0, 6))

    return (
        <section className="products-section">
            <div className="products-section__container">
                {!hideHeader && (
                    <div className="products-section__header">
                        <h2 className="products-section__title">
                            {showAll ? 'Complete Product Portfolio' : 'Premium Chemical Solutions'}
                        </h2>
                        <p className="products-section__subtitle">
                            {showAll 
                                ? 'Comprehensive range of pharmaceutical, food-grade, and industrial chemicals with guaranteed quality assurance'
                                : 'Carefully curated selection of high-grade pharmaceutical raw materials and specialty chemicals for professional applications'
                            }
                        </p>
                    </div>
                )}
                
                <div className="products-section__grid">
                    {displayProducts.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product}
                        />
                    ))}
                </div>
                
                {!showAll && (
                    <div className="products-section__footer">
                        <a href="/products" className="products-section__explore-btn">
                            <Package size={20} />
                            <span>Explore Complete Catalog</span>
                            <span className="products-section__count">({products.length} Products)</span>
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProductsSection
