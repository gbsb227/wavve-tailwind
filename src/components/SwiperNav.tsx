import React from "react";
import stop from "./../assets/images/stop.svg";

function SwiperNav() {
  return (
    <div className="nav flex absolute top-[528px] left-1/2 -translate-x-2/4 text-center ">
      <button
        className="w-[34px] h-[34px] align-middle bg-no-repeat bg-[cover:50%] indent-[-99999px] text-[0px]"
        style={{ backgroundImage: `url(${stop})` }}
      >
        빅배너 슬라이더 일시정지
      </button>
      <div className="flex  w-auto text-[0px] align-middle items-center text-center">
        <span className="inline-block my-0 mx-[4px] w-[10px] h-[10px] item align-middle bg-[hsla(0,0%,100%,.3)] rounded-full"></span>
        <span className="inline-block my-0 mx-[4px] w-[10px] h-[10px]  align-middle bg-white rounded-full"></span>
      </div>
    </div>
  );
}

export default SwiperNav;
