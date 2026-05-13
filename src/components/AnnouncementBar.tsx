import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const announcements = [
  "✨ Free Shipping on Orders Over ৳2,000",
  "🎉 New Arrivals — Season 2025 Collection Is Here",
  "💳 Easy Returns Within 7 Days — No Questions Asked",
  "🔥 Use Code OURA15 for 15% Off Your First Order",
];

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-black text-white relative overflow-hidden z-[60]"
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center relative">
          <div className="flex items-center gap-4">
            {announcements.map((msg, i) => (
              <AnimatePresence key={i} mode="wait">
                {i === current && (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="text-xs tracking-wide text-center font-light"
                  >
                    {msg}
                  </motion.p>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* Navigate announcements */}
          <div className="absolute right-10 flex gap-1">
            {announcements.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1 h-1 rounded-full transition-all duration-200 ${
                  i === current ? "bg-white w-3" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setVisible(false)}
            className="absolute right-3 text-white/60 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
