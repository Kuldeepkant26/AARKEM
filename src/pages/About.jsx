import React, { useContext, useEffect, useRef } from 'react'
import '../css/about.css'
import AarkemLogo from '../assets/medicenImage.png';
import { MyContext } from '../context/Myprovider';

// Video URL for pharmaceutical industry
const pharmaceuticalVideo = 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4';

// Image URLs for pharmaceutical/chemical industry
const LabImage = 'https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const ManufacturingImg = 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.1';
const QualityControl = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.1';
const ResearchLab = 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const ChemicalPlant = 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.1';
const Laboratory = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.1';
const Production = 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.1';
const Innovation = 'https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.1';

// Certification Assets (using placeholder images)
import CertificationImg1 from '../assets/medicenImage.png';
import CertificationImg2 from '../assets/medicenImage.jpg';

const About = ({ showAnimation = false }) => {
    const { count } = useContext(MyContext)
    
    const heroRef = useRef(null)
    const videoRef = useRef(null)

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // Initialize video and start playing with loop
    useEffect(() => {
        const initializeVideo = () => {
            if (videoRef.current) {
                videoRef.current.muted = true;
                videoRef.current.playsInline = true;
                videoRef.current.preload = 'auto';
                videoRef.current.loop = true; // Enable looping
                
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log('Video autoplay failed:', error);
                        document.addEventListener('click', () => {
                            videoRef.current.play().catch(() => {});
                        }, { once: true });
                    });
                }

                videoRef.current.addEventListener('error', (e) => {
                    console.warn('Video failed to load:', e);
                });
            }
        };

        initializeVideo();
    }, []);

    return (
        <div className="about">
            {/* Hero Section */}
            <section className="hero-section" ref={heroRef}>
                <div className="hero-video-container">
                    <video
                        ref={videoRef}
                        className="hero-video"
                        playsInline
                        muted
                        loop
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            minHeight: '100vh',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                >
                    <source src={pharmaceuticalVideo} type="video/mp4" />
                </video>                    <div className="hero-overlay"></div>
                </div>

                                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title about-page-hero-title">
                            About AARKEM,
                            <span className="hero-title-accent">Life Care Excellence</span>
                        </h1>
                        <p className="hero-subtitle about-page-hero-subtitle">
                            Leading pharmaceutical and chemical manufacturer committed to improving lives
                            through innovative healthcare solutions and premium quality products.
                        </p>
                        <div className="hero-buttons">
                            <button className="hero-btn primary">
                                Our Products
                            </button>
                            <button className="hero-btn secondary">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Heritage Section */}
            <CompanyHeritageSection />

            {/* Our Mission Section */}
            <MissionSection />

            {/* Values & Excellence Section */}
            <ValuesSection />

            {/* Quality & Certifications Section */}
            <QualityCertificationsSection />
        </div>
    )
}

