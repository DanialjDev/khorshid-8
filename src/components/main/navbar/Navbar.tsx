"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../../public/assets/images/navbar-logo.png";
import { authToggler } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Cookies from "js-cookie";
import { decrypt } from "@/utills/crypto";
import { getHeaderPhoneNumber } from "@/services/common";

const MenuItem = ({
  href,
  pathname,
  text,
  setNav,
}: {
  href: string;
  pathname: string;
  text: string;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <li
      className={`lg:w-auto h-full w-full flex peer items-center relative pb-2 xl:text-[14px] text-[12px] lg:border-none border-t border-menuBorderColor ${
        pathname === href ? "text-primary" : "text-dark"
      }`}
      onClick={() => setNav(false)}
    >
      <Link href={href}>{text}</Link>
      <div
        className={`absolute w-full h-[1.6px] rounded-full bottom-0 bg-primary ${
          pathname === href ? "lg:flex hidden" : "hidden"
        } transition ease-in-out duration-200`}
      />
    </li>
  );
};

const Navbar = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const pathname = usePathname();
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  let userInfo: any;
  if (Cookies.get("token")) {
    userInfo = Cookies.get("token")
      ? JSON.parse(decrypt(Cookies.get("userInfo")))
      : {
          name: "",
          maxDeviceNumber: "",
          roleName: "",
          roleNameEn: "",
          mobileNumber: "",
          email: "",
        };
  }

  useEffect(() => {
    getHeaderPhoneNumber()
      .then((res) => {
        if (res) {
          setPhoneNumber(res);
        }
      })
      .catch((err) => null);
  }, []);

  const authHandler = () => {
    if (userInfo) {
      push("/profile");
    } else {
      dispatch(authToggler("login"));
    }
  };

  const [nav, setNav] = useState<boolean>(false);

  return (
    <nav id="nav" className="w-full flex items-center flex-col fixed z-50">
      {/* Top Nav */}
      <div className="w-full flex justify-center items-center shadow-md py-2 bg-white">
        <div className="w-[85%] h-[64px] flex justify-between items-center">
          <button className="lg:hidden flex" onClick={() => setNav(true)}>
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 12C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H1C0.447715 14 0 13.5523 0 13C0 12.4477 0.447715 12 1 12H19ZM19 6C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H19ZM19 0C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H19Z"
                fill="#292D32"
              />
            </svg>
          </button>
          <div className="flex lg:w-[30rem] w-auto justify-between items-center">
            <div className="flex justify-center items-center">
              <Image src={Logo} alt="خورشید هشت" width={100} height={100} />
            </div>
            <div className="w-[400px] h-[40px] lg:flex hidden justify-between border-2 border-slate-200 rounded-md p-1">
              <input
                className="w-[270px] outline-none p-1 bg-transparent placeholder:text-[12px]"
                placeholder="لطفا کلمه ی مورد نظر خود را جستجو کنید"
              />
              <div className="flex justify-center items-center">
                <button className="flex text-[12px] justify-center items-center bg-primary p-2 rounded-md">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.86393"
                      cy="6.86387"
                      r="5.24333"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5107 10.783L12.5664 12.8334"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex">
              <Link
                href={`callto:${phoneNumber}`}
                className="flex text-[12px] justify-center items-center bg-primaryLight p-3 rounded-md border-2 border-primary xl:scale-100 scale-[.8]"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2451 15.285L14.5001 13.82C14.47 13.7594 14.4278 13.7056 14.3763 13.6617C14.3247 13.6179 14.2648 13.585 14.2001 13.565C14.0543 13.5206 13.9025 13.4987 13.7501 13.5C13.3178 13.5 12.9032 13.6717 12.5975 13.9774C12.2918 14.2831 12.1201 14.6977 12.1201 15.13C12.1201 15.9017 12.2723 16.6658 12.5679 17.3787C12.8635 18.0915 13.2968 18.739 13.8429 19.2843C14.3891 19.8295 15.0374 20.2616 15.7507 20.556C16.464 20.8504 17.2284 21.0013 18.0001 21C18.2532 21.0016 18.5032 20.944 18.7301 20.8318C18.9571 20.7197 19.1546 20.556 19.3071 20.354C19.4596 20.152 19.5628 19.9171 19.6085 19.6682C19.6541 19.4192 19.641 19.163 19.5701 18.92C19.5502 18.854 19.5168 18.7928 19.472 18.7403C19.4273 18.6878 19.3721 18.6452 19.3101 18.615L17.8501 17.885C17.7558 17.8376 17.6489 17.8212 17.5447 17.8383C17.4405 17.8553 17.3444 17.905 17.2701 17.98L16.8601 18.39C16.3707 18.2191 15.9261 17.9402 15.5591 17.5741C15.1921 17.208 14.9122 16.764 14.7401 16.275L15.1551 15.86C15.2283 15.7855 15.2763 15.6901 15.2924 15.5869C15.3085 15.4838 15.292 15.3782 15.2451 15.285ZM14.8501 18.285C15.3968 18.8341 16.0777 19.2306 16.8251 19.435H16.9051C16.9854 19.4511 17.0685 19.4472 17.147 19.4236C17.2254 19.4001 17.2969 19.3576 17.3551 19.3L17.7251 18.93L18.6301 19.385C18.6262 19.5495 18.5581 19.7059 18.4404 19.8208C18.3226 19.9357 18.1646 20 18.0001 20C17.3608 20 16.7278 19.874 16.1372 19.6292C15.5466 19.3844 15.0101 19.0256 14.5583 18.5733C14.1065 18.121 13.7482 17.5841 13.504 16.9933C13.2598 16.4025 13.1345 15.7693 13.1351 15.13C13.1349 14.968 13.1972 14.8121 13.3089 14.6948C13.4206 14.5775 13.5733 14.5077 13.7351 14.5L14.1901 15.41L13.8201 15.78C13.7617 15.8387 13.7188 15.911 13.6952 15.9905C13.6716 16.0699 13.6682 16.1539 13.6851 16.235C13.6835 16.2583 13.6835 16.2817 13.6851 16.305C13.8923 17.0546 14.2942 17.7361 14.8501 18.28V18.285Z"
                    fill="#2C9CF0"
                  />
                  <path
                    d="M0.339997 18.7899L0.339996 18.79L0.904996 20V20.025H0.905148H11.135C11.2742 20.025 11.4078 19.9697 11.5062 19.8712C11.6047 19.7728 11.66 19.6392 11.66 19.5C11.66 19.3608 11.6047 19.2272 11.5062 19.1288C11.4078 19.0303 11.2742 18.975 11.135 18.975H1.395V18.79C1.39762 16.608 2.26456 14.5159 3.80606 12.9716C5.34757 11.4273 7.43808 10.5566 9.62007 10.55H9.645H9.64503C11.7851 10.5474 13.8411 11.383 15.3725 12.8779L15.3726 12.878C15.4729 12.9748 15.6075 13.0277 15.7468 13.0253C15.8861 13.0228 16.0187 12.9651 16.1155 12.8649C16.2123 12.7646 16.2652 12.63 16.2628 12.4907C16.2603 12.3514 16.2026 12.2188 16.1024 12.1221C14.9947 11.045 13.6351 10.2628 12.1479 9.84645C13.0278 9.31166 13.7124 8.50721 14.0994 7.55193C14.4938 6.57858 14.5574 5.5026 14.2803 4.4896C14.0033 3.47659 13.401 2.58271 12.5661 1.94554C11.7313 1.30837 10.7102 0.96322 9.66 0.96322C8.60979 0.96322 7.58869 1.30837 6.75385 1.94554C5.91902 2.58271 5.31673 3.47659 5.03968 4.4896C4.76263 5.5026 4.82618 6.57858 5.22054 7.55193C5.60755 8.50711 6.29208 9.31149 7.17184 9.84629C5.22286 10.3836 3.50132 11.5413 2.26836 13.1448C1.02348 14.7639 0.345853 16.7476 0.339997 18.7899ZM5.895 5.76513L5.89005 5.76463C5.89403 5.03397 6.11196 4.32026 6.5172 3.71182C6.92712 3.09634 7.5103 2.6162 8.19303 2.33208C8.87576 2.04796 9.6274 1.97261 10.3529 2.11555C11.0785 2.2585 11.7454 2.61332 12.2693 3.13517C12.7932 3.65703 13.1507 4.3225 13.2965 5.04746C13.4424 5.77243 13.37 6.52436 13.0886 7.20822C12.8072 7.89207 12.3294 8.47716 11.7156 8.88953C11.1017 9.30189 10.3794 9.52304 9.63993 9.525H9.61513C9.12398 9.5224 8.63816 9.42308 8.1854 9.23272C7.73263 9.04236 7.3218 8.76468 6.97635 8.41555C6.63091 8.06641 6.35761 7.65265 6.17207 7.19789C5.98653 6.74313 5.89238 6.25628 5.895 5.76513Z"
                    fill="#2C9CF0"
                    stroke="#2C9CF0"
                    strokeWidth="0.05"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex mr-2">
              <div
                onClick={authHandler}
                className="flex justify-center text-[12px] cursor-pointer items-center border-2 xl:scale-100 scale-[.8] border-primary text-primary bg-primaryLight rounded-md p-2"
              >
                <div>
                  <p className="ml-1 lg:flex hidden">
                    {!Cookies.get("token") ? "حساب کاربری" : userInfo.name}
                  </p>
                </div>
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 11.975C10.9 11.975 10 11.625 9.3 10.925C8.6 10.225 8.25 9.32498 8.25 8.22498C8.25 7.12498 8.6 6.22498 9.3 5.52498C10 4.82498 10.9 4.47498 12 4.47498C13.1 4.47498 14 4.82498 14.7 5.52498C15.4 6.22498 15.75 7.12498 15.75 8.22498C15.75 9.32498 15.4 10.225 14.7 10.925C14 11.625 13.1 11.975 12 11.975ZM4 20V17.65C4 17.0166 4.15833 16.475 4.475 16.025C4.79167 15.575 5.2 15.2333 5.7 15C6.81667 14.5 7.8875 14.125 8.9125 13.875C9.9375 13.625 10.9667 13.5 12 13.5C13.0333 13.5 14.0583 13.6291 15.075 13.8875C16.0917 14.1458 17.1577 14.5183 18.273 15.0048C18.7947 15.2403 19.213 15.5816 19.5278 16.029C19.8426 16.4763 20 17.0166 20 17.65V20H4ZM5.5 18.5H18.5V17.65C18.5 17.3833 18.4208 17.1291 18.2625 16.8875C18.1042 16.6458 17.9083 16.4666 17.675 16.35C16.6083 15.8333 15.6333 15.4791 14.75 15.2875C13.8667 15.0958 12.95 15 12 15C11.05 15 10.125 15.0958 9.225 15.2875C8.325 15.4791 7.35 15.8333 6.3 16.35C6.06667 16.4666 5.875 16.6458 5.725 16.8875C5.575 17.1291 5.5 17.3833 5.5 17.65V18.5ZM12 10.475C12.65 10.475 13.1875 10.2625 13.6125 9.83748C14.0375 9.41248 14.25 8.87498 14.25 8.22498C14.25 7.57498 14.0375 7.03748 13.6125 6.61248C13.1875 6.18748 12.65 5.97498 12 5.97498C11.35 5.97498 10.8125 6.18748 10.3875 6.61248C9.9625 7.03748 9.75 7.57498 9.75 8.22498C9.75 8.87498 9.9625 9.41248 10.3875 9.83748C10.8125 10.2625 11.35 10.475 12 10.475Z"
                    fill="#2C9CF0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Botton Nav */}
      <div
        className={`w-full bottom-nav lg:h-auto h-screen flex lg:flex-row flex-col lg:justify-center justify-start items-center lg:relative fixed ${
          nav ? "right-0" : "lg:right-0 right-[-120vw]"
        } lg:bg-white-gray bg-menuBg z-50 lg:pt-5 transition-all duration-200 ease-in-out`}
      >
        <div className="w-full lg:hidden flex px-5 justify-between items-center">
          <div className="flex justify-center items-center">
            <Image src={Logo} alt="خورشید هشت" width={100} height={100} />
          </div>
          <div onClick={() => setNav(false)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L1 13"
                stroke="#2F384F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 1L13 13"
                stroke="#2F384F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <ul className="lg:w-[85%] w-[95%] lg:flex-row flex-col h-[70%] flex justify-between items-center mt-5 lg:m-0 pb-4">
          <MenuItem
            setNav={setNav}
            text="صفحه اصلی"
            href="/"
            pathname={pathname}
          />
          <MenuItem
            setNav={setNav}
            text="لیست تجهیزات‌ پزشکی"
            href="/medical-equipments-list"
            pathname={pathname}
          />
          <MenuItem
            setNav={setNav}
            text="بازار تجهیزات‌ پزشکی"
            href="/medical-equipments-market"
            pathname={pathname}
          />
          <MenuItem
            setNav={setNav}
            text="کارشناس خرید تجهیزات‌ پزشکی"
            href="/medical-equipments-purchasing-expert"
            pathname={pathname}
          />
          <MenuItem
            setNav={setNav}
            text="همایش ها"
            href="/conferences"
            pathname={pathname}
          />
          <MenuItem
            setNav={setNav}
            text="اخبار"
            href="/news"
            pathname={pathname}
          />
          <MenuItem
            setNav={setNav}
            text="گالری تصاویر"
            href="/gallery"
            pathname={pathname}
          />
          <MenuItem
            setNav={setNav}
            text="درباره ما"
            href="/about-us"
            pathname={pathname}
          />
          <MenuItem
            setNav={setNav}
            text="ارتباط با ما"
            href="/contact-us"
            pathname={pathname}
          />
        </ul>
        <div className="sm2:w-[400px] w-[250px] h-[40px] lg:hidden flex justify-between border-2 border-slate-200 rounded-md p-1">
          <input
            className="w-[270px] outline-none p-1 bg-transparent placeholder:text-[12px]"
            placeholder="لطفا کلمه ی مورد نظر خود را جستجو کنید"
          />
          <div className="flex justify-center items-center">
            <button className="flex justify-center items-center bg-primary p-2 rounded-md">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.86393"
                  cy="6.86387"
                  r="5.24333"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5107 10.783L12.5664 12.8334"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
