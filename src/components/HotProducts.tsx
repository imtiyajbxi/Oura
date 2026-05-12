import { motion } from "framer-motion";
import { ShoppingBag, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Flower Embroidery Full Shirt Black",
    price: 1350,
    original: 1800,
    image: "/images/product-flower-shirt.jpg",
    badge: null,
    color: "#1a1a1a",
  },
  {
    id: 2,
    name: "Flower Embroidery Full Shirt White",
    price: 1350,
    original: 1800,
    image: "/images/product-embroidery-shirt.jpg",
    badge: "NEW",
    color: "#f5f5f0",
  },
  {
    id: 3,
    name: "Tree Embroidery Full Shirt",
    price: 1250,
    original: 1600,
    image: "/images/slider-card-1.jpg",
    badge: null,
    color: "#e8e4df",
  },
  {
    id: 4,
    name: "Tree Embroidery Full Shirt Premium",
    price: 1250,
    original: 1600,
    image: "/images/product-drop-shirt.jpg",
    badge: null,
    color: "#d4cfc9",
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group flex flex-col"
    >
      {/* Image container */}
      <div className="relative overflow-hidden rounded-[15px] aspect-[3/4] bg-[#f0eeeb]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-400 flex items-center justify-center">
          <div className="flex gap-3 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-white text-black p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-200 shadow-lg">
              <ShoppingBag size={16} />
            </button>
            <button className="bg-white text-black p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-200 shadow-lg">
              <Eye size={16} />
            </button>
          </div>
        </div>
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide">
            {product.badge}
          </div>
        )}
        {/* Shop Now hover tag */}
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-3 text-xs font-semibold tracking-widest uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-[15px]">
          Shop Now
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 px-1">
        <h3 className="text-sm font-medium text-black leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-black">
            ৳{product.price.toLocaleString()}.00
          </span>
          <span className="text-xs text-gray-400 line-through">
            ৳{product.original.toLocaleString()}.00
          </span>
          <span className="ml-auto text-xs font-medium text-emerald-600">
            -{Math.round(((product.original - product.price) / product.original) * 100)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function HotProducts() {
  return (
    <section id="hot-products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-gray-400 tracking-[0.3em] uppercase mb-2">
              Trending Now
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hot Products
            </h2>
          </motion.div>
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-widest uppercase text-gray-500 hover:text-black transition-colors border-b border-gray-300 hover:border-black pb-0.5"
          >
            Browse All →
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
