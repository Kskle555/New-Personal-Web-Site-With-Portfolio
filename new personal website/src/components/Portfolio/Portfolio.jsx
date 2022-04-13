import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Proje1 from "../../img/proje1.png";
import Proje2 from "../../img/proje2.png";
import Proje3 from "../../img/proje3.png";
import Proje4 from "../../img/proje4.png";
import Proje5 from "../../img/proje5.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Proje1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Proje2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Proje3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Proje4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Proje5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
