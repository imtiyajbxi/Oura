import { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X, ChevronDown, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const currencies = [
  { code: "USD", symbol: "$", flag: "🇺🇸" },
  { code: "GBP", symbol: "£", flag: "🇬🇧" },
  { code: "EUR", symbol: "€", flag: "🇪🇺" },
  { code: "BDT", symbol: "৳", flag: "🇧🇩" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selected, setSelected] = useState(currencies[0]);
  const [cartCount] = useState(2);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Collection", "Men", "New Arrivals", "Sale"];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="text-2xl md:text-3xl font-bold tracking-widest text-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              OURA
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-black tracking-widest uppercase transition-colors duration-200 relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Currency Selector */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setCurrencyOpen(!currencyOpen)}
                  className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-black transition-colors"
                >
                  <span className="text-base">{selected.flag}</span>
                  <span className="font-medium tracking-wide">{selected.code}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${currencyOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {currencyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-8 bg-white border border-gray-100 rounded-xl shadow-xl py-1 w-36 z-50"
                    >
                      {currencies.map((c) => (
                        <button
                          key={c.code}
                          onClick={() => {
                            setSelected(c);
                            setCurrencyOpen(false);
                          }}
                          className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                            selected.code === c.code ? "font-semibold text-black" : "text-gray-600"
                          }`}
                        >
                          <span>{c.flag}</span>
                          <span>{c.code}</span>
                          <span className="ml-auto text-gray-400">{c.symbol}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button className="text-gray-700 hover:text-black transition-colors">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-black transition-colors hidden sm:block">
                <User size={20} />
              </button>
              <button className="relative text-gray-700 hover:text-black transition-colors">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-gray-700 hover:text-black transition-colors ml-1"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-black tracking-widest uppercase transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                ))}
                <div className="flex gap-3 pt-2">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => setSelected(c)}
                      className={`flex items-center gap-1 text-xs px-2 py-1 rounded border ${
                        selected.code === c.code
                          ? "border-black font-semibold"
                          : "border-gray-200 text-gray-500"
                      }`}
                    >
                      {c.flag} {c.code}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Click outside to close currency dropdown */}
      {currencyOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setCurrencyOpen(false)}
        />
      )}
    </>
  );
}
