import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const LoadingPage = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 2500);
    const navTimer = setTimeout(() => setShowNavbar(true), 5000);
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(navTimer);
    };
  }, []);

  const eventVideos = [
    { video: "/videos/event1.mp4", poster: "/images/1.jpg" },
    { video: "/videos/event2.mp4", poster: "/images/2.jpg" },
    { video: "/videos/event3.mp4", poster: "/images/3.jpg" },
    { video: "/videos/event4.mp4", poster: "/images/4.jpg" },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Slideshow with smooth fade-out */}
      <AnimatePresence>
        {!showLogo && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Swiper
              direction="vertical"
              modules={[Autoplay]}
              autoplay={{ delay: 100 }}
              speed={200}
              loop
              className="h-screen w-full"
            >
              {eventVideos.map((event, i) => (
                <SwiperSlide key={i}>
                  <div className="h-screen w-full flex items-center justify-center">
                    <video
                      className="w-full h-full object-cover"
                      src={event.video}
                      poster={event.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute text-4xl font-bold text-white">
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Reveal with smooth fade/scale */}
      {showLogo && !showNavbar && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="/images/trcac_logo.png"
            alt="College Logo"
            className="w-60 h-60 object-contain drop-shadow-xl"
          />
        </motion.div>
      )}
    </div>
  );
};

export default LoadingPage;
