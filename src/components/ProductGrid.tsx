import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Eye, Heart } from "lucide-react";

const tabs = ["FULL SHIRT", "DROP SHIRT", "EMBROIDERY", "PANTS", "OFFERS"];

const allProducts = [
  // FULL SHIRT
  { id: 1, name: "Ancient Ambush Ash", price: 1050, original: 1350, category: "FULL SHIRT", soldOut: false, image: "/images/product-flower-shirt.jpg" },
  { id: 2, name: "Ancient Ambush Golden", price: 1050, original: 1350, category: "FULL SHIRT", soldOut: false, image: "/images/product-embroidery-shirt.jpg" },
  { id: 3, name: "Ancient Ambush Maroon", price: 1050, original: 1350, category: "FULL SHIRT", soldOut: true, image: "/images/product-drop-shirt.jpg" },
  { id: 4, name: "Ancient Ambush White", price: 1050, original: 1350, category: "FULL SHIRT", soldOut: false, image: "/images/slider-card-1.jpg" },
  { id: 5, name: "Black Base Premium Shirt", price: 1200, original: 1500, category: "FULL SHIRT", soldOut: false, image: "/images/product-flower-shirt.jpg" },
  { id: 6, name: "Embroidery Shirt Blue Beige", price: 1350, original: 1800, category: "FULL SHIRT", soldOut: false, image: "/images/product-embroidery-shirt.jpg" },
  { id: 7, name: "Embroidery Shirt Red Black", price: 1350, original: 1800, category: "FULL SHIRT", soldOut: true, image: "/images/slider-card-1.jpg" },
  { id: 8, name: "Embroidery Chant Sky Blue", price: 1350, original: 1800, category: "FULL SHIRT", soldOut: false, image: "/images/product-drop-shirt.jpg" },

  // DROP SHIRT
  { id: 9, name: "Imperial Bodler Drop Shoulder", price: 900, original: 1200, category: "DROP SHIRT", soldOut: false, image: "/images/product-drop-shirt.jpg" },
  { id: 10, name: "Aqua Drop Shoulder", price: 900, original: 1200, category: "DROP SHIRT", soldOut: false, image: "/images/slider-card-1.jpg" },
  { id: 11, name: "Baroque Motif Drop Shoulder", price: 850, original: 1100, category: "DROP SHIRT", soldOut: false, image: "/images/product-embroidery-shirt.jpg" },
  { id: 12, name: "Lemon Twist Drop Shoulder", price: 850, original: 1100, category: "DROP SHIRT", soldOut: true, image: "/images/product-flower-shirt.jpg" },
  { id: 13, name: "Midnight Marble Drop Shoulder", price: 950, original: 1250, category: "DROP SHIRT", soldOut: false, image: "/images/product-drop-shirt.jpg" },
  { id: 14, name: "Lunar Frost Drop Shoulder", price: 950, original: 1250, category: "DROP SHIRT", soldOut: false, image: "/images/slider-card-1.jpg" },

  // EMBROIDERY
  { id: 15, name: "Embroidery Sahara Beige", price: 1450, original: 1900, category: "EMBROIDERY", soldOut: false, image: "/images/product-embroidery-shirt.jpg" },
  { id: 16, name: "Embroidery Sahara Blue", price: 1450, original: 1900, category: "EMBROIDERY", soldOut: false, image: "/images/product-flower-shirt.jpg" },
  { id: 17, name: "Embroidery Sahara Rose", price: 1450, original: 1900, category: "EMBROIDERY", soldOut: true, image: "/images/slider-card-1.jpg" },
  { id: 18, name: "Flower Embroidery Full Shirt Black", price: 1350, original: 1800, category: "EMBROIDERY", soldOut: false, image: "/images/product-drop-shirt.jpg" },
  { id: 19, name: "Flower Embroidery Full Shirt White", price: 1350, original: 1800, category: "EMBROIDERY", soldOut: false, image: "/images/product-embroidery-shirt.jpg" },
  { id: 20, name: "Surf Embroidery Full Shirt Sun", price: 1250, original: 1600, category: "EMBROIDERY", soldOut: false, image: "/images/product-flower-shirt.jpg" },

  // PANTS
  { id: 21, name: "Slim Fit Cargo Olive", price: 1100, original: 1450, category: "PANTS", soldOut: false, image: "/images/product-pants.jpg" },
  { id: 22, name: "Classic Chino Beige", price: 950, original: 1200, category: "PANTS", soldOut: false, image: "/images/product-pants.jpg" },
  { id: 23, name: "Modern Slim Trouser Black", price: 1200, original: 1600, category: "PANTS", soldOut: false, image: "/images/product-pants.jpg" },
  { id: 24, name: "Relaxed Chino Khaki", price: 900, original: 1150, category: "PANTS", soldOut: true, image: "/images/product-pants.jpg" },

  // OFFERS
  { id: 25, name: "Surf Embroidery Full Shirt", price: 950, original: 1800, category: "OFFERS", soldOut: false, image: "/images/product-flower-shirt.jpg" },
  { id: 26, name: "Tree Embroidery Full Shirt Maroon", price: 850, original: 1600, category: "OFFERS", soldOut: false, image: "/images/product-embroidery-shirt.jpg" },
  { id: 27, name: "Tree Embroidery Full Shirt Brown", price: 850, original: 1600, category: "OFFERS", soldOut: false, image: "/images/slider-card-1.jpg" },
  { id: 28, name: "Surf Embroidery Full Shirt Slate", price: 950, original: 1800, category: "OFFERS", soldOut: false, image: "/images/product-drop-shirt.jpg" },
];

