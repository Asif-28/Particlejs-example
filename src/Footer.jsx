import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import "./Footer.css";
import Text from "./components/Text";
AOS.init();
const Footer = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.002,
  });
  return (
    <div className="cont">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <h1>
          <code>useScroll</code> with spring smoothing
        </h1>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className="text"
      >
        <Text />
      </div>
    </div>
  );
};

export default Footer;
