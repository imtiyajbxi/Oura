import './index.css'; // যদি ফাইলটি একই ফোল্ডারে থাকে
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import HotProducts from "./components/HotProducts";
import FannedSlider from "./components/FannedSlider";
import PromoBanners from "./components/PromoBanners";
import CategorySlider from "./components/CategorySlider";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <HotProducts />
        <FannedSlider />
        <PromoBanners />
        <CategorySlider />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