function ProductCard({ product, index }: { product: typeof allProducts[0]; index: number }) {
  const [wishlisted, setWishlisted] = useState(false);
  const discount = Math.round(((product.original - product.price) / product.original) * 100);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden rounded-[15px] bg-[#f5f3f0] aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-600 group-hover:scale-105 ${
            product.soldOut ? "opacity-70 grayscale-[30%]" : ""
          }`}
        />

        {/* SOLD OUT badge */}
        {product.soldOut && (
          <div className="absolute top-3 left-3 bg-black/90 text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-widest uppercase">
            SOLD OUT
          </div>
        )}

        {/* Discount badge */}
        {!product.soldOut && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            -{discount}%
          </div>
        )}

        {/* Wishlist button */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className={`absolute top-3 ${product.soldOut ? "right-3" : "right-3 top-9"} mt-1 p-1.5 rounded-full bg-white/80 hover:bg-white transition-all duration-200 shadow-sm opacity-0 group-hover:opacity-100`}
        >
          <Heart
            size={13}
            className={wishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}
          />
        </button>

        {/* Hover actions */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0">
          <div className="flex gap-1.5 px-3 py-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {!product.soldOut && (
              <button className="flex-1 flex items-center justify-center gap-1.5 bg-black text-white py-2.5 text-xs font-semibold tracking-wider rounded-lg hover:bg-gray-800 transition-colors">
                <ShoppingBag size={13} />
                Add to Cart
              </button>
            )}
            <button className="flex items-center justify-center bg-white/90 text-black p-2.5 rounded-lg hover:bg-white transition-colors">
              <Eye size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 px-0.5">
        <h3 className="text-xs md:text-sm font-medium text-black leading-snug mb-1.5 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-bold ${product.soldOut ? "text-gray-400" : "text-black"}`}>
            ৳{product.price.toLocaleString()}.00
          </span>
          <span className="text-xs text-gray-400 line-through">
            ৳{product.original.toLocaleString()}.00
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState("FULL SHIRT");

  const filtered = allProducts.filter((p) => p.category === activeTab);

  return (
    <section className="py-16 md:py-24 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs text-gray-400 tracking-[0.3em] uppercase mb-3">
            Explore The Range
          </p>
          <h2
            className="text-3xl md:text-4xl font-light text-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Products
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-1 mb-10 md:mb-14 bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 md:px-6 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-xl transition-all duration-300 ${
                activeTab === tab
                  ? "bg-black text-white shadow-lg"
                  : "text-gray-500 hover:text-black hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load more */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border border-black text-black px-12 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300 rounded-sm"
          >
            Load More Products
          </motion.button>
        </div>
      </div>
    </section>
  );
}
