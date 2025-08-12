import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Pill, Truck, ShieldCheck, Stethoscope } from 'lucide-react'
import medicenImage from '../assets/medicenImage.png'
import '../css/hero.css'

function Hero() {
  const { scrollY } = useScroll()

  // Parallax transforms that start after just 15px of scroll
  const floatY1 = useTransform(scrollY, [15, 500], [0, -60])
  const floatY2 = useTransform(scrollY, [15, 500], [0, 40])
  const floatY3 = useTransform(scrollY, [15, 500], [0, -30])
  const floatYImage = useTransform(scrollY, [15, 400], [0, -50])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  const stagger = {
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  }

  return (
    <section id="hero" className="hero relative min-h-screen flex items-center overflow-hidden isolate bg-transparent pt-20">
      {/* Background layers removed - now transparent */}

      {/* Floating decorative pills */}
      <motion.div style={{ y: floatY1 }} className="floating-item">
        <motion.div initial={{ rotate: -10 }} animate={{ rotate: 10 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6, ease: 'easeInOut' }} className="floating-pill pill-pink" />
      </motion.div>
      <motion.div style={{ y: floatY2 }} className="floating-item floating-delay-1">
        <motion.div initial={{ rotate: 5 }} animate={{ rotate: -5 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 7, ease: 'easeInOut' }} className="floating-pill pill-teal" />
      </motion.div>
      <motion.div style={{ y: floatY3 }} className="floating-item floating-delay-2">
        <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease: 'linear' }} className="floating-ring" />
      </motion.div>

      <div className="container  sm:px-4 md:px-6 lg:px-8 xl:px-10 relative w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={stagger} className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#01BFBD]/5 px-3 py-1 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
              <ShieldCheck className="size-4 text-[#01BFBD]" />
              <span className="text-xs font-medium text-slate-600">Trusted by 50k+ customers</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Your Trusted Online Pharmacy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#01BFBD] via-[#00A8A6] to-[#008A88]">Fast. Safe. Affordable.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="mt-5 max-w-xl text-base sm:text-lg text-slate-600">
              Order genuine medicines, wellness products, and healthcare essentials—delivered to your door in hours.
            </motion.p>

            {/* CTA row (search removed) */}
            <motion.div variants={fadeIn} className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="btn-primary w-full sm:w-auto">
                <Pill className="size-5" />
                Shop Medicines
              </button>
              <button className="btn-secondary w-full sm:w-auto">
                <Stethoscope className="size-5" />
                Upload Prescription
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeIn} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-600">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-[#01BFBD]" />
                <span className="text-sm">100% Genuine</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Truck className="size-4 text-[#01BFBD]" />
                <span className="text-sm">Same-day Delivery*</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Pill className="size-4 text-[#01BFBD]" />
                <span className="text-sm">20k+ Products</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Medicine Image */}
          <motion.div
            style={{ y: floatYImage }}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-1 lg:order-2 mb-6 lg:mb-0"
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'easeInOut',
                repeatType: 'loop'
              }}
            >
              <img
                src={medicenImage}
                alt="Medicine and Healthcare Products"
                className="w-full h-auto max-w-md mx-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
