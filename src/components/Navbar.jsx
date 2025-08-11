import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../css/navbar.css'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const { getTotalItems, openCart } = useCart()
    const location = useLocation()
    
    // Check if we're on the About page
    const isAboutPage = location.pathname === '/about'

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 100
            setIsScrolled(scrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close cart when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isSidebarOpen && !event.target.closest('.navbar__sidebar') && !event.target.closest('.navbar__menu-btn')) {
                setIsSidebarOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isSidebarOpen])

    const toggleSidebar = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIsSidebarOpen(!isSidebarOpen)
    }

    const toggleCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        openCart()
    }

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__container">
                    {/* Logo */}
                    <Link to="/" className="navbar__logo">
                        <div className="navbar__logo-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9 5.16.74 9-3.45 9-9V7l-10-5z"/>
                            </svg>
                        </div>
                        <span className="navbar__logo-text">AARKEM</span>
                    </Link>

                    {/* Center Navigation - Hidden on mobile */}
                    <div className="navbar__nav">
                        <Link to="/" className="navbar__nav-link">Home</Link>
                        <a href="/about" className="navbar__nav-link">About</a>
                        <Link to="/products" className="navbar__nav-link">Products</Link>
                    </div>

                    {/* Right Side Actions */}
                    <div className="navbar__actions">
                        {/* Cart Button */}
                        <div className="navbar__cart-container">
                            <button 
                                className="navbar__cart-btn" 
                                onClick={toggleCart}
                                aria-label="Shopping cart"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19,7H16V6A4,4 0 0,0 12,2A4,4 0 0,0 8,6V7H5A1,1 0 0,0 4,8V19A3,3 0 0,0 7,22H17A3,3 0 0,0 20,19V8A1,1 0 0,0 19,7M10,6A2,2 0 0,1 12,4A2,2 0 0,1 14,6V7H10V6M18,19A1,1 0 0,1 17,20H7A1,1 0 0,1 6,19V9H8V10A1,1 0 0,0 10,10A1,1 0 0,0 10,8V9H14V10A1,1 0 0,0 16,10A1,1 0 0,0 14,8V9H18V19Z"/>
                                </svg>
                                {getTotalItems() > 0 && (
                                    <span className="navbar__cart-badge">{getTotalItems()}</span>
                                )}
                            </button>
                        </div>

                        {/* Login Button */}
                        <button className={`navbar__login-btn ${isAboutPage ? 'navbar__login-btn--about' : ''}`}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
                            </svg>
                            <span className="navbar__login-text">Login</span>
                        </button>

                        {/* Menu Button */}
                        <button 
                            className="navbar__menu-btn" 
                            onClick={toggleSidebar}
                            aria-label="Open menu"
                        >
                            <div className="navbar__menu-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <div className={`navbar__sidebar ${isSidebarOpen ? 'navbar__sidebar--open' : ''}`}>
                <div className="navbar__sidebar-header">
                    <h2>Menu</h2>
                    <button 
                        className="navbar__sidebar-close" 
                        onClick={toggleSidebar}
                        aria-label="Close menu"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                    </button>
                </div>
                <div className="navbar__sidebar-content">
                    <nav className="navbar__sidebar-nav">
                        <Link to="/" className="navbar__sidebar-link">Home</Link>
                        <Link to="/products" className="navbar__sidebar-link">Products</Link>
                        <a href="#healthcare" className="navbar__sidebar-link">Healthcare</a>
                        <a href="#about" className="navbar__sidebar-link">About Us</a>
                        <a href="#services" className="navbar__sidebar-link">Services</a>
                        <a href="#contact" className="navbar__sidebar-link">Contact</a>
                    </nav>
                </div>
                <div className="navbar__sidebar-footer">
                    <div className="navbar__sidebar-social">
                        <a href="#" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div 
                    className="navbar__sidebar-overlay" 
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    )
}

export default Navbar
