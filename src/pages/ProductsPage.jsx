import React, { useState, useContext } from 'react'
import { MyContext } from '../context/Myprovider'
import ProductsSection from '../components/ProductsSection'
import { Search, Filter, X } from 'lucide-react'
import '../css/products.css'

function ProductsPage() {
    const { products, categories } = useContext(MyContext)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedCategory('All')
    }

    const activeFiltersCount = (searchTerm ? 1 : 0) + (selectedCategory !== 'All' ? 1 : 0)

    return (
        <div className="products-page">
            {/* Modern Search and Categories Section */}
            <div className="products-page__search-container">
                <div className="products-page__search-wrapper">
                    {/* Search Bar */}
                    <div className="products-page__search-box">
                        <Search className="products-page__search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Search products, manufacturers..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="products-page__search-input"
                        />
                        {searchTerm && (
                            <button 
                                className="products-page__clear-search"
                                onClick={() => setSearchTerm('')}
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Category Filter Chips */}
                <div className="products-page__categories-section">
                    <div className="products-page__categories-wrapper">
                        <button 
                            className={`products-page__category-chip ${selectedCategory === 'All' ? 'products-page__category-chip--active' : ''}`}
                            onClick={() => setSelectedCategory('All')}
                        >
                            All Products
                        </button>
                        {categories.map(category => (
                            <button 
                                key={category}
                                className={`products-page__category-chip ${selectedCategory === category ? 'products-page__category-chip--active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Summary and Active Filters */}
                <div className="products-page__results-summary">
                    <span className="products-page__results-count">
                        {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                    </span>
                    {activeFiltersCount > 0 && (
                        <div className="products-page__active-filters">
                            {searchTerm && (
                                <span className="products-page__active-filter">
                                    Search: "{searchTerm}"
                                    <button onClick={() => setSearchTerm('')}>
                                        <X size={14} />
                                    </button>
                                </span>
                            )}
                            {selectedCategory !== 'All' && (
                                <span className="products-page__active-filter">
                                    Category: {selectedCategory}
                                    <button onClick={() => setSelectedCategory('All')}>
                                        <X size={14} />
                                    </button>
                                </span>
                            )}
                            <button className="products-page__clear-all" onClick={clearFilters}>
                                Clear All
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Products Grid */}
            <ProductsSection showAll={true} filteredProducts={filteredProducts} hideHeader={true} />
        </div>
    )
}export default ProductsPage
