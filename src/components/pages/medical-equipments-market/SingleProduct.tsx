"use client";

import Box from "@/components/main/Box/Box";
import Button from "@/components/main/button/Button";
import { getSingleDevice } from "@/services/shop";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import ProductInfoBox from "./ProductInfoBox";
import { getHomePageDevies } from "@/services/homePage";
import SectionBox from "../home-page/SectionBox";

import GreenSquare from "../../../../public/assets/images/home-page/green-square.svg";
import ProductItem from "../home-page/ProductItem";

const SingleProductPage = async () => {
  const deviceId = useSearchParams().get("id")!;
  const response = await getSingleDevice(deviceId);
  const relatedProducts = await getHomePageDevies();

  console.log();
  return (
    <>
      {!response?.data ? (
        response?.message && (
          <div className="w-full flex justify-center items-center">
            <p className="text-[24px] text-gray">{response?.message}</p>
          </div>
        )
      ) : (
        <div className="w-full flex flex-col">
          <div className="w-full flex">
            <Box>
              <div className="w-full grid grid-cols-9 gap-4">
                <div className="lg:col-span-2 col-span-9 h-fit">
                  <Box>
                    <Image
                      src={response.data.imageUrl}
                      width={300}
                      height={300}
                      // sizes="100vw"
                      objectFit="contain"
                      className="m-auto"
                      alt={response.data.deviceName}
                    />
                  </Box>
                </div>
                <div className="lg:col-span-7 col-span-9 flex flex-col md:p-4">
                  <div className="w-full sm2:flex-row flex-col flex items-center justify-between">
                    <p className="text-primary text-[20px] sm2:m-0 mb-3">
                      اطلاعات دستگاه
                    </p>
                    <Button
                      padding="lg:px-3 py-2 px-2"
                      fontSize="lg:text-[16px] text-[12px]"
                      icon={
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.245 15.2851L14.5 13.8201C14.4699 13.7595 14.4277 13.7056 14.3762 13.6618C14.3246 13.618 14.2647 13.585 14.2 13.5651C14.0542 13.5206 13.9024 13.4987 13.75 13.5001C13.3177 13.5001 12.9031 13.6718 12.5974 13.9775C12.2917 14.2832 12.12 14.6978 12.12 15.1301C12.12 15.9018 12.2722 16.6659 12.5678 17.3787C12.8634 18.0916 13.2967 18.7391 13.8428 19.2843C14.389 19.8295 15.0372 20.2617 15.7506 20.5561C16.4639 20.8505 17.2283 21.0014 18 21.0001C18.2531 21.0016 18.5031 20.944 18.73 20.8319C18.9569 20.7197 19.1545 20.5561 19.307 20.3541C19.4595 20.152 19.5627 19.9172 19.6083 19.6682C19.654 19.4192 19.6409 19.1631 19.57 18.9201C19.55 18.854 19.5166 18.7929 19.4719 18.7404C19.4271 18.6879 19.372 18.6452 19.31 18.6151L17.85 17.8851C17.7557 17.8376 17.6488 17.8213 17.5446 17.8383C17.4404 17.8554 17.3443 17.905 17.27 17.9801L16.86 18.3901C16.3706 18.2191 15.9259 17.9403 15.5589 17.5742C15.192 17.2081 14.9121 16.7641 14.74 16.2751L15.155 15.8601C15.2281 15.7856 15.2761 15.6901 15.2923 15.587C15.3084 15.4839 15.2919 15.3783 15.245 15.2851ZM14.85 18.2851C15.3967 18.8342 16.0776 19.2306 16.825 19.4351H16.905C16.9853 19.4511 17.0684 19.4472 17.1468 19.4237C17.2253 19.4002 17.2968 19.3577 17.355 19.3001L17.725 18.9301L18.63 19.3851C18.6261 19.5495 18.558 19.7059 18.4403 19.8209C18.3225 19.9358 18.1645 20.0001 18 20.0001C17.3607 20.0001 16.7277 19.8741 16.1371 19.6293C15.5465 19.3845 15.01 19.0257 14.5582 18.5734C14.1063 18.1211 13.7481 17.5842 13.5039 16.9933C13.2597 16.4025 13.1343 15.7694 13.135 15.1301C13.1348 14.968 13.1971 14.8122 13.3088 14.6949C13.4205 14.5775 13.5732 14.5078 13.735 14.5001L14.19 15.4101L13.82 15.7801C13.7616 15.8388 13.7186 15.9111 13.6951 15.9905C13.6715 16.0699 13.668 16.154 13.685 16.2351C13.6834 16.2584 13.6834 16.2818 13.685 16.3051C13.8922 17.0547 14.2941 17.7361 14.85 18.2801V18.2851Z"
                            fill="#2C9CF0"
                          />
                          <path
                            d="M0.364996 18.7901C0.36466 19.0456 0.378012 19.301 0.404996 19.5551C0.418591 19.6779 0.477214 19.7914 0.56955 19.8736C0.661885 19.9557 0.781389 20.0008 0.904996 20.0001H11.135C11.2676 20.0001 11.3948 19.9474 11.4885 19.8536C11.5823 19.7598 11.635 19.6327 11.635 19.5001C11.635 19.3675 11.5823 19.2403 11.4885 19.1465C11.3948 19.0527 11.2676 19.0001 11.135 19.0001H1.37V18.7901C1.37263 16.6015 2.24219 14.503 3.78837 12.954C5.33455 11.405 7.4314 10.5317 9.62 10.5251H9.645C11.7916 10.5224 13.8539 11.3606 15.39 12.8601C15.4855 12.9522 15.6137 13.0027 15.7463 13.0003C15.879 12.998 16.0053 12.943 16.0975 12.8476C16.1897 12.7521 16.2401 12.6239 16.2378 12.4912C16.2354 12.3585 16.1805 12.2322 16.085 12.1401C14.9664 11.0524 13.5901 10.2662 12.085 9.85506C12.9843 9.32338 13.684 8.51088 14.0763 7.54261C14.4686 6.57434 14.5318 5.50397 14.2562 4.49625C13.9806 3.48853 13.3814 2.59932 12.551 1.96547C11.7205 1.33163 10.7047 0.988281 9.66 0.988281C8.61527 0.988281 7.5995 1.33163 6.76902 1.96547C5.93854 2.59932 5.3394 3.48853 5.06379 4.49625C4.78819 5.50397 4.85141 6.57434 5.24372 7.54261C5.63602 8.51088 6.33568 9.32338 7.235 9.85506C5.26803 10.384 3.52972 11.5454 2.28818 13.1601C1.04664 14.7749 0.370837 16.7532 0.364996 18.7901ZM5.865 5.79006C5.86401 5.04563 6.08373 4.31761 6.49639 3.69802C6.90906 3.07843 7.49613 2.59508 8.18343 2.30906C8.87072 2.02304 9.62738 1.94718 10.3578 2.09108C11.0882 2.23498 11.7595 2.59218 12.2869 3.11752C12.8144 3.64287 13.1742 4.31278 13.3211 5.0426C13.4679 5.77241 13.395 6.52936 13.1117 7.21779C12.8285 7.90622 12.3474 8.49521 11.7295 8.91034C11.1116 9.32546 10.3844 9.54808 9.64 9.55006H9.615C9.12057 9.54744 8.6315 9.44746 8.17571 9.25583C7.71992 9.06419 7.30634 8.78466 6.95858 8.43319C6.61082 8.08172 6.3357 7.66519 6.14892 7.2074C5.96214 6.7496 5.86736 6.25949 5.87 5.76506L5.865 5.79006Z"
                            fill="#2C9CF0"
                          />
                        </svg>
                      }
                      text="تماس برای خرید دستگاه"
                      bg="bg-primaryLight"
                      border="border-2 border-primary"
                    />
                  </div>
                  <div className="w-full flex gap-10 flex-col mt-5">
                    <div className="w-full grid grid-cols-4 gap-20 border-b border-productInfoBorder pb-5">
                      <ProductInfoBox
                        label="نام دستگاه:"
                        text={response.data.deviceName}
                      />
                      <ProductInfoBox
                        label="نام شرکت فروشنده:"
                        text={response.data.companyName}
                      />
                    </div>
                    <div className="w-full grid grid-cols-4 gap-20 border-b border-productInfoBorder pb-5">
                      <ProductInfoBox
                        label="مارک دستگاه:"
                        text={response.data.brand}
                      />
                      <ProductInfoBox
                        label="شماره شرکت:"
                        text={response.data.orderedByMobileNumber}
                      />
                    </div>
                    <div className="w-full grid grid-cols-4 gap-20 border-b border-productInfoBorder pb-5">
                      <ProductInfoBox
                        label="کشور سازنده:"
                        text={response.data.country}
                      />
                      <ProductInfoBox
                        label="نام مسئول فروش:"
                        text={response.data.orderedByFullName}
                      />
                    </div>
                    <div className="w-full grid grid-cols-4 gap-20 border-b border-productInfoBorder pb-5">
                      <ProductInfoBox
                        label="گروه کاربردی:"
                        text={response.data.categoryNames}
                      />
                    </div>
                    <div className="w-full grid grid-cols-4 gap-20 border-b border-productInfoBorder pb-5">
                      <ProductInfoBox
                        label="فکس شرکت:"
                        text={response.data.faxNumber}
                      />
                      <ProductInfoBox
                        label="وب سایت:"
                        text={response.data.website}
                      />
                    </div>
                    <div className="w-full grid grid-cols-4 gap-20 border-b border-productInfoBorder pb-5">
                      <ProductInfoBox
                        label="ایمیل:"
                        text={response.data.email}
                      />
                      <ProductInfoBox
                        label="آدرس:"
                        text={response.data.address}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
      )}
      <div className="w-full mt-24">
        <SectionBox
          href="/medical-equipments-market"
          btnHover="hover:bg-btnSecondaryHover"
          hasBtn
          btnBgColor="bg-secondary"
          SquareLogo={
            <Image className="absolute right-8 z-40" src={GreenSquare} alt="" />
          }
          title={
            <p className="text-black text-2xl z-40 p-2 bg-white-gray">
              برخی از <span className="text-secondary">محصولات ما</span>
            </p>
          }
          margin="mt-10"
        >
          <div className="w-full grid grid-cols-4 gap-4 mt-5">
            {relatedProducts &&
              relatedProducts.map(
                ({
                  companyName,
                  name,
                  orderedByMobileNumber,
                  imageUrl,
                  deviceId,
                }) => (
                  <div className="lg:col-span-1 md:col-span-2 col-span-4">
                    <ProductItem
                      deviceId={String(deviceId)}
                      key={deviceId}
                      imageUrl={imageUrl ? imageUrl : ""}
                      name={name}
                      orderedByMobileNumber={orderedByMobileNumber}
                      companyName={companyName ? companyName : ""}
                    />
                  </div>
                )
              )}
          </div>
        </SectionBox>
      </div>
    </>
  );
};

export default SingleProductPage;
