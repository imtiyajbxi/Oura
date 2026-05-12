import { motion } from "framer-motion";
import { Truck, RotateCcw, Shield, Star } from "lucide-react";

const features = [
  {
    icon: <Truck size={22} />,
    title: "Free Shipping",
    desc: "On orders over ৳2,000",
  },
  {
    icon: <RotateCcw size={22} />,
    title: "Easy Returns",
    desc: "7-day hassle-free policy",
  },
  {
    icon: <Shield size={22} />,
    title: "Secure Payment",
    desc: "100% safe & encrypted",
  },
  {
    icon: <Star size={22} />,
    title: "Premium Quality",
    desc: "Crafted with care",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-gray-100 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-gray-600 group-hover:bg-black group-hover:text-white transition-all duration-300 flex-shrink-0">
                {f.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-black">{f.title}</p>
                <p className="text-xs text-gray-400">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
