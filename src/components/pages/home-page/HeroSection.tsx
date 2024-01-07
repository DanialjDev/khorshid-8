"use client";

import React, { useState } from "react";

import HomePageBanner from "../../../../public/assets/images/home-page/homepage-banner.jpg";
import Button from "@/components/main/button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  return (
    <div className="flex w-full lg:flex-row flex-col-reverse rounded-xl bg-white border border-white-gray shadow-md overflow-hidden">
      <div className="px-7 py-10 lg:w-[40%] w-full text-[30px]">
        <div className="w-full flex flex-col">
          <p className="text-[22px]">
            کانون معرفی تجهیزات پزشکی{" "}
            <span className="text-primary">خورشید هشت</span>
          </p>
          <p className="text-gray text-[13px] w-[90%] my-10">
            شرکتهای تولید کننده و یا دارای نمایندگی مجاز محصولات بیمارستانی،
            پزشکی و آزمایشگاهی که دارای مجوز رسمی می باشند، میتوانند با ثبت نام
            و عضویت در این سایت و بارگزاری لیست محصولات خود و...
          </p>
          <div className="mt-10">
            <Button
              onClick={() => {
                setLoading(true);
                push("/medical-equipments-purchasing-expert");
              }}
              loading={loading}
              hover="hover:bg-btnPrimaryHover"
              color="text-white"
              text="دریافت مشاوره"
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
                    d="M12.5813 15.8495C12.5896 15.8693 12.5958 15.89 12.5999 15.911C12.6045 15.9325 12.6065 15.9544 12.6065 15.9759C12.6065 15.9973 12.6045 16.0188 12.5999 16.0403C12.5957 16.0615 12.5895 16.0822 12.5813 16.1022C12.573 16.1222 12.5627 16.1412 12.5508 16.1592C12.5388 16.1774 12.5247 16.1944 12.5099 16.2092C12.4792 16.2399 12.4427 16.2642 12.4025 16.2807C12.3825 16.2891 12.3618 16.2955 12.3405 16.2997C12.3194 16.3038 12.2976 16.3063 12.2761 16.3063C12.2546 16.3063 12.2327 16.3038 12.2117 16.2997C12.1906 16.2955 12.1695 16.289 12.1497 16.2807C12.1095 16.2643 12.073 16.24 12.0423 16.2092C12.0269 16.1941 12.0132 16.1773 12.0014 16.1592C11.9895 16.1412 11.9792 16.1222 11.9709 16.1022C11.9627 16.0822 11.9565 16.0615 11.9523 16.0403C11.9479 16.0191 11.9456 15.9975 11.9457 15.9759C11.9457 15.9544 11.9478 15.9325 11.9523 15.911C11.9564 15.8899 11.9626 15.8693 11.9709 15.8495C11.9791 15.8292 11.9894 15.8102 12.0014 15.7925C12.0134 15.7744 12.027 15.7574 12.0423 15.7421C12.0577 15.7268 12.0745 15.7132 12.0927 15.7008C12.1105 15.6892 12.1299 15.6789 12.1497 15.6706C12.1698 15.6624 12.1905 15.656 12.2117 15.6516C12.2542 15.6429 12.298 15.6429 12.3406 15.6516C12.3616 15.6561 12.3827 15.6623 12.4025 15.6706C12.4224 15.6788 12.4418 15.6892 12.4595 15.7008C12.4777 15.7132 12.4946 15.7268 12.5099 15.7421C12.5248 15.7574 12.5389 15.7743 12.5508 15.7925C12.5627 15.8102 12.5731 15.8292 12.5813 15.8495ZM19.1905 13.9989C19.1725 13.9136 19.1341 13.8339 19.0784 13.7668C18.993 13.6638 18.8624 13.5849 18.6883 13.546C18.641 13.5353 18.5962 13.5322 18.553 13.5366C18.5115 13.5408 18.469 13.5529 18.4244 13.5729L12.5605 16.209C12.5556 16.2111 12.5512 16.2142 12.5475 16.2181C12.5438 16.222 12.5409 16.2266 12.539 16.2317C12.4002 16.5882 12.1446 16.8741 11.8293 17.0561C11.8222 17.0602 11.815 17.0641 11.8076 17.0677C11.4471 17.2691 11.0117 17.3366 10.5844 17.222L6.29242 16.072C6.20913 16.0483 6.1385 15.9928 6.09577 15.9175C6.05303 15.8421 6.04161 15.753 6.06397 15.6694C6.08633 15.5857 6.14067 15.5142 6.21529 15.4702C6.2899 15.4263 6.3788 15.4134 6.46282 15.4344L10.7548 16.5844C11.0095 16.6526 11.2685 16.6135 11.4832 16.4952C11.4884 16.4918 11.4936 16.4886 11.499 16.4856C11.7171 16.3596 11.8875 16.1511 11.9573 15.8906L11.9574 15.8902C12.0255 15.6357 11.9864 15.3768 11.8681 15.1622L11.8667 15.1598C11.8638 15.1554 11.8611 15.1509 11.8585 15.1464C11.7325 14.9283 11.524 14.7579 11.2634 14.6881L7.06781 13.5639C7.06071 13.5619 7.0532 13.5619 7.04612 13.564L4.74279 14.2014C4.73405 14.2037 4.72633 14.2089 4.72085 14.2161C4.71536 14.2233 4.71243 14.2321 4.7125 14.2412V18.7917C4.7125 18.805 4.71817 18.8165 4.72873 18.8246C4.73929 18.8326 4.75181 18.8351 4.76468 18.8316L6.33509 18.4034C6.43191 18.377 6.5258 18.3639 6.62041 18.3642C6.71828 18.3645 6.81293 18.378 6.90817 18.4047L6.90807 18.405L11.2909 19.6312C11.3519 19.6482 11.4116 19.6522 11.4689 19.6434C11.5249 19.6349 11.5798 19.6133 11.6325 19.5789L18.7277 14.9544C18.7318 14.9518 18.7382 14.9472 18.7475 14.9404L18.7537 14.9357L18.7563 14.9337L18.7655 14.9258L18.7661 14.9252C19.001 14.7302 19.1389 14.5075 19.1862 14.2958C19.2092 14.1928 19.2103 14.0919 19.1905 13.9989ZM3.93917 13.641C3.90389 13.6055 3.86194 13.5773 3.81572 13.558C3.7695 13.5387 3.71993 13.5288 3.66985 13.5287H1.17735C1.12727 13.5288 1.07771 13.5387 1.03149 13.558C0.985273 13.5773 0.943316 13.6055 0.908022 13.641C0.872482 13.6763 0.84426 13.7183 0.824976 13.7645C0.805693 13.8107 0.795729 13.8603 0.795654 13.9104V19.366C0.795654 19.4706 0.83871 19.566 0.908022 19.6353C0.977334 19.7046 1.07271 19.7477 1.17735 19.7477H3.66989C3.71998 19.7476 3.76955 19.7376 3.81577 19.7183C3.86198 19.6991 3.90394 19.6708 3.93922 19.6353C3.97225 19.6023 3.99902 19.5636 4.01823 19.5211C4.03964 19.4736 4.05159 19.4211 4.05159 19.366V13.9104C4.05159 13.8425 4.03345 13.7784 4.00172 13.7229C3.9846 13.6929 3.96357 13.6654 3.93917 13.641ZM5.14498 6.8608V2.28755C5.14498 1.16815 6.06087 0.252258 7.18023 0.252258H14.7089C15.8283 0.252258 16.7441 1.16815 16.7441 2.28755V6.8608C16.7441 7.98021 15.8283 8.8961 14.7089 8.8961H9.97234C9.96691 8.89601 9.96152 8.89704 9.9565 8.89912C9.95148 8.9012 9.94694 8.90429 9.94316 8.9082L7.19655 11.6548C7.19083 11.6607 7.18346 11.6647 7.17543 11.6663C7.16739 11.6679 7.15906 11.667 7.15153 11.6638C7.14392 11.6607 7.13742 11.6555 7.13287 11.6487C7.12832 11.6418 7.12594 11.6338 7.12604 11.6256V8.93517C7.12604 8.92455 7.12194 8.91433 7.1146 8.90665C7.10726 8.89898 7.09724 8.89442 7.08663 8.89394C6.01028 8.84459 5.14498 7.94887 5.14498 6.8608ZM12.8792 4.57418C12.8792 4.83535 12.9851 5.07184 13.1562 5.24301C13.3274 5.41418 13.5639 5.52012 13.8251 5.52012C14.0862 5.52012 14.3227 5.41423 14.4939 5.24301C14.6651 5.07184 14.771 4.83535 14.771 4.57418C14.771 4.31301 14.6651 4.07651 14.4939 3.90535C14.3227 3.73418 14.0862 3.62824 13.8251 3.62824C13.5639 3.62824 13.3274 3.73413 13.1562 3.90535C13.0683 3.99308 12.9985 4.09734 12.951 4.21212C12.9034 4.3269 12.879 4.44994 12.8792 4.57418ZM9.99869 4.57418C9.99869 4.83535 10.1046 5.07184 10.2758 5.24301C10.4469 5.41418 10.6834 5.52012 10.9446 5.52012C11.2058 5.52012 11.4422 5.41423 11.6134 5.24301C11.7846 5.07184 11.8905 4.83535 11.8905 4.57418C11.8905 4.31301 11.7846 4.07651 11.6134 3.90535C11.4422 3.73418 11.2058 3.62824 10.9446 3.62824C10.6834 3.62824 10.4469 3.73413 10.2758 3.90535C10.1878 3.99308 10.118 4.09734 10.0705 4.21212C10.0229 4.3269 9.99854 4.44994 9.99869 4.57418ZM7.11821 4.57418C7.11821 4.83535 7.2241 5.07184 7.39527 5.24301C7.56644 5.41418 7.80293 5.52012 8.0641 5.52012C8.32527 5.52012 8.56177 5.41423 8.73293 5.24301C8.9041 5.07184 9.00999 4.83535 9.00999 4.57418C9.00999 4.31301 8.9041 4.07651 8.73293 3.90535C8.56177 3.73418 8.32527 3.62824 8.0641 3.62824C7.80293 3.62824 7.56644 3.73413 7.39527 3.90535C7.30731 3.99308 7.23755 4.09734 7.19 4.21212C7.14245 4.3269 7.11806 4.44994 7.11821 4.57418Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
      <Image
        style={{ objectFit: "cover", height: "100%" }}
        sizes="100%"
        src={HomePageBanner}
        className="lg:w-[60%] w-full"
        alt="تجهزیت پزشکی"
        unoptimized
      />
    </div>
  );
};

export default HeroSection;
