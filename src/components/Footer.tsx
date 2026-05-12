import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

// Social icons as inline SVG components
const FacebookIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95C1 8.12 1 12 1 12s0 3.88.46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95C23 15.88 23 12 23 12s0-3.88-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.58 1.64.9a4.52 4.52 0 0 0-.61 2.27c0 1.57.8 2.95 2.02 3.76A4.49 4.49 0 0 1 .96 6.1v.06c0 2.19 1.56 4.02 3.63 4.43a4.54 4.54 0 0 1-2.04.08c.57 1.79 2.24 3.1 4.22 3.13A9.07 9.07 0 0 1 0 19.54a12.79 12.79 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.4-.02-.59A9.22 9.22 0 0 0 22 5.92 9 9 0 0 1 23 3z"/>
  </svg>
);

const usefulLinks = [
  "About Us",
  "Contact Us",
  "Blog",
  "FAQ",
  "Privacy Policy",
  "Terms & Conditions",
  "Return Policy",
];

const categories = [
  "Full Shirts",
  "Drop Shirts",
  "Embroidery",
  "Pants",
  "T-Shirts",
  "Accessories",
  "Sale Offers",
];

// Payment icons as SVG paths (simplified inline SVGs)
const paymentMethods = [
  { name: "Visa", bg: "#1a1f71", textColor: "white", label: "VISA" },
  { name: "Mastercard", bg: "#eb001b", textColor: "white", label: "MC" },
  { name: "bKash", bg: "#e2136e", textColor: "white", label: "bKash" },
  { name: "Nagad", bg: "#f42d2d", textColor: "white", label: "Nagad" },
  { name: "Rocket", bg: "#8b008b", textColor: "white", label: "Rocket" },
  { name: "Amex", bg: "#2e77bc", textColor: "white", label: "AMEX" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#133530" }}>
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-xl font-light text-white mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Join the Aura Community
            </h3>
            <p className="text-white/50 text-sm">
              Get exclusive deals, new arrivals & style inspiration.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 md:w-72 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 rounded-l-lg"
            />
            <button className="bg-white text-[#133530] px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors rounded-r-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#"
              className="text-3xl font-bold tracking-widest text-white mb-4 inline-block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              AURA
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Premium menswear crafted for the modern gentleman. Elevating style with refined craftsmanship since 2020.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                { icon: <Mail size={14} />, text: "hello@aurabrand.store" },
                { icon: <Phone size={14} />, text: "+880 1700-000000" },
                { icon: <MapPin size={14} />, text: "Dhaka, Bangladesh" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/50 text-sm hover:text-white/80 transition-colors cursor-pointer">
                  <span className="text-white/40">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Social media */}
            <div>
              <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: <FacebookIcon />, color: "#1877F2", label: "Facebook" },
                  { icon: <InstagramIcon />, color: "#E4405F", label: "Instagram" },
                  { icon: <YoutubeIcon />, color: "#FF0000", label: "YouTube" },
                  { icon: <TwitterIcon />, color: "#1DA1F2", label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 border border-white/10 hover:border-white/25"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-7">
              Useful Links
            </h4>
            <ul className="flex flex-col gap-3">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-white/20 group-hover:bg-white/60 group-hover:w-6 transition-all duration-200" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-7">
              Categories
            </h4>
            <ul className="flex flex-col gap-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-white/20 group-hover:bg-white/60 group-hover:w-6 transition-all duration-200" />
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wide text-center md:text-left">
            © 2025 Aura. All rights reserved. Crafted with passion.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            <span className="text-white/30 text-xs mr-1">We Accept:</span>
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="px-2 py-1 rounded text-[9px] font-bold text-white flex items-center justify-center min-w-[36px] h-5"
                style={{ backgroundColor: method.bg }}
              >
                {method.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
