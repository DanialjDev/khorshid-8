"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import Logo from "../../../public/assets/images/navbar-logo.png";
import FooterBox from "./FooterBox";
import FooterIcons from "./FooterIcons";
import Link from "next/link";
import { getGalleryPhotos } from "@/services/gallery";

const Footer = ({ galleryItems }: { galleryItems: GalleryItem[] | null }) => {
  const [gallery, setGallery] = useState<GalleryItem[] | null>(null);
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col">
      <button
        onClick={scrollTopHandler}
        className="w-full h-[56px] bg-primary flex justify-center items-center mt-16"
      >
        <div className="w-[120px] text-white flex items-center justify-between">
          <p className="text-[16px]">بازگشت به بالا</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1727 10.8361C12.9779 11.0348 12.6731 11.0528 12.4583 10.8903L12.3967 10.8361L8.00008 6.35106L3.60343 10.8361C3.40863 11.0348 3.1038 11.0528 2.889 10.8903L2.82746 10.8361C2.63266 10.6374 2.61495 10.3264 2.77433 10.1073L2.82746 10.0445L7.61209 5.16393C7.80689 4.96523 8.11172 4.94716 8.32653 5.10974L8.38807 5.16393L13.1727 10.0445C13.387 10.2631 13.387 10.6175 13.1727 10.8361Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
      <div className="w-full flex items-center flex-col py-10 2xl:px-32 px-10 bg-[#010101]">
        {/* Top Footer Section */}
        <div className="w-full grid grid-cols-3 lg:justify-between justify-center border-b border-white-gray pb-14">
          <div className="w-full lg:col-span-1 m-auto col-span-3">
            <Image
              className="ml-auto"
              width={226}
              height={160}
              src={Logo}
              alt="خورشید هشت"
              unoptimized
            />
          </div>
          <div className="w-full flex flex-col lg:col-span-1 col-span-3 justify-center place-items-center">
            <p className="text-white-gray mt-4 text-[18px]">
              ما را در فضای مجازی دنبال کنید
            </p>
            <div className="w-[210px] flex justify-between text-white mt-7">
              <FooterIcons
                border="border border-primary"
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                      stroke="#2C9CF0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
                      stroke="#2C9CF0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 6.5H17.51"
                      stroke="#2C9CF0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
              <FooterIcons
                border="border border-primary"
                icon={
                  <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0104 13.1987L17.5341 19.7276C18.5068 20.284 19.2087 19.9958 19.451 18.7914L22.9206 1.84066C23.2758 0.364188 22.3778 -0.305707 21.4471 0.132301L1.07381 8.27685C-0.316847 8.8552 -0.308563 9.65959 0.820351 10.0179L6.0486 11.7098L18.1526 3.79297C18.724 3.43372 19.2485 3.62669 18.8181 4.02285"
                      fill="#2C9CF0"
                    />
                  </svg>
                }
              />

              <FooterIcons
                border="border border-primary"
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7732 1.62777L8.27504 1.0895C6.23714 0.650159 4.21256 1.87092 3.7523 3.81619L3.18319 6.2207C4.82277 3.73551 7.57509 1.98808 10.7732 1.62777ZM1.65766 12.671L1.09376 15.0556C0.6335 17.0009 1.9124 18.9335 3.9503 19.3728L6.4693 19.916C3.86577 18.3504 2.03513 15.7238 1.65766 12.671ZM20.0497 3.62719L17.5307 3.08395C20.1342 4.64901 21.9649 7.27623 22.3423 10.3284L22.9062 7.94381C23.3665 5.99965 22.0876 4.06654 20.0497 3.62719ZM13.2268 21.3722L15.725 21.9105C17.7629 22.3498 19.7874 21.1291 20.2477 19.1838L20.8168 16.7793C19.1772 19.2645 16.4249 21.0119 13.2268 21.3722Z"
                      fill="#2C9CF0"
                    />
                    <path
                      d="M12.5 3C7.80534 3 4 6.80534 4 11.5C4 16.1947 7.80534 20 12.5 20C17.1947 20 21 16.1947 21 11.5C21 6.80534 17.1947 3 12.5 3ZM10.375 5.65625C11.5485 5.65625 12.5 6.60772 12.5 7.78125C12.5 8.95478 11.5485 9.90625 10.375 9.90625C9.20147 9.90625 8.25 8.95478 8.25 7.78125C8.25 6.60772 9.20147 5.65625 10.375 5.65625ZM8.78125 15.75C7.60772 15.75 6.65625 14.7985 6.65625 13.625C6.65625 12.4515 7.60772 11.5 8.78125 11.5C9.95478 11.5 10.9062 12.4515 10.9062 13.625C10.9062 14.7985 9.95478 15.75 8.78125 15.75ZM11.4375 11.5C11.4375 10.913 11.913 10.4375 12.5 10.4375C13.087 10.4375 13.5625 10.913 13.5625 11.5C13.5625 12.087 13.087 12.5625 12.5 12.5625C11.913 12.5625 11.4375 12.087 11.4375 11.5ZM14.625 17.3438C13.4515 17.3438 12.5 16.3923 12.5 15.2188C12.5 14.0452 13.4515 13.0938 14.625 13.0938C15.7985 13.0938 16.75 14.0452 16.75 15.2188C16.75 16.3923 15.7985 17.3438 14.625 17.3438ZM16.2188 11.5C15.0452 11.5 14.0938 10.5485 14.0938 9.375C14.0938 8.20147 15.0452 7.25 16.2188 7.25C17.3923 7.25 18.3438 8.20147 18.3438 9.375C18.3438 10.5485 17.3923 11.5 16.2188 11.5Z"
                      fill="#2C9CF0"
                    />
                  </svg>
                }
              />
            </div>
          </div>
          <div className="w-full hidden lg:flex col-span-1">
            <Image
              width={226}
              height={160}
              className="mr-auto"
              src={Logo}
              alt="خورشید هشت"
              unoptimized
            />
          </div>
        </div>

        {/* Bottom Fotter Section */}
        <div className="w-full grid grid-cols-3 gap-4 lg:gap-12 !justify-between mt-8">
          <FooterBox title="همه روزه ۲۴ ساعته همراه شما هستیم">
            <div className="w-full flex flex-col text-[18px]">
              <div className="w-full flex items-center mb-5">
                <FooterIcons
                  border="border border-white-gray"
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.53174 10.4724C13.5208 14.4604 14.4258 9.84672 16.9656 12.3848C19.4143 14.8328 20.8216 15.3232 17.7192 18.4247C17.3306 18.737 14.8616 22.4943 6.1846 13.8197C-2.49348 5.144 1.26158 2.67244 1.57397 2.28395C4.68387 -0.826154 5.16586 0.589383 7.61449 3.03733C10.1544 5.5765 5.54266 6.48441 9.53174 10.4724Z"
                        stroke="#898989"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />
                <div className="mr-5 flex items-center text-white-gray">
                  <p>021-77653700</p>
                  <p className="mr-4">021-77653701-3</p>
                </div>
              </div>
              {/* <div className="w-full flex items-center mb-5">
                <FooterIcons
                  border="border border-white-gray"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                        stroke="#898989"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.7099 15.18L12.6099 13.33C12.0699 13.01 11.6299 12.24 11.6299 11.61V7.51001"
                        stroke="#898989"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />
                <p className="mr-5 text-white-gray">
                  روزهای زوج از ساعت 16 الی 19
                </p>
              </div> */}
              <div className="w-full flex items-center mb-5">
                <FooterIcons
                  border="border border-white-gray"
                  icon={
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.5 8.50051C10.5 7.11924 9.38076 6 8.00051 6C6.61924 6 5.5 7.11924 5.5 8.50051C5.5 9.88076 6.61924 11 8.00051 11C9.38076 11 10.5 9.88076 10.5 8.50051Z"
                        stroke="#898989"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.99951 19C6.80104 19 0.5 13.8984 0.5 8.56329C0.5 4.38664 3.8571 1 7.99951 1C12.1419 1 15.5 4.38664 15.5 8.56329C15.5 13.8984 9.19799 19 7.99951 19Z"
                        stroke="#898989"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />
                <p className="mr-5 text-white-gray">
                  خیابان شریعتی؛بالاتر از طالقانی؛پلاک 183 واحد 9
                </p>
              </div>
            </div>
          </FooterBox>
          {/* <FooterBox title="مقالات">
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col ">
                <p className="text-white text-[17px]">
                  چگونه طراحی یو ای یو ایکس را شروع کنیم؟
                </p>
                <p className="text-lg text-primary mt-2 text-[14px]">
                  آگاهی کافی نسبت به مهارت های خود
                </p>
              </div>
              <div className="w-full flex flex-col">
                <p className="text-white text-[17px]">
                  چگونه طراحی یو ای یو ایکس را شروع کنیم؟
                </p>
                <p className="text-lg text-primary mt-2 text-[14px]">
                  آگاهی کافی نسبت به مهارت های خود
                </p>
              </div>
              <div className="w-full flex flex-col">
                <p className="text-white text-[17px]">
                  چگونه طراحی یو ای یو ایکس را شروع کنیم؟
                </p>
                <p className="text-lg text-primary mt-2 text-[14px]">
                  آگاهی کافی نسبت به مهارت های خود
                </p>
              </div>
              <div className="w-full flex flex-col">
                <p className="text-white text-[17px]">
                  چگونه طراحی یو ای یو ایکس را شروع کنیم؟
                </p>
                <p className="text-lg text-primary mt-2 text-[14px]">
                  آگاهی کافی نسبت به مهارت های خود
                </p>
              </div>
            </div>
          </FooterBox> */}
          <FooterBox title="گالری تصاویر">
            <div className="w-[80%] grid grid-cols-2 gap-3">
              {galleryItems &&
                galleryItems.map((item, index) => {
                  if (index > 3) {
                    return;
                  }
                  return (
                    <div
                      className="w-full col-span-1 rounded-xl h-[120px]"
                      key={item.id}
                    >
                      <Image
                        width={200}
                        height={200}
                        src={item.imageUrl}
                        alt="گاری تصویر"
                        objectFit="cover"
                        unoptimized
                      />
                    </div>
                  );
                })}
            </div>
          </FooterBox>
          <FooterBox title="لینک های مفید" margin="md:mr-[100px] mr-0">
            <div className="w-full flex flex-col justify-between h-[200px]">
              <Link className="text-white-gray text-[17px]" href={"/about-us"}>
                درباره ما
              </Link>
              <Link
                className="text-white-gray text-[17px]"
                href={"/contact-us"}
              >
                تماس با ما
              </Link>
              <Link
                className="text-white-gray text-[17px]"
                href={"https://www.imed.ir"}
              >
                اخبار
              </Link>
              <Link
                className="text-white-gray text-[17px]"
                href={"/medical-equipments-list?name=GetDevices"}
              >
                لیست تجهیزات پزشکی
              </Link>
            </div>
          </FooterBox>
        </div>
      </div>
    </div>
  );
};

export default Footer;
