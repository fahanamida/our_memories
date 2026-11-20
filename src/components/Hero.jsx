import { motion } from "framer-motion";
import { Heart, ArrowDown, Sparkles } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-petals">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} style={{ "--i": i }}>♥</span>
        ))}
      </div>

      <motion.div
  className="hero-text"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
  <div className="hero-label">
    <Sparkles size={15} />
    A BEAUTIFUL JOURNEY BEGINS
    <Sparkles size={15} />
  </div>

  <p className="hero-chapter">OUR FIRST CHAPTER</p>

  <h1 className="hero-main-title">
    <span className="hero-year">1 Year</span>
  </h1>

  <div className="hero-heart-divider">
    <span></span>
    <Heart fill="#c4163a" />
    <span></span>
  </div>

  {/* Highlighted Anniversary Date */}
  <div className="hero-date-highlight">
    <span className="date-small-label">THE DAY WE MET</span>

    <div className="date-main">
      <span className="date-day">29</span>

      <div className="date-month-year">
        <span className="date-month">NOVEMBER</span>
        <span className="date-year">2025</span>
      </div>
    </div>

    <div className="date-bottom-line">
      <span></span>
      <Heart size={13} fill="#c4163a" />
      <span></span>
    </div>
  </div>

  <p className="hero-subtitle">
    "...and forever to go ♡"
  </p>
</motion.div>

      

      <div className="hero-note">
        Forever & Always ♡
      </div>


    </section>
  );
}

export default Hero;