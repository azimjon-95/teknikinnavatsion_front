import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./main.css";

// Replace these with actual unique image paths
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import banner4 from "../../assets/banner/banner4.png";
import banner5 from "../../assets/banner/banner5.png";
import banner6 from "../../assets/banner/banner6.png";

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  // Array of banner images
  const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="bez-hero-slider" style={{ backgroundImage: `url(${banners[currentSlide]})` }}>
      <div className="bez-slider-container">
        <button className="bez-slider-nav bez-slider-prev" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        <button className="bez-slider-nav bez-slider-next" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
        <div className="bez-slider-dots">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`bez-dot ${index === currentSlide ? "bez-dot-active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;


