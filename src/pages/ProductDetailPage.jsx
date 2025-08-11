import React, { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MyContext } from '../context/Myprovider'
import { useCart } from '../context/CartContext'
import { 
    ShoppingBag, 
    Star, 
    Shield, 
    Truck, 
    Clock, 
    Package,
    CheckCircle,
    ArrowLeft,
    ChevronRight
} from 'lucide-react'
import '../css/productDetail.css'

function ProductDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { products } = useContext(MyContext)
    const { addToCart, isInCart } = useCart()
    const [product, setProduct] = useState(null)
    const [similarProducts, setSimilarProducts] = useState([])
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [showFullDescription, setShowFullDescription] = useState(false)

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id))
        if (foundProduct) {
            setProduct(foundProduct)
            // Find similar products (same category, excluding current product)
            const similar = products
                .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
                .slice(0, 4)
            setSimilarProducts(similar)
        }
    }, [id, products])

    const handleAddToCart = () => {
        if (product) {
            for (let i = 0; i < quantity; i++) {
                addToCart(product)
            }
        }
    }

    const handleSimilarProductClick = (productId) => {
        navigate(`/product/${productId}`)
        window.scrollTo(0, 0)
    }

    if (!product) {
        return (
            <div className="product-detail-loading">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading product details...</p>
                </div>
            </div>
        )
    }

    const discountAmount = product.originalPrice - product.price
    const discountPercentage = Math.round((discountAmount / product.originalPrice) * 100)

    return (
        <div className="product-detail-page">
            {/* Breadcrumb */}
            <div className="product-detail__breadcrumb">
                <div className="container">
                    <button 
                        className="back-button"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft size={20} />
                        <span>Back</span>
                    </button>
                    <div className="breadcrumb-trail">
                        <span onClick={() => navigate('/')}>Home</span>
                        <ChevronRight size={16} />
                        <span onClick={() => navigate('/products')}>Products</span>
                        <ChevronRight size={16} />
                        <span>{product.category}</span>
                        <ChevronRight size={16} />
                        <span className="current">{product.name}</span>
                    </div>
                </div>
            </div>

            {/* Main Product Section */}
            <div className="product-detail__main">
                <div className="container">
                    <div className="product-detail__grid">
                        {/* Product Images */}
                        <div className="product-detail__images">
                            <div className="main-image-container">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="main-image"
                                />
                                <div className="image-badges">
                                    {product.inStock && (
                                        <span className="stock-badge in-stock">
                                            <CheckCircle size={16} />
                                            In Stock
                                        </span>
                                    )}
                                    {discountPercentage > 0 && (
                                        <span className="discount-badge">
                                            -{discountPercentage}%
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="product-detail__info">
                            <div className="product-header">
                                <div className="product-category">{product.category}</div>
                                <h1 className="product-title">{product.name}</h1>
                                <div className="product-manufacturer">
                                    By <span>{product.manufacturer}</span>
                                </div>
                                
                                {/* Rating & Reviews */}
                                <div className="product-rating">
                                    <div className="stars">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i} 
                                                size={16} 
                                                className={i < 4 ? 'filled' : 'empty'}
                                            />
                                        ))}
                                    </div>
                                    <span className="rating-text">4.2 (127 reviews)</span>
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="product-pricing">
                                <div className="price-main">₹{product.price}</div>
                                {product.originalPrice > product.price && (
                                    <div className="price-original">₹{product.originalPrice}</div>
                                )}
                                {discountPercentage > 0 && (
                                    <div className="savings">You save ₹{discountAmount} ({discountPercentage}%)</div>
                                )}
                            </div>

                            {/* Product Features */}
                            <div className="product-features">
                                <div className="feature-item">
                                    <Shield size={20} />
                                    <span>Quality Assured</span>
                                </div>
                                <div className="feature-item">
                                    <Truck size={20} />
                                    <span>Fast Delivery</span>
                                </div>
                                <div className="feature-item">
                                    <Package size={20} />
                                    <span>{product.packaging} - {product.weight}</span>
                                </div>
                            </div>

                            {/* Quantity & Actions */}
                            <div className="product-actions">
                                <div className="quantity-selector">
                                    <label>Quantity:</label>
                                    <div className="quantity-controls">
                                        <button 
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            disabled={quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span>{quantity}</span>
                                        <button 
                                            onClick={() => setQuantity(quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="action-buttons">
                                    <button 
                                        className={`add-to-cart-btn ${isInCart(product.id) ? 'in-cart' : ''}`}
                                        onClick={handleAddToCart}
                                        disabled={!product.inStock}
                                    >
                                        <ShoppingBag size={20} />
                                        {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>

                            {/* Quick Info Cards */}
                            <div className="quick-info-cards">
                                <div className="info-card">
                                    <Clock size={24} />
                                    <div>
                                        <h4>Shelf Life</h4>
                                        <p>{product.shelfLife || '36 months'}</p>
                                    </div>
                                </div>
                                <div className="info-card">
                                    <Package size={24} />
                                    <div>
                                        <h4>Storage</h4>
                                        <p>{product.storageConditions || 'Cool, dry place'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Details Tabs */}
            <div className="product-detail__tabs">
                <div className="container">
                    <div className="tabs-content">
                        <div className="tab-panel active">
                            <h3>Product Description</h3>
                            <div className="description-content">
                                <p>{product.description}</p>
                                
                                <div className="specifications">
                                    <h4>Key Specifications</h4>
                                    <ul>
                                        {product.specifications?.map((spec, index) => (
                                            <li key={index}>{spec}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="applications">
                                    <h4>Applications</h4>
                                    <ul>
                                        {product.applications?.map((app, index) => (
                                            <li key={index}>{app}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Products Section */}
            <div className="similar-products">
                <div className="container">
                    <div className="section-header">
                        <h2>Similar Products</h2>
                        <p>Explore related products in the same category</p>
                    </div>
                    
                    <div className="similar-products__grid">
                        {similarProducts.map(similarProduct => (
                            <div 
                                key={similarProduct.id} 
                                className="similar-product-card"
                                onClick={() => handleSimilarProductClick(similarProduct.id)}
                            >
                                <div className="similar-product__image">
                                    <img src={similarProduct.image} alt={similarProduct.name} />
                                    {similarProduct.discountPercentage > 0 && (
                                        <span className="discount-badge">
                                            -{Math.round(similarProduct.discountPercentage)}%
                                        </span>
                                    )}
                                </div>
                                <div className="similar-product__info">
                                    <h4>{similarProduct.name}</h4>
                                    <p className="manufacturer">{similarProduct.manufacturer}</p>
                                    <div className="pricing">
                                        <span className="price">₹{similarProduct.price}</span>
                                        {similarProduct.originalPrice > similarProduct.price && (
                                            <span className="original-price">₹{similarProduct.originalPrice}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage
