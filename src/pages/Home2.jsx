import React from 'react'
import Hero from '../components/Hero'
import ScrollStack, { ScrollStackItem } from '../../Reactbits/ScrollStack/ScrollStack'
import CardSwap, { Card } from '../../Reactbits/CardSwap/CardSwap'
import FlowingMenu from '../../Reactbits/FlowingMenu/FlowingMenu'

function Home2() {
    const demoItems = [
        { link: '#', text: 'Mojave', image: 'https://t4.ftcdn.net/jpg/05/48/54/13/360_F_548541329_iHCfxeFaJyQLYQXFw1QVRP7j3ZRvwSbI.jpg' },
        { link: '#', text: 'Sonoma', image: 'https://t3.ftcdn.net/jpg/02/40/74/88/360_F_240748870_9eTRsR1oH1hGwo8dlhuzyYaGodVlFrxF.jpg' },
        { link: '#', text: 'Monterey', image: 'https://media.licdn.com/dms/image/v2/D4E12AQF9DtvpEvn7mQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1695984749446?e=2147483647&v=beta&t=qJi9Ez4KJJHuqepx45XtMFZRyc9DpT4I_AFhCKe8G6Y' },
        { link: '#', text: 'Sequoia', image: 'https://ispe.org/sites/default/files/styles/teaser_image/public/2021-10/pharma-4-0-img1.jpg?itok=LpHrK4V2' }
    ];
    return (
        <>
            <ScrollStack
                itemDistance={80}
                itemStackDistance={20}
                stackPosition="10%"
                scaleEndPosition="5%"
                baseScale={0.98}
            >
                <ScrollStackItem>
                    <Hero />
                </ScrollStackItem>
                <ScrollStackItem>
                    <div className="w-full min-h-screen bg-white flex items-center justify-center relative overflow-hidden py-6 sm:py-8 md:py-10 lg:py-12">
                        {/* Subtle Background Effects */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Light Brand Accent */}
                            <div className="absolute inset-0" style={{
                                background: `radial-gradient(800px 400px at 50% 50%, rgba(1,191,189,0.03), transparent 70%)`
                            }}></div>

                            {/* Very Subtle Grid Pattern */}
                            <div className="absolute inset-0 opacity-10" style={{
                                backgroundImage: 'linear-gradient(rgba(1,191,189,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(1,191,189,0.02) 1px, transparent 1px)',
                                backgroundSize: '30px 30px'
                            }}></div>
                        </div>

                        {/* Main Content Container */}
                        <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
                            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-2 sm:mb-3">Our Product Categories</h2>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                                    Discover our comprehensive range of pharmaceutical and healthcare solutions
                                </p>
                            </div>

                            {/* Main Content Layout - Side Content + Card Swap */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-start lg:items-center">
                                {/* Left Side Content - Points */}
                                <div className="lg:col-span-4 space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8 lg:mb-0">
                                    <div>
                                        <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3"></div>
                                                <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">Comprehensive pharmaceutical formulations for therapeutic care</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3"></div>
                                                <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">High-purity chemical compounds for industrial applications</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3"></div>
                                                <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">Complete healthcare solutions for wellness and prevention</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3"></div>
                                                <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">Customized formulations to meet specific requirements</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3"></div>
                                                <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">Quality-assured products across all categories</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="pt-2 sm:pt-3 md:pt-4">
                                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-xs md:text-sm text-gray-600">
                                            <div className="flex items-center">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500 mr-1 sm:mr-1 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>ISO Certified</span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-500 mr-1 sm:mr-1 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>FDA Approved</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Swap Container - Right Side */}
                                <div className="lg:col-span-8 h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] relative">
                                    <CardSwap
                                        width={520}
                                        height={360}
                                        cardDistance={60}
                                        verticalDistance={40}
                                        delay={4000}
                                        pauseOnHover={true}
                                    >
                                        <Card customClass="bg-transparent border-0 shadow-none">
                                            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl border border-slate-200 p-3 sm:p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-8 translate-x-8 sm:-translate-y-10 sm:translate-x-10 md:-translate-y-12 md:translate-x-12 lg:-translate-y-16 lg:translate-x-16 opacity-60"></div>
                                                <div>
                                                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9 5.16.74 9-3.45 9-9V7l-10-5z" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2 md:mb-3 lg:mb-4">Pharmaceutical Products</h3>
                                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                                                        High-quality medicines and drug formulations manufactured under strict GMP standards for therapeutic excellence.
                                                    </p>
                                                </div>
                                                <div className="flex items-center text-blue-600 font-medium text-xs sm:text-sm md:text-base">
                                                    <span>Explore Products</span>
                                                    <svg className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </Card>
                                        <Card customClass="bg-transparent border-0 shadow-none">
                                            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl border border-slate-200 p-3 sm:p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full -translate-y-8 translate-x-8 sm:-translate-y-10 sm:translate-x-10 md:-translate-y-12 md:translate-x-12 lg:-translate-y-16 lg:translate-x-16 opacity-60"></div>
                                                <div>
                                                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 47.678 47.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 47.678 47.678 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3 3-3" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2 md:mb-3 lg:mb-4">Chemical Compounds</h3>
                                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                                                        Specialized chemical intermediates and active pharmaceutical ingredients for various industrial applications.
                                                    </p>
                                                </div>
                                                <div className="flex items-center text-teal-600 font-medium text-xs sm:text-sm md:text-base">
                                                    <span>View Chemicals</span>
                                                    <svg className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </Card>
                                        <Card customClass="bg-transparent border-0 shadow-none">
                                            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl border border-slate-200 p-3 sm:p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full -translate-y-8 translate-x-8 sm:-translate-y-10 sm:translate-x-10 md:-translate-y-12 md:translate-x-12 lg:-translate-y-16 lg:translate-x-16 opacity-60"></div>
                                                <div>
                                                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-md sm:rounded-lg md:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                            <circle cx="12" cy="10" r="3" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2 md:mb-3 lg:mb-4">Healthcare Solutions</h3>
                                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                                                        Comprehensive wellness products and healthcare essentials designed for better quality of life.
                                                    </p>
                                                </div>
                                                <div className="flex items-center text-emerald-600 font-medium text-xs sm:text-sm md:text-base">
                                                    <span>Healthcare Range</span>
                                                    <svg className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </Card>
                                    </CardSwap>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollStackItem>

            </ScrollStack>
            <div className="relative h-72 sm:h-80 md:h-96 lg:h-[28rem]">
                <FlowingMenu items={demoItems} />
            </div>
        </>
    )
}

export default Home2
