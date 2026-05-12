import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PromoBanners() {
  return (
    <div className="flex flex-col gap-0">
      {/* Banner 1: CLEAN & CONFIDENT */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "500px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banner-confident.jpg')" }}
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-white/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/20" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] text-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-gray-600 text-xs tracking-[0.5em] uppercase mb-4 font-light">
              www.aurabrand.store
            </p>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              CLEAN &
            </h2>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-light italic text-gray-900 leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              CONFIDENT
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-light mb-10 max-w-sm mx-auto leading-relaxed">
              Curated pieces for the man who leads with style and substance. Every stitch tells a story.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-gray-900 transition-colors duration-200"
            >
              SHOP NOW
              <ArrowRight size={14} />
            </motion.a>
          </motion.div>
        </div>

        {/* Floral accent dots */}
        <div className="absolute top-12 left-8 w-24 h-24 opacity-30">
          <div className="w-4 h-4 rounded-full bg-gray-400 absolute top-0 right-0" />
          <div className="w-3 h-3 rounded-full bg-gray-500 absolute top-8 left-0" />
          <div className="w-2 h-2 rounded-full bg-gray-300 absolute bottom-0 right-8" />
        </div>
      </section>

      {/* Banner 2: ELEVATE YOUR STYLE */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "500px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banner-elevate.jpg')" }}
        />
        {/* Dark moody overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        <div className="relative z-10 flex flex-col items-start justify-center min-h-[500px] px-8 md:px-16 lg:px-24 py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-xl"
          >
            <p className="text-white/60 text-xs tracking-[0.5em] uppercase mb-5 font-light">
              Premium Menswear Collection
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ELEVATE
              <br />
              <em className="italic">YOUR STYLE</em>
            </h2>
            <p className="text-white/70 text-sm md:text-base font-light mb-10 max-w-sm leading-relaxed">
              Step into refined craftsmanship. Our latest collection merges classic tailoring with contemporary silhouettes.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-gray-100 transition-colors duration-200"
              >
                SHOP NOW
                <ArrowRight size={14} />
              </motion.a>
              <a
                href="#"
                className="text-white/70 text-xs tracking-widest uppercase border-b border-white/40 hover:border-white hover:text-white transition-colors pb-0.5"
              >
                Our Story
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-8 right-12 hidden md:flex flex-col items-end gap-2">
          <p className="text-white/40 text-xs tracking-widest uppercase">Season 2025</p>
          <div className="w-16 h-px bg-white/30" />
        </div>
      </section>
    </div>
  );
}
