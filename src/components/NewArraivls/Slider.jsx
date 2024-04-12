import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import Product from "../Products/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import product_list from "../../assets/product";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { useState } from "react";

const Slider = () => {
  const [windowSize, setWindowSize] = useState("");
  const mediaQueryLarge = window.matchMedia("(min-width: 1024px)");
  const mediaQueryMedium = window.matchMedia(
    "(min-width: 768px) and (max-width: 1023px)"
  );
  const mediaQuerySmall = window.matchMedia("(max-width: 767px)");

  const handleWindowSize = () => {
    if (mediaQueryLarge.matches) {
      setWindowSize("large");
    } else if (mediaQueryMedium.matches) {
      setWindowSize("medium");
    } else if (mediaQuerySmall.matches) {
      setWindowSize("small");
    }
    console.log(windowSize);
  };
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={50}
      slidesPerView={
        windowSize === "large"
          ? 4
          : windowSize === "medium"
          ? 2
          : windowSize === "small"
          ? 1
          : 4
      }
      navigation
      effect="cards"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="mt-10 w-full"
      onResize={() => handleWindowSize()}>
      {product_list.map((product, index) => {
        return (
          <SwiperSlide key={index} product={product}>
            <Product key={index} product={product}></Product>
          </SwiperSlide>
        );
      })}
      ...
    </Swiper>
  );
};
export default Slider;
