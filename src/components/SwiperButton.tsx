import React from "react";
import { useSwiper } from "swiper/react";

function SwiperButton({
  leftImage,
  rightImage,
  leftLocation,
  rightLocation,
}: any) {
  const swiper = useSwiper();
  return (
    <>
      <button
        className={rightLocation}
        style={{ backgroundImage: `url(${rightImage})` }}
        onClick={() => swiper.slideNext()}
      ></button>
      <button
        className={leftLocation}
        style={{ backgroundImage: `url(${leftImage})` }}
        onClick={() => swiper.slidePrev()}
      ></button>
    </>
  );
}

export default SwiperButton;
