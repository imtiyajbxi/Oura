import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Pants",
    range: "৳800 - ৳1,800",
    image: "/images/product-pants.jpg",
    count: "24 Items",
    color: "#e8e5e0",
  },
  {
    id: 2,
    name: "T-Shirts",
    range: "৳450 - ৳950",
    image: "/images/product-drop-shirt.jpg",
    count: "38 Items",
    color: "#f0eeeb",
  },
  {
    id: 3,
    name: "Full Shirts",
    range: "৳950 - ৳1,800",
    image: "/images/product-flower-shirt.jpg",
    count: "52 Items",
    color: "#eceae6",
  },
  {
    id: 4,
    name: "Embroidery",
    range: "৳1,200 - ৳2,500",
    image: "/images/product-embroidery-shirt.jpg",
    count: "19 Items",
    color: "#f5f3f0",
  },
  {
    id: 5,
    name: "Lookbook",
    range: "৳1,500 - ৳3,000",
    image: "/images/slider-card-1.jpg",
    count: "12 Items",
    color: "#e5e2de",
  },
];

export default function CategorySlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 280;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
    setTimeout(() => {
      if (!el) return;
      setAtStart(el.scrollLeft <= 10);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
    }, 350);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 10);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-gray-400 tracking-[0.3em] uppercase mb-2">
              Browse By
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Shop Categories
            </h2>
          </motion.div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={atStart}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                atStart
                  ? "border-gray-200 text-gray-300"
                  : "border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black"
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={atEnd}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
                atEnd
                  ? "border-gray-200 text-gray-300"
                  : "border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black"
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex-shrink-0 snap-start cursor-pointer"
              style={{ width: "220px" }}
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ height: "320px", background: cat.color }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-xs text-white/60 tracking-widest uppercase mb-1">
                    {cat.count}
                  </p>
                  <h3 className="text-lg font-semibold mb-1">{cat.name}</h3>
                  <p className="text-sm text-white/80">{cat.range}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full tracking-widest uppercase shadow-lg">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3 px-1">
                <h4 className="text-sm font-semibold text-black">{cat.name}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{cat.range}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
