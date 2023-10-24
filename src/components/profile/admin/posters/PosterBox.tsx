import {
  authToggler,
  setLinkRequired,
  setUpdateAction,
} from "@/redux/features/auth/authSlice";
import { setId } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { deletePoster } from "@/services/profile/admin/posters";
import {
  Gallery,
  HomeSideBanners,
  MedicalEquipmentBanners,
  PosterDataType,
} from "@/services/profile/admin/posters/types";
import React, { ReactNode } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import { Conference } from "@/services/homePage/types";

type Action = "gallery" | "medicalEquipment" | "homeSideBanner";

const IconBox = ({
  icon,
  onClick,
}: {
  icon: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      className="flex cursor-pointer justify-center items-center"
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

const PosterBox = ({
  fontSize = "text-[14px]",
  title,
  imageUrl,
  id,
  action,
  isSelected,
}: {
  fontSize?: string;
  title: string | ReactNode;
  imageUrl: string;
  id?: number;
  action?: Action;
  isSelected?: string;
}) => {
  const { refresh } = useRouter();
  const token = Cookies.get("token");
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const deleteBannerHandler = async () => {
    if (id) {
      let url = "";
      let dataObj: PosterDataType;
      if (action === "gallery") {
        dispatch(setId(id));
        url = "RemoveImageFromGallery";
        dataObj = {
          id,
        };
      } else if (action === "medicalEquipment") {
        dispatch(setId(id));
        url = "RemoveMedicalEquipmentBanner";
        dataObj = {
          bannerID: id,
        };
      } else {
        dispatch(setId(id));
        url = "RemoveHomeSideBanner";
        dataObj = {
          homeSideBannerID: id,
        };
      }

      if (token) {
        const response = await deletePoster(dataObj, token, url);
        // console.log(response);
        if (response?.status === 200) {
          toast.success(response.message);
          refresh();
        } else {
          toast.error(response?.message);
        }
        console.log(response);
      }
    }
  };
  return (
    <div
      className={`w-full  hover:border-primary hover:bg-primaryLight3 transition-all duration-200  p-2 border-2 rounded-[8px] cursor-pointer ${
        !imageUrl ? "border-posterBoxBorder" : "border-posterBoxActiveBorder"
      }`}
    >
      <div
        className={`first-letter:w-full flex flex-col justify-center ${
          pathname.includes("panel/statistics/confrences") ? "py-5" : ""
        } items-center`}
      >
        <div className={`flex justify-center py-4 md:scale-100 scale-[0.8]`}>
          {imageUrl ? (
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="38"
                height="38"
                rx="19"
                fill="#1DC9A0"
                fill-opacity="0.1"
              />
              <path
                d="M12 22.2219L16.6667 26.6663L30.6667 13.333"
                stroke="#1DC9A0"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="1"
                y="1"
                width="38"
                height="38"
                rx="19"
                stroke="#1DC9A0"
                stroke-width="2"
              />
            </svg>
          ) : (
            <svg
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.3272 10.7033C31.4785 3.33865 24.0097 -1.13289 16.6451 0.715809C10.8898 2.16057 6.71076 7.13479 6.28018 13.053C2.19368 13.7269 -0.572818 17.5859 0.101093 21.6724C0.700168 25.3054 3.8481 27.966 7.53005 27.9513H13.7794V25.4516H7.53005C4.76894 25.4516 2.53059 23.2133 2.53059 20.4522C2.53059 17.6911 4.76894 15.4527 7.53005 15.4527C8.22036 15.4527 8.77991 14.8932 8.77991 14.2028C8.77366 7.99033 13.8049 2.949 20.0174 2.94283C25.3953 2.93744 30.0247 6.73937 31.065 12.0156C31.115 12.2725 31.2445 12.5072 31.4351 12.6866C31.6257 12.866 31.8679 12.9811 32.1274 13.0155C35.5443 13.5021 37.9198 16.6665 37.4333 20.0834C36.9964 23.1516 34.3766 25.4362 31.2774 25.4516H26.278V27.9513H31.2774C36.1094 27.9367 40.0146 24.0078 39.9999 19.1758C39.9877 15.1536 37.2346 11.6578 33.3272 10.7033Z"
                fill="#E84546"
                fill-opacity="0.8"
              />
              <path
                d="M19.1401 15.8156L14.1406 20.8151L15.9029 22.5774L18.7776 19.7152V31.7014H21.2773V19.7152L24.1395 22.5774L25.9018 20.8151L20.9024 15.8156C20.4149 15.331 19.6276 15.331 19.1401 15.8156Z"
                fill="#E84546"
                fill-opacity="0.8"
              />
            </svg>
          )}
        </div>
        <div className="mb-2 text-center">
          <p className={`text-posterTitleColor font-normal ${fontSize}`}>
            {title}
          </p>
        </div>
        {!pathname.includes("panel/statistics/confrences") && (
          <div className="w-full my-2 flex flex-row-reverse justify-around items-center">
            {imageUrl ? (
              <>
                <IconBox
                  onClick={deleteBannerHandler}
                  icon={
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 4.5H15.75M3.75 4.5V15C3.75 15.8284 4.42157 16.5 5.25 16.5H12.75C13.5784 16.5 14.25 15.8284 14.25 15V4.5M6 4.5V3C6 2.17157 6.67157 1.5 7.5 1.5H10.5C11.3284 1.5 12 2.17157 12 3V4.5"
                        stroke="#060607"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 8.25V12.75"
                        stroke="#060607"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 8.25V12.75"
                        stroke="#060607"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                />
                <IconBox
                  onClick={() => {
                    dispatch(authToggler("updatePoster"));
                    dispatch(setUpdateAction(action));
                    dispatch(setId(id));
                    if (action === "gallery") {
                      dispatch(setLinkRequired(false));
                    }
                  }}
                  icon={
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75"
                        stroke="#060607"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0304 2.26495L6.1204 8.17495C5.8954 8.39995 5.6704 8.84245 5.6254 9.16495L5.3029 11.4224C5.1829 12.2399 5.7604 12.8099 6.5779 12.6974L8.8354 12.3749C9.1504 12.3299 9.5929 12.1049 9.8254 11.8799L15.7354 5.96995C16.7554 4.94995 17.2354 3.76495 15.7354 2.26495C14.2354 0.764945 13.0504 1.24495 12.0304 2.26495Z"
                        stroke="#060607"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.1816 3.1123C11.6841 4.9048 13.0866 6.3073 14.8866 6.8173"
                        stroke="#060607"
                        stroke-width="1.2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                />

                <IconBox
                  icon={
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1.5V6.75L10.5 5.25"
                        stroke="#060607"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 6.75L7.5 5.25"
                        stroke="#060607"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.48438 9.75H4.79187C5.07687 9.75 5.33188 9.9075 5.45938 10.1625L6.33687 11.9175C6.59187 12.4275 7.10938 12.75 7.67938 12.75H10.3269C10.8969 12.75 11.4144 12.4275 11.6694 11.9175L12.5469 10.1625C12.6744 9.9075 12.9369 9.75 13.2144 9.75H16.4844"
                        stroke="#060607"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.25 3.09668C2.595 3.48668 1.5 5.04668 1.5 8.24918V11.2492C1.5 14.9992 3 16.4992 6.75 16.4992H11.25C15 16.4992 16.5 14.9992 16.5 11.2492V8.24918C16.5 5.04668 15.405 3.48668 12.75 3.09668"
                        stroke="#060607"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                />
              </>
            ) : (
              <div className="w-full flex justify-center items-center">
                <div
                  className="flex justify-center items-center"
                  onClick={() => {
                    dispatch(authToggler("updatePoster"));
                    dispatch(setUpdateAction(action));
                    dispatch(setId(id));
                    if (action === "gallery") {
                      dispatch(setLinkRequired(false));
                    }
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75"
                      stroke="#060607"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0304 2.26495L6.1204 8.17495C5.8954 8.39995 5.6704 8.84245 5.6254 9.16495L5.3029 11.4224C5.1829 12.2399 5.7604 12.8099 6.5779 12.6974L8.8354 12.3749C9.1504 12.3299 9.5929 12.1049 9.8254 11.8799L15.7354 5.96995C16.7554 4.94995 17.2354 3.76495 15.7354 2.26495C14.2354 0.764945 13.0504 1.24495 12.0304 2.26495Z"
                      stroke="#060607"
                      stroke-width="1.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.1816 3.1123C11.6841 4.9048 13.0866 6.3073 14.8866 6.8173"
                      stroke="#060607"
                      stroke-width="1.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[14px] text-posterNoImgText mr-1">
                  فاقد بنر
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PosterBox;
