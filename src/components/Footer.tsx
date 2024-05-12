import React from "react";
import footerLeft from "./../assets/images/footer-left.png";
import footerRight from "./../assets/images/footer-right.png";
import wavveonLogo from "./../assets/images/wavveon-footer.svg";
import wavveonDown from "./../assets/images/wavvon-down-arrow-footer.png";
import facebook from "./../assets/images/facebook-footer.png";
import naver from "./../assets/images/naver-footer.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Footer() {
  const notice = [
    "email : gbsb227@gmail.com",
    "github : gbsb227.github.com",
    "blog : twentizz20.tistory.com",
  ];
  return (
    <footer className="footer bg-[#1b1b1b] border-t-[1px] border-solid border-[#2f2f2f] min-w-[1240px] overflow-hidden relative">
      <div className="footer-notice border-b-[1px] border-solid border-[#2f2f2f]">
        <div className="footer-notice-inner w-[1240px] my-0 mx-auto relative h-[50px] leading-[50px] z-[1000]">
          <h2 className="footer-notice-hd mr-[23px] float-left align-middle">
            <a href="#" className="block text-[18px] text-[#a5a5a5] ">
              공지사항
            </a>
          </h2>
          <button
            type="button"
            className="footer-arrow-left right-[54px] border-r-0 absolute top-0 border-l-[1px] border-solid h-[50px] border-[#2f2f2f]"
          >
            <img src={footerLeft} alt="이전목록" />
          </button>
          <button
            type="button"
            className="footer-arrow-right right-0 absolute top-0 border-r-[1px] border-l-[1px] border-solid border-[#2f2f2f] h-[50px] block"
          >
            <img src={footerRight} alt="다음목록" />
          </button>
          <div
            id="footer-notice"
            className="swiper-container swiper-container-vertical"
          >
            <Swiper
              direction={"vertical"}
              loop={true}
              // navigation={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="h-[50px]"
            >
              {/* <ul className="swiper"> */}
              {notice.map((data) => (
                <SwiperSlide>
                  {/* // <li className="swiper-slide" key={data}> */}
                  <a
                    title={`${data}로 이동`}
                    className="footer-notice-link text-[16px] text-[#a5a5a5]"
                  >
                    {data}
                  </a>
                  {/* </li> */}
                </SwiperSlide>
              ))}
              {/* </ul> */}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="footer-menu w-[1240px] mx-auto my-0  pt-0 px-0 pb-[100px] overflow-hidden text-[#717171] relative">
        <div className="footer-info-area footer-info-link-all mt-[10px] text-[14px] leading-[20px] after:clear-both after:block">
          <ul>
            <li className="float-left mr-[24px]">
              <a
                href="https://www.contentwavve.com"
                target="_blank"
                className="block py-[10px] px-0 text-[#717171]"
              >
                회사소개
              </a>
            </li>
            <li className="float-left mr-[24px]">
              <a
                href="https://wavve.career.greetinghr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-[10px] px-0 text-[#717171]"
              >
                인재채용
              </a>
            </li>
            <li className="float-left mr-[24px]">
              <a href="#" className="block py-[10px] px-0 text-[#717171]">
                서비스 소개
              </a>
            </li>
            <li className="float-left mr-[24px]">
              <a href="#" className="block py-[10px] px-0 text-[#717171]">
                이용약관
              </a>
            </li>
            <li className="footer-privacy float-left mr-[24px]">
              <a
                href="#"
                className="block py-[10px] px-0 text-[#a5a5a5] font-[700]"
              >
                개인정보 처리방침
              </a>
            </li>
            <li className="footer-privacy float-left mr-[24px]">
              <a href="#" className="block py-[10px] px-0 text-[#717171]">
                고객센터
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-info-area footer-info-copyright text-[12px] leading-[20px]">
          <span className="inline-block border-r-[1px] border-solid border-[#717171] pr-[6px] mr-[6px] leading-[11px] ">
            콘텐츠웨이브 주식회사
          </span>
          <span className="inline-block border-r-[1px] border-solid border-[#717171] pr-[6px] mr-[6px] leading-[11px]">
            대표이사 이태현
          </span>
          <span className="last nline-block pr-[6px] mr-[6px] leading-[11px]">
            고객센터 1599-3709 (평일 09:00~18:00 / 점심시간 12:00~13:00 / 주말
            및 공휴일 휴무)
          </span>
          <br />
          <span className="inline-block border-r-[1px] border-solid border-[#717171] pr-[6px] mr-[6px] leading-[11px]">
            사업자등록번호 220-88-38020
          </span>
          <span className="last inline-block pr-[6px] mr-[6px] leading-[11px]">
            호스팅서비스제공자 : 마이크로소프트 유한회사, 구글클라우드코리아
            유한회사, 아마존웹서비시즈코리아 유한회사
          </span>
          <br />
          <span className="inline-block border-r-[1px] border-solid border-[#717171] pr-[6px] mr-[6px] leading-[11px]">
            통신판매업 신고번호 : 제 2021-서울영등포-0585호
          </span>
          <span className="last inline-block pr-[6px] mr-[6px] leading-[11px]">
            통신판매업 정보 공개 :
            <a
              href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020"
              target="_blank"
              rel="noopener noreferrer"
              className="info-link underline text-[#717171]"
            >
              http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020
            </a>
          </span>
          <br />
          <address className="ml-0 inline-block border-r-[1px] border-solid border-[#717171] pr-[6px] mr-[6px] leading-[11px]">
            서울특별시 영등포구 여의나루로 60 포스트타워 19층
          </address>
          <span className="last inline-block pr-[6px] mr-[6px] leading-[11px]">
            전자우편주소 :
            <a href="mailto:helpdesk@wavve.com" className="text-[#717171]">
              helpdesk@wavve.com
            </a>
          </span>
          <span className="copyright block mt-[10px] pr-[6px] mr-[6px] leading-[11px]">
            Copyright© 콘텐츠웨이브(주) All rights reserved.
          </span>
        </div>
        <div className="footer-wavveon absolute right-0 top-[20px] h-[40px]">
          <div className="wavveon-footer-logo inline-block align-middle w-[94px] h-[38px] mr-[1px] leading-[38px] text-center text-[#717171] bg-[#252525]">
            <label
              htmlFor="wavveon-logo"
              className="m-0 p-0 align-middle cursor-pointer"
            >
              <img src={wavveonLogo} alt="Wavve on" className=" align-middle" />
            </label>
          </div>
          <select
            id="wavveon-logo"
            className="inline-block align-middle w-[225px] h-[38px] pl-[13px] mr-[10px] leading-[32px] text-[#a5a5a5] border-[1px] border-solid border-[#252525] bg-[#252525] bg-no-repeat appearance-none bg-[left_96%_top_50%] m-0 p-0"
            style={{ backgroundImage: `url(${wavveonDown})` }}
          >
            <option value="" disabled selected hidden>
              사업자용 웨이브 가입
            </option>
            <option value="http://www.wavveon.com/Index.aspx">
              웨이브온 서비스 소개
            </option>
            <option value="http://www.wavveon.com/join_pcbang.aspx">
              웨이브온 PC방 서비스
            </option>
            <option value="http://www.wavveon.com/join_library.aspx">
              웨이브온 도서관 서비스
            </option>
            <option value="http://www.wavveon.com/join_hospital.aspx">
              웨이브온 병원 서비스
            </option>
            <option value="http://www.wavveon.com/join_movienet.aspx">
              웨이브온 숙박 서비스
            </option>
            <option value="http://www.wavveon.com/join_others.aspx">
              웨이브온 일반 서비스
            </option>
          </select>
          <div className="footer-sns inline-block align-middle">
            <a
              href="https://www.facebook.com/wavve.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-[34px] py-[1px] px-[1px]"
            >
              <img
                src={facebook}
                alt="Wavve 페이스북"
                className="block max-w-full align-middle"
              />
            </a>
            <a
              href="http://m.post.naver.com/my.nhn?memberNo=12375258"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-[5px] inline-block w-[34px] px-[1px] py-[1px]"
            >
              <img
                src={naver}
                alt="Wavve 네이버 포스트"
                className="block max-w-full align-middle"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
