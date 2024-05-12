import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import right100 from "./../assets/images/right-arrow-100.png";
import left100 from "./../assets/images/left-arrow.png";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

import SwiperButton from "./SwiperButton";
import SwiperNav from "./SwiperNav";

function Slider() {
  const [data, setData]: any = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTlkYTE2NTYxMjUwMzdhMGFjMGIzYTQyZjBmZDU5MSIsInN1YiI6IjY1NGM4NDMyMjkzODM1MDBjNDcyZDg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YW7QV--GADYjZwcVjzmb4ESV64JEJyIDUmG05jtQPXg",
    },
  };

  const getData = async () => {
    await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.results.slice(0, 5));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const imagePath = data.map((data: any) => data.backdrop_path);

  const leftLocation =
    "absolute top-[186px] z-20 left-[100px] bg-no-repeat w-[100px] h-[100px] bg-[length:100px_auto] bg-[50%]";

  const rightLocation =
    "absolute top-[186px] z-20 right-[100px] bg-no-repeat w-[100px] h-[100px] bg-[length:100px_auto] bg-[50%]";

  return (
    <section>
      <Swiper
        className="w-full mt-0 mx-auto mb-[80px] relative min-w-[1240px] max-w-[3840px] min-h-[555px]"
        modules={[Autoplay]}
        loop={true}
        slidesPerView={1.15}
        centeredSlides={true}
        loopAdditionalSlides={1}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        <h2 className=" indent-[-999999px] text-[0px]">빅배너</h2>
        <SwiperNav />
        <SwiperButton
          leftImage={left100}
          rightImage={right100}
          leftLocation={leftLocation}
          rightLocation={rightLocation}
        />

        {imagePath.map((path: string) => (
          <SwiperSlide>
            <div className=" w-[1240px] h-[508px] mx-[auto] bg-[#252525]">
              <img
                key={path}
                src={`https://image.tmdb.org/t/p/original/${path}`}
                className=" object-cover block w-full h-full rounded-[12px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Slider;
