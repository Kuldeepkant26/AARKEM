import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import '../css/home.css'
import Hero from '../components/Hero'
import ProductsSection from '../components/ProductsSection'

function Home() {
    const [scrollY, setScrollY] = useState(0)
    const { scrollYProgress } = useScroll()
    
    // Transform scroll progress to gate movement
    // Gates start closing completely and open as user scrolls - FASTER OPENING
    // Using viewport width units to ensure gates move completely off screen
    const leftGateX = useTransform(scrollYProgress, [0, 0.25], ["0vw", "-55vw"])
    const rightGateX = useTransform(scrollYProgress, [0, 0.25], ["0vw", "55vw"])
    
    // Content opacity - hidden when gates are present, visible when gates move away
    // Content appears after gates are fully open
    const contentOpacity = useTransform(scrollYProgress, [0.2, 0.25], [0, 1])
    
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className='home-page'>
            {/* Gate Animation Container */}
            <div className="gate-container">
                <motion.div 
                    className="home-page-gate-left"
                    style={{ 
                        x: leftGateX,
                    }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 30 
                    }}
                >
                    <div className="gate-content gate-content--left">
                        <div className="logo-shopping-bag">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="home-page-gate-right"
                    style={{ 
                        x: rightGateX,
                    }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 30 
                    }}
                >
                    <div className="gate-content gate-content--right">
                        <div className="logo-text">
                            <h1>AARKEM</h1>
                            <p>Premium Quality<br/>Pharmaceutical Solutions</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Main Content - appears after gates open */}
            <motion.div 
                className="main-content"
                style={{ opacity: contentOpacity }}
            >
                {/* Spacer to allow scroll before content appears */}
                <div className="scroll-spacer"></div>
                
                {/* Hero Section (SECTION 1) */}
                <Hero />
                
                {/* Products Section (SECTION 2) */}
                <ProductsSection />
            </motion.div>
        </div>
    )
}

export default Home
