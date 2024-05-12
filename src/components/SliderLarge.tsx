import React from "react";
import sliderStop from "./../assets/images/slider-stop.svg";
import sliderRight from "./../assets/images/slider-right.png";
import sliderLeft from "./../assets/images/slider-left.png";

function SliderLarge() {
  return (
    <>
      <section className="">
        <div
          id="main-banner"
          className="swiper-container multi-banner swiper-container-horizontal w-full overflow-hidden mt-0 mx-auto mb-[80px] relative min-w-[1240px] max-w-[3840px] min-h-[555px] z-[1]"
          multisection-index="0"
        >
          <h2 tabIndex={0} className="ir text-[0px] indent-[-9999999px]">
            빅배너
          </h2>
          <div className="main01-nav table absolute top-[528px] left-2/4 -translate-x-1/2 text-center">
            <button
              type="button"
              aria-label="일시정지"
              className="btn-pause ir table-cell w-[34px] h-[34px] align-middle bg-cover bg-[50%] bg-no-repeat text-[0px] indent-[-9999999px] cursor-pointer"
              style={{ backgroundImage: `url(${sliderStop})` }}
            >
              빅배너 슬라이더 일시정지
            </button>
            <div className="swiper-pagination swiper-pagination-bullets table-cell static w-auto text-[0px] align-middle text-center">
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active my-0 mx-[4px] w-[10px] h-[10px] bg-white cursor-default inline-block rounded"></span>
              <span className="swiper-pagination-bullet my-0 mx-[4px] w-[10px] h-[10px] bg-white cursor-default inline-block rounded"></span>
              <span className="swiper-pagination-bulle my-0 mx-[4px] w-[10px] h-[10px] bg-white cursor-default inline-block roundedt"></span>
              <span className="swiper-pagination-bullet my-0 mx-[4px] w-[10px] h-[10px] bg-white cursor-default inline-block rounded"></span>
              <span className="swiper-pagination-bullet my-0 mx-[4px] w-[10px] h-[10px] bg-white cursor-default inline-block rounded"></span>
            </div>
          </div>
          <button
            type="button"
            className="swiper-button-prev absolute right-[100px] top-[186px] z-[20] bg-no-repeat w-[100px] h-[100px] bg-[length:100px_auto] text-[0px]"
            style={{ backgroundImage: `url(${sliderRight})` }}
            tabIndex={0}
            role="button"
            aria-label="Next slide"
          >
            이전 배너
          </button>
          <button
            type="button"
            className="swiper-button-next absolute left-[100px] top-[186px] z-[20] bg-no-repeat w-[100px] h-[100px] bg-[length:100px_auto] text-[0px]"
            style={{ backgroundImage: `url(${sliderLeft})` }}
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
          >
            다음 배너
          </button>
          <div
            className="swiper-wrapper"
            style={{
              transform: "translate3d(-12297px, 0px, 0px)",
              transitionDuration: "0ms",
            }}
          >
            <div
              className="swiper-slide component-list swiper-slide-duplicate"
              data-swiper-slide-index="0"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2022/20221201_banner_191950.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2022/20221201_banner_191950.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2022/20221201_banner_191950.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2022/20221201_banner_191950.jpg"
                    alt="기타_MMA"
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231116_171916688.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231116_171916688.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231116_171916688.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231116_171916688.png"
                    alt="기타_MMA"
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list swiper-slide-duplicate"
              data-swiper-slide-index="1"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/20231117_banner_135752.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231117_banner_135752.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/20231117_banner_135752.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231117_banner_135752.jpg"
                    alt="미드_누군가는 거짓말을 하고 있다"
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231123_200257837.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231123_200257837.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231123_200257837.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231123_200257837.png"
                    alt="미드_누군가는 거짓말을 하고 있다"
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list swiper-slide-duplicate"
              data-swiper-slide-index="2"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/20231120_banner_203022.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231120_banner_203022.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/20231120_banner_203022.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231120_banner_203022.jpg"
                    alt="K_혼례대첩"
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231120_205050110.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231120_205050110.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231120_205050110.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231120_205050110.png"
                    alt="K_혼례대첩"
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list swiper-slide-duplicate"
              data-swiper-slide-index="3"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/20231120_banner_171501.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231120_banner_171501.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/20231120_banner_171501.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231120_banner_171501.jpg"
                    alt="영화_용감한 시민(신혜선)"
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231120_171540459.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231120_171540459.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231120_171540459.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231120_171540459.png"
                    alt="영화_용감한 시민(신혜선)"
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list swiper-slide-duplicate swiper-slide-duplicate-prev"
              data-swiper-slide-index="4"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/20230207_banner_143235.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20230207_banner_143235.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/20230207_banner_143235.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20230207_banner_143235.jpg"
                    alt=""
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231127_131656765.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231127_131656765.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231127_131656765.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231127_131656765.png"
                    alt=""
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list swiper-slide-duplicate-active"
              data-swiper-slide-index="0"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2022/20221201_banner_191950.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2022/20221201_banner_191950.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2022/20221201_banner_191950.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2022/20221201_banner_191950.jpg"
                    alt="기타_MMA"
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231116_171916688.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231116_171916688.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231116_171916688.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231116_171916688.png"
                    alt="기타_MMA"
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list swiper-slide-duplicate-next"
              data-swiper-slide-index="1"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/20231117_banner_135752.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231117_banner_135752.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/20231117_banner_135752.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231117_banner_135752.jpg"
                    alt="미드_누군가는 거짓말을 하고 있다"
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231123_200257837.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231123_200257837.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231123_200257837.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231123_200257837.png"
                    alt="미드_누군가는 거짓말을 하고 있다"
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list"
              data-swiper-slide-index="2"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/20231120_banner_203022.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231120_banner_203022.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/20231120_banner_203022.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231120_banner_203022.jpg"
                    alt="K_혼례대첩"
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231120_205050110.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231120_205050110.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231120_205050110.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231120_205050110.png"
                    alt="K_혼례대첩"
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list"
              data-swiper-slide-index="3"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/20231120_banner_171501.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231120_banner_171501.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/20231120_banner_171501.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231120_banner_171501.jpg"
                    alt="영화_용감한 시민(신혜선)"
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231120_171540459.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231120_171540459.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231120_171540459.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231120_171540459.png"
                    alt="영화_용감한 시민(신혜선)"
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list swiper-slide-prev"
              data-swiper-slide-index="4"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/20230207_banner_143235.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20230207_banner_143235.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/20230207_banner_143235.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20230207_banner_143235.jpg"
                    alt=""
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231127_131656765.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231127_131656765.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231127_131656765.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231127_131656765.png"
                    alt=""
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list swiper-slide-duplicate swiper-slide-active"
              data-swiper-slide-index="0"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2022/20221201_banner_191950.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2022/20221201_banner_191950.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2022/20221201_banner_191950.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2022/20221201_banner_191950.jpg"
                    alt="기타_MMA"
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231116_171916688.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231116_171916688.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231116_171916688.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231116_171916688.png"
                    alt="기타_MMA"
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list swiper-slide-duplicate swiper-slide-next"
              data-swiper-slide-index="1"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/20231117_banner_135752.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231117_banner_135752.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/20231117_banner_135752.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231117_banner_135752.jpg"
                    alt="미드_누군가는 거짓말을 하고 있다"
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231123_200257837.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231123_200257837.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231123_200257837.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231123_200257837.png"
                    alt="미드_누군가는 거짓말을 하고 있다"
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list swiper-slide-duplicate"
              data-swiper-slide-index="2"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/20231120_banner_203022.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231120_banner_203022.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/20231120_banner_203022.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231120_banner_203022.jpg"
                    alt="K_혼례대첩"
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231120_205050110.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231120_205050110.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231120_205050110.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231120_205050110.png"
                    alt="K_혼례대첩"
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list swiper-slide-duplicate"
              data-swiper-slide-index="3"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/20231120_banner_171501.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231120_banner_171501.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/20231120_banner_171501.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231120_banner_171501.jpg"
                    alt="영화_용감한 시민(신혜선)"
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231120_171540459.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231120_171540459.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231120_171540459.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231120_171540459.png"
                    alt="영화_용감한 시민(신혜선)"
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
            <div
              className="swiper-slide component-list swiper-slide-duplicate swiper-slide-duplicate-prev"
              data-swiper-slide-index="4"
            >
              <div className="picture-area">
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/20230207_banner_143235.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20230207_banner_143235.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/20230207_banner_143235.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20230207_banner_143235.jpg"
                    alt=""
                    className="big-banner"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="
                https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2023/imgbuild_20231127_131656765.webp  1x,
                https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231127_131656765.webp 1.7x,
                https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2023/imgbuild_20231127_131656765.webp 2.5x
              "
                    type="image/webp"
                  />
                  <img
                    src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231127_131656765.png"
                    alt=""
                    className="banner-title"
                  />
                </picture>
              </div>
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </section>
    </>
  );
}

export default SliderLarge;
