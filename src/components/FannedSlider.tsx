import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

const sliderItems = [
  {
    id: 1,
    title: "Embroidery Shirt",
    subtitle: "Premium Collection",
    price: "৳1,350.00",
    original: "৳1,800.00",
    image: "/images/product-embroidery-shirt.jpg",
    tag: "BESTSELLER",
    bg: "#ffffff",
  },
  {
    id: 2,
    title: "Flower Full Shirt",
    subtitle: "Signature Line",
    price: "৳1,250.00",
    original: "৳1,600.00",
    image: "/images/product-flower-shirt.jpg",
    tag: "NEW",
    bg: "#f8f6f3",
  },
  {
    id: 3,
    title: "Drop Shoulder Tee",
    subtitle: "Casual Series",
    price: "৳950.00",
    original: "৳1,200.00",
    image: "/images/product-drop-shirt.jpg",
    tag: "SALE",
    bg: "#f0eeeb",
  },
  {
    id: 4,
    title: "Slim Chino Pants",
    subtitle: "Essential Range",
    price: "৳1,450.00",
    original: "৳1,900.00",
    image: "/images/product-pants.jpg",
    tag: "POPULAR",
    bg: "#edeae6",
  },
  {
    id: 5,
    title: "Editorial Lookbook",
    subtitle: "Season 2025",
    price: "৳2,100.00",
    original: "৳2,600.00",
    image: "/images/slider-card-1.jpg",
    tag: "EXCLUSIVE",
    bg: "#e8e5e1",
  },
];

function getCardTransform(offset: number) {
  const absOffset = Math.abs(offset);
  const sign = offset >= 0 ? 1 : -1;

  if (absOffset === 0) {
    return { x: 0, y: 0, rotateZ: 0, scale: 1, zIndex: 20, opacity: 1, blur: 0 };
  } else if (absOffset === 1) {
    return { x: sign * 170, y: 18, rotateZ: sign * 7, scale: 0.88, zIndex: 15, opacity: 0.9, blur: 0 };
  } else if (absOffset === 2) {
    return { x: sign * 290, y: 38, rotateZ: sign * 14, scale: 0.76, zIndex: 10, opacity: 0.65, blur: 2 };
  } else {
    return { x: sign * 370, y: 55, rotateZ: sign * 20, scale: 0.65, zIndex: 5, opacity: 0, blur: 4 };
  }
}

export default function FannedSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = sliderItems.length;

  const navigate = (dir: number) => {
    setActiveIndex((prev) => (prev + dir + total) % total);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -60) navigate(1);
    else if (info.offset.x > 60) navigate(-1);
  };

  return (
    <section
      className="py-16 md:py-28 overflow-hidden relative"
      style={{
        background: "linear-gradient(145deg, #dedbd6 0%, #ccc8c2 40%, #bfbbb5 100%)",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-gray-500 text-xs tracking-[0.5em] uppercase mb-3 font-medium">
            Interactive Showcase
          </p>
          <h2
            className="text-3xl md:text-5xl font-light text-gray-800"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured <em className="italic">Collection</em>
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-light">
            Drag or click to explore — swipe through our curated picks
          </p>
        </motion.div>

        {/* Fan Stack Container */}
        <div className="relative flex items-center justify-center" style={{ height: "420px" }}>
          {/* Nav Buttons */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 md:-left-4 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 border border-white/60 backdrop-blur-sm"
          >
            <ChevronLeft size={18} className="text-gray-800" />
          </button>

          {/* Cards */}
          {sliderItems.map((item, index) => {
            const rawOffset = (index - activeIndex + total) % total;
            const offset = rawOffset > total / 2 ? rawOffset - total : rawOffset;
            const t = getCardTransform(offset);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={item.id}
                className="absolute cursor-pointer select-none"
                animate={{
                  x: t.x,
                  y: t.y,
                  rotateZ: t.rotateZ,
                  scale: t.scale,
                  opacity: t.opacity,
                  zIndex: t.zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 28,
                  mass: 1,
                }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: -150, right: 150 }}
                dragElastic={0.15}
                onDragEnd={handleDragEnd}
                onClick={() => {
                  if (!isActive) navigate(offset > 0 ? 1 : -1);
                }}
                whileHover={isActive ? { y: t.y - 8, scale: t.scale * 1.02 } : {}}
                style={{ transformOrigin: "bottom center" }}
              >
                {/* Card */}
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    width: "220px",
                    height: "340px",
                    background: item.bg,
                    boxShadow: isActive
                      ? "0 25px 60px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.15)"
                      : "0 10px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: "245px" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    {/* Badge */}
                    <div className="absolute top-3 right-3 bg-black text-white text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider">
                      {item.tag}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-0.5">
                      {item.subtitle}
                    </p>
                    <h3 className="text-sm font-semibold text-black leading-tight mb-2.5">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-bold text-black">{item.price}</span>
                        <span className="text-[10px] text-gray-400 line-through ml-1.5">
                          {item.original}
                        </span>
                      </div>
                      {isActive && (
                        <motion.button
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                        >
                          <ShoppingBag size={13} />
                        </motion.button>
                      )}
                    </div>
                  </div>

                  {/* Active indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-black rounded-b-2xl"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}

          <button
            onClick={() => navigate(1)}
            className="absolute right-0 md:-right-4 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 border border-white/60 backdrop-blur-sm"
          >
            <ChevronRight size={18} className="text-gray-800" />
          </button>
        </div>

        {/* Active Item Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-10 md:mt-16"
          >
            <p className="text-gray-500 text-xs tracking-[0.35em] uppercase mb-1.5">
              {sliderItems[activeIndex].subtitle}
            </p>
            <h3
              className="text-2xl md:text-3xl font-light text-gray-800 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {sliderItems[activeIndex].title}
            </h3>
            <div className="flex items-center justify-center gap-3 mb-7">
              <span className="text-lg font-semibold text-black">
                {sliderItems[activeIndex].price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                {sliderItems[activeIndex].original}
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button className="bg-black text-white px-10 py-3.5 text-xs font-semibold tracking-widest uppercase hover:bg-gray-900 transition-colors duration-200 rounded-sm">
                Shop Now
              </button>
              <button className="border border-gray-400 text-gray-700 px-8 py-3.5 text-xs font-semibold tracking-widest uppercase hover:border-black hover:text-black transition-colors duration-200 rounded-sm">
                Wishlist
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {sliderItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? "w-8 h-2 bg-gray-700"
                  : "w-2 h-2 bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
