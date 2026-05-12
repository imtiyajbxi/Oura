import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-[#f0eeeb]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-model.jpg')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 md:pb-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="max-w-xl"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/70 text-xs md:text-sm uppercase tracking-[0.4em] mb-4 font-light"
          >
            New Season 2025
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] tracking-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Wear Your
            <br />
            <em className="italic font-light">Confidence</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/80 text-base md:text-lg font-light mb-8 max-w-sm leading-relaxed"
          >
            Refined essentials crafted for the modern gentleman. Premium quality, timeless elegance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="#hot-products"
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300 rounded-none"
            >
              Shop Now
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <a
              href="#"
              className="text-white text-sm font-light tracking-widest uppercase border-b border-white/40 hover:border-white pb-0.5 transition-colors duration-200"
            >
              View Lookbook
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 md:right-12 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-[0.3em] uppercase rotate-90 origin-center mb-6">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-16 right-8 md:right-16 z-10 hidden lg:flex flex-col gap-6 text-right"
      >
        {[
          { value: "500+", label: "Products" },
          { value: "12K+", label: "Happy Clients" },
          { value: "5★", label: "Rating" },
        ].map((stat) => (
          <div key={stat.label}>
            <div
              className="text-2xl font-semibold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {stat.value}
            </div>
            <div className="text-white/50 text-xs tracking-widest uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
