import Navbar from "../Components/Home/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import AboutSection from "../Components/Home/AboutSection";
import Info from "../Components/Home/Info";
import Courses from "../Components/Home/Courses";
import Placement from "../Components/Home/Placement";
import WhyUs from "../Components/Home/WhyUs";
import ClickSpark from "../Components/ClickSpark";
import Footer from "../Components/Home/Footer";

const HomePage = () => {
  const slideImages = [
    { url: "https://www.trcac.org.in/images/seminar1.jpg", title: "Seminar Hall" },
    { url: "https://www.trcac.org.in/images/lib1.JPG", title: "Library" },
    { url: "https://www.trcac.org.in/images/ict1.JPG", title: "Computer Lab" },
    { url: "https://www.trcac.org.in/images/confre1.jpg", title: "Conference Room" },
    { url: "https://www.trcac.org.in/images/phy2.jpg", title: "Psychology Lab" },
    { url: "https://www.trcac.org.in/images/hsl1.JPG", title: "Home Science Lab" },
    { url: "https://www.trcac.org.in/images/npr1.jpg", title: "NAAC & P.H.E Room" },
    { url: "https://www.trcac.org.in/images/fullac3.JPG", title: "Fully A/C Classroom" }
  ];

  return (
    <ClickSpark
      sparkColor="#000000"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="h-full w-full flex flex-col items-center justify-start text-white">
        <Navbar />

        {/* Slideshow */}
        <div className="w-full flex-1">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            spaceBetween={0}
            slidesPerView={1}
          >
            {slideImages.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative h-screen w-full flex items-center justify-center"
                >
                  <img
                    className="object-cover h-full w-full"
                    src={slide.url}
                    alt={slide.title}
                  />
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white text-xl font-semibold px-6 py-3 rounded-lg shadow-lg">
                    {slide.title}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <AboutSection />
        <Info />
        <Courses />
        <Placement />
        <WhyUs />

        <div className="flex items-center justify-center h-[100px] p-20 mb-20">
          <img src="images/trcac_banner.png" alt="TRCAC Banner" />
        </div>

        <Footer />
      </div>
    </ClickSpark>
  );
};

export default HomePage;
