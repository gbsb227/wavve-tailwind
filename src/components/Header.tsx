import React from "react";
import logo from "./../assets/images/wavve.svg";
import downArrow from "./../assets/images/down-arrow.png";

const loginNav = [
  { name: "로그인", link: "#" },
  { name: "이용권", link: "#" },
  { name: "쿠폰, 코인", link: "#" },
  { name: "웨이브온", link: "#" },
  { name: "이벤트", link: "#" },
];

const menuNav = [
  { name: "홈", link: "#" },
  { name: "카테고리", link: "#" },
  { name: "LIVE", link: "#" },
  { name: "MY", link: "#" },
];

const category = [
  { id: "original", name: "ORIGINAL" },
  { id: "classic", name: "CLASSIC" },
  { id: "drama", name: "드라마" },
  { id: "gag", name: "예능" },
  { id: "animation", name: "애니메이션" },
  { id: "abroad", name: "해외시리즈" },
  { id: "movie", name: "영화" },
  { id: "movieplus", name: "영화플러스" },
  { id: "baseball", name: "프로야구" },
];

function Header() {
  return (
    <>
      <header>
        <nav className="h-[34px] border-b border-[#2f2f2f] border-solid">
          <div className="w-[1240px] my-0 mx-auto">
            <ul className="flex justify-end">
              {loginNav.map((item, index) => {
                return (
                  <>
                    {index === 2 && (
                      <li
                        key={index}
                        className="relative group/coin pr-[2px] after:w-[1px] "
                      >
                        <button
                          type="button"
                          className="text-[#a5a5a5] px-[11px] text-[12px] leading-[34px] max-w-[250px] truncate pr-[15px] mr-[6px] bg-no-repeat bg-[top_12px_right_0px]"
                          style={{ backgroundImage: `url(${downArrow})` }}
                        >
                          {item.name}
                        </button>
                        <div className="absolute bg-[#101010] text-center w-[87px] top-[34px] right-0 hidden z-[99999] group-hover/coin:block ">
                          <ul>
                            <li>
                              <a
                                href="#"
                                className=" inline-block w-full leading-[34px] text-center text-[12px] text-[#a5a5a5]"
                              >
                                쿠폰 등록
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className=" inline-block w-full leading-[34px] text-center text-[12px] text-[#a5a5a5]"
                              >
                                코인 충전
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    )}
                    {index === 4 && (
                      <li
                        key={index}
                        className="relative pr-[2px] after:w-[1px]"
                      >
                        <a
                          href="#"
                          className="text-[#a5a5a5] px-[11px] text-[12px] leading-[34px] "
                        >
                          {item.name}
                        </a>
                      </li>
                    )}
                    {index !== 4 && index !== 2 && (
                      <li
                        key={index}
                        className="relative pr-[2px] after:w-[1px] after:h-[10px] after:absolute after:top-[12px] after:right-0 after:bg-[#2f2f2f]"
                      >
                        <a
                          href="#"
                          className="text-[#a5a5a5] px-[11px] text-[12px] leading-[34px] "
                        >
                          {item.name}
                        </a>
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
          </div>
        </nav>
        <nav className="flex w-[1240px] h-[74px] m-auto items-center justify-start align-middle">
          <div className="flex justify-start w-full">
            <h1 className="h-full inline-block mr-[78px] leading-[74px] text-center align-middle">
              <a className="block w-full h-full align-middle text-[20px] leading-[74px]">
                <img src={logo} className="align-middle inline-block" />
              </a>
            </h1>
            <ul className="flex flex-shrink-0 text-[#a5a5a5] items-center">
              {menuNav.map((item, index) => {
                if (index === 1) {
                  return (
                    <li
                      key={index}
                      className=" relative group/category mr-[20px] inline-block align-middle"
                    >
                      <button className="block px-[10px] text-[20px] leading-[74px] text-[#a5a5a5] hover:text-white">
                        카테고리
                      </button>
                      <div className="absolute top-[74px] left-[10px] min-w-[210px] p-[20px] bg-[#101010] hidden group-hover/category:block">
                        <button className="text-[14px] leading-[34px] text=[#a5a5a5]">
                          전체 카테고리
                        </button>
                        <div className="mt-[10px] pt-[10px] border-solid  border-t-[#2f2f2f] border-t">
                          <span className="block">
                            <strong className="text-white text-[14px] leading-[34px]">
                              추천 메뉴
                            </strong>
                          </span>
                          <ul>
                            {category.map((item, index) => (
                              <li key={index}>
                                <a className="block text[14px] leading-[34px] text-[#a5a5a5]">
                                  <div>
                                    <span className="block text-[14px] leading-[34px] truncate">
                                      {item.name}
                                    </span>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {/* <div className="absolute">
                        전체카테고리 버튼 클릭시 나오는 전체메뉴
                      </div> */}
                    </li>
                  );
                } else {
                  return (
                    <li
                      key={index}
                      className="mr-[20px] inline-block align-middle"
                    >
                      <a className="text-[#a5a5a5] hover:text-white block px-[10px] text-[20px] leading-[74px]">
                        {item.name}
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div></div>
        </nav>
      </header>
    </>
  );
}

export default Header;
