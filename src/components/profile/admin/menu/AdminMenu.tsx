"use client";

import React, { ReactNode } from "react";
import Image from "next/image";

import KhorshidLogo from "@/../public/assets/images/admin/AdminLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./adminMenu.css";

const AdminMenuItem = ({
  icon,
  text,
  href,
}: {
  icon: ReactNode;
  text: string;
  href?: string;
}) => {
  const pathname = usePathname();
  return (
    <li
      className={`flex justify-between items-center w-full p-3 my-[8px] rounded-lg ${
        pathname === href ? "bg-primaryLight activeItem" : "bg-transparent"
      }`}
    >
      {href ? (
        <Link className="w-full flex" href={href}>
          <div className="flex justify-center items-center">{icon}</div>
          <div className="flex justify-start items-center mr-2">
            <p
              className={`${
                pathname === href ? "text-primary" : "text-white"
              } text-[16px]`}
            >
              {text}
            </p>
          </div>
        </Link>
      ) : (
        <div className="w-full flex cursor-pointer">
          <div className="flex justify-center items-center">{icon}</div>
          <div className="flex justify-start items-center mr-2">
            <p className="text-white text-[16px]">{text}</p>
          </div>
        </div>
      )}
    </li>
  );
};

const AdminMenu = () => {
  return (
    <div className="w-[270px] h-screen bg-primaryDark2 flex flex-col">
      <div className="w-full flex justify-center items-center p-5">
        <Image
          src={KhorshidLogo}
          alt="khorshidhasht"
          width={170}
          height={170}
        />
      </div>
      <div className="w-full flex items-center justify-center p-4 pt-0">
        <ul className="w-full flex flex-col">
          <AdminMenuItem
            href="/panel/statistics"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.88086 18.1501V16.0801"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M12 18.1498V14.0098"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M17.1191 18.1497V11.9297"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M17.1209 5.84961L16.6609 6.38961C14.1109 9.36961 10.6909 11.4796 6.88086 12.4296"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14.1895 5.84961H17.1195V8.76961"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            text="آمار سایت"
          />
          <AdminMenuItem
            href="/panel/medical-equipments-list"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6431 11.3821C13.6767 11.4479 13.7279 11.5031 13.7909 11.5416C13.8539 11.5801 13.9264 11.6005 14.0003 11.6005C14.0633 11.6005 14.1253 11.5855 14.1815 11.5569C14.205 11.5449 16.5595 10.3489 17.7206 9.98211C17.9311 9.91532 18.0478 9.69051 17.981 9.48013C17.9653 9.42999 17.9398 9.38346 17.906 9.34318C17.8722 9.30291 17.8308 9.2697 17.7842 9.24544C17.7376 9.22118 17.6866 9.20635 17.6343 9.2018C17.5819 9.19726 17.5292 9.20308 17.4791 9.21895C16.2559 9.60576 13.9175 10.7937 13.8183 10.8441C13.6215 10.9441 13.5431 11.185 13.6431 11.3821ZM14.0003 6.80059C14.0633 6.80056 14.1253 6.78562 14.1815 6.757C14.205 6.745 16.5595 5.54899 17.7206 5.1822C17.9311 5.1154 18.0478 4.89059 17.981 4.68022C17.9653 4.63008 17.9398 4.58354 17.906 4.54327C17.8722 4.503 17.8308 4.46978 17.7842 4.44552C17.7376 4.42126 17.6866 4.40643 17.6343 4.40189C17.5819 4.39734 17.5292 4.40317 17.4791 4.41903C16.2559 4.80584 13.9175 5.99383 13.8183 6.04422C13.6215 6.1442 13.5431 6.385 13.6431 6.5822C13.6767 6.64795 13.7279 6.70313 13.7909 6.74166C13.8539 6.78019 13.9264 6.80058 14.0003 6.80059Z"
                  fill="white"
                />
                <path
                  d="M23.5998 6.0002C23.5473 6.00018 23.4953 6.01051 23.4467 6.03061C23.3982 6.0507 23.3541 6.08016 23.317 6.11731C23.2798 6.15445 23.2504 6.19855 23.2303 6.24709C23.2102 6.29563 23.1998 6.34765 23.1999 6.40018V22.0001C23.1999 22.6616 22.6614 23.2 21.9999 23.2H12.3999V22.2797C12.9831 22.0757 14.5023 21.6001 15.9999 21.6001C19.4843 21.6001 21.8503 22.3717 21.8739 22.3796C21.934 22.3994 21.9979 22.4047 22.0605 22.3951C22.123 22.3855 22.1824 22.3613 22.2339 22.3244C22.2853 22.2874 22.3271 22.2386 22.356 22.1822C22.3848 22.1258 22.3999 22.0634 22.3998 22V4.40022C22.3999 4.3092 22.3689 4.22086 22.312 4.14986C22.255 4.07886 22.1755 4.02944 22.0866 4.00981C22.0866 4.00981 21.773 3.93982 21.237 3.84139C21.0206 3.8014 20.8114 3.9454 20.7714 4.1622C20.7314 4.37979 20.875 4.58819 21.0922 4.62818C21.2617 4.65926 21.4309 4.69166 21.5998 4.72539V21.4684C20.6934 21.2308 18.6807 20.8001 15.9999 20.8001C14.2571 20.8001 12.5451 21.3724 12.0155 21.5665C11.5447 21.3585 10.1215 20.8001 8.39989 20.8001C5.64469 20.8001 3.37511 21.2545 2.39993 21.4853V4.70978C3.19873 4.51338 5.55793 4.0002 8.39989 4.0002C9.8583 4.0002 11.1091 4.45418 11.5999 4.65939V20.4001C11.5999 20.4709 11.6187 20.5404 11.6544 20.6015C11.6901 20.6627 11.7413 20.7133 11.8029 20.7481C11.8646 20.783 11.9343 20.8009 12.0051 20.7999C12.0759 20.799 12.1452 20.7793 12.2059 20.7429C12.2455 20.7193 16.2086 18.3521 19.7262 17.1797C19.8059 17.1532 19.8752 17.1022 19.9243 17.0341C19.9734 16.966 19.9998 16.8841 19.9998 16.8001V0.400225C19.9998 0.335567 19.9841 0.271876 19.9541 0.214614C19.9241 0.157351 19.8806 0.108225 19.8274 0.0714462C19.7743 0.0345477 19.713 0.0110868 19.6489 0.00307736C19.5847 -0.00493204 19.5196 0.00274936 19.459 0.0254622C16.2587 1.22583 13.0203 3.24101 12.9879 3.26103C12.8007 3.37822 12.7435 3.62501 12.8607 3.81223C12.9775 3.99945 13.2243 4.05663 13.4119 3.93945C13.4414 3.92065 16.2587 2.16787 19.1998 0.98508V16.5138C16.4694 17.4625 13.6186 19.0117 12.3998 19.7053V4.40022C12.3998 4.3259 12.3791 4.25305 12.3401 4.18983C12.301 4.1266 12.2451 4.0755 12.1786 4.04224C12.1098 4.00826 10.4707 3.20023 8.39989 3.20023C4.78553 3.20023 2.00675 3.98224 1.88994 4.01581C1.80639 4.03966 1.73288 4.09008 1.68055 4.15945C1.62822 4.22881 1.59992 4.31334 1.59993 4.40022V22.0001C1.60004 22.0619 1.61443 22.1229 1.64198 22.1783C1.66952 22.2337 1.70948 22.2819 1.75874 22.3193C1.8282 22.3718 1.91289 22.4002 1.99995 22.4001C2.03675 22.4001 2.07355 22.3949 2.10955 22.3845C2.13716 22.3769 4.90313 21.6001 8.39989 21.6001C9.86228 21.6001 11.1119 22.0553 11.5999 22.2597V23.2001H1.99995C1.33836 23.2001 0.799963 22.6617 0.799963 22.0001V6.40022C0.799963 6.17944 0.620761 6.00024 0.399981 6.00024C0.179202 6.00024 0 6.17944 0 6.40022V22.0001C0 23.1029 0.89718 24.0001 2 24.0001H21.9999C23.1026 24.0001 23.9999 23.1029 23.9999 22.0001V6.40022C23.9999 6.34769 23.9895 6.29566 23.9694 6.24713C23.9493 6.19859 23.9199 6.15448 23.8827 6.11733C23.8456 6.08019 23.8015 6.05072 23.7529 6.03062C23.7044 6.01052 23.6524 6.00018 23.5998 6.0002Z"
                  fill="white"
                />
                <path
                  d="M13.6424 8.98162C13.6761 9.04737 13.7273 9.10255 13.7903 9.14109C13.8533 9.17962 13.9258 9.20001 13.9996 9.2C14.0626 9.19998 14.1247 9.18504 14.1808 9.15641C14.2044 9.14441 16.5588 7.94841 17.72 7.58161C17.9304 7.51481 18.0472 7.29 17.9804 7.07963C17.9646 7.02949 17.9391 6.98296 17.9054 6.94268C17.8716 6.90241 17.8302 6.86919 17.7836 6.84493C17.737 6.82067 17.686 6.80585 17.6336 6.8013C17.5813 6.79676 17.5285 6.80258 17.4784 6.81844C16.2552 7.20525 13.9168 8.39325 13.8177 8.44364C13.6208 8.54362 13.5425 8.78446 13.6424 8.98162ZM13.6424 13.7816C13.6761 13.8473 13.7273 13.9025 13.7903 13.941C13.8533 13.9796 13.9258 14 13.9996 14C14.0626 13.9999 14.1247 13.985 14.1808 13.9564C14.2044 13.9444 16.5588 12.7484 17.72 12.3816C17.9304 12.3148 18.0472 12.09 17.9804 11.8796C17.9646 11.8295 17.9391 11.7829 17.9054 11.7426C17.8716 11.7024 17.8302 11.6692 17.7836 11.6449C17.737 11.6206 17.686 11.6058 17.6336 11.6013C17.5813 11.5967 17.5285 11.6025 17.4784 11.6184C16.2552 12.0052 13.9168 13.1932 13.8177 13.2436C13.6208 13.3436 13.5425 13.5844 13.6424 13.7816ZM9.69049 7.42327C7.22053 6.84366 4.41372 7.58208 4.29573 7.61367C4.24438 7.62672 4.19613 7.64983 4.15378 7.68167C4.11143 7.71352 4.07582 7.75346 4.04904 7.79917C4.02225 7.84489 4.00481 7.89547 3.99773 7.94798C3.99065 8.00049 3.99407 8.05389 4.00779 8.10506C4.02152 8.15624 4.04527 8.20418 4.07768 8.24611C4.11008 8.28803 4.15049 8.3231 4.19656 8.34927C4.24262 8.37545 4.29343 8.39222 4.34603 8.3986C4.39863 8.40498 4.45198 8.40085 4.50297 8.38645C4.52978 8.37885 7.23215 7.66805 9.50815 8.20204C9.72213 8.25206 9.93855 8.11884 9.98894 7.90364C10.0393 7.68886 9.90569 7.47366 9.69049 7.42327ZM9.69049 9.82325C7.22053 9.24407 4.41372 9.98206 4.29573 10.0137C4.24438 10.0267 4.19613 10.0498 4.15378 10.0817C4.11143 10.1135 4.07582 10.1534 4.04904 10.1992C4.02225 10.2449 4.00481 10.2955 3.99773 10.348C3.99065 10.4005 3.99407 10.4539 4.00779 10.505C4.02152 10.5562 4.04527 10.6042 4.07768 10.6461C4.11008 10.688 4.15049 10.7231 4.19656 10.7493C4.24262 10.7754 4.29343 10.7922 4.34603 10.7986C4.39863 10.805 4.45198 10.8008 4.50297 10.7864C4.52978 10.7788 7.23215 10.068 9.50815 10.602C9.72213 10.652 9.93855 10.5188 9.98894 10.3036C10.0393 10.0888 9.90569 9.87364 9.69049 9.82325ZM13.6424 16.1816C13.6761 16.2473 13.7273 16.3025 13.7903 16.341C13.8533 16.3796 13.9258 16.4 13.9996 16.3999C14.0626 16.3999 14.1247 16.385 14.1808 16.3564C14.2044 16.3444 16.5588 15.1483 17.72 14.7816C17.9304 14.7148 18.0472 14.4899 17.9804 14.2796C17.9646 14.2294 17.9391 14.1829 17.9054 14.1426C17.8716 14.1024 17.8302 14.0691 17.7836 14.0449C17.737 14.0206 17.686 14.0058 17.6336 14.0012C17.5813 13.9967 17.5285 14.0025 17.4784 14.0184C16.2552 14.4052 13.9168 15.5932 13.8177 15.6436C13.6208 15.7436 13.5425 15.9844 13.6424 16.1816ZM9.69049 12.2232C7.22053 11.644 4.41372 12.3816 4.29573 12.4136C4.19327 12.4411 4.10592 12.5082 4.05289 12.6001C3.99986 12.692 3.98549 12.8011 4.01294 12.9036C4.03572 12.9886 4.08588 13.0638 4.15565 13.1174C4.22543 13.1711 4.31094 13.2003 4.39895 13.2004C4.43336 13.2004 4.46814 13.1956 4.50297 13.1864C4.52978 13.1788 7.23215 12.468 9.50815 13.002C9.72213 13.052 9.93855 12.9188 9.98894 12.7036C10.0393 12.4888 9.90569 12.2736 9.69049 12.2232ZM9.69049 17.0232C7.22053 16.4436 4.41372 17.182 4.29573 17.2136C4.19327 17.2411 4.10592 17.3082 4.05289 17.4C3.99986 17.4919 3.98549 17.6011 4.01294 17.7036C4.03572 17.7886 4.08588 17.8637 4.15565 17.9174C4.22543 17.971 4.31094 18.0002 4.39895 18.0004C4.43336 18.0004 4.46814 17.9956 4.50297 17.9864C4.52978 17.9788 7.23215 17.268 9.50815 17.802C9.72213 17.8516 9.93855 17.7188 9.98894 17.5036C10.0393 17.2888 9.90569 17.0736 9.69049 17.0232ZM9.69049 14.6232C7.22053 14.0436 4.41372 14.7816 4.29573 14.8136C4.19327 14.8411 4.10592 14.9082 4.05289 15.0001C3.99986 15.0919 3.98549 15.2011 4.01294 15.3036C4.03572 15.3886 4.08588 15.4638 4.15565 15.5174C4.22543 15.5711 4.31094 15.6002 4.39895 15.6004C4.43336 15.6004 4.46814 15.5956 4.50297 15.5864C4.52978 15.5788 7.23215 14.868 9.50815 15.402C9.72213 15.452 9.93855 15.3188 9.98894 15.1036C10.0393 14.8888 9.90569 14.6736 9.69049 14.6232Z"
                  fill="white"
                />
              </svg>
            }
            text="لیست تجهیزات پزشکی"
          />
          <AdminMenuItem
            href="/panel/register-product-requests"
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.54628 10.3069L16.6857 5.60766L12.8576 3.39746L4.71809 8.09673L8.54628 10.3069ZM8.23438 10.8752L0.078125 6.1756V15.5756L8.23438 20.2753V10.8752ZM15.4531 15.6872H16.3438V16.5779H15.4531V15.6872ZM8.89062 10.8752V20.2753L13.3438 17.7002V10.9145C13.3419 10.5411 13.4885 10.1823 13.7513 9.91695C14.0141 9.65163 14.3715 9.50155 14.7449 9.49974H15.9125C15.979 9.25897 16.1221 9.0464 16.3201 8.89417C16.5182 8.74195 16.7604 8.65834 17.0102 8.65599H17V6.1756L8.89062 10.8752Z"
                  fill="white"
                />
                <path
                  d="M18.9143 9.3125H17.0075C16.7445 9.3125 16.5312 9.52575 16.5312 9.7888V9.82058C16.5312 10.0836 16.7445 10.2969 17.0075 10.2969H18.9143C19.1774 10.2969 19.3906 10.0836 19.3906 9.82058V9.7888C19.3906 9.52575 19.1774 9.3125 18.9143 9.3125Z"
                  fill="white"
                />
                <path
                  d="M12.2007 3.01842L8.54567 0.908203L0.40625 5.60752L4.06123 7.71773L12.2007 3.01842ZM21.1673 10.1558H19.9869C19.9165 10.3881 19.7728 10.5913 19.5772 10.735C19.3816 10.8786 19.1447 10.955 18.902 10.9527H17.0096C16.7669 10.955 16.53 10.8786 16.3344 10.735C16.1388 10.5913 15.9951 10.3881 15.9247 10.1558H14.7443C14.6455 10.1566 14.5479 10.1769 14.457 10.2155C14.3661 10.2541 14.2837 10.3102 14.2145 10.3806C14.1453 10.4511 14.0907 10.5345 14.0538 10.6261C14.0169 10.7177 13.9984 10.8156 13.9994 10.9144V20.3878C13.9988 20.4854 14.0177 20.5821 14.0551 20.6723C14.0924 20.7625 14.1474 20.8443 14.2168 20.913C14.2862 20.9816 14.3686 21.0357 14.4592 21.072C14.5498 21.1084 14.6467 21.1262 14.7443 21.1246H21.1673C21.2654 21.1264 21.3628 21.1087 21.454 21.0725C21.5452 21.0364 21.6282 20.9824 21.6984 20.9139C21.7685 20.8453 21.8244 20.7635 21.8626 20.6732C21.9009 20.5829 21.9208 20.4859 21.9213 20.3878V10.9144C21.9212 10.714 21.8419 10.5218 21.7007 10.3797C21.5594 10.2376 21.3677 10.1571 21.1673 10.1558ZM14.7963 12.3605C14.796 12.3175 14.8042 12.2748 14.8204 12.2349C14.8366 12.195 14.8605 12.1588 14.8908 12.1281C14.921 12.0975 14.957 12.0732 14.9967 12.0565C15.0364 12.0398 15.079 12.0311 15.122 12.0308H16.6677C16.7553 12.0311 16.8392 12.0658 16.9013 12.1275C16.9634 12.1892 16.9986 12.273 16.9994 12.3605V12.5813C16.999 12.6684 16.964 12.7518 16.9021 12.8132C16.8403 12.8746 16.7566 12.9089 16.6695 12.9087C16.6004 12.9109 16.5325 12.8905 16.4761 12.8505C16.4198 12.8105 16.3781 12.7531 16.3575 12.6871H15.4525V13.5777H15.4655C15.5525 13.5777 15.6359 13.6123 15.6975 13.6738C15.759 13.7354 15.7936 13.8188 15.7936 13.9058C15.7936 13.9929 15.759 14.0763 15.6975 14.1379C15.6359 14.1994 15.5525 14.234 15.4655 14.234H15.122C15.0791 14.234 15.0365 14.2255 14.9969 14.209C14.9572 14.1925 14.9212 14.1683 14.891 14.1378C14.8607 14.1074 14.8367 14.0712 14.8205 14.0315C14.8042 13.9917 14.796 13.9492 14.7963 13.9062V12.3605ZM14.7963 15.359C14.7963 15.2719 14.8308 15.1885 14.8924 15.1269C14.9539 15.0654 15.0374 15.0308 15.1244 15.0308H16.6713C16.7583 15.0308 16.8417 15.0654 16.9033 15.1269C16.9648 15.1885 16.9994 15.2719 16.9994 15.359V16.9058C16.9994 16.9929 16.9648 17.0763 16.9033 17.1379C16.8417 17.1994 16.7583 17.234 16.6713 17.234H15.1244C15.0374 17.234 14.9539 17.1994 14.8924 17.1379C14.8308 17.0763 14.7963 16.9929 14.7963 16.9058V15.359ZM15.4655 20.234H15.122C15.0796 20.2352 15.0375 20.2279 14.998 20.2126C14.9585 20.1972 14.9225 20.1741 14.8921 20.1445C14.8618 20.115 14.8376 20.0797 14.8212 20.0406C14.8047 20.0016 14.7962 19.9596 14.7963 19.9173V18.3716C14.7953 18.2835 14.8288 18.1985 14.8897 18.1348C14.9505 18.0711 15.0339 18.0338 15.122 18.0308H16.6677C16.7564 18.0336 16.8405 18.0706 16.9024 18.1342C16.9643 18.1978 16.9991 18.2829 16.9994 18.3716V18.6877C16.9975 18.774 16.9619 18.8562 16.9002 18.9165C16.8385 18.9768 16.7556 19.0106 16.6693 19.0105C16.583 19.0104 16.5001 18.9765 16.4385 18.916C16.377 18.8556 16.3415 18.7734 16.3398 18.6871H15.4525V19.5777H15.4655C15.5525 19.5777 15.636 19.6123 15.6975 19.6738C15.7591 19.7354 15.7936 19.8188 15.7936 19.9058C15.7936 19.9929 15.7591 20.0763 15.6975 20.1379C15.636 20.1994 15.5525 20.234 15.4655 20.234ZM17.8872 18.9562L16.6942 20.1493C16.6637 20.1797 16.6275 20.2039 16.5877 20.2204C16.5479 20.2369 16.5052 20.2454 16.4622 20.2454C16.4191 20.2454 16.3764 20.2369 16.3366 20.2204C16.2968 20.2039 16.2606 20.1797 16.2301 20.1493L15.7056 19.6249C15.6752 19.5944 15.651 19.5583 15.6345 19.5185C15.618 19.4787 15.6095 19.436 15.6095 19.3929C15.6095 19.3498 15.618 19.3071 15.6345 19.2673C15.651 19.2275 15.6752 19.1913 15.7056 19.1609C15.7361 19.1304 15.7723 19.1062 15.8121 19.0897C15.8519 19.0732 15.8946 19.0647 15.9377 19.0647C15.9808 19.0647 16.0234 19.0732 16.0632 19.0897C16.1031 19.1062 16.1392 19.1304 16.1697 19.1609L16.462 19.4532L17.423 18.4923C17.4845 18.4307 17.568 18.3962 17.655 18.3962C17.742 18.3962 17.8255 18.4307 17.887 18.4923C17.9486 18.5538 17.9831 18.6373 17.9831 18.7243C17.9831 18.8113 17.9486 18.8948 17.887 18.9563L17.8872 18.9562ZM17.8872 12.8977L16.6942 14.0907C16.6637 14.1212 16.6275 14.1454 16.5877 14.1619C16.5479 14.1783 16.5052 14.1868 16.4622 14.1868C16.4191 14.1868 16.3764 14.1783 16.3366 14.1619C16.2968 14.1454 16.2606 14.1212 16.2301 14.0907L15.7056 13.5664C15.6752 13.5359 15.651 13.4997 15.6345 13.4599C15.618 13.4201 15.6095 13.3774 15.6095 13.3343C15.6095 13.2913 15.618 13.2486 15.6345 13.2088C15.651 13.169 15.6752 13.1328 15.7056 13.1023C15.7361 13.0718 15.7723 13.0477 15.8121 13.0312C15.8519 13.0147 15.8946 13.0062 15.9377 13.0062C15.9808 13.0062 16.0234 13.0147 16.0632 13.0312C16.1031 13.0477 16.1392 13.0718 16.1697 13.1023L16.462 13.3947L17.423 12.4337C17.4845 12.3722 17.568 12.3376 17.655 12.3376C17.742 12.3376 17.8255 12.3722 17.887 12.4337C17.9486 12.4953 17.9831 12.5787 17.9831 12.6658C17.9831 12.7528 17.9486 12.8363 17.887 12.8978L17.8872 12.8977ZM20.7896 19.484H18.7287C18.6416 19.484 18.5582 19.4494 18.4966 19.3879C18.4351 19.3263 18.4005 19.2429 18.4005 19.1558C18.4005 19.0688 18.4351 18.9854 18.4966 18.9238C18.5582 18.8623 18.6416 18.8277 18.7287 18.8277H20.7896C20.8766 18.8277 20.96 18.8623 21.0216 18.9238C21.0831 18.9854 21.1177 19.0688 21.1177 19.1558C21.1177 19.2429 21.0831 19.3263 21.0216 19.3879C20.96 19.4494 20.8766 19.484 20.7896 19.484ZM20.7896 16.484H18.7287C18.6416 16.484 18.5582 16.4494 18.4966 16.3879C18.4351 16.3263 18.4005 16.2429 18.4005 16.1558C18.4005 16.0688 18.4351 15.9854 18.4966 15.9238C18.5582 15.8623 18.6416 15.8277 18.7287 15.8277H20.7896C20.8766 15.8277 20.96 15.8623 21.0216 15.9238C21.0831 15.9854 21.1177 16.0688 21.1177 16.1558C21.1177 16.2429 21.0831 16.3263 21.0216 16.3879C20.96 16.4494 20.8766 16.484 20.7896 16.484ZM20.7896 13.484H18.7287C18.6416 13.484 18.5582 13.4494 18.4966 13.3879C18.4351 13.3263 18.4005 13.2429 18.4005 13.1558C18.4005 13.0688 18.4351 12.9854 18.4966 12.9238C18.5582 12.8623 18.6416 12.8277 18.7287 12.8277H20.7896C20.8766 12.8277 20.96 12.8623 21.0216 12.9238C21.0831 12.9854 21.1177 13.0688 21.1177 13.1558C21.1177 13.2429 21.0831 13.3263 21.0216 13.3879C20.96 13.4494 20.8766 13.484 20.7896 13.484Z"
                  fill="white"
                />
              </svg>
            }
            text="درخواست های ثبت محصول"
          />
          <AdminMenuItem
            href="/panel/registered-devices"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.60009 24H16.4C17.2837 24 18 23.2836 18 22.4V17.1732L21.5232 16.2092C21.7751 16.1388 21.997 15.988 22.1553 15.7799C22.3135 15.5717 22.3995 15.3175 22.4 15.056V8.17405L22.616 8.11363C23.6234 7.83126 24.2112 6.78567 23.9288 5.77823C23.8833 5.61585 23.8163 5.46027 23.7296 5.31563L22.3432 2.99565L22.3396 2.99804C22.2889 2.91016 22.2064 2.84503 22.1092 2.81603L12.4325 0.0596941C12.1493 -0.019898 11.8496 -0.019898 11.5664 0.0596941L1.8905 2.81607C1.79343 2.8452 1.71115 2.91031 1.66049 2.99809L1.65688 2.9957L0.270884 5.31567C-0.267989 6.21248 0.0221665 7.37629 0.918975 7.91516C1.06434 8.0025 1.22076 8.06993 1.38407 8.11565L1.60007 8.17607V15.056C1.60071 15.318 1.68707 15.5726 1.84596 15.7809C2.00486 15.9892 2.22755 16.1397 2.48005 16.2096L6.00002 17.1732V22.4C6.00007 23.2836 6.71641 24 7.60009 24ZM17.2001 22.4C17.2001 22.8418 16.8419 23.2 16.4 23.2H7.60009C7.15825 23.2 6.80008 22.8418 6.80008 22.4V12.4001C6.80008 11.9582 7.15825 11.6 7.60009 11.6H16.4C16.8419 11.6 17.2001 11.9582 17.2001 12.4001V22.4ZM21.6 15.056C21.5995 15.1424 21.571 15.2263 21.5188 15.2952C21.4666 15.3641 21.3935 15.4142 21.3104 15.438L18 16.3436V12.4C18 11.5164 17.2837 10.8 16.4 10.8H12.4001V7.44524L13.4697 9.22845C13.6383 9.50903 13.8767 9.74121 14.1616 9.90242C14.4465 10.0636 14.7683 10.1484 15.0957 10.1485C15.2675 10.1487 15.4386 10.1251 15.6041 10.0785L21.6 8.40008V15.056H21.6ZM23.12 6.69604C23.0583 6.85229 22.9611 6.99207 22.8362 7.10438C22.7112 7.21669 22.5619 7.29846 22.4 7.34324L15.3881 9.30763C15.1572 9.37199 14.9116 9.35884 14.6889 9.27019C14.4662 9.18154 14.2787 9.02228 14.1553 8.81685L12.6125 6.24445L21.8124 3.66845L23.042 5.72644C23.1292 5.87061 23.1816 6.0331 23.1951 6.20103C23.2087 6.36897 23.183 6.53775 23.12 6.69403V6.69604ZM11.7845 0.830082C11.9251 0.790472 12.0739 0.790472 12.2144 0.830082L20.528 3.19768L12 5.58525L3.47211 3.19768L11.7845 0.830082ZM0.880116 6.69407C0.817398 6.53752 0.791977 6.36852 0.805864 6.20044C0.819752 6.03236 0.872568 5.86982 0.960132 5.72569L2.18652 3.66845L11.3865 6.24445L9.84371 8.81685C9.72038 9.02243 9.53294 9.18181 9.31021 9.27048C9.08747 9.35916 8.84177 9.3722 8.6109 9.30763L1.60011 7.34324C1.43802 7.2982 1.2886 7.21612 1.16365 7.10346C1.03871 6.9908 0.941642 6.85066 0.880116 6.69407ZM2.69131 15.44C2.60763 15.4164 2.53393 15.3661 2.48139 15.2968C2.42884 15.2275 2.40031 15.143 2.40013 15.056V8.40004L8.39612 10.08C9.2176 10.3091 10.0909 9.96162 10.5305 9.23085L11.6001 7.44524V10.8H7.60009C6.71645 10.8 6.00011 11.5164 6.00011 12.4V16.3436L2.69131 15.44Z"
                  fill="white"
                />
                <path
                  d="M9.71688 12.9177L8.79968 13.8349L8.68249 13.7177C8.60694 13.6454 8.50608 13.6055 8.40151 13.6067C8.29694 13.6078 8.19697 13.6499 8.12303 13.7238C8.04908 13.7978 8.00703 13.8977 8.00588 14.0023C8.00474 14.1069 8.04459 14.2077 8.11689 14.2833L8.51688 14.6833C8.59189 14.7582 8.69361 14.8004 8.79968 14.8004C8.90574 14.8004 9.00746 14.7582 9.08247 14.6833L10.2825 13.4833C10.3548 13.4077 10.3946 13.3069 10.3935 13.2023C10.3923 13.0977 10.3503 12.9978 10.2763 12.9238C10.2024 12.8499 10.1024 12.8078 9.99786 12.8067C9.89329 12.8055 9.79243 12.8454 9.71688 12.9177ZM15.5996 13.6005H11.5997C11.4936 13.6005 11.3918 13.6426 11.3168 13.7177C11.2418 13.7927 11.1997 13.8944 11.1997 14.0005C11.1997 14.1066 11.2418 14.2083 11.3168 14.2833C11.3918 14.3583 11.4936 14.4005 11.5997 14.4005H15.5996C15.8206 14.4005 15.9996 14.2214 15.9996 14.0005C15.9996 13.7796 15.8206 13.6005 15.5996 13.6005ZM9.71688 15.3177L8.79968 16.2349L8.68249 16.1177C8.60694 16.0454 8.50608 16.0055 8.40151 16.0067C8.29694 16.0078 8.19697 16.0499 8.12303 16.1238C8.04908 16.1978 8.00703 16.2977 8.00588 16.4023C8.00474 16.5069 8.04459 16.6077 8.11689 16.6833L8.51688 17.0833C8.59189 17.1582 8.69361 17.2004 8.79968 17.2004C8.90574 17.2004 9.00746 17.1582 9.08247 17.0833L10.2825 15.8833C10.3548 15.8077 10.3946 15.7069 10.3935 15.6023C10.3923 15.4977 10.3503 15.3978 10.2763 15.3238C10.2024 15.2499 10.1024 15.2078 9.99786 15.2067C9.89329 15.2055 9.79243 15.2454 9.71688 15.3177ZM15.5996 16.0005H11.5997C11.4936 16.0005 11.3918 16.0426 11.3168 16.1177C11.2418 16.1927 11.1997 16.2944 11.1997 16.4005C11.1997 16.5066 11.2418 16.6083 11.3168 16.6833C11.3918 16.7583 11.4936 16.8005 11.5997 16.8005H15.5996C15.7057 16.8005 15.8075 16.7583 15.8825 16.6833C15.9575 16.6083 15.9996 16.5066 15.9996 16.4005C15.9996 16.2944 15.9575 16.1927 15.8825 16.1177C15.8075 16.0426 15.7057 16.0005 15.5996 16.0005ZM9.71688 17.7177L8.79968 18.6349L8.68249 18.5177C8.60694 18.4454 8.50608 18.4055 8.40151 18.4067C8.29694 18.4078 8.19697 18.4499 8.12303 18.5238C8.04908 18.5978 8.00703 18.6977 8.00588 18.8023C8.00474 18.9069 8.04459 19.0077 8.11689 19.0833L8.51688 19.4833C8.59189 19.5582 8.69361 19.6004 8.79968 19.6004C8.90574 19.6004 9.00746 19.5582 9.08247 19.4833L10.2825 18.2833C10.3548 18.2077 10.3946 18.1069 10.3935 18.0023C10.3923 17.8977 10.3503 17.7978 10.2763 17.7238C10.2024 17.6499 10.1024 17.6078 9.99786 17.6067C9.89329 17.6055 9.79243 17.6454 9.71688 17.7177ZM15.5996 18.4005H11.5997C11.4936 18.4005 11.3918 18.4426 11.3168 18.5177C11.2418 18.5927 11.1997 18.6944 11.1997 18.8005C11.1997 18.9066 11.2418 19.0083 11.3168 19.0833C11.3918 19.1583 11.4936 19.2005 11.5997 19.2005H15.5996C15.8206 19.2005 15.9996 19.0214 15.9996 18.8005C15.9996 18.5796 15.8206 18.4005 15.5996 18.4005ZM9.71688 20.1177L8.79968 21.0349L8.68249 20.9177C8.60694 20.8454 8.50608 20.8055 8.40151 20.8067C8.29694 20.8078 8.19697 20.8499 8.12303 20.9238C8.04908 20.9978 8.00703 21.0977 8.00588 21.2023C8.00474 21.3069 8.04459 21.4077 8.11689 21.4833L8.51688 21.8833C8.59189 21.9582 8.69361 22.0004 8.79968 22.0004C8.90574 22.0004 9.00746 21.9582 9.08247 21.8833L10.2825 20.6833C10.3548 20.6077 10.3946 20.5069 10.3935 20.4023C10.3923 20.2977 10.3503 20.1978 10.2763 20.1238C10.2024 20.0499 10.1024 20.0078 9.99786 20.0067C9.89329 20.0055 9.79243 20.0454 9.71688 20.1177ZM15.5996 20.8005H11.5997C11.4936 20.8005 11.3918 20.8426 11.3168 20.9177C11.2418 20.9927 11.1997 21.0944 11.1997 21.2005C11.1997 21.3066 11.2418 21.4083 11.3168 21.4833C11.3918 21.5583 11.4936 21.6005 11.5997 21.6005H15.5996C15.8206 21.6005 15.9996 21.4214 15.9996 21.2005C15.9996 20.9796 15.8206 20.8005 15.5996 20.8005Z"
                  fill="white"
                />
              </svg>
            }
            text="محصولات ثبت شده"
          />
          <AdminMenuItem
            href="/panel/posters"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.66992 18.9496L7.59992 15.6396C8.38992 15.1096 9.52992 15.1696 10.2399 15.7796L10.5699 16.0696C11.3499 16.7396 12.6099 16.7396 13.3899 16.0696L17.5499 12.4996C18.3299 11.8296 19.5899 11.8296 20.3699 12.4996L21.9999 13.8996"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            text="تصاویر و پوستر ها"
          />
          <AdminMenuItem
            href="/panel/counsulation-request"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8 19.92C20.4127 18.654 18.5814 17.9441 16.9513 17.672L17.12 17.44C17.2 17.36 17.24 17.24 17.2 17.12L16.8252 15.6206C16.9615 15.4278 17.0896 15.2294 17.2092 15.0259C18.6998 14.5185 19.4536 13.661 19.5803 12.3983C20.235 12.3642 20.8 11.7798 20.8 11.12V8.12002C20.8 7.4632 20.2775 6.88116 19.593 6.8422C19.5049 4.53145 18.486 0 12 0C5.51386 0 4.49508 4.53164 4.407 6.84234C3.75764 6.88069 3.20002 7.42589 3.20002 8.11997V11.12C3.20002 11.8 3.80002 12.4 4.52002 12.4H5.12002C5.34052 12.4 5.55244 12.3366 5.73703 12.2281C5.96386 13.4321 6.46444 14.6163 7.17487 15.6206L6.80002 17.12C6.80002 17.2 6.80002 17.32 6.88003 17.44L7.04873 17.6719C5.41861 17.9441 3.58739 18.654 1.20005 19.92C0.440016 20.28 0 21.04 0 21.88V23.6C0 23.84 0.159984 24 0.399984 24H23.6C23.84 24 24 23.84 24 23.6V21.88C24 21.08 23.52 20.32 22.8 19.92ZM12.0022 19.005L12.96 21.2H11.0266L12.0022 19.005ZM10.736 22H13.2624L13.4966 23.2H10.496L10.736 22ZM16.2 16.4L16.36 17.12L15.9514 17.6811C15.9238 17.7037 15.8997 17.7303 15.88 17.76L14.2162 20.0638L13.6882 20.7886L12.6099 18.3623C13.9251 18.2019 15.0963 17.5316 16.0354 16.5712C16.0912 16.515 16.1461 16.458 16.2 16.4ZM17.7619 13.9117C17.9875 13.3628 18.1576 12.7922 18.2651 12.217C18.4213 12.3119 18.5962 12.3715 18.7778 12.3918C18.7084 12.9572 18.4572 13.491 17.7619 13.9117ZM19.96 8.07998V11.08C19.96 11.32 19.76 11.56 19.48 11.56H18.88C18.64 11.56 18.4 11.36 18.4 11.08V8.07998C18.4 7.83998 18.6 7.59998 18.88 7.59998H19.48C19.72 7.59998 19.96 7.8 19.96 8.07998ZM12 0.800016C14.4655 0.800016 18.6149 1.60486 18.7933 6.84652C18.6274 6.86382 18.4666 6.91358 18.3199 6.99295C17.8332 3.94697 15.1775 1.59998 12 1.59998C8.82291 1.59998 6.16753 3.94631 5.68027 6.99164C5.5336 6.91225 5.37259 6.86287 5.20664 6.84637C5.38514 1.60486 9.53456 0.800016 12 0.800016ZM5.55998 11.08C5.55998 11.32 5.35997 11.56 5.07998 11.56H4.47998C4.23998 11.56 3.99998 11.36 3.99998 11.08V8.07998C3.99998 7.83998 4.2 7.59998 4.47998 7.59998H5.07998C5.31998 7.59998 5.55998 7.8 5.55998 8.07998V11.08ZM6.39998 8.00002C6.39998 4.92 8.91998 2.4 12 2.4C15.08 2.4 17.6 4.92 17.6 8.00002V10.8C17.6 12.1234 17.2555 13.335 16.6969 14.3572C15.7422 14.6341 14.3687 14.8 12.4 14.8C12.16 14.8 12 14.96 12 15.2C12 15.44 12.16 15.6 12.4 15.6C13.8412 15.6 15.0465 15.5115 16.0335 15.3264L15.96 15.4C15.7588 15.6683 15.5464 15.9129 15.3245 16.1335C14.3826 17.011 13.2592 17.5425 12.1767 17.5951C12.1222 17.5718 12.0612 17.56 12 17.56C11.9385 17.56 11.8831 17.572 11.8334 17.5957C11.1708 17.5653 10.4926 17.3552 9.84984 16.996C9.19861 16.6218 8.586 16.0824 8.04 15.4L7.92 15.28L7.89666 15.2722C6.99834 14.094 6.39998 12.5441 6.39998 10.8V8.00002ZM11.3901 18.3623L10.3117 20.7886L9.7838 20.0638L8.11997 17.76C8.10667 17.7469 8.09284 17.7343 8.07853 17.7222L7.63997 17.12L7.79995 16.4C7.85385 16.4579 7.90869 16.5149 7.96444 16.5711C8.90353 17.5315 10.0748 18.2019 11.3901 18.3623ZM0.800016 21.88C0.800016 21.36 1.08 20.88 1.56 20.64C4.10967 19.2855 5.94506 18.6057 7.58006 18.4026L9.96703 21.6847L9.66398 23.2H0.800016V21.88ZM23.2 23.2H14.336L14.033 21.6847L16.4458 18.367C18.075 18.6129 19.9434 19.2922 22.44 20.6C22.92 20.88 23.2 21.36 23.2 21.88L23.2 23.2Z"
                  fill="white"
                />
              </svg>
            }
            text="درخواست های مشاوره"
          />
          <AdminMenuItem
            href="/panel/change-phoneNumber"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 9C22 5.13 18.87 2 15 2"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            text="تغییر شماره تماس مشاوره"
          />
          <AdminMenuItem
            href="/panel/charge-account"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.41016 22C3.41016 18.13 7.26015 15 12.0002 15C12.9602 15 13.8902 15.13 14.7602 15.37"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.4897 17.9795H16.5098"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 16.5195V19.5095"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            text="شارژ حساب کاربری"
          />
          <AdminMenuItem
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1016 16.4398C14.7916 20.0398 12.9416 21.5098 8.89156 21.5098L8.76156 21.5098C4.29156 21.5098 2.50156 19.7198 2.50156 15.2498L2.50156 8.72976C2.50156 4.25976 4.29156 2.46976 8.76156 2.46976L8.89156 2.46976C12.9116 2.46976 14.7616 3.91976 15.0916 7.45976"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 12L20.88 12"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.6484 8.65039L21.9984 12.0004L18.6484 15.3504"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            text="خروج از پنل مدیریت"
          />
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
