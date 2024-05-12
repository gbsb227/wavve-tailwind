import React from "react";
import seeAll from "./../assets/images/right-arrow-see-all-default.svg";
import leftArrow from "./../assets/images/left-arrow-list.png";
import rightArrow from "./../assets/images/right-arrow-list.png";

type listBandProps = { genre: string; datas: any[] };
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import SwiperButton from "./SwiperButton";

function ListBand({ genre, datas }: listBandProps) {
  // console.log(`${genre}:${JSON.stringify(datas)}`);
  console.log(datas);

  const leftLocation =
    "absolute top-[155px] left-[0px] w-[30px] h-[50px] no-repeat z-[50]  cursor-pointer bg-[50%]";
  const rightLocation =
    "absolute top-[155px] right-[0px] w-[30px] h-[50px] no-repeat z-[50]  cursor-pointer bg-[50%]";

  return (
    <div className="bg-[rgb(27,27,27)] min-h-[383px] relative w-[1240px] my-0 mx-auto overflow-hidden">
      <div className="mt-0 mx-0 mb-[20px] ">
        <h2 className="inline-block text-[24px] leading-[36px] text-[#fff] font-normal align-middle">
          {genre}
        </h2>
      </div>
      <div>
        <Swiper
          className="relative min-h-[442px]"
          spaceBetween={50}
          slidesPerView={5}
          slidesPerGroup={5}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperButton
            leftImage={leftArrow}
            rightImage={rightArrow}
            leftLocation={leftLocation}
            rightLocation={rightLocation}
          />
          {datas.map((data) => (
            <SwiperSlide>
              <div className="relative w-[240px] h-[360px] overflow-hidden rounded-[12px] bg-[#252525]">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + data.backdrop_path
                  }
                  alt={data.title}
                  className=" object-cover h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <a
        href="#"
        className="absolute top-[7px] right-[0px] py-[5px] pr-[20px] pl-0 leading-[24px] text-[16px] text-[#a5a5a5] bg-no-repeat align-bottom bg-[100%] bg-[length:16px_auto]"
        style={{ backgroundImage: `url(${seeAll})` }}
      >
        더 보기
      </a>
    </div>
  );
}

export default ListBand;