// Values & Excellence Component
const ValuesSection = () => {
    return (
        <section className="values-section">
            <div className="container">
                <div className="values-layout">
                    {/* Content Side */}
                    <div className="values-content">
                        <h2 className="values-title">Our Core Values</h2>

                        <p className="values-description">
                            At AARKEM LIFE CARE, our values drive every aspect of our pharmaceutical and chemical manufacturing processes. We are committed to excellence, innovation, and the highest standards of quality in everything we do. Our dedicated team ensures that every product meets rigorous safety and efficacy standards.
                        </p>

                        <div className="values-features">
                            <div className="feature-item">
                                <div className="feature-number">Quality</div>
                                <div className="feature-text">First</div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-number">Innovation</div>
                                <div className="feature-text">Driven</div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-number">Patient</div>
                                <div className="feature-text">Focused</div>
                            </div>
                        </div>

                        <div className="values-link">
                            <a href="/products" className="discover-link">
                                View Our Products →
                            </a>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="values-image">
                        <div className="image-wrapper">
                            <img
                                src={QualityControl}
                                alt="AARKEM quality control laboratory"
                                className="values-img"
                            />
                            <div className="image-overlay">
                                <div className="overlay-content">
                                    <span className="overlay-text">Quality Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Mission Component
const MissionSection = () => {
    return (
        <section className="mission-section">
            <div className="container">
                <div className="mission-layout">
                    {/* Image Side - Left */}
                    <div
                        className="mission-image"
                    >
                        <div className="mission-image-wrapper">
                            <img
                                src={ResearchLab}
                                alt="AARKEM research and development"
                                className="mission-img"
                            />
                            <div className="mission-image-overlay">
                                <div className="mission-overlay-content">
                                    <span className="mission-overlay-text">Innovation Hub</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side - Right */}
                    <div
                        className="mission-content"
                    >
                        <h2 className="mission-title">Advancing Healthcare Through Innovation</h2>

                        <p
                            className="mission-description"
                        >
                            AARKEM LIFE CARE is a leading pharmaceutical and chemical manufacturing company dedicated to improving global health outcomes. With state-of-the-art facilities and cutting-edge research capabilities, we develop and manufacture high-quality pharmaceutical products, chemical compounds, and healthcare solutions. Our commitment to innovation and excellence drives us to deliver products that meet the highest international standards.
                        </p>

                        <div
                            className="mission-features"
                        >
                            <div className="mission-feature-item">
                                <div className="mission-feature-number">15+</div>
                                <div className="mission-feature-text">Years Experience</div>
                            </div>
                            <div className="mission-feature-item">
                                <div className="mission-feature-number">ISO</div>
                                <div className="mission-feature-text">Certified</div>
                            </div>
                            <div className="mission-feature-item">
                                <div className="mission-feature-number">Global</div>
                                <div className="mission-feature-text">Standards</div>
                            </div>
                        </div>

                        <div
                            className="mission-link"
                        >
                            <a href="/contact" className="mission-discover-link">
                                Get In Touch →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Company Heritage Component
const CompanyHeritageSection = () => {
    return (
        <section className="company-heritage-section">
            <div className="container">
                <div
                    className="section-header"
                >
                    <h2 className="section-title">Our Heritage of Excellence</h2>
                    <p className="section-description">
                        Building trust through consistent quality and innovation in pharmaceutical manufacturing
                    </p>
                </div>
                <div className="heritage-layout">
                    {/* Image Side - Left */}
                    <div
                        className="heritage-image"
                    >
                        <div className="heritage-image-wrapper">
                            <img
                                src={LabImage}
                                alt="AARKEM pharmaceutical laboratory"
                                className="heritage-img"
                            />
                            <div className="heritage-badge">
                                <span className="badge-text">Trusted</span>
                                <span className="badge-subtext">Partner</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Side - Right */}
                    <div
                        className="heritage-content"
                    >
                        <div
                            className="heritage-tag"
                        >
                            Established Excellence
                        </div>

                        <h3
                            className="heritage-title"
                        >
                            Leading Pharmaceutical Innovation
                        </h3>

                        <p
                            className="heritage-description"
                        >
                            Founded with a vision to transform healthcare through quality pharmaceutical products, AARKEM LIFE CARE has established itself as a trusted name in the industry. Our commitment to excellence, combined with cutting-edge technology and rigorous quality control, ensures that every product we manufacture meets the highest international standards.
                        </p>

                        <div
                            className="heritage-highlights"
                        >
                            <div className="highlight-item">
                                <div className="highlight-content">
                                    <h4>Pharmaceutical Excellence</h4>
                                    <p>Advanced drug formulation and manufacturing capabilities</p>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-content">
                                    <h4>Chemical Solutions</h4>
                                    <p>Specialized chemical compounds for various industries</p>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-content">
                                    <h4>Quality Assurance</h4>
                                    <p>Comprehensive testing and validation processes</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="heritage-cta"
                        >
                            <a href="/products" className="heritage-link">
                                Explore our products →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Quality & Certifications Component
const QualityCertificationsSection = () => {
    const dashboardVideoRef = useRef(null);

    useEffect(() => {
        if (dashboardVideoRef.current) {
            dashboardVideoRef.current.muted = true;
            dashboardVideoRef.current.playsInline = true;
            dashboardVideoRef.current.autoplay = true;

            const playPromise = dashboardVideoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Quality video autoplay failed:", error);
                });
            }
        }
    }, []);

    return (
        <section className="quality-certifications-section">
            {/* Laboratory Video Background */}
            <div className="quality-video-container">
                <video
                    ref={dashboardVideoRef}
                    className="quality-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                >
                    <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Video Overlay */}
            <div className="quality-video-overlay"></div>

            <div className="container">
                <div className="quality-layout">
                    {/* Left Content */}
                    <div className="quality-content-left">
                        <div className="quality-text-content">
                            <h2 className="quality-main-title">Quality & Certifications</h2>
                            <p className="quality-main-description">
                                Our commitment to quality is reflected in our comprehensive certification portfolio
                                and adherence to the highest international standards in pharmaceutical manufacturing.
                            </p>

                            <div className="quality-features-list">
                                <div className="feature-point">
                                    <span className="feature-bullet">•</span>
                                    <span>ISO 9001:2015 Quality Management</span>
                                </div>
                                <div className="feature-point">
                                    <span className="feature-bullet">•</span>
                                    <span>Good Manufacturing Practices (GMP)</span>
                                </div>
                                <div className="feature-point">
                                    <span className="feature-bullet">•</span>
                                    <span>WHO-GMP Compliance</span>
                                </div>
                                <div className="feature-point">
                                    <span className="feature-bullet">•</span>
                                    <span>FDA Approved Facilities</span>
                                </div>
                            </div>

                            <div className="quality-stats-left">
                                <div className="stat-item-left">
                                    <div className="stat-number-left">100%</div>
                                    <div className="stat-label-left">Quality Control</div>
                                </div>
                                <div className="stat-item-left">
                                    <div className="stat-number-left">ISO</div>
                                    <div className="stat-label-left">Certified</div>
                                </div>
                                <div className="stat-item-left">
                                    <div className="stat-number-left">GMP</div>
                                    <div className="stat-label-left">Compliant</div>
                                </div>
                            </div>

                            <div className="quality-cta-left">
                                <button className="cta-btn primary">
                                    View Certifications
                                </button>
                                <button className="cta-btn secondary">
                                    Quality Policy
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Images */}
                    <div className="quality-images-right">
                        <div className="floating-images-container">
                            <div className="floating-image primary-image">
                                <img src={'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="AARKEM Quality Certifications" />
                                <div className="image-glow"></div>
                            </div>

                            <div className="floating-image secondary-image">
                                <img src={'https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg'} alt="AARKEM Manufacturing Standards" />
                                <div className="image-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About
